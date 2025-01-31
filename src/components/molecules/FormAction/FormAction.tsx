import { Button } from "@atomes/Button"
import { Text } from "@atomes/Text"
import { IFormActionsProps } from "@molecules/FormAction"

export const FormAction: React.FC<IFormActionsProps> = ({ formAction, formRedirect, path, onClick }) => {
    return (
        <div className="flex justify-between items-center">
          <Button type="submit" variant="perso" onClick={onClick}>{formAction}</Button>
          <Text type="span" className="text-sm text-blue-500 cursor-pointer" path={path}>
              {formRedirect}
          </Text>
        </div>
      );
}