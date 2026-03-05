import { toast as sonnerToast, ToasterProps, ExternalToast } from 'sonner';
declare const Toaster: ({ ...props }: ToasterProps) => import("react/jsx-runtime").JSX.Element;
type ExtendedToastOptions = ExternalToast & {
    label?: string;
};
declare const toast: typeof sonnerToast & {
    success: (message: string | React.ReactNode | (() => React.ReactNode), options?: ExtendedToastOptions) => string | number;
};
export { Toaster, toast };
//# sourceMappingURL=sonner.d.ts.map