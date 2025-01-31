import { RecetteList } from "@organisme/RecetteList";
import { useRecettes } from "@hooks/Recettes/queries";
import { useRecettesStore } from "@store/Recettes";

export const RecetteHome = () => {
  const { data: recettes, isLoading, error } = useRecettes();
  const setRecettes = useRecettesStore((state) => state.setRecettes);

  if (recettes) {
    setRecettes(recettes);
  }

  console.log('recettes :', recettes);

  if (isLoading) return <div>Chargement...</div>;
  
  if (error) {
    console.log("error :", error);
    return <div>Une erreur est survenue</div>;
  }

  if (!recettes) return <div>Aucune recette trouvée</div>;

  return (
    <div className="flex mt-6 mx-7">
      <RecetteList recettes={recettes} />
    </div>
  );
};