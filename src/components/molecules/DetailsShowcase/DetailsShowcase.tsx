import { CardImage } from "@atomes/Card";
import { IDetailsShowcaseProps } from "@molecules/DetailsShowcase";
import { Text } from "@atomes/Text";

export const DetailsShowcase: React.FC<IDetailsShowcaseProps> = ({title, description, image}) => {
  return (
    <div className="flex flex-col gap-4">
        <Text type="h2">{title}</Text> 
        <CardImage src={image} alt={title} />
        <Text type="p">{description}</Text>
    </div>
  );
};
