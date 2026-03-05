import { VariantProps } from 'class-variance-authority';
import { IconType } from '../icon/icon';
import * as React from "react";
type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    icon?: {
        left?: IconType;
        right?: IconType;
    };
    label?: string;
};
declare const buttonVariants: (props?: ({
    variant?: "link" | "primary" | "secondary" | "success" | "outline" | "destructive" | "ghost" | null | undefined;
    size?: "lg" | "md" | "sm" | "icon" | null | undefined;
    shape?: "circle" | "default" | null | undefined;
    isIconOnly?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Button({ className, variant, size, shape, icon, isLoading, asChild, label, children, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants };
export type { ButtonProps };
//# sourceMappingURL=button.d.ts.map