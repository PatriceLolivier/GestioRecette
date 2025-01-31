import { create } from 'zustand';
import { IRecettesStore } from './useRecettesStore.props';

export const useRecettesStore = create<IRecettesStore>((set, get) => ({
    recettes: [],
    currentRecette: null,
    setCurrentRecette: (recette) => set({ currentRecette: recette }),
    setRecettes: (recettes) => set({ recettes }),

    addStep: (step) => {
        const { currentRecette } = get();
        if (!currentRecette) return;

        const newSteps = [...(currentRecette.steps || []), {
            step_number: step.step_number,
            title: step.title,
            description: step.description
        }];

        set({
            currentRecette: {
                ...currentRecette,
                steps: newSteps
            }
        });
    },

    editStep: (stepNumber, updates) => {
        const { currentRecette } = get();
        if (!currentRecette?.steps) return;

        const newSteps = currentRecette.steps.map(step => 
            step.step_number === stepNumber
                ? { ...step, ...updates }
                : step
        );

        set({
            currentRecette: {
                ...currentRecette,
                steps: newSteps
            }
        });
    },

    deleteStep: (stepNumber) => {
        const { currentRecette } = get();
        if (!currentRecette?.steps) return;

        const newSteps = currentRecette.steps
            .filter(step => step.step_number !== stepNumber)
            .map((step, index) => ({
                ...step,
                step_number: index + 1
            }));

        set({
            currentRecette: {
                ...currentRecette,
                steps: newSteps
            }
        });
    },

    addIngredient: (ingredient) => {
        const { currentRecette } = get();
        if (!currentRecette) return;

        const newIngredients = [
            ...(currentRecette.recettes_ingredients || []),
            ingredient
        ];

        set({
            currentRecette: {
                ...currentRecette,
                recettes_ingredients: newIngredients
            }
        });
    },

    updateIngredients: (ingredients) => {
        const { currentRecette } = get();
        if (!currentRecette) return;

        set({
            currentRecette: {
                ...currentRecette,
                recettes_ingredients: ingredients
            }
        });
    },

    deleteIngredient: (ingredientIndex) => {
        const { currentRecette } = get();
        if (!currentRecette?.recettes_ingredients) return;

        const newIngredients = currentRecette.recettes_ingredients.filter(
            (_, index) => index !== ingredientIndex
        );

        set({
            currentRecette: {
                ...currentRecette,
                recettes_ingredients: newIngredients
            }
        });
    },
})); 

