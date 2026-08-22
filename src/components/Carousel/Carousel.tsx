import React, { useState, useRef, useEffect, useCallback } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";
import gsap from "gsap";

const carouselVariants = cva(
  "relative w-full overflow-hidden",
  {
    variants: {
      variant: {
        default: "border border-gray-200 shadow-lg rounded-lg",
        dark: "border border-gray-700 shadow-xl rounded-lg",
        outline: "border-2 border-gray-300 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface CarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants> {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
}

interface SlideProps {
  children: React.ReactNode;
  caption?: {
    title?: string;
    description?: string;
  };
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      className,
      variant,
      autoPlay = false,
      autoPlayInterval = 3000,
      showArrows = true,
      showIndicators = true,
      animation = "fadeIn",
      hoverAnimation = "none",
      ...props
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Initialize slide refs and set initial positions
    useEffect(() => {
      slideRefs.current = slideRefs.current.slice(0, children.length);
      
      // Set initial positions - first slide visible, others hidden
      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;
        
        if (index === 0) {
          gsap.set(slide, { x: "0%", opacity: 1 });
        } else {
          gsap.set(slide, { x: "100%", opacity: 0 });
        }
      });
    }, [children.length]);

    // Entrance animation
    useEffect(() => {
      if (!carouselRef.current || animation === "none") return;
      entranceAnimations[animation]?.(carouselRef.current);
    }, [animation]);

    // Auto play functionality
    useEffect(() => {
      if (!autoPlay) return;

      const interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, currentIndex]);

    // Handle slide transitions with GSAP (Bootstrap-style sliding)
    useEffect(() => {
      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;

        if (index === currentIndex) {
          // Active slide - slide in from right instantly
          gsap.set(slide, { x: "100%", opacity: 1 });
          gsap.to(slide, { x: "0%", duration: 0.4, ease: "power2.out" });
        } else if (index === (currentIndex - 1 + children.length) % children.length) {
          // Previous slide - slide out to left
          gsap.to(slide, {
            x: "-100%",
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(slide, { opacity: 0 });
            }
          });
        } else {
          // Other slides - hide instantly
          gsap.set(slide, { x: "100%", opacity: 0 });
        }
      });
    }, [currentIndex, children.length]);

    const nextSlide = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length);
    }, [children.length]);

    const prevSlide = useCallback(() => {
      setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
    }, [children.length]);

    const goToSlide = useCallback((index: number) => {
      setCurrentIndex(index);
    }, []);

    const handleMouseEnter = () => {
      if (hoverAnimation !== "none" && carouselRef.current) {
        hoverAnimations[hoverAnimation]?.(carouselRef.current);
      }
    };

    const handleMouseLeave = () => {
      if (carouselRef.current) {
        gsap.to(carouselRef.current, {
          scale: 1,
          rotation: 0,
          y: 0,
          duration: 0.3,
        });
      }
    };

    return (
      <div
        ref={(node) => {
          carouselRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={cn("carousel slide", carouselVariants({ variant }), className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Indicators */}
        {showIndicators && children.length > 1 && (
          <ol className="carousel-indicators absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {children.map((_, index) => (
              <li
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full cursor-pointer transition-all",
                  index === currentIndex
                    ? "bg-indigo-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </ol>
        )}

        {/* Carousel Inner */}
        <div ref={innerRef} className="carousel-inner relative w-full h-full">
          {children.map((child, index) => {
            const slideProps = child as React.ReactElement<SlideProps>;
            const hasCaption = slideProps.props?.caption;
            
            return (
              <div
                key={index}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                className={cn(
                  "carousel-item absolute inset-0 w-full h-full",
                  index === currentIndex ? "active" : ""
                )}
              >
                {slideProps.props?.children || child}
                
                {/* Caption */}
                {hasCaption && slideProps.props.caption && (
                  <div className="carousel-caption absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    {slideProps.props.caption.title && (
                      <h5 className="text-xl font-bold text-white mb-2">
                        {slideProps.props.caption.title}
                      </h5>
                    )}
                    {slideProps.props.caption.description && (
                      <p className="text-white/90">
                        {slideProps.props.caption.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        {showArrows && children.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="carousel-control-prev absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
              <span className="sr-only">Previous</span>
            </button>
            <button
              onClick={nextSlide}
              className="carousel-control-next absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
              <span className="sr-only">Next</span>
            </button>
          </>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

// Slide component for internal use
const CarouselSlide = ({ children, caption: _caption }: SlideProps) => {
  // Caption is handled by the parent Carousel component
  return <>{children}</>;
};

export { Carousel, CarouselSlide, carouselVariants };
