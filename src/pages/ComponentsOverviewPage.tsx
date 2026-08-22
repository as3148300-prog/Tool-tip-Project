import { useNavigate } from "react-router";
import { Sparkles, ArrowRight, Zap, Palette, Code, Layout } from "lucide-react";

type Props = {};

const ComponentsOverviewPage = ({}: Props) => {
  const navigate = useNavigate();

  const components = [
    { 
      name: "Button", 
      description: "Interactive buttons with multiple variants and sizes",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      route: "button"
    },
    { 
      name: "Card", 
      description: "Versatile card containers for content organization",
      icon: <Layout className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      route: "card"
    },
    { 
      name: "Modal", 
      description: "Dialog overlays for focused user interactions",
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      route: "modal"
    },
    { 
      name: "Input", 
      description: "Form inputs with validation and styling options",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      route: "input"
    },
    { 
      name: "Form", 
      description: "Complete form components with validation and styling",
      icon: <Code className="w-6 h-6" />,
      color: "from-red-500 to-rose-500",
      route: "form"
    },
    { 
      name: "Navbar", 
      description: "Navigation bars with responsive design",
      icon: <Layout className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      route: "navbar"
    },
    { 
      name: "Carousel", 
      description: "Image and content sliders with smooth transitions",
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      route: "carousel"
    },
    { 
      name: "Tooltip", 
      description: "Contextual help and information popovers",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      route: "tooltip"
    },
    { 
      name: "Layout", 
      description: "Flexible layout structures for applications",
      icon: <Layout className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      route: "layout"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Performance",
      description: "Optimized for speed and efficiency"
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Customizable",
      description: "Easy to theme and style"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Type-Safe",
      description: "Full TypeScript support"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Accessible",
      description: "WCAG compliant components"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold" style={{ color: "var(--text-color)" }}>
              Components
            </h1>
            <p style={{ color: "var(--muted-text)" }}>
              Beautiful, accessible, and customizable UI components
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex items-start gap-3 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shrink-0">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-semibold mb-1" style={{ color: "var(--text-color)" }}>
                {feature.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--muted-text)" }}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Components Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-color)" }}>
          All Components
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((component) => (
            <div
              key={component.name}
              onClick={() => navigate(component.route)}
              className="group relative p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div 
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${component.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
              >
                {component.icon}
              </div>
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--text-color)" }}
              >
                {component.name}
              </h3>
              <p 
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--muted-text)" }}
              >
                {component.description}
              </p>
              <div className="flex items-center gap-2 font-medium transition-all group-hover:gap-3" style={{ color: "var(--text-color)" }}>
                View Component
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started */}
      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <h2 className="text-2xl font-bold mb-4">
          Quick Start
        </h2>
        <p className="mb-6 text-white/80">
          Get started with any component by clicking on it above, or check out our documentation for detailed usage guides.
        </p>
        <button 
          onClick={() => navigate("button")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all"
        >
          Explore Components
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ComponentsOverviewPage;
