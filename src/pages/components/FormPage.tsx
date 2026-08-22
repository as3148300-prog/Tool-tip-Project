import {
  Form,
  FormField,
  FormActions,
} from "@/components/Form";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const FormPage = () => {
  const basicFormCode = `
import { Form, FormField, FormLabel } from '@/components/Form';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

function MyForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField label="Name" required>
        <Input placeholder="Enter your name" />
      </FormField>
      
      <FormField label="Email" required>
        <Input type="email" placeholder="Enter your email" />
      </FormField>
      
      <Button type="submit">Submit</Button>
    </Form>
  );
}`;

  const formProps = [
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "Form fields and content"
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS class names"
    },
    {
      prop: "onSubmit",
      type: "(e: FormEvent) => void",
      default: "-",
      description: "Form submission handler"
    }
  ];

  const fieldProps = [
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "Input component or form control"
    },
    {
      prop: "label",
      type: "string",
      default: "-",
      description: "Field label text"
    },
    {
      prop: "error",
      type: "string",
      default: "-",
      description: "Error message to display"
    },
    {
      prop: "required",
      type: "boolean",
      default: "false",
      description: "Shows required asterisk"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      {/* Page Header */}
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Form
        </p>
        <p
          className="text-lg"
          style={{ color: "var(--muted-text)" }}
        >
          Flexible form components with built-in validation and styling support
        </p>
      </header>

      {/* Basic Form */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>
          Basic Form
        </h2>

        <ComponentDemo code={basicFormCode}>
          <Form onSubmit={handleSubmit} className="max-w-md">
            <FormField label="Full Name" required>
              <Input placeholder="John Doe" />
            </FormField>

            <FormField label="Email Address" required>
              <Input type="email" placeholder="john@example.com" />
            </FormField>

            <FormField label="Password" required>
              <Input type="password" placeholder="••••••••" />
            </FormField>

            <FormActions>
              <Button variant="primary" type="submit">
                Submit Form
              </Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </FormActions>
          </Form>
        </ComponentDemo>
      </section>

      {/* Form with Error */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>
          Form with Validation
        </h2>

        <ComponentDemo code={basicFormCode}>
          <Form onSubmit={handleSubmit} className="max-w-md">
            <FormField 
              label="Email Address" 
              required
              error="Please enter a valid email address"
            >
              <Input type="email" placeholder="john@example.com" />
            </FormField>

            <FormField 
              label="Password" 
              required
              error="Password must be at least 8 characters"
            >
              <Input type="password" placeholder="••••••••" />
            </FormField>

            <FormActions>
              <Button variant="primary" type="submit">
                Submit Form
              </Button>
            </FormActions>
          </Form>
        </ComponentDemo>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>
          API Reference
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text-color)" }}>
              Form
            </h3>
            <PropsTable data={formProps} />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text-color)" }}>
              FormField
            </h3>
            <PropsTable data={fieldProps} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormPage;
