import React, { useState, useRef, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";

const tooltipVariants = cva(
  "absolute z-50 px-3 py-2 text-sm rounded-md shadow-lg pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white",
        dark: "bg-slate-800 text-white",
        primary: "bg-indigo-600 text-white",
        light: "bg-white text-gray-800 border border-gray-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const positionVariants = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
  "top-left": "bottom-full right-0 mb-2",
  "top-right": "bottom-full left-0 mb-2",
  "bottom-left": "top-full right-0 mt-2",
  "bottom-right": "top-full left-0 mt-2",
};

interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>,
    VariantProps<typeof tooltipVariants> {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: keyof typeof positionVariants;
  delay?: number;
  animation?: keyof typeof entranceAnimations;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      content,
      className,
      variant,
      position = "top",
      delay = 200,
      animation = "fadeIn",
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Entrance animation
    useEffect(() => {
      if (!tooltipRef.current || !isVisible || animation === "none") return;
      entranceAnimations[animation]?.(tooltipRef.current);
    }, [isVisible, animation]);

    const handleMouseEnter = () => {
      if (timeoutId) clearTimeout(timeoutId);
      
      const id = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      setTimeoutId(id);
    };

    const handleMouseLeave = () => {
      if (timeoutId) clearTimeout(timeoutId);
      setIsVisible(false);
    };

    const handleTooltipMouseEnter = () => {
      if (timeoutId) clearTimeout(timeoutId);
    };

    const handleTooltipMouseLeave = () => {
      setIsVisible(false);
    };

    return (
      <div
        ref={wrapperRef}
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        
        {isVisible && (
          <div
            ref={(node) => {
              tooltipRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
            }}
            className={cn(
              tooltipVariants({ variant }),
              positionVariants[position],
              className
            )}
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
            {...props}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";

export { Tooltip, tooltipVariants };
