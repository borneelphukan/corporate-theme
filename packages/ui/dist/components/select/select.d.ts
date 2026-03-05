import { default as React, ReactNode } from 'react';
import { IconType } from '../icon/icon.tsx';
type InnerValue = {
    label: string;
    value: string;
    icon?: IconType;
};
type SwitchValue = {
    label: string;
    id: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    icon?: IconType;
};
type ActionButton = {
    label: string;
    icon?: IconType;
    onClick: () => void;
};
type GroupedValues = {
    groupName: string | null;
    values: InnerValue[];
};
type Values = InnerValue[] | GroupedValues[];
type Props = Omit<React.ComponentPropsWithoutRef<"button">, "value" | "onValueChange"> & {
    id: string;
    label: string;
    iconLeft?: IconType;
    hideLabel?: boolean;
    triggerPlaceholder?: string;
    values: Values;
    hint?: ReactNode;
    error?: ReactNode;
    required?: boolean;
    switchItems?: SwitchValue[];
    actionButton?: ActionButton;
};
type SingleSelectProps = Props & {
    multiple?: false;
    value?: string;
    onValueChange?: (value: string) => void;
};
type MultiSelectProps = Props & {
    multiple: true;
    value?: string[];
    onValueChange?: (value: string[]) => void;
    multiDisplayFormatter?: (selectedValues: string[], allValues: InnerValue[]) => ReactNode;
};
type SelectProps = SingleSelectProps | MultiSelectProps;
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLButtonElement>>;
export { Select };
export type { InnerValue as SelectValue, SwitchValue as SelectSwitchValue, ActionButton as SelectActionButton, };
//# sourceMappingURL=select.d.ts.map