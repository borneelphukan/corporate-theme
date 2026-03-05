import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";
declare const TooltipProvider: ({ delayDuration, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>) => import("react/jsx-runtime").JSX.Element;
type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root> & {
    side?: "top" | "right" | "bottom" | "left";
};
declare const Tooltip: ({ side, ...props }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
declare const TooltipTrigger: ({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) => import("react/jsx-runtime").JSX.Element;
declare const TooltipContent: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    header?: React.ReactNode;
    content?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
//# sourceMappingURL=tooltip.d.ts.map