import { 
  Input,
  Spacer
} from "@nextui-org/react";

const InputItem = ({ placeholder }: { placeholder: string}) => {

  return(
    <>
    <Input
      clearable
      underlined
      fullWidth
      color="primary"
      size="lg"
      placeholder={placeholder}
      id={`obj_${placeholder}`}
      css={{ mb: '6px' }}
    />
    <Spacer y={1} />
    </>
  )
}

export default InputItem;