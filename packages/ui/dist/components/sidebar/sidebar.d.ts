import { ComponentType } from 'react';
import { IconType } from '../icon/icon.tsx';
import { useSidebar, SidebarProvider, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuAction } from './_base.tsx';
/**
 * @interface Link
 * @description Represents a link item in the sidebar.
 * @property {string} name - The display name of the link.
 * @property {IconType} [icon] - Optional icon type for the link.
 * @property {string} [img] - Optional image URL for the link. Takes priority over the icon if both are provided.
 * @property {string} [url] - Optional URL to navigate to when the link is clicked. If not provided, the button will not be clickable.
 * @property {ComponentType} [action] - Optional React component to render as an action for the link, should be <SidebarMenuAction>
 */
interface Link {
    name: string;
    description?: string;
    icon?: IconType;
    img?: string;
    url?: string;
    action?: ComponentType;
}
export interface SidebarGroupProps {
    title?: string;
    collapsible?: boolean;
    hasSpaceOnTop?: boolean;
    links: Link[];
}
export interface SidebarProps {
    linkGroups: SidebarGroupProps[];
    header?: ComponentType;
    footer?: ComponentType;
    isActive?: (url: string) => boolean;
}
declare function Sidebar({ header: Header, footer: Footer, linkGroups, isActive, }: SidebarProps): import("react/jsx-runtime").JSX.Element;
export { Sidebar, SidebarProvider, SidebarMenuButton, SidebarMenuAction, SidebarMenu, SidebarMenuItem, useSidebar, };
//# sourceMappingURL=sidebar.d.ts.map