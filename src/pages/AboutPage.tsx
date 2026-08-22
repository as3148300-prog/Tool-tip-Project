import { Github, Heart, Sparkles, Zap, Palette, Code, Users, Rocket, Shield } from "lucide-react";

type Props = {};

const AboutPage = ({}: Props) => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for performance with minimal bundle size and maximum efficiency"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Beautiful Design",
      description: "Modern, clean aesthetics that follow the latest design trends and best practices"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Developer Friendly",
      description: "Intuitive APIs, comprehensive documentation, and TypeScript support"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Fully Customizable",
      description: "Easily theme and style components to match your brand identity"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Accessible",
      description: "Built with WCAG compliance to ensure usability for everyone"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Open source with active community support and contributions"
    }
  ];

  const stats = [
    { number: "8+", label: "Components" },
    { number: "100%", label: "TypeScript" },
    { number: "v1.0", label: "Stable Release" },
    { number: "MIT", label: "License" }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-color)]">
      {/* Hero Section */}
      <section className="relative px-8 pb-20 overflow-hidden">
        <div className="absolute inset-0 dark:from-zinc-900 dark:via-purple-900/20 dark:to-blue-900/20 opacity-50" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] mb-8">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium" style={{ color: "var(--text-color)" }}>
              Open Source UI Library
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
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--muted-text)" }}
          >
            A modern React component library designed to help developers create stunning, accessible, and performant user interfaces with minimal effort.
          </p>

          <div className="flex items-center justify-center gap-2 mb-12">
            <span style={{ color: "var(--muted-text)" }}>Built with</span>
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <span style={{ color: "var(--muted-text)" }}>by Areeb Sheikh</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)]"
              >
                <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm" style={{ color: "var(--muted-text)" }}>
                  {stat.label}
                </div>
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
              Why EaseUI?
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--muted-text)" }}
            >
              Everything you need to build modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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


      {/* CTA Section */}
      <section className="px-8 py-24 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Get Started?
            </h2>
          </div>
          <p className="text-xl text-white/80 mb-10">
            Join thousands of developers using EaseUI to create beautiful applications
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/as3148300-prog/Tool-tip-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
