import { useState } from "react";
import { Code } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({ children, code }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <div
      className="rounded-lg overflow-hidden shadow-sm"
      style={{
        border: "1px solid var(--border-color)",
       backgroundColor: "var(--card-bg)"
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{
          borderBottom: "1px solid var(--border-color)",
          backgroundColor: "var(--demo-header-bg)",
        }}
      >
        <span
          className="text-sm font-medium"
          style={{ color: "var(--text-color)" }}
        >
          Preview
        </span>

        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex items-center gap-1 px-3 py-1 text-sm rounded transition-colors"
          style={{
            backgroundColor: "var(--hover-bg)",
            color: "var(--text-color)",
          }}
        >
          <Code size={14} />
          {isCodeVisible ? "Hide Code" : "View Code"}
        </button>
      </div>

      {/* Preview */}
      <div className="py-20 px-4 flex items-center justify-center">
        {children}
      </div>

      {/* Code */}
      {isCodeVisible && (
        <div
          style={{
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;

