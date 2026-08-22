import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "sidebar" | "topbar" | "split";
  style?: React.CSSProperties;
}

export const Layout = ({
  children,
  className = "",
  variant = "default",
  style,
}: LayoutProps) => {
  const variantStyles = {
    default: "flex flex-col",
    sidebar: "flex",
    topbar: "flex flex-col",
    split: "flex",
  };

  return (
    <div
      className={`${variantStyles[variant]} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

interface LayoutHeaderProps {
  children: ReactNode;
  className?: string;
}

export const LayoutHeader = ({
  children,
  className = "",
}: LayoutHeaderProps) => {
  return (
    <header
      className={`border-b border-[var(--border-color)] bg-[var(--demo-header-bg)] ${className}`}
    >
      {children}
    </header>
  );
};

interface LayoutSidebarProps {
  children: ReactNode;
  className?: string;
  position?: "left" | "right";
}

export const LayoutSidebar = ({
  children,
  className = "",
  position = "left",
}: LayoutSidebarProps) => {
  const positionStyles = {
    left: "border-r",
    right: "border-l",
  };

  return (
    <aside
      className={`w-64 shrink-0 bg-[var(--demo-bg)] border-[var(--border-color)] ${positionStyles[position]} ${className}`}
    >
      {children}
    </aside>
  );
};

interface LayoutContentProps {
  children: ReactNode;
  className?: string;
}

export const LayoutContent = ({
  children,
  className = "",
}: LayoutContentProps) => {
  return (
    <main
      className={`flex-1 min-w-0 overflow-auto bg-[var(--bg-color)] ${className}`}
    >
      {children}
    </main>
  );
};

interface LayoutFooterProps {
  children: ReactNode;
  className?: string;
}

export const LayoutFooter = ({
  children,
  className = "",
}: LayoutFooterProps) => {
  return (
    <footer
      className={`border-t border-[var(--border-color)] bg-[var(--demo-header-bg)] ${className}`}
    >
      {children}
    </footer>
  );
};