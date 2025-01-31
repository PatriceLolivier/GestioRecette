import { IRecetteStepProps } from "@molecules/RecetteStep"
  
export interface IStepsDetailsProps {
    steps: IRecetteStepProps[]
    isEditMode?: boolean;
}