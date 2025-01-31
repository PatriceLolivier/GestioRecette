import { IRecetteDetails } from "@api/Recettes";

export interface IRecetteMainInfoProps {
    recette: IRecetteDetails;
    isEditMode?: boolean;
}