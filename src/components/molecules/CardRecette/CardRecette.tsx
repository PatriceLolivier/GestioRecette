import { ICardRecetteProps } from "@molecules/CardRecette";
import {
  Card,
  CardTitle,
  CardDescription,
  CardImage,
  CardFooter,
} from "@atomes/Card";
import { Button } from "@atomes/Button";
import { TbListDetails, TbEdit } from "react-icons/tb";

export const CardRecette: React.FC<ICardRecetteProps> = ({
  title,
  description,
  image,
  detailsPath,
  id,
}) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <div className="flex-1 flex flex-col">
        <div className="p-4 flex-1 flex flex-col">
          <CardTitle className="text-xl font-bold mb-2 text-gray-800">
            {title}
          </CardTitle>

          <CardImage src={image} alt={title} />

          <CardDescription className="text-gray-600 flex-1 mt-2">
            {description}
          </CardDescription>

          <CardFooter className="mt-4 w-full flex justify-between">
            <Button path={detailsPath} size="lg" variant="outline">
              Voir la recette <TbListDetails className="text-4xl text-red-800" />
            </Button>
            
            
              <Button 
                path={`/edit-recette/${id}`} 
                size="lg" 
                variant="outline"
                className="ml-2"
              >
                Éditer <TbEdit className="text-4xl text-blue-800" />
              </Button>
           
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};
