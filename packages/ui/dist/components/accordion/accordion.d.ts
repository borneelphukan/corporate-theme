import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";
type AccordionMode = "text" | "card";
declare function Accordion({ mode, className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Root> & {
    mode?: AccordionMode;
}): import("react/jsx-runtime").JSX.Element;
declare function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>): import("react/jsx-runtime").JSX.Element;
declare function AccordionTrigger({ className, children, subtitle, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
    subtitle?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
//# sourceMappingURL=accordion.d.ts.map