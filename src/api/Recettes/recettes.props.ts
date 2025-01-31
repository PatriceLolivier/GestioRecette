export interface IRecette {
    id: string;
    title: string;
    description: string;
    image_url: string;
    created_at: string;
    updated_at: string;
} 

export interface IRecetteDetails extends IRecette {
    recettes_ingredients: Array<{
        quantity: number;
        ingredients: {
            name: string;
            unit: string;
        };
    }>;
    recettes_categories: Array<{
        categories: {
            name: string;
        };
    }>;
    steps: Array<{
        step_number: number;
        title: string;
        description: string;
    }>;
}