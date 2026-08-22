import { useNavigate } from "react-router";
import { 
  Layout, 
  LayoutContent 
} from "@/components/Layout";
// import Navbar from "@/components/Personal/Navbar";
import { 
  Sparkles, 
  Zap, 
  Palette, 
  Code, 
  ArrowRight, 
  Github,
  Star
} from "lucide-react";

type Props = {};

const HomePage = ({}: Props) => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Built with performance in mind. Zero runtime overhead and optimized bundle size."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Beautiful Design",
      description: "Modern, clean components with consistent design system and smooth animations."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Developer Friendly",
      description: "Type-safe, well-documented components with intuitive API for rapid development."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Fully Customizable",
      description: "Easily customize themes, colors, and styles to match your brand identity."
    }
  ];

  const componentPreviews = [
    { name: "Button", color: "bg-blue-500" },
    { name: "Card", color: "bg-purple-500" },
    { name: "Input", color: "bg-green-500" },
    { name: "Modal", color: "bg-orange-500" },
    { name: "Form", color: "bg-red-500" },
    { name: "Navbar", color: "bg-cyan-500" }
  ];

  return (
    <Layout variant="default">
      {/* <Navbar /> */}
      <LayoutContent className="bg-[var(--bg-color)]">
        {/* Hero Section */}
        <section className="relative px-8  pb-32 overflow-hidden">
          <div className="absolute inset-0   dark:from-zinc-900 dark:via-purple-900/20 dark:to-blue-900/20 opacity-50" />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] mb-8">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium" style={{ color: "var(--text-color)" }}>
                v1.0.6 - Now Available
              </span>
            </div>

            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              style={{ color: "var(--text-color)" }}
            >
              Build Beautiful UIs
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                With Ease
              </span>
            </h1>

            <p 
              className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--muted-text)" }}
            >
              A modern React component library designed for developers who value aesthetics, performance, and simplicity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate("components")}
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate("components")}
                className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[var(--border-color)] font-semibold hover:bg-[var(--hover-bg)] transition-all" 
                style={{ color: "var(--text-color)" }}
              >
                View Components
              </button>
            </div>

            {/* Component Preview Grid */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {componentPreviews.map((component) => (
                <div 
                  key={component.name}
                  onClick={() => navigate(`components/${component.name.toLowerCase()}`)}
                  className="group relative p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-blue-500 transition-all hover:scale-105 cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl ${component.color} mx-auto mb-3 flex items-center justify-center text-white font-bold`}>
                    {component.name[0]}
                  </div>
                  <p className="text-sm font-medium" style={{ color: "var(--text-color)" }}>
                    {component.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-8 py-24 bg-[var(--card-bg)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: "var(--text-color)" }}
              >
                Why Choose EaseUI?
              </h2>
              <p 
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "var(--muted-text)" }}
              >
                Designed with modern web development best practices in mind
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-2xl bg-[var(--bg-color)] border border-[var(--border-color)] hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-6">
                    {feature.icon}
                  </div>
                  <h3 
                    className="text-xl font-semibold mb-3"
                    style={{ color: "var(--text-color)" }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{ color: "var(--muted-text)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section className="px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: "var(--text-color)" }}
              >
                Quick Start
              </h2>
              <p 
                className="text-lg"
                style={{ color: "var(--muted-text)" }}
              >
                Get up and running in seconds
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h3 
                    className="text-lg font-semibold"
                    style={{ color: "var(--text-color)" }}
                  >
                    Install the package
                  </h3>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] font-mono text-sm overflow-x-auto">
                  <code style={{ color: "var(--text-color)" }}>
                    npm install dev-ease-ui
                  </code>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h3 
                    className="text-lg font-semibold"
                    style={{ color: "var(--text-color)" }}
                  >
                    Import and use components
                  </h3>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] font-mono text-sm overflow-x-auto">
                  <pre style={{ color: "var(--text-color)" }}>
{`import { Button, Card } from 'dev-ease-ui';

function App() {
  return (
    <Card>
      <Button variant="primary">
        Click me
      </Button>
    </Card>
  );
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 py-24 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Join thousands of developers using EaseUI to create beautiful applications
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate("components")}
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all"
              >
                Start Building
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-all">
                <Github className="w-5 h-5" />
                Star on GitHub
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-12 border-t border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold" style={{ color: "var(--text-color)" }}>
                  EaseUI
                </span>
              </div>
              
              <p 
                className="text-sm"
                style={{ color: "var(--muted-text)" }}
              >
                © 2024 Areeb Sheikh. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                <a 
                  href="#" 
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: "var(--muted-text)" }}
                >
                  Documentation
                </a>
                <a 
                  href="#" 
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: "var(--muted-text)" }}
                >
                  GitHub
                </a>
                <a 
                  href="#" 
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: "var(--muted-text)" }}
                >
                  License
                </a>
              </div>
            </div>
          </div>
        </footer>
      </LayoutContent>
    </Layout>
  );
};

export default HomePage;
