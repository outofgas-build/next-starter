import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  TableMeta,
  useReactTable
} from "@tanstack/react-table";
import { CircleOff } from "lucide-react";
import { useState, type UIEventHandler } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
  variant?: "default" | "wrapped";
  onRowClick?: (row: TData) => void;
  defaultSort?: SortingState;
  meta?: TableMeta<TData>;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  tableCellClassName?: string;
  tableHeaderClassName?: string;
  emptyText?: string;
  onScroll?: UIEventHandler<HTMLDivElement>;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading = false,
  variant = "default",
  onRowClick,
  defaultSort,
  meta,
  className,
  headerClassName,
  bodyClassName,
  tableCellClassName,
  tableHeaderClassName,
  emptyText = "No matching records found",
  onScroll
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>(defaultSort ?? []);
  const isWrapped = variant === "wrapped";
  const table = useReactTable({
    data,
    columns,
    meta,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting
    }
  });
  const rows = table.getRowModel().rows;
  const rowCount = rows.length;
  const getWrappedBodyCellClassName = (rowIndex: number, totalRows: number, cellIndex: number, totalCells: number) =>
    cn(
      "border-b-2 border-border/60 bg-background px-4 py-3 font-medium group-hover:bg-card/80",
      rowIndex === totalRows - 1 && "border-b-0",
      rowIndex === 0 && cellIndex === 0 && "rounded-tl-lg",
      rowIndex === 0 && cellIndex === totalCells - 1 && "rounded-tr-lg",
      rowIndex === totalRows - 1 && cellIndex === 0 && "rounded-bl-lg",
      rowIndex === totalRows - 1 && cellIndex === totalCells - 1 && "rounded-br-lg"
    );

  return (
    <div
      onScroll={onScroll}
      className={cn(
        "data-table-scroll overflow-auto",
        isWrapped && "rounded-lg bg-muted/30 p-1.5 dark:bg-foreground/5",
        className
      )}
    >
      <Table className="min-w-max border-separate border-spacing-0">
        <TableHeader
          className={cn("sticky top-0 z-20 text-xs", isWrapped ? "bg-transparent" : "bg-background", headerClassName)}
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className={cn(isWrapped && "hover:bg-transparent")}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={cn(
                    "text-muted-foreground",
                    isWrapped ? "h-8 px-4 py-2" : "h-8 border-b py-1.5",
                    tableHeaderClassName
                  )}
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className={cn("text-xs", bodyClassName)}>
          {rows.length ? (
            rows.map((row, rowIndex) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                onClick={() => onRowClick?.(row.original)}
                className={cn(
                  isWrapped
                    ? "group border-0 hover:bg-transparent"
                    : "border-b border-primary/5 odd:bg-background/30 even:bg-muted/20 hover:bg-muted/40",
                  onRowClick && "cursor-pointer"
                )}
              >
                {row.getVisibleCells().map((cell, cellIndex, cells) => (
                  <TableCell
                    className={cn(
                      isWrapped
                        ? getWrappedBodyCellClassName(rowIndex, rowCount, cellIndex, cells.length)
                        : "py-2 font-medium",
                      tableCellClassName
                    )}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : isLoading ? (
            Array.from({ length: 8 }).map((_, rowIndex) => (
              <TableRow
                key={`loading-row-${rowIndex}`}
                className={cn(
                  isWrapped
                    ? "group border-0 hover:bg-transparent"
                    : "border-b border-primary/5 odd:bg-background even:bg-muted/20"
                )}
              >
                {Array.from({ length: Math.max(columns.length, 1) }).map((_, columnIndex, cells) => (
                  <TableCell
                    key={`loading-cell-${rowIndex}-${columnIndex}`}
                    className={cn(
                      isWrapped ? getWrappedBodyCellClassName(rowIndex, 8, columnIndex, cells.length) : undefined
                    )}
                  >
                    <Skeleton className="h-4 w-full max-w-32" />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className={cn(isWrapped && "hover:bg-transparent")}>
              <TableCell
                colSpan={columns.length}
                className={cn("h-24 text-center", isWrapped && "rounded-lg border-0 bg-background/60 font-medium")}
              >
                <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                  <CircleOff className="h-7 w-7" aria-hidden="true" />
                  <span>{emptyText}</span>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
