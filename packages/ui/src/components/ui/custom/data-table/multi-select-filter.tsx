"use client";

import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "../../button";
import { Checkbox } from "../../checkbox";
import { Input } from "../../input";

export interface FilterCategory {
  id: string;
  label: string;
  selected: boolean;
}

export interface FilterOption {
  id: string;
  label: string;
  selected: boolean;
  categoryId: string;
}

interface MultiselectFilterProps {
  initialCategories?: FilterCategory[];
  initialOptions?: FilterOption[];
  // eslint-disable-next-line no-unused-vars
  onFilter?: (categories: FilterCategory[], options: FilterOption[]) => void;
  onCancel?: () => void;
  // eslint-disable-next-line no-unused-vars
  onSave?: (categories: FilterCategory[], options: FilterOption[]) => void;
}

const defaultCategories: FilterCategory[] = [
  { id: "module", label: "Module", selected: true },
  { id: "status", label: "Status", selected: false },
  { id: "date", label: "Date Created", selected: true },
  { id: "category", label: "Category", selected: false },
];

const defaultOptions: FilterOption[] = [
  // Module options
  { id: "incident", label: "Incident", selected: true, categoryId: "module" },
  { id: "request", label: "Request", selected: true, categoryId: "module" },
  { id: "problem", label: "Problem", selected: true, categoryId: "module" },
  { id: "change", label: "Change", selected: true, categoryId: "module" },

  // Status options
  { id: "open", label: "Open", selected: false, categoryId: "status" },
  { id: "in-progress", label: "In Progress", selected: false, categoryId: "status" },
  { id: "resolved", label: "Resolved", selected: false, categoryId: "status" },
  { id: "closed", label: "Closed", selected: false, categoryId: "status" },

  // Date Created options
  { id: "today", label: "Today", selected: false, categoryId: "date" },
  { id: "yesterday", label: "Yesterday", selected: false, categoryId: "date" },
  { id: "last-week", label: "Last Week", selected: false, categoryId: "date" },
  { id: "last-month", label: "Last Month", selected: false, categoryId: "date" },

  // Category options
  { id: "hardware", label: "Hardware", selected: false, categoryId: "category" },
  { id: "software", label: "Software", selected: false, categoryId: "category" },
  { id: "network", label: "Network", selected: false, categoryId: "category" },
  { id: "security", label: "Security", selected: false, categoryId: "category" },
];

const MultiselectFilter = ({
  initialCategories,
  initialOptions,
  onFilter,
  onCancel,
  onSave,
}: MultiselectFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const [categories, setCategories] = useState<FilterCategory[]>([]);
  const [options, setOptions] = useState<FilterOption[]>([]);

  // Initialize with props or defaults
  useEffect(() => {
    setCategories(initialCategories || [...defaultCategories]);
    setOptions(initialOptions || [...defaultOptions]);

    // Set active category to the first selected category or the first category
    const firstSelected = (initialCategories || defaultCategories).find((c) => c.selected);
    setActiveCategory(firstSelected?.id || (initialCategories || defaultCategories)[0]?.id || "");
  }, [initialCategories, initialOptions]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleCategoryToggle = (categoryId: string, checked: boolean) => {
    // Update categories
    setCategories(
      categories.map((category) => ({
        ...category,
        selected: category.id === categoryId ? checked : category.selected,
      }))
    );

    // If unchecking a category, uncheck all its sub-options
    if (!checked) {
      setOptions(
        options.map((option) => ({
          ...option,
          selected: option.categoryId === categoryId ? false : option.selected,
        }))
      );
    }

    // If checking a category, make it active
    if (checked) {
      setActiveCategory(categoryId);
    }

    // Call onFilter callback if provided
    if (onFilter) {
      const updatedCategories = categories.map((category) =>
        category.id === categoryId ? { ...category, selected: checked } : category
      );

      const updatedOptions = !checked
        ? options.map((option) =>
            option.categoryId === categoryId ? { ...option, selected: false } : option
          )
        : options;

      onFilter(updatedCategories, updatedOptions);
    }
  };

  const handleOptionToggle = (optionId: string, checked: boolean) => {
    const option = options.find((o) => o.id === optionId);
    const categoryId = option?.categoryId || "";

    // Update options
    const updatedOptions = options.map((option) => ({
      ...option,
      selected: option.id === optionId ? checked : option.selected,
    }));

    setOptions(updatedOptions);

    // If checking an option and its parent category is not checked, check the parent category
    let updatedCategories = [...categories];
    if (checked) {
      const parentCategory = categories.find((c) => c.id === categoryId);
      if (parentCategory && !parentCategory.selected) {
        updatedCategories = categories.map((category) => ({
          ...category,
          selected: category.id === categoryId ? true : category.selected,
        }));
        setCategories(updatedCategories);
      }
    }

    // Call onFilter callback if provided
    if (onFilter) {
      onFilter(updatedCategories, updatedOptions);
    }
  };

  const clearAll = () => {
    const clearedCategories = categories.map((category) => ({ ...category, selected: false }));
    const clearedOptions = options.map((option) => ({ ...option, selected: false }));

    setCategories(clearedCategories);
    setOptions(clearedOptions);

    // Call onFilter callback if provided
    if (onFilter) {
      onFilter(clearedCategories, clearedOptions);
    }
  };

  const getActiveOptions = () => {
    return options
      .filter((option) => option.categoryId === activeCategory)
      .filter((option) => option.label.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  const getSelectedCategories = () => {
    return categories.filter((category) => {
      // Only include categories that have at least one selected option
      const hasSelectedOptions = options.some(
        (option) => option.categoryId === category.id && option.selected
      );
      return category.selected && hasSelectedOptions;
    });
  };

  const getSelectedCategoryLabels = () => {
    return getSelectedCategories().map((category) => category.label);
  };

  const hasSelectedItems =
    categories.some((category) => category.selected) || options.some((option) => option.selected);

  const handleSave = () => {
    if (onSave) {
      onSave(categories, options);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  // Render the active category's options
  const renderActiveOptions = () => {
    const activeOptions = getActiveOptions();

    return (
      <div className="w-2/3 border-l border-[#ebebeb] pl-6">
        <h3 className="mb-4 text-lg font-medium text-[#333333]">
          {categories.find((c) => c.id === activeCategory)?.label} Options
        </h3>
        <div className="space-y-3">
          {activeOptions.length > 0 ? (
            activeOptions.map((option) => (
              <div key={option.id} className="flex items-center">
                <Checkbox
                  id={`option-${option.id}`}
                  checked={option.selected}
                  onCheckedChange={(checked) => handleOptionToggle(option.id, checked as boolean)}
                  className="h-6 w-6 rounded border-[#d9d9d9] data-[state=checked]:bg-[#1659e6] data-[state=checked]:text-white"
                />
                <label
                  htmlFor={`option-${option.id}`}
                  className="ml-3 cursor-pointer text-lg text-[#333333]"
                >
                  {option.label}
                </label>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No options match your search.</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex items-center justify-between border-b border-[#ebebeb] p-6">
        <h2 className="text-2xl font-bold text-[#333333]">Filter By</h2>
        <Button
          onClick={clearAll}
          disabled={!hasSelectedItems}
          variant="ghost"
          className="font-medium text-[#1659e6] hover:bg-blue-50 hover:text-[#1659e6]"
        >
          Clear All
          <X className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="p-6">
        <div className="relative mb-6">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            <Search className="h-5 w-5 text-[#808080]" />
          </div>
          <Input
            placeholder="Search options..."
            className="h-auto rounded-lg border border-[#d9d9d9] bg-[#fcfcfd] py-6 pl-10 pr-4 focus-visible:ring-[#1659e6]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {categories.length > 0 && (
          <div className="flex">
            <div className="w-1/3 pr-4">
              <div className="space-y-1">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={`cursor-pointer rounded-md px-4 py-3 transition-colors ${
                      activeCategory === category.id
                        ? "bg-[#1659e6] font-medium text-white"
                        : "text-[#333333] hover:bg-[#f5f5f5]"
                    }`}
                    onClick={() => {
                      handleCategoryClick(category.id);
                      // If clicking makes this the active category, also mark it as selected
                      if (!category.selected) {
                        handleCategoryToggle(category.id, true);
                      }
                    }}
                  >
                    <span className="text-lg">{category.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Render options for the active category */}
            {renderActiveOptions()}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-[#ebebeb] p-6">
        <div className="text-lg">
          {hasSelectedItems && (
            <span>
              Filtering By:{" "}
              <span className="font-medium text-[#1659e6]">
                {getSelectedCategoryLabels().join(", ")}
              </span>
            </span>
          )}
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="h-auto px-8 py-6 font-medium" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            className="h-auto bg-[#1659e6] px-8 py-6 font-medium hover:bg-[#103fa3]"
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MultiselectFilter;
