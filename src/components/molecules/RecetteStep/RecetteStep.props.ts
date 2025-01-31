export interface IRecetteStepProps {
    step_number: number;
    title: string;
    description: string;
    isEditMode?: boolean;
    onDelete?: (stepNumber: number) => void;
    onEdit?: (stepNumber: number) => void;
}