import { Search, TrashIcon } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Checkbox, Input } from "./forminputs";
import { ScrollArea } from "./scroll-area";
export interface ListItem {
  id: string;
  title: string;
  description?: string;
}
const TrashPath = "/icons/trash.svg";
interface SearchableListProps {
  items: ListItem[];
  searchPlaceholder?: string;
  onSearch?: (searchTerm: string) => void;
  onDelete?: (item: ListItem) => void;
  showCheckbox?: boolean;
  onCheckChange?: (item: ListItem, checked: boolean) => void;
  selectedItems?: string[];
  className?: string;
  // New props for header configuration
  header?: string;
  showHeader?: boolean;
  showSelectedCount?: boolean;
  emptyStateComponent?: React.ReactNode;
  scrollAreaClassName?: string;
}

export function SearchableList({
  items,
  searchPlaceholder = "Search...",
  onSearch,
  onDelete,
  showCheckbox = false,
  onCheckChange,
  selectedItems = [],
  className,
  header,
  showHeader = false,
  showSelectedCount = false,
  emptyStateComponent,
  scrollAreaClassName = "h-full w-full",
}: SearchableListProps) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  return (
    <div className={cn("flex h-full w-full flex-col justify-between space-y-4", className)}>
      {showHeader && (
        <div className="flex items-center justify-between">
          <h3 className="text-md font-bold">{header}</h3>
          {showSelectedCount && (
            <span className="rounded-lg bg-neutral-100 px-4 py-1 text-sm">
              {selectedItems.length} items
            </span>
          )}
        </div>
      )}

      <div className="relative">
        <Search className="text-muted-foreground absolute left-3 top-2.5 h-4 w-4" />
        <Input
          placeholder={searchPlaceholder}
          value={searchTerm}
          onChange={handleSearch}
          className="pl-9"
          variant="search"
          type="search"
        />
      </div>

      <div className="flex h-full flex-1 flex-col space-y-2">
        {items.length > 0 ? (
          <ScrollArea className={scrollAreaClassName}>
            {items.map((item) => (
              <div key={item.id} className="flex items-start justify-between gap-1 p-4 pr-0">
                <div className="flex gap-4">
                  {showCheckbox && (
                    <Checkbox
                      className="mt-1"
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={(checked) => onCheckChange?.(item, checked as boolean)}
                    />
                  )}
                  <div>
                    <h4 className="text-sm font-medium">{item.title}</h4>
                    {item.description && (
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    )}
                  </div>
                </div>
                {onDelete && (
                  <div className="flex items-start justify-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="pt-0"
                      onClick={() => onDelete(item)}
                    >
                      <img width={"16px"} height={"16px"} src={`${TrashPath}`} alt="" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </ScrollArea>
        ) : (
          <div className="h-full flex-1">{emptyStateComponent}</div>
        )}
      </div>
    </div>
  );
}
