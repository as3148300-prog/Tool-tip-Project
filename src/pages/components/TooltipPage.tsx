import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const basicTooltipCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";

<Tooltip content="This is a tooltip" position="top">
  <Button>Hover me</Button>
</Tooltip>`;

  const positionsCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";

<Tooltip content="Top tooltip" position="top">
  <Button>Top</Button>
</Tooltip>
<Tooltip content="Bottom tooltip" position="bottom">
  <Button>Bottom</Button>
</Tooltip>
<Tooltip content="Left tooltip" position="left">
  <Button>Left</Button>
</Tooltip>
<Tooltip content="Right tooltip" position="right">
  <Button>Right</Button>
</Tooltip>`;

  const variantsCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";

<Tooltip content="Default tooltip" variant="default" position="top">
  <Button variant="primary">Default</Button>
</Tooltip>
<Tooltip content="Dark tooltip" variant="dark" position="top">
  <Button variant="secondary">Dark</Button>
</Tooltip>
<Tooltip content="Primary tooltip" variant="primary" position="top">
  <Button variant="outline">Primary</Button>
</Tooltip>
<Tooltip content="Light tooltip" variant="light" position="top">
  <Button variant="ghost">Light</Button>
</Tooltip>`;

  const advancedCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";

<Tooltip 
  content={<div>
    <strong>Rich Content</strong>
    <p>Multi-line tooltip with HTML</p>
  </div>} 
  position="top"
  delay={500}
  animation="scaleIn"
>
  <Button>Rich Tooltip</Button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "React.ReactNode",
      default: "-",
      description: "The content to display in the tooltip",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right"',
      default: '"top"',
      description: "The position of the tooltip relative to the child element",
    },
    {
      prop: "variant",
      type: '"default" | "dark" | "primary" | "light"',
      default: '"default"',
      description: "The visual style variant of the tooltip",
    },
    {
      prop: "delay",
      type: "number",
      default: "200",
      description: "Delay in milliseconds before showing the tooltip",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "Animation when the tooltip appears",
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
          Tooltip
        </p>
        <p className="text-lg text-gray-600">
          A popup that displays information when users hover over or focus on an
          element.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <div className="space-y-8">
          <ComponentDemo code={basicTooltipCode}>
            <div className="flex items-center justify-center gap-4">
              <Tooltip content="This is a tooltip" position="top">
                <Button>Hover me</Button>
              </Tooltip>
            </div>
          </ComponentDemo>

          <ComponentDemo code={positionsCode}>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Tooltip content="Top tooltip" position="top">
                <Button>Top</Button>
              </Tooltip>
              <Tooltip content="Bottom tooltip" position="bottom">
                <Button>Bottom</Button>
              </Tooltip>
              <Tooltip content="Left tooltip" position="left">
                <Button>Left</Button>
              </Tooltip>
              <Tooltip content="Right tooltip" position="right">
                <Button>Right</Button>
              </Tooltip>
            </div>
          </ComponentDemo>

          <ComponentDemo code={variantsCode}>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Tooltip content="Default tooltip" variant="default" position="top">
                <Button variant="primary">Default</Button>
              </Tooltip>
              <Tooltip content="Dark tooltip" variant="dark" position="top">
                <Button variant="secondary">Dark</Button>
              </Tooltip>
              <Tooltip content="Primary tooltip" variant="primary" position="top">
                <Button variant="outline">Primary</Button>
              </Tooltip>
              <Tooltip content="Light tooltip" variant="light" position="top">
                <Button variant="ghost">Light</Button>
              </Tooltip>
            </div>
          </ComponentDemo>

          <ComponentDemo code={advancedCode}>
            <div className="flex items-center justify-center gap-4">
              <Tooltip
                content={
                  <div>
                    <strong>Rich Content</strong>
                    <p>Multi-line tooltip with HTML</p>
                  </div>
                }
                position="top"
                delay={500}
                animation="scaleIn"
              >
                <Button>Rich Tooltip</Button>
              </Tooltip>
            </div>
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

export default TooltipPage;
