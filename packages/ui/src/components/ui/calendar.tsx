"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "../../components/ui/button";
import {
  formatMonthYear,
  getDaysInMonth,
  getNextMonthDays,
  getPreviousMonthDays,
  getWeekdayNames,
  isToday,
} from "../../lib/date-utils";
import { cn } from "../../lib/utils";

export interface CalendarProps {
  mode?: "single" | "multiple" | "range";
  selected?: Date | Date[] | { from: Date; to: Date };
  // eslint-disable-next-line no-unused-vars
  onSelect?: (date: Date | undefined) => void;
  className?: string;
  initialFocus?: boolean;
  showOutsideDays?: boolean;
}

export function Calendar({
  mode = "single",
  selected,
  onSelect,
  className,
  initialFocus = false,
  showOutsideDays = true,
}: Readonly<CalendarProps>) {
  const selectedDate = selected instanceof Date ? selected : new Date();
  const [viewDate, setViewDate] = useState(selectedDate);
  const weekDays = getWeekdayNames();

  const month = viewDate.getMonth();
  const year = viewDate.getFullYear();

  const daysInMonth = getDaysInMonth(year, month);
  const previousMonthDays = getPreviousMonthDays(year, month, 1);
  const nextMonthDays = getNextMonthDays(year, month, 0);

  const allDays = [...previousMonthDays, ...daysInMonth, ...nextMonthDays];

  // Group days into weeks (7 days per week)
  const weeks: Date[][] = [];
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(allDays.slice(i, i + 7));
  }

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleDayClick = (day: Date) => {
    if (onSelect) {
      onSelect(day);
    }
  };

  const isSelectedDate = (day: Date) => {
    if (!selected) return false;

    if (selected instanceof Date) {
      return (
        day.getDate() === selected.getDate() &&
        day.getMonth() === selected.getMonth() &&
        day.getFullYear() === selected.getFullYear()
      );
    }

    return false;
  };

  const isOutsideDay = (day: Date) => {
    return day.getMonth() !== month;
  };

  return (
    <div className={cn("p-3", className)}>
      <div className="relative flex items-center justify-center pt-1">
        <button
          onClick={handlePrevMonth}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute left-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="text-sm font-medium">{formatMonthYear(viewDate)}</div>

        <button
          onClick={handleNextMonth}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute right-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="mt-2 flex w-full">
          {weekDays.map((day, i) => (
            <div
              key={i}
              className="text-muted-foreground w-9 rounded-md text-center text-[0.8rem] font-normal"
            >
              {day}
            </div>
          ))}
        </div>

        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex w-full">
            {week.map((day, dayIndex) => (
              <div key={dayIndex} className="relative h-9 w-9 p-0 text-center text-sm">
                <button
                  onClick={() => handleDayClick(day)}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-9 w-9 p-0 font-normal",
                    isSelectedDate(day) &&
                      "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                    isToday(day) && "bg-accent text-accent-foreground",
                    isOutsideDay(day) && !showOutsideDays && "invisible",
                    isOutsideDay(day) && showOutsideDays && "text-muted-foreground opacity-50"
                  )}
                >
                  {day.getDate()}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

Calendar.displayName = "Calendar";
