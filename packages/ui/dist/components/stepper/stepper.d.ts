import * as React from "react";
interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
    activeStep?: number;
    orientation?: "horizontal" | "vertical";
    disableConnector?: boolean;
    completedSteps?: number[];
}
declare function Stepper({ activeStep, orientation, disableConnector, completedSteps, className, children, ...props }: StepperProps): import("react/jsx-runtime").JSX.Element;
interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement> {
    index?: number;
    isLast?: boolean;
}
declare function StepperItem({ className, children, index, isLast, ...props }: StepperItemProps): import("react/jsx-runtime").JSX.Element;
interface StepperIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    isCompleted?: boolean;
    step?: number;
    icon?: React.ReactNode;
    isLast?: boolean;
    isFirst?: boolean;
}
declare function StepperIndicator({ className, isActive, isCompleted, step, icon, isLast, isFirst, ...props }: StepperIndicatorProps): import("react/jsx-runtime").JSX.Element;
declare function StepperContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
declare function StepperTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): import("react/jsx-runtime").JSX.Element;
declare function StepperDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): import("react/jsx-runtime").JSX.Element;
declare function SubStepper({ className, children, activeStep, disableConnector, ...props }: StepperProps): import("react/jsx-runtime").JSX.Element;
export { Stepper, StepperItem, StepperIndicator, StepperContent, StepperTitle, StepperDescription, SubStepper, };
//# sourceMappingURL=stepper.d.ts.map