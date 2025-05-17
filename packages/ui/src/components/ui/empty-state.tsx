import * as React from "react";
import { cn } from "../../lib/utils";
import { Card } from "./card";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  image?: string;
  fullHeight?: boolean;
}

export function EmptyState({
  title,
  subtitle,
  icon,
  image,
  fullHeight = true,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <Card
      className={cn(
        "flex w-full flex-col items-center justify-center p-8 text-center",
        fullHeight && "h-full min-h-[400px]",
        className
      )}
      {...props}
    >
      {icon && <div className="text-muted-foreground mb-6">{icon}</div>}
      {image && <img src={image} alt={title} className="mb-6 h-[100px] w-[134px]" />}
      <h3 className="mb-2 text-lg font-semibold tracking-tight">{title}</h3>
      {subtitle && <p className="text-muted-foreground max-w-[420px] text-sm">{subtitle}</p>}
    </Card>
  );
}
