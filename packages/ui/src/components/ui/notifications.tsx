import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";
import { Button } from "./button";

const notificationVariants = cva(
  "relative w-full rounded-lg border p-4 shadow-lg flex items-center gap-4 border-b-4",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-b-primary",
        success: " border-b-green-500",
        error: " border-b-red-500",
        warning: " border-b-yellow-500",
        info: " border-b-blue-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const iconMap = {
  default: AlertCircle,
  success: CheckCircle2,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

export interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationVariants> {
  title?: string;
  onClose?: () => void;
}

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  ({ className, title, children, variant = "default", onClose, ...props }, ref) => {
    const Icon = iconMap[variant ?? "default"];

    return (
      <div ref={ref} className={cn(notificationVariants({ variant }), className)} {...props}>
        <div className="flex-shrink-0">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-grow">
          {title && <div className="font-medium leading-none tracking-tight">{title}</div>}
          {children && <div className="mt-1 text-sm opacity-90">{children}</div>}
        </div>
        {onClose && (
          <Button size={"icon"} variant={"ghost"} onClick={onClose} className="">
            <XCircle className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        )}
      </div>
    );
  }
);
Notification.displayName = "Notification";

export { Notification, notificationVariants };
