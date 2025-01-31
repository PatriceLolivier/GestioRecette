import React from "react";
import { List } from "@atomes/List";
import { Text } from "@atomes/Text";
import type { IRecetteStepProps } from "@molecules/RecetteStep";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Button } from "@atomes/Button";

export const RecetteStep: React.FC<IRecetteStepProps> = ({
  step_number,
  description,
  title,
  isEditMode = false,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center">
        <Text type="p" className="font-bold text-purple-600 mb-2">
          {title}
        </Text>
        {isEditMode && (
          <div className="flex gap-2">
            <Button
              onClick={() => onEdit?.(step_number) || console.log("edit")}
              className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaEdit size={20} />
            </Button>
            <Button
              onClick={() => onDelete?.(step_number) || console.log("delete")}
              className="p-2 text-red-600 hover:text-red-800 transition-colors"
            >
              <FaTrash size={20} />
            </Button>
          </div>
        )}
      </div>
      <List key={`step-${step_number}`}>
        <div className="flex items-start gap-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold">
            {step_number}
          </span>
          <Text type="p" className="text-gray-600 flex-1 pt-1">
            {description}
          </Text>
        </div>
      </List>
    </div>
  );
};
