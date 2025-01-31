import type React from "react"
import type { IListProps } from "@atomes/List"
import { cn } from "@lib/utils"

export const List: React.FC<IListProps> = ({ children, className }) => {
  return (
    <ol className={cn("space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400", className)}>
      <li className="list-none">
        <ul className="ps-5 mt-2 space-y-1 list-none">
          <li>{children}</li>
        </ul>
      </li>
    </ol>
  )
}

