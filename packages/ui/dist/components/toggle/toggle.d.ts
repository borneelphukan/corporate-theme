import { VariantProps } from 'class-variance-authority';
import * as TogglePrimitive from "@radix-ui/react-toggle";
import * as React from "react";
declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "lg" | "sm" | "default" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const Toggle: React.ForwardRefExoticComponent<Omit<Omit<TogglePrimitive.ToggleProps & React.RefAttributes<HTMLButtonElement>, "ref">, "pressed" | "onPressedChange"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "lg" | "sm" | "default" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & {
    label: string;
    description?: string;
    icon?: string;
    isActive?: boolean;
    onClick?: () => void;
} & React.RefAttributes<HTMLButtonElement>>;
export { Toggle, toggleVariants };
//# sourceMappingURL=toggle.d.ts.map