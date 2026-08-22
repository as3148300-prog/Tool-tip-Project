import { Carousel } from "@/components/Carousel/Carousel";
import { CarouselSlide } from "@/components/Carousel/Carousel";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Card } from "@/components/Card/Card";

const CarouselPage = () => {
  const basicCarouselCode = `import { Carousel } from "@/components/Carousel/Carousel";

<Carousel variant="default" showArrows showIndicators className="h-64">
  <img 
    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" 
    alt="Mountain landscape" 
    className="w-full h-full object-cover"
  />
  <img 
    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800" 
    alt="Forest path" 
    className="w-full h-full object-cover"
  />
  <img 
    src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800" 
    alt="Forest light" 
    className="w-full h-full object-cover"
  />
</Carousel>`;

  const autoPlayCarouselCode = `import { Carousel } from "@/components/Carousel/Carousel";

<Carousel 
  variant="dark" 
  autoPlay 
  autoPlayInterval={3000}
  showArrows 
  showIndicators
  className="h-80"
>
  <img 
    src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800" 
    alt="Ocean waves" 
    className="w-full h-full object-cover"
  />
  <img 
    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800" 
    alt="Lake reflection" 
    className="w-full h-full object-cover"
  />
  <img 
    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800" 
    alt="Misty mountains" 
    className="w-full h-full object-cover"
  />
</Carousel>`;

  const cardCarouselCode = `import { Carousel } from "@/components/Carousel/Carousel";
import { Card } from "@/components/Card/Card";

<Carousel variant="default" showArrows showIndicators className="h-96">
  <Card
    title="Mountain Adventure"
    description="Explore the majestic peaks"
    image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
    variant="light"
    size="sm"
  />
  <Card
    title="Forest Path"
    description="Walk through nature's beauty"
    image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800"
    variant="light"
    size="sm"
  />
  <Card
    title="Ocean Waves"
    description="Feel the sea breeze"
    image="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800"
    variant="light"
    size="sm"
  />
</Carousel>`;

  const captionCarouselCode = `import { Carousel } from "@/components/Carousel/Carousel";
import { CarouselSlide } from "@/components/Carousel/Carousel";

<Carousel 
  variant="default" 
  showArrows 
  showIndicators
  className="h-80"
>
  <CarouselSlide 
    caption={{
      title: "First Slide Label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    }}
  >
    <img 
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" 
      alt="First slide" 
      className="w-full h-full object-cover"
    />
  </CarouselSlide>
  <CarouselSlide 
    caption={{
      title: "Second Slide Label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }}
  >
    <img 
      src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800" 
      alt="Second slide" 
      className="w-full h-full object-cover"
    />
  </CarouselSlide>
  <CarouselSlide 
    caption={{
      title: "Third Slide Label",
      description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }}
  >
    <img 
      src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800" 
      alt="Third slide" 
      className="w-full h-full object-cover"
    />
  </CarouselSlide>
</Carousel>`;

  const propsData = [
    {
      prop: "children",
      type: "React.ReactNode[]",
      default: "-",
      description: "Array of slide elements to display in the carousel",
    },
    {
      prop: "variant",
      type: '"default" | "dark" | "outline"',
      default: '"default"',
      description: "The visual style variant of the carousel container",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Whether to automatically advance slides",
    },
    {
      prop: "autoPlayInterval",
      type: "number",
      default: "3000",
      description: "Time in milliseconds between auto-play slides",
    },
    {
      prop: "showArrows",
      type: "boolean",
      default: "true",
      description: "Whether to show navigation arrows",
    },
    {
      prop: "showIndicators",
      type: "boolean",
      default: "true",
      description: "Whether to show dot indicators",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "Animation when the carousel mounts",
    },
    {
      prop: "hoverAnimation",
      type: '"jiggle" | "scale" | "bounce" | "none"',
      default: '"none"',
      description: "Animation when hovering over the carousel",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional custom class names for extended styling",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Carousel
        </p>
        <p className="text-lg text-gray-600">
          A responsive carousel component with smooth transitions, auto-play,
          and navigation controls.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <div className="space-y-8">
          <ComponentDemo code={basicCarouselCode}>
            <Carousel variant="default" showArrows showIndicators className="h-64">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" 
                alt="Mountain landscape" 
                className="w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800" 
                alt="Forest path" 
                className="w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800" 
                alt="Forest light" 
                className="w-full h-full object-cover"
              />
            </Carousel>
          </ComponentDemo>

          <ComponentDemo code={autoPlayCarouselCode}>
            <Carousel
              variant="dark"
              autoPlay
              autoPlayInterval={3000}
              showArrows
              showIndicators
              className="h-80"
            >
              <img 
                src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800" 
                alt="Ocean waves" 
                className="w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800" 
                alt="Lake reflection" 
                className="w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800" 
                alt="Misty mountains" 
                className="w-full h-full object-cover"
              />
            </Carousel>
          </ComponentDemo>

          <ComponentDemo code={cardCarouselCode}>
            <Carousel variant="default" showArrows showIndicators className="h-96">
              <Card
                title="Mountain Adventure"
                description="Explore the majestic peaks"
                image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                variant="light"
                size="sm"
              />
              <Card
                title="Forest Path"
                description="Walk through nature's beauty"
                image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800"
                variant="light"
                size="sm"
              />
              <Card
                title="Ocean Waves"
                description="Feel the sea breeze"
                image="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800"
                variant="light"
                size="sm"
              />
            </Carousel>
          </ComponentDemo>

          <ComponentDemo code={captionCarouselCode}>
            <Carousel 
              variant="default" 
              showArrows 
              showIndicators
              className="h-80"
            >
              <CarouselSlide 
                caption={{
                  title: "First Slide Label",
                  description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" 
                  alt="First slide" 
                  className="w-full h-full object-cover"
                />
              </CarouselSlide>
              <CarouselSlide 
                caption={{
                  title: "Second Slide Label",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800" 
                  alt="Second slide" 
                  className="w-full h-full object-cover"
                />
              </CarouselSlide>
              <CarouselSlide 
                caption={{
                  title: "Third Slide Label",
                  description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800" 
                  alt="Third slide" 
                  className="w-full h-full object-cover"
                />
              </CarouselSlide>
            </Carousel>
          </ComponentDemo>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CarouselPage;
