import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
export type CheckboxProps = Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, "children"> & {
    id?: string;
    label?: React.ReactNode;
    hint?: string;
    error?: string;
    disabled?: boolean;
};
declare const Checkbox: import('react').ForwardRefExoticComponent<Omit<Omit<CheckboxPrimitive.CheckboxProps & import('react').RefAttributes<HTMLButtonElement>, "ref">, "children"> & {
    id?: string;
    label?: React.ReactNode;
    hint?: string;
    error?: string;
    disabled?: boolean;
} & import('react').RefAttributes<HTMLButtonElement>>;
export { Checkbox };
//# sourceMappingURL=checkbox.d.ts.map