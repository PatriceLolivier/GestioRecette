import { useParams } from "react-router-dom";
import { useRecetteDetails } from "@hooks/Recettes/queries";
import { GridContainer } from "@organisme/GridContainer";
import { RecetteMainInfo } from "@organisme/RecetteMainInfo";
import { RecetteIngredients } from "@organisme/RecetteIngredients";
import { StepsDetails } from "@organisme/RecetteStepper/RecetteStepper";

export const RecetteDetails = () => {
    const { id } = useParams();
    const { data: recetteDetails, isLoading, isError, error } = useRecetteDetails(id);

    if (isLoading) return <div>Chargement...</div>;
    if (isError) return <div>Erreur: {error?.message}</div>;
    if (!recetteDetails) return <div>Aucune recette trouvée</div>;

    return (
        <div className="mt-6 mx-7">
            <GridContainer 
                leftContent={<StepsDetails steps={recetteDetails.steps}/>}
                topRightContent={
                    <RecetteMainInfo 
                        recette={recetteDetails}
                        isEditMode={false}
                    />
                }
                bottomRightContent={
                    <RecetteIngredients 
                        ingredients={recetteDetails.recettes_ingredients} 
                    />
                }
            />
        </div>
    );
};
