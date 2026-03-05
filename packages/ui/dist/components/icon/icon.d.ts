import { VariantProps } from 'class-variance-authority';
import { MaterialSymbol } from 'material-symbols';
export type IconType = MaterialSymbol;
declare const Icon: import('react').ForwardRefExoticComponent<Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & VariantProps<(props?: ({
    color?: "primary" | "secondary" | null | undefined;
    size?: "base" | "lg" | "md" | "sm" | "xs" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & {
    type: IconType;
} & import('react').RefAttributes<HTMLElement>>;
export { Icon };
//# sourceMappingURL=icon.d.ts.map