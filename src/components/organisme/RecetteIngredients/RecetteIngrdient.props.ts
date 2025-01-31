import { IIngredient } from "@molecules/IngredientsTable";

export interface IRecetteIngredientsProps {
    ingredients: IIngredient[]
    isEditMode?: boolean;
}