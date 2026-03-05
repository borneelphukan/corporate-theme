import { VariantProps } from 'class-variance-authority';
import { default as React } from 'react';
import { IconType } from '../icon/icon';
export declare const Badge: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & VariantProps<(props?: ({
    type?: "error" | "warning" | "default" | "success" | "blue" | "outline" | "dotted" | null | undefined;
    size?: "lg" | "md" | "sm" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & {
    label: string;
    iconLeft?: IconType;
    iconRight?: IconType;
} & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=badge.d.ts.map