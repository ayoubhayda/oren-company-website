"use client";

import * as React from "react";
import {
  IconChevronDown,
  IconDotsVertical,
  IconEdit,
  IconEye,
  IconPlus,
  IconTrash,
  IconClock,
} from "@tabler/icons-react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { toast } from "sonner";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type ProjectTableData } from "@/utils/zodSchemas";
import { deleteProjectMutation } from "@/lib/actions";
import Link from "next/link";

// Thumbnail cell component
function ThumbnailCell({ project }: { project: ProjectTableData }) {
  return (
    <div className="relative h-9 w-14 overflow-hidden rounded border bg-muted/30 flex-shrink-0">
      <Image
        src={project.thumbnailUrl}
        alt={project.shortTitleEN}
        fill
        className="object-cover"
      />
    </div>
  );
}

// Project title cell component with thumbnail
function ProjectTitleCell({ project }: { project: ProjectTableData }) {
  const [formattedDate, setFormattedDate] = React.useState<string>("");

  React.useEffect(() => {
    // Format date only on the client side to avoid hydration mismatch
    setFormattedDate(
      new Date(project.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    );
  }, [project.createdAt]);

  return (
    <div className="flex items-center gap-3">
      <ThumbnailCell project={project} />
      <div className="space-y-0.5 min-w-[200px]">
        <div className="font-medium text-sm leading-tight">
          {project.shortTitleEN}
        </div>
        {/* Created at */}
        <div className="text-xs text-muted-foreground">
          {formattedDate ? (
            `Created ${formattedDate}`
          ) : (
            <span className="inline-block w-24 h-3" />
          )}
        </div>
      </div>
    </div>
  );
}

// Category badge with enhanced styling
function CategoryBadge({ category }: { category: string }) {
  const categoryStyles: Record<string, string> = {
    "web-development":
      "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
    "saas":
      "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20",
    ecommerce:
      "bg-green-50 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20",
    design:
      "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-500/10 dark:text-pink-400 dark:border-pink-500/20",
    "digital-marketing":
      "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20",
    "custom-platforms":
      "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20",
  };

  const formatCategory = (cat: string) => {
    return cat
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Badge
      variant="outline"
      className={`px-2.5 py-1 text-xs font-medium ${
        categoryStyles[category] ||
        "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20"
      }`}
    >
      {formatCategory(category)}
    </Badge>
  );
}

// Technologies cell component with enhanced badges
function TechnologiesCell({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 max-w-[280px]">
      {technologies.slice(0, 3).map((tech, index) => (
        <Badge
          key={index}
          variant="outline"
          className={`px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20`}
        >
          {tech}
        </Badge>
      ))}
      {technologies.length > 3 && (
        <Badge
          variant="outline"
          className="px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground border-muted-foreground/20"
        >
          +{technologies.length - 3}
        </Badge>
      )}
    </div>
  );
}

// Duration cell component
function DurationCell({ duration }: { duration: number }) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <IconClock className="size-3.5" />
      <span className="font-medium">
        {duration} {duration === 1 ? "day" : "days"}
      </span>
    </div>
  );
}

// Actions cell component
function ActionsCell({ project }: { project: ProjectTableData }) {
  const handleEdit = () => {
    window.location.href = `/dashboard/projects/${project.id}/edit`;
  };

  const handleDelete = async () => {
    try {
      await deleteProjectMutation(project.id);
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project");
    }
  };

  const handleView = () => {
    toast.info("View functionality will be implemented soon");
  };

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="data-[state=open]:bg-muted flex size-8 hover:bg-muted/50"
            size="icon"
          >
            <IconDotsVertical className="size-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={handleView}>
            <IconEye className="mr-2 h-4 w-4" />
            View Details
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleEdit}>
            <IconEdit className="mr-2 h-4 w-4" />
            Edit Project
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <AlertDialogTrigger asChild>
            <DropdownMenuItem
              className="text-destructive focus:text-destructive"
              onSelect={(e) => e.preventDefault()}
            >
              <IconTrash className="mr-2 h-4 w-4" />
              Delete Project
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialogContent className="bg-background">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the project{" "}
            <strong>{project.shortTitleEN}</strong> and all its associated data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-destructive text-white hover:bg-destructive/90"
          >
            Delete Project
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

const columns: ColumnDef<ProjectTableData>[] = [
  {
    accessorKey: "shortTitleEN",
    header: "Project",
    cell: ({ row }) => <ProjectTitleCell project={row.original} />,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <CategoryBadge category={row.original.category} />,
  },
  {
    accessorKey: "technologies",
    header: "Technologies",
    cell: ({ row }) => (
      <TechnologiesCell technologies={row.original.technologies} />
    ),
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ row }) => <DurationCell duration={row.original.duration} />,
  },
  {
    id: "actions",
    header: () => <span className="sr-only">Actions</span>,
    cell: ({ row }) => <ActionsCell project={row.original} />,
    size: 50,
  },
];

function DraggableRow({ row }: { row: Row<ProjectTableData> }) {
  return (
    <TableRow
      data-state={row.getIsSelected() && "selected"}
      className="hover:bg-muted/40 transition-colors"
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id} className="py-3.5 px-4">
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
}

export function ProjectsDataTable({
  data: initialData,
}: {
  data: ProjectTableData[];
}) {
  const [data] = React.useState(() => initialData);
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: "shortTitleEN", desc: false },
  ]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4">
      {/* Header with search and filters */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <Label htmlFor="search" className="sr-only">
              Search projects
            </Label>
            <Input
              id="search"
              placeholder="Search projects..."
              className="w-64 h-10"
              value={
                (table.getColumn("shortTitleEN")?.getFilterValue() as string) ??
                ""
              }
              onChange={(event) =>
                table
                  .getColumn("shortTitleEN")
                  ?.setFilterValue(event.target.value)
              }
            />
          </div>
          <Select
            value={
              (table.getColumn("category")?.getFilterValue() as string) ?? ""
            }
            onValueChange={(value) =>
              table
                .getColumn("category")
                ?.setFilterValue(value === "all" ? "" : value)
            }
          >
            <SelectTrigger className="w-44 h-10">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="web-development">Web Development</SelectItem>
              <SelectItem value="saas">SaaS</SelectItem>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="digital-marketing">
                Digital Marketing
              </SelectItem>
              <SelectItem value="custom-platforms">Custom Platforms</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Link
          href="/dashboard/projects/create"
          className="h-10 px-4 py-2 has-[>svg]:px-3 bg-primary text-primary-foreground shadow-none hover:bg-primary/90 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive "
        >
          <IconPlus className="mr-2 h-4 w-4" />
          New Project
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border bg-card">
        <Table>
          <TableHeader className="bg-muted/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="hover:bg-transparent border-b"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className="!px-4"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table
                .getRowModel()
                .rows.map((row) => <DraggableRow key={row.id} row={row} />)
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-32 text-center"
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="text-muted-foreground text-sm">
                      No projects found.
                    </div>
                    <p className="text-xs text-muted-foreground/70">
                      Try adjusting your search or filters
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {table.getFilteredRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} projects
        </div>

        <div className="flex items-center gap-2">
          {/* Page Size Selector */}
          <div className="hidden items-center gap-2 text-sm lg:flex">
            <Label htmlFor="page-size" className="text-muted-foreground">
              Show
            </Label>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger size="sm" className="w-16 h-8" id="page-size">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[10, 20, 30, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Page Navigation */}
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="h-8 w-8 p-0"
            >
              <IconChevronDown className="h-4 w-4 rotate-90" />
              <span className="sr-only">Previous page</span>
            </Button>

            <div className="flex items-center gap-1 px-2">
              <span className="text-sm font-medium">
                {table.getState().pagination.pageIndex + 1}
              </span>
              <span className="text-sm text-muted-foreground">of</span>
              <span className="text-sm font-medium">
                {table.getPageCount()}
              </span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="h-8 w-8 p-0"
            >
              <IconChevronDown className="h-4 w-4 -rotate-90" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
