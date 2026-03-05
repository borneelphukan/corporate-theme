import { ComponentType, ComponentProps, PropsWithChildren } from 'react';
export declare function LinkComponentProvider({ value, children, }: PropsWithChildren<{
    value?: ComponentType<ComponentProps<"a">>;
}>): import("react/jsx-runtime").JSX.Element;
export declare function useLinkComponent(): ComponentType<import('react').DetailedHTMLProps<import('react').AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
//# sourceMappingURL=linkComponent.d.ts.map