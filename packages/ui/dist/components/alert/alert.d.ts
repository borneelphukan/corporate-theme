import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const alertVariants: (props?: ({
    variant?: "error" | "warning" | "default" | "success" | "neutral" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Alert({ className, variant, children, ...props }: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>): import("react/jsx-runtime").JSX.Element;
declare function AlertTitle({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function AlertDescription({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
export { Alert, AlertDescription, AlertTitle };
//# sourceMappingURL=alert.d.ts.map