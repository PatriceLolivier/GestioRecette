import { ITableRowProps } from "@atomes/TableRow";

export const TableRow: React.FC<ITableRowProps> = ({ children, className = "" }) => {
  return <tr className={`border-b ${className}`}>{children}</tr>
}

