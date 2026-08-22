import { Outlet, useLocation, useNavigate } from "react-router";

type Props = {};

const ComponentLayout = ({}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const components = [
    { name: "Button", icon: "B", color: "bg-blue-500" },
    { name: "Card", icon: "C", color: "bg-purple-500" },
    { name: "Modal", icon: "M", color: "bg-orange-500" },
    { name: "Input", icon: "I", color: "bg-green-500" },
    { name: "Form", icon: "F", color: "bg-red-500" },
    { name: "Navbar", icon: "N", color: "bg-cyan-500" },
    { name: "Carousel", icon: "C", color: "bg-pink-500" },
    { name: "Tooltip", icon: "T", color: "bg-yellow-500" },
    { name: "Layout", icon: "L", color: "bg-indigo-500" },
  ];

  return (
    <div className="flex min-h-screen bg-[var(--bg-color)]" style={{ color: "var(--text-color)" }}>
      {/* Sidebar */}
      <aside
        className={`
          w-72 p-6 flex flex-col
          border-r border-[var(--border-color)]
          bg-[var(--card-bg)]
          h-screen
          shrink-0
          sticky top-0
        `}
      >
        {/* Components List */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: "var(--muted-text)" }}>
            Components
          </h3>
          <ul className="flex flex-col gap-2">
            {components.map((component) => (
              <li
                onClick={() => navigate(component.name.toLowerCase())}
                key={component.name}
                className={`
                  cursor-pointer p-3 rounded-xl transition-all duration-200 ease-in-out
                  flex items-center gap-3 hover:scale-[1.02]
                  ${
                    location.pathname === `/components/${component.name.toLowerCase()}`
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "hover:bg-[var(--hover-bg)]"
                  }
                `}
              >
                <div
                  className={`w-8 h-8 rounded-lg ${component.color} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {component.icon}
                </div>
                <span className="font-medium">{component.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar Footer */}
        <div className="pt-6 border-t border-[var(--border-color)]">
          <p className="text-xs text-center" style={{ color: "var(--muted-text)" }}>
            v1.0.6
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Content Area */}
        <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ComponentLayout;
