import {
  Layout,
  LayoutHeader,
  LayoutSidebar,
  LayoutContent,
  LayoutFooter,
} from "@/components/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const defaultLayoutCode = `
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter
} from "@/components/Layout";

<Layout variant="default" style={{ minHeight: "300px" }}>
  <LayoutHeader className="p-4">
    <h1 className="text-xl font-bold">Header</h1>
  </LayoutHeader>

  <LayoutContent className="p-6">
    <p>Main content goes here</p>
  </LayoutContent>

  <LayoutFooter className="p-4">
    <p className="text-sm">© 2024 Your App</p>
  </LayoutFooter>
</Layout>`;

  const sidebarLayoutCode = `
import {
  Layout,
  LayoutHeader,
  LayoutSidebar,
  LayoutContent
} from "@/components/Layout";

<Layout variant="sidebar" style={{ minHeight: "300px" }}>
  <LayoutSidebar className="p-4">
    <nav>
      <ul className="space-y-2">
        <li className="cursor-pointer hover:text-blue-500">
          Dashboard
        </li>
        <li className="cursor-pointer hover:text-blue-500">
          Settings
        </li>
        <li className="cursor-pointer hover:text-blue-500">
          Profile
        </li>
      </ul>
    </nav>
  </LayoutSidebar>

  <div className="flex-1 min-w-0 flex flex-col">
    <LayoutHeader className="p-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
    </LayoutHeader>

    <LayoutContent className="p-6">
      <p>Sidebar layout content</p>
    </LayoutContent>
  </div>
</Layout>`;

  const splitLayoutCode = `
import {
  Layout,
  LayoutSidebar,
  LayoutContent
} from "@/components/Layout";

<Layout variant="split" style={{ minHeight: "300px" }}>
  <LayoutSidebar position="left" className="p-4">
    <h3 className="font-semibold mb-2">Left Panel</h3>
    <p className="text-sm">
      Navigation or filters
    </p>
  </LayoutSidebar>

  <LayoutContent className="p-6">
    <p>Main content area</p>
  </LayoutContent>

  <LayoutSidebar position="right" className="p-4">
    <h3 className="font-semibold mb-2">Right Panel</h3>
    <p className="text-sm">
      Additional info
    </p>
  </LayoutSidebar>
</Layout>`;

  const layoutProps = [
    {
      prop: "variant",
      type: '"default" | "sidebar" | "topbar" | "split"',
      default: '"default"',
      description:
        "Determines the layout structure and arrangement of child components",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS class names for custom styling",
    },
    {
      prop: "style",
      type: "React.CSSProperties",
      default: "-",
      description: "Inline CSS styles for custom styling",
    },
  ];

  const headerProps = [
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS class names for custom styling",
    },
  ];

  const sidebarProps = [
    {
      prop: "position",
      type: '"left" | "right"',
      default: '"left"',
      description: "Position of the sidebar relative to the content",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS class names for custom styling",
    },
  ];

  const contentProps = [
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS class names for custom styling",
    },
  ];

  const footerProps = [
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS class names for custom styling",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      {/* Page Header */}
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Layout
        </p>

        <p
          className="text-lg"
          style={{ color: "var(--muted-text)" }}
        >
          Flexible layout components for building responsive application
          structures with headers, sidebars, content areas, and footers.
        </p>
      </header>

      {/* Default Layout */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Default Layout
        </h2>

        <ComponentDemo code={defaultLayoutCode}>
          <Layout
            variant="default"
            className="border border-[var(--border-color)] rounded-lg overflow-hidden"
            style={{ minHeight: "300px" }}
          >
            <LayoutHeader className="p-4">
              <h1 className="text-xl font-bold">
                Header
              </h1>
            </LayoutHeader>

            <LayoutContent className="p-6">
              <p>Main content goes here</p>
            </LayoutContent>

            <LayoutFooter className="p-4">
              <p
                className="text-sm"
                style={{ color: "var(--muted-text)" }}
              >
                © 2024 Your App
              </p>
            </LayoutFooter>
          </Layout>
        </ComponentDemo>
      </section>

      {/* Sidebar Layout */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Sidebar Layout
        </h2>

        <ComponentDemo code={sidebarLayoutCode}>
          <Layout
            variant="sidebar"
            className="border border-[var(--border-color)] rounded-lg overflow-hidden"
            style={{ minHeight: "300px" }}
          >
            <LayoutSidebar className="p-4">
              <nav>
                <ul className="space-y-2">
                  <li className="cursor-pointer hover:text-blue-500">
                    Dashboard
                  </li>

                  <li className="cursor-pointer hover:text-blue-500">
                    Settings
                  </li>

                  <li className="cursor-pointer hover:text-blue-500">
                    Profile
                  </li>
                </ul>
              </nav>
            </LayoutSidebar>

            <div className="flex-1 min-w-0 flex flex-col">
              <LayoutHeader className="p-4">
                <h1 className="text-xl font-bold">
                  Dashboard
                </h1>
              </LayoutHeader>

              <LayoutContent className="p-6">
                <p>Sidebar layout content</p>
              </LayoutContent>
            </div>
          </Layout>
        </ComponentDemo>
      </section>

      {/* Split Layout */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Split Layout
        </h2>

        <ComponentDemo code={splitLayoutCode}>
          <Layout
            variant="split"
            className="border border-[var(--border-color)] rounded-lg overflow-hidden"
            style={{ minHeight: "300px" }}
          >
            <LayoutSidebar
              position="left"
              className="p-4"
            >
              <h3 className="font-semibold mb-2">
                Left Panel
              </h3>

              <p
                className="text-sm"
                style={{ color: "var(--muted-text)" }}
              >
                Navigation or filters
              </p>
            </LayoutSidebar>

            <LayoutContent className="p-6">
              <p>Main content area</p>
            </LayoutContent>

            <LayoutSidebar
              position="right"
              className="p-4"
            >
              <h3 className="font-semibold mb-2">
                Right Panel
              </h3>

              <p
                className="text-sm"
                style={{ color: "var(--muted-text)" }}
              >
                Additional info
              </p>
            </LayoutSidebar>
          </Layout>
        </ComponentDemo>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          API Reference
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Layout
            </h3>
            <PropsTable data={layoutProps} />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              LayoutHeader
            </h3>
            <PropsTable data={headerProps} />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              LayoutSidebar
            </h3>
            <PropsTable data={sidebarProps} />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              LayoutContent
            </h3>
            <PropsTable data={contentProps} />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              LayoutFooter
            </h3>
            <PropsTable data={footerProps} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LayoutPage;