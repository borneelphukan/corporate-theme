declare const TagInput: import('react').ForwardRefExoticComponent<Omit<Omit<import('react').DetailedHTMLProps<import('react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "onChange" | "value"> & {
    id: string;
    label: string;
    value: string[];
    onChange: (tags: string[]) => void;
    validate?: (tag: string) => boolean;
    hideLabel?: boolean;
    hint?: string;
    error?: string;
    options?: string[];
} & import('react').RefAttributes<HTMLInputElement>>;
export { TagInput };
//# sourceMappingURL=tag-input.d.ts.map