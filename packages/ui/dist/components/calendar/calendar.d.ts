import { DayButton, DayPicker } from 'react-day-picker';
import { Button } from '../button/button';
import * as React from "react";
declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, components, showInputField, ...props }: React.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React.ComponentProps<typeof Button>["variant"];
    showInputField?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function CalendarDayButton({ className, day, modifiers, ...props }: React.ComponentProps<typeof DayButton>): import("react/jsx-runtime").JSX.Element;
export { Calendar, CalendarDayButton };
//# sourceMappingURL=calendar.d.ts.map