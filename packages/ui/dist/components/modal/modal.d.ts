import { Button } from '../button/button';
interface ModalProps {
    title: string;
    description: string;
    showCloseButton?: boolean;
    trigger?: React.ReactElement<typeof Button>;
    actions: React.ReactElement<typeof Button>[];
    content: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
declare const Modal: ({ title, description, showCloseButton, trigger, actions, content, open, onOpenChange, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export { Modal };
//# sourceMappingURL=modal.d.ts.map