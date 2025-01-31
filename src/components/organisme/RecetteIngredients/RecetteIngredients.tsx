import { Text } from "@atomes/Text";
import { IngredientsTable } from "@molecules/IngredientsTable";
import { IRecetteIngredientsProps } from "./RecetteIngrdient.props";
import { InputField } from "@molecules/InputFields";
import { Button } from "@atomes/Button";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { useRecettesStore } from "@store/Recettes/useRecettesStore";
import { IIngredient } from "@molecules/IngredientsTable/IngredientsTable.props";

export const RecetteIngredients: React.FC<IRecetteIngredientsProps> = ({
  ingredients,
  isEditMode = false,
}) => {
  const { addIngredient, updateIngredients, deleteIngredient } = useRecettesStore();
  const [newIngredient, setNewIngredient] = useState({
    quantity: "",
    name: "",
    unit: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleAddIngredient = () => {
    if (newIngredient.quantity && newIngredient.name && newIngredient.unit) {
      const ingredientToAdd = {
        quantity: Number(newIngredient.quantity),
        ingredients: {
          name: newIngredient.name,
          unit: newIngredient.unit,
        },
      };

      addIngredient(ingredientToAdd);
      setIsEditing(false);
      setNewIngredient({ quantity: "", name: "", unit: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewIngredient((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsEditing(true);
  };

  const handleDelete = (index: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet ingrédient ?")) {
      deleteIngredient(index);
    }
  };

  const handleEdit = (index: number, updatedIngredient: IIngredient) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = updatedIngredient;
    updateIngredients(newIngredients);
  };

  return (
    <div className="flex flex-col gap-4">
      <Text type="h2">Liste des ingrédients</Text>
      <IngredientsTable
        ingredients={ingredients}
        isEditMode={isEditMode}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {isEditMode && (
        <div className="mt-4 border-t pt-4">
          <Text type="h3" className="mb-4">
            Ajouter un ingrédient
          </Text>
          <div className="grid grid-cols-3 gap-4">
            <InputField
              label="Nom"
              name="name"
              value={newIngredient.name}
              onChange={handleChange}
            />
            <InputField
              label="Quantité"
              name="quantity"
              type="number"
              value={newIngredient.quantity}
              onChange={handleChange}
            />
            <InputField
              label="Unité"
              name="unit"
              value={newIngredient.unit}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end mt-4">
            {isEditing && (
              <Button
                variant="outline"
                onClick={() => {
                  setNewIngredient({
                    quantity: "",
                    name: "",
                    unit: "",
                  });
                  setIsEditing(false);
                }}
                className="mr-2"
              >
                Annuler
              </Button>
            )}
            <Button
              variant="perso"
              onClick={handleAddIngredient}
              className="flex items-center gap-2"
              disabled={!newIngredient.quantity || !newIngredient.name || !newIngredient.unit}
            >
              <TbPlus className="text-xl" />
              Ajouter
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
