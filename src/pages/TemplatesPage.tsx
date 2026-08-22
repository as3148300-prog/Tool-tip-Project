import {
  ArrowRight,
  Layout,
  Zap,
  Palette,
  Code,
} from "lucide-react";

const TemplatesPage = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Quick Start",
      description: "Copy and paste templates to get started instantly",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Customizable",
      description: "Easily customize colors, fonts, and layouts",
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Clean Code",
      description:
        "Well-structured, readable code following best practices",
    },
    {
      icon: <Layout className="w-5 h-5" />,
      title: "Responsive",
      description: "All templates work perfectly on all devices",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-color)]">
      {/* Hero Section */}
      <section className="relative px-8 pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 dark:from-zinc-900 dark:via-purple-900/20 dark:to-blue-900/20 opacity-50" />

        <div className="relative max-w-7xl mx-auto text-center">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            style={{ color: "var(--text-color)" }}
          >
            Beautiful Templates
          </h1>

          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--muted-text)" }}
          >
            Start your project faster with our collection of professionally
            designed templates. Built with EaseUI components for consistency
            and beauty.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 bg-[var(--card-bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shrink-0">
                  {feature.icon}
                </div>

                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--text-color)" }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted-text)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need a Custom Template?
          </h2>

          <p className="text-xl text-white/80 mb-10">
            We're constantly adding new templates. Request one or contribute
            your own!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all">
              Request Template
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="https://github.com/as3148300-prog/Tool-tip-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-all"
            >
              Contribute
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TemplatesPage;