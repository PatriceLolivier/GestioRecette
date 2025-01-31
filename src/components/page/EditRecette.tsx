import { useParams } from "react-router-dom";
import { useRecetteDetails } from "@hooks/Recettes/queries";
import { GridContainer } from "@organisme/GridContainer";
import { RecetteMainInfo } from "@organisme/RecetteMainInfo";
import { StepsDetails } from "@organisme/RecetteStepper";
import { RecetteIngredients } from "@organisme/RecetteIngredients";
import { useRecettesStore } from "@store/Recettes/useRecettesStore";
import { useUpdateRecette } from "@hooks/Recettes/mutation";
import { Button } from "@atomes/Button";
import { useEffect } from "react";
import { useGoTo } from "@lib/utils";
import { Loading } from "@atomes/Loading";

export const EditRecette = () => {
  const { id } = useParams();const { data: recetteDetails, isLoading, isError } = useRecetteDetails(id);
  const { currentRecette, setCurrentRecette } = useRecettesStore();
  const updateRecetteMutation = useUpdateRecette();
  const goTo = useGoTo();

  useEffect(() => {
    if (recetteDetails) {
      setCurrentRecette(recetteDetails);
    }
  }, [recetteDetails, setCurrentRecette]);

  if (isLoading) return <Loading isLoading={isLoading} />;
  if (isError) return <div>Erreur lors du chargement de la recette</div>;
  if (!currentRecette) return <div>Recette non trouvée</div>;

  const handleSave = async () => {
    try {
      await updateRecetteMutation.mutateAsync(currentRecette);
      goTo(`/recette/${id}`);
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
    }
  };

  return (
    <div className="mt-6 mx-7">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Éditer la recette : {currentRecette.title}</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => goTo(`/recette/${id}`)}
          >
            Annuler
          </Button>
          <Button
            variant="perso"
            onClick={handleSave}
            disabled={updateRecetteMutation.isPending}
          >
            {updateRecetteMutation.isPending ? "Sauvegarde..." : "Sauvegarder"}
          </Button>
        </div>
      </div>

      <GridContainer
        leftContent={<StepsDetails steps={currentRecette.steps} isEditMode={true} />}
        topRightContent={
          <RecetteMainInfo
            recette={currentRecette}
            isEditMode={true}
          />
        }
        bottomRightContent={
          <RecetteIngredients 
            ingredients={currentRecette.recettes_ingredients}
            isEditMode={true}
          />
        }
      />
    </div>
  );
};
