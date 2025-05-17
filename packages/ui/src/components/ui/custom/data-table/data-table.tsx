"use client";

import type React from "react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
  type RowSelectionState,
  type VisibilityState,
} from "@tanstack/react-table";
import { Calendar, ChevronDown, ChevronLeft, ChevronRight, Download, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { formatDate } from "../../../../lib/date-utils";
import { Button } from "../../button";
import { Calendar as CalendarComponent } from "../../calendar";
import { Checkbox } from "../../checkbox";
import { Input } from "../../input";
import { Popover, PopoverContent, PopoverTrigger } from "../../popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../table";
import MultiselectFilter, { type FilterCategory, type FilterOption } from "./multi-select-filter";

interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  searchPlaceholder?: string;
  initialPageSize?: number;
  onExport?: () => void;
  bulk?: boolean;
  actionButton?: React.ReactNode;
  showHeader?: boolean;
}

export function CustomDataTable<TData>({
  data,
  columns,
  searchPlaceholder = "Search...",
  initialPageSize = 10,
  onExport,
  bulk = false,
  actionButton,
  showHeader = true,
}: Readonly<DataTableProps<TData>>) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Generate filter categories from columns
  const filterCategories: FilterCategory[] = useMemo(() => {
    return columns
      .filter((col) => col.id !== "select" && col.id !== "actions")
      .map((col) => ({
        id: col.id ?? "",
        label: typeof col.header === "string" ? col.header : (col.id ?? ""),
        selected: false,
      }));
  }, [columns]);

  // We would need to generate options based on the actual data
  // This is a simplified example
  const filterOptions: FilterOption[] = [];

  // Add selection column with checkbox
  const selectionColumn: ColumnDef<TData> = {
    id: "select",
    header: () => null, // Empty header as requested
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  };

  // Combine selection column with provided columns if bulk is true
  const allColumns = useMemo(() => {
    return bulk ? [selectionColumn, ...columns] : columns;
  }, [columns, bulk]);

  // Set up the table
  const table = useReactTable({
    data,
    columns: allColumns,
    state: {
      globalFilter,
      rowSelection,
      columnVisibility,
    },
    enableRowSelection: bulk,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: initialPageSize,
      },
    },
  });

  const handleFilterChange = (categories: FilterCategory[], options: FilterOption[]) => {
    console.log("Filter changed:", { categories, options });
    // Here you would implement the actual filtering logic
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border bg-white">
      {showHeader && (
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 p-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-[280px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <Input
                placeholder={searchPlaceholder}
                className="w-full border-gray-300 pl-9 focus-visible:ring-blue-500"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
              />
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {formatDate(date) || "Select date"}
                  <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  More Filters
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <div className="w-[500px]">
                  <MultiselectFilter
                    initialCategories={filterCategories}
                    initialOptions={filterOptions}
                    onFilter={handleFilterChange}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex items-center gap-3">
            {onExport && (
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                onClick={onExport}
              >
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            )}

            {actionButton}
          </div>
        </div>
      )}

      <div className="overflow-x-auto border-b border-t">
        <div className="inline-block min-w-full align-middle">
          <Table className="min-w-full">
            <TableHeader className="bg-blue-600 text-white">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="whitespace-nowrap font-medium text-white">
                      {header.isPlaceholder ? null : (
                        <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className={`hover:bg-gray-50 ${row.getIsSelected() ? "bg-blue-50" : ""}`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="whitespace-nowrap">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={allColumns.length} className="h-24 text-center">
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t p-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Page Size</span>
          <Select
            value={table.getState().pagination.pageSize.toString()}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="w-20">
              <SelectValue placeholder={table.getState().pagination.pageSize.toString()} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: table.getPageCount() }, (_, i) => i + 1)
            .filter((page) => {
              const currentPage = table.getState().pagination.pageIndex + 1;
              return (
                page === 1 ||
                page === table.getPageCount() ||
                (page >= currentPage - 2 && page <= currentPage + 2)
              );
            })
            .map((page) => (
              <Button
                key={page}
                variant={page === table.getState().pagination.pageIndex + 1 ? "default" : "outline"}
                size="icon"
                className={`h-8 w-8 ${page === table.getState().pagination.pageIndex + 1 ? "bg-blue-600" : ""}`}
                onClick={() => table.setPageIndex(page - 1)}
              >
                {page}
              </Button>
            ))}

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Go to page</span>
            <Input
              className="h-8 w-16"
              value={(table.getState().pagination.pageIndex + 1).toString().padStart(2, "0")}
              onChange={(e) => {
                const value = Number.parseInt(e.target.value);
                if (!isNaN(value) && value > 0 && value <= table.getPageCount()) {
                  table.setPageIndex(value - 1);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
