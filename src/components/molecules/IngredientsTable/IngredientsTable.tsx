import type React from "react";
import type { IIngredientsTableProps } from "@molecules/IngredientsTable";
import { TableRow } from "@atomes/TableRow";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "@atomes/Button";
import { Modal } from "@atomes/Modal";
import { Input } from "@atomes/Input";
import { useState } from "react";

export const IngredientsTable: React.FC<IIngredientsTableProps> = ({
  ingredients,
  isEditMode = false,
  onDelete,
  onEdit,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    quantity: "",
    name: "",
    unit: "",
  });

  const handleOpenModal = (index: number) => {
    const ingredient = ingredients[index];
    setEditingIndex(index);
    setFormData({
      quantity: ingredient.quantity.toString(),
      name: ingredient.ingredients.name,
      unit: ingredient.ingredients.unit,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    if (editingIndex !== null) {
      onEdit?.(editingIndex, {
        quantity: Number(formData.quantity),
        ingredients: {
          name: formData.name,
          unit: formData.unit,
        },
      });
      setIsModalOpen(false);
      setEditingIndex(null);
    }
  };

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantité
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ingrédient
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Unité
            </th>
            {isEditMode && (
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {ingredients.map((item, index) => (
            <TableRow key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.ingredients.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.ingredients.unit}
              </td>
              {isEditMode && (
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      onClick={() => handleOpenModal(index)}
                      className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <FaEdit size={16} />
                    </Button>
                    <Button
                      onClick={() => onDelete?.(index)}
                      className="p-2 text-red-600 hover:text-red-800 transition-colors"
                    >
                      <FaTrash size={16} />
                    </Button>
                  </div>
                </td>
              )}
            </TableRow>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Modifier l'ingrédient"
        footer={
          <>
            <Button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Annuler
            </Button>
            <Button
              onClick={handleSubmit}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Modifier
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nom</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Nom de l'ingrédient"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Quantité</label>
            <Input
              type="number"
              value={formData.quantity}
              onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
              placeholder="Quantité"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Unité</label>
            <Input
              value={formData.unit}
              onChange={(e) => setFormData(prev => ({ ...prev, unit: e.target.value }))}
              placeholder="Unité"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
