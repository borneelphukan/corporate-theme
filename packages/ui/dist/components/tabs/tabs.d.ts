import { default as React, ReactNode } from 'react';
import { IconType } from '../icon/icon';
export type TabItemValue<T extends readonly TabItem[]> = T[number]["value"];
interface TabItem {
    value: string;
    label: ReactNode;
    content: React.ReactNode;
    icon?: IconType;
}
interface TabsProps<T extends readonly TabItem[]> {
    tabs: T;
    defaultTab?: TabItemValue<T>;
    activeTab?: TabItemValue<T>;
    onTabChange?: (tab: TabItemValue<T>) => void;
}
export declare const Tabs: <T extends readonly TabItem[]>({ tabs, defaultTab, activeTab, onTabChange, }: TabsProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=tabs.d.ts.map