import { IconType } from '../icon/icon';
import { CountryCode } from '../../types';
type DropdownConfig = {
    value: React.ReactNode;
    options: Array<{
        label: string;
        value: string;
    }>;
    onSelect: (value: string) => void;
};
declare const Input: import('react').ForwardRefExoticComponent<Omit<import('react').DetailedHTMLProps<import('react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    id: string;
    label: string;
    icon?: {
        left?: IconType;
        right?: IconType;
    };
    dropdown?: {
        left?: DropdownConfig;
        right?: DropdownConfig;
    };
    inputButton?: {
        label: string;
        onClick?: () => void;
        disabled?: boolean;
    };
    hideLabel?: boolean;
    hint?: string;
    error?: string;
    required?: boolean;
    options?: string[];
    selectedOption?: string;
    onOptionChange?: (option: string) => void;
    countryCode?: {
        selected: CountryCode;
        options: CountryCode[];
        onSelect: (country: CountryCode) => void;
    };
} & import('react').RefAttributes<HTMLInputElement>>;
export { Input };
//# sourceMappingURL=input.d.ts.map