import { IconType } from '../icon/icon';
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";
type SegmentedControlItem = React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
    label: string;
    icon?: IconType;
    onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
};
declare function SegmentedControlItem({ item, isSelected, onClick, }: {
    item: SegmentedControlItem;
    isSelected: boolean;
    onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}): import("react/jsx-runtime").JSX.Element;
type SegmentedControlProps = React.ComponentProps<typeof RadioGroupPrimitive.Root> & {
    options: {
        first: SegmentedControlItem;
        second: SegmentedControlItem;
    };
    defaultValue: "first" | "second" | undefined;
};
declare function SegmentedControl({ className, options, ...props }: SegmentedControlProps): import("react/jsx-runtime").JSX.Element;
export { SegmentedControl };
export type { SegmentedControlItem, SegmentedControlProps };
//# sourceMappingURL=segmented-control.d.ts.map