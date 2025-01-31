import { IRecette, IRecetteDetails } from "@api/Recettes";

export interface IRecettesStore {
    recettes: IRecette[];
    currentRecette: IRecetteDetails | null;
    setRecettes: (recettes: IRecette[]) => void;
    setCurrentRecette: (recette: IRecetteDetails) => void;
    
    addStep: (step: {
        step_number: number;
        title: string;
        description: string;
    }) => void;
    editStep: (stepNumber: number, updates: {
        title: string;
        description: string;
    }) => void;
    deleteStep: (stepNumber: number) => void;
    
    addIngredient: (ingredient: {
        quantity: number;
        ingredients: {
            name: string;
            unit: string;
        };
    }) => void;
    
    updateIngredients: (ingredients: Array<{
        quantity: number;
        ingredients: {
            name: string;
            unit: string;
        };
    }>) => void;
    
    deleteIngredient: (ingredientIndex: number) => void;
}
