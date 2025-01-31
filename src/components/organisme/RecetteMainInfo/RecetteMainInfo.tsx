import { IRecetteMainInfoProps } from "./RecetteMainInfo.props";
import { DetailsShowcase } from "@molecules/DetailsShowcase";
import { InputField } from "@molecules/InputFields";
import { useState } from "react";
import { Button } from "@atomes/Button";

export const RecetteMainInfo: React.FC<IRecetteMainInfoProps> = ({
  recette,
  isEditMode = false,
}) => {
  const [formData, setFormData] = useState({
    title: recette.title,
    description: recette.description,
    image_url: recette.image_url,
  });
  const [isEditing, setIsEditing] = useState(false);

  if (!isEditMode) {
    return (
      <DetailsShowcase
        title={recette.title}
        description={recette.description}
        image={recette.image_url}
      />
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData({
      title: recette.title,
      description: recette.description,
      image_url: recette.image_url,
    });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <InputField
        label="Titre"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <InputField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <InputField
        label="URL de l'image"
        name="image_url"
        value={formData.image_url}
        onChange={handleChange}
      />
      {isEditing && (
        <div className="flex justify-end gap-2">
          <Button 
            variant="outline" 
            onClick={handleCancel}
          >
            Annuler
          </Button>
        </div>
      )}
    </div>
  );
};