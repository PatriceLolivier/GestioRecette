import { CardRecette } from '@molecules/CardRecette';
import { IRecetteListProps } from './RecetteList.props';

const RecetteList: React.FC<IRecetteListProps> = ({ recettes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recettes.map((recette) => (
        <CardRecette
          key={recette.id}
          id={recette.id}
          title={recette.title}
          image={recette.image_url}
          description={recette.description}
          detailsPath={`/recette/${recette.id}`}
        />
      ))}
    </div>
  );
};

export { RecetteList };
