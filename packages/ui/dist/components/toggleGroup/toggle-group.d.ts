import { VariantProps } from 'class-variance-authority';
import { toggleVariants } from '../toggle/toggle';
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import * as React from "react";
declare function ToggleGroup({ className, variant, size, children, ...props }: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>): import("react/jsx-runtime").JSX.Element;
declare const ToggleGroupItem: React.ForwardRefExoticComponent<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "lg" | "sm" | "default" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & {
    label?: string;
    description?: string;
    icon?: string;
} & React.RefAttributes<HTMLButtonElement>>;
export { ToggleGroup, ToggleGroupItem };
//# sourceMappingURL=toggle-group.d.ts.map