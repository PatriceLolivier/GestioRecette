import { IInputFieldsProps } from "@molecules/InputFields";
import { Text } from "@atomes/Text"
import { Input } from "@atomes/Input"

const InputField = ({ label, ...props }: IInputFieldsProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Text type="span">{label}</Text>
      <Input {...props} />
    </div>
  );
};

export { InputField };
