import { ICardImageProps } from "@atomes/Card";

export const CardImage: React.FC<ICardImageProps> = ({ src, alt }) => {
    return <img  src={src} alt={alt} className="h-48 w-full object-cover rounded-t-lg" />;
};
