import type { ReactNode } from "react";
import { cn } from "@/libs/utils";

interface FormProps {
  children: ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

export const Form = ({ children, className, onSubmit }: FormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className={cn("space-y-6", className)}
    >
      {children}
    </form>
  );
};

interface FormFieldProps {
  children: ReactNode;
  className?: string;
  label?: string;
  error?: string;
  required?: boolean;
}

export const FormField = ({ children, className, label, error, required }: FormFieldProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="block text-sm font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

interface FormItemProps {
  children: ReactNode;
  className?: string;
}

export const FormItem = ({ children, className }: FormItemProps) => {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
};

interface FormLabelProps {
  children: ReactNode;
  className?: string;
  htmlFor?: string;
  required?: boolean;
}

export const FormLabel = ({ children, className, htmlFor, required }: FormLabelProps) => {
  return (
    <label 
      htmlFor={htmlFor}
      className={cn("block text-sm font-medium mb-2", className)}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

interface FormMessageProps {
  children: ReactNode;
  className?: string;
  error?: boolean;
}

export const FormMessage = ({ children, className, error }: FormMessageProps) => {
  return (
    <p className={cn(
      "text-sm",
      error ? "text-red-500" : "text-gray-500",
      className
    )}>
      {children}
    </p>
  );
};

interface FormActionsProps {
  children: ReactNode;
  className?: string;
}

export const FormActions = ({ children, className }: FormActionsProps) => {
  return (
    <div className={cn("flex items-center gap-4 pt-4", className)}>
      {children}
    </div>
  );
};
