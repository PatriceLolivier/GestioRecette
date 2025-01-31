import type { IGridProps, IGridSectionProps } from "@atomes/Grid";

export const Grid: React.FC<IGridProps> = ({ children, className = "" }) => {
  return <div className={`flex w-full min-h-[600px] border rounded-lg ${className}`}>{children}</div>
}

export const GridSection: React.FC<IGridSectionProps> = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>
}

