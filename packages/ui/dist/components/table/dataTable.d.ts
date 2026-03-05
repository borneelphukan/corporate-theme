import { ColumnDef, RowData, Row as TanstackRow, Cell as TanstackCell, CellContext as TanstackCellContext, Table as TanstackTable } from '@tanstack/react-table';
import { ComponentType, ReactNode } from 'react';
export type Row<TData extends RowData> = TanstackRow<TData>;
export type Cell<TData extends RowData, TValue = unknown> = TanstackCell<TData, TValue>;
export type CellContext<TData extends RowData, TValue = unknown> = TanstackCellContext<TData, TValue>;
export type DataTableColumnDef<TData extends RowData, TValue = unknown> = ColumnDef<TData, TValue> & {
    width?: number | string;
};
export type DataTableRef<TData extends RowData> = TanstackTable<TData>;
export interface SortState<T extends string> {
    id: T;
    direction: "asc" | "desc";
}
interface DataTableBaseProps<TData, TValue, TProperty extends string> {
    columns: DataTableColumnDef<TData, TValue>[];
    data?: TData[];
    getRowId?: (row: TData, index: number) => string;
    columnVisibility?: Record<string, boolean>;
    sort?: SortState<TProperty>;
    onHeaderSortClick?: (sort: SortState<TProperty> | undefined) => void;
    renderChild?: ComponentType<{
        row: TData;
    }>;
    isLoading?: boolean;
    inline?: boolean;
    isFixed?: boolean;
    rowClassName?: (row: TData) => string | undefined;
    showCellBorders?: boolean;
    expandedRowIds?: string[];
    onRowExpandToggle?: (rowId: string) => void;
    tableRef?: React.Ref<TanstackTable<TData>>;
    bulletLines?: boolean;
    pagination?: boolean;
    onPageChange?: (page: number) => void;
    pageIndex?: number;
    pageSize?: number;
    rowCount?: number;
}
/**
 * A generic data table component implementing the tanstack-react-table library
 * @param columns - Columns to display. Use `enableSorting: false` in column definition to disable sorting for a column.
 * @param data - Data to display
 * @param columnVisibility - Column visibility state, add `{columnId: false}` to hide a column
 * @param sort - Current sorting state
 * @param onHeaderSortClick - Callback when a header is clicked for sorting, returns new sort state or undefined if sorting is cleared
 * @param renderChild - Function which returns a nested DataTable for a given row
 * @param isLoading - Shows loading div when true
 * @param inline - Whether the table is displayed as a child table (true) or as a main table (false, default)
 * @param rowClassName - A function that returns a className string for a given row's <tr> element.
 * @param onRowExpandToggle - Callback when a row is expanded or collapsed, returns the row id
 * @param tableRef - Ref to access the underlying TanStack table instance
 * @param bulletLines - Whether to show tree-like bullet lines for nested items (default: false)
 * @returns A data table component
 * @note Data should be pulled from server, with sorting/fetching/filtering/pagination done server-side.
 */
export declare function DataTable<TData, TValue, TProperty extends string = string>({ columns, data, getRowId, columnVisibility, sort, onHeaderSortClick, renderChild: RenderChild, isLoading, inline, isFixed, rowClassName, showCellBorders, onRowExpandToggle, tableRef, bulletLines, pagination, onPageChange, pageIndex, pageSize, rowCount, }: DataTableBaseProps<TData, TValue, TProperty>): ReactNode;
export {};
//# sourceMappingURL=dataTable.d.ts.map