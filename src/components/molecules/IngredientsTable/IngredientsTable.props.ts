export interface IIngredient {
    quantity: number
    ingredients: {
      name: string
      unit: string
    }
  }
  
  export interface IIngredientsTableProps {
    ingredients: Array<{
        quantity: number;
        ingredients: {
            name: string;
            unit: string;
        };
    }>;
    isEditMode?: boolean;
    onDelete?: (index: number) => void;
    onEdit?: (index: number, updatedIngredient: {
        quantity: number;
        ingredients: {
            name: string;
            unit: string;
        };
    }) => void;
  }
  
  