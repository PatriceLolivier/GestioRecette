import { Button } from "@atomes/Button";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold">Bienvenue sur la plateforme de recettes</h1>
        <Button variant="perso" path="/recette">Voir les recettes</Button>
    </div>
  );
};

