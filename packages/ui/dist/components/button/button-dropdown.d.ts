import { IconType } from '../icon/icon';
import { ButtonProps } from './button';
import * as React from "react";
type DropdownItem = {
    label: string;
    value: string;
    icon?: IconType;
    disabled?: boolean;
};
interface DropdownButtonProps extends Omit<ButtonProps, "children" | "onSelect"> {
    items: DropdownItem[];
    prefix?: string;
    label?: string;
    children?: React.ReactNode;
    onSelect?: (value: string) => void;
}
declare const dropdownVariantStyles: Record<string, string>;
declare const dropdownItemVariantStyles: Record<string, string>;
declare const DropdownButton: React.ForwardRefExoticComponent<Omit<DropdownButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { DropdownButton, dropdownVariantStyles, dropdownItemVariantStyles };
export type { DropdownButtonProps, DropdownItem };
//# sourceMappingURL=button-dropdown.d.ts.map