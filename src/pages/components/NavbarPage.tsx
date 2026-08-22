import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const lightNavbarCode = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button/Button";

<Navbar variant="light" size="default">
  <h1>Logo</h1>
  <div className="flex gap-5">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Customer</a>
  </div>
  <div>
    <Button hoverAnimation="none">Profile</Button>
  </div>
</Navbar>`;

  const darkNavbarCode = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button/Button";

<Navbar variant="dark" size="lg">
  <h1>Logo</h1>
  <div className="flex gap-5">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Customer</a>
  </div>
  <div>
    <Button hoverAnimation="none">Profile</Button>
  </div>
</Navbar>`;

  const primaryNavbarCode = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button/Button";

<Navbar variant="primary" size="default" animation="slideUp">
  <h1>Logo</h1>
  <div className="flex gap-5">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Customer</a>
  </div>
  <div>
    <Button hoverAnimation="none">Profile</Button>
  </div>
</Navbar>`;

  const glassNavbarCode = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button/Button";

<Navbar variant="glass" size="xl" hoverAnimation="scale">
  <h1>Logo</h1>
  <div className="flex gap-5">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Customer</a>
  </div>
  <div>
    <Button hoverAnimation="none">Profile</Button>
  </div>
</Navbar>`;

  const propsData = [
    {
      prop: "variant",
      type: '"light" | "dark" | "primary" | "glass"',
      default: '"light"',
      description: "The visual style variant of the navbar",
    },
    {
      prop: "size",
      type: '"default" | "sm" | "lg" | "xl"',
      default: '"default"',
      description: "The height/size of the navbar",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "Animation when the navbar mounts",
    },
    {
      prop: "hoverAnimation",
      type: '"jiggle" | "scale" | "bounce" | "none"',
      default: '"none"',
      description: "Animation when hovering over the navbar",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description: "Whether to merge with child element using Radix Slot",
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
          Navbar
        </p>
        <p className="text-lg text-gray-600">
          A responsive navigation bar component with multiple style variants and
          animations.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        
        <div className="space-y-8">
          <ComponentDemo code={lightNavbarCode}>
            <Navbar variant="light" size="default">
              <h1>Logo</h1>
              <div className="flex gap-5">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Customer</a>
              </div>
              <div>
                <Button hoverAnimation="none">Profile</Button>
              </div>
            </Navbar>
          </ComponentDemo>

          <ComponentDemo code={darkNavbarCode}>
            <Navbar variant="dark" size="lg">
              <h1>Logo</h1>
              <div className="flex gap-5">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Customer</a>
              </div>
              <div>
                <Button hoverAnimation="none">Profile</Button>
              </div>
            </Navbar>
          </ComponentDemo>

          <ComponentDemo code={primaryNavbarCode}>
            <Navbar variant="primary" size="default" animation="slideUp">
              <h1>Logo</h1>
              <div className="flex gap-5">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Customer</a>
              </div>
              <div>
                <Button hoverAnimation="none">Profile</Button>
              </div>
            </Navbar>
          </ComponentDemo>

         <ComponentDemo code={glassNavbarCode}>
  <Navbar
    variant="glass"
    size="lg"
    hoverAnimation="scale"
    className="bg-slate-800 py-2"
  >
    <h1 className="text-white">Logo</h1>

    <div className="flex gap-5">
      <a href="" className="text-white hover:text-white/80">Home</a>
      <a href="" className="text-white hover:text-white/80">About</a>
      <a href="" className="text-white hover:text-white/80">Customer</a>
    </div>

    <div>
      <Button
        hoverAnimation="none"
        className="bg-white text-slate-800 hover:bg-gray-100"
      >
        Profile
      </Button>
    </div>
  </Navbar>
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

export default NavbarPage;
