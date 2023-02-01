import { 
  Input,
  Spacer
} from "@nextui-org/react";

const InputItem = ({ placeholder }: { placeholder: string} , {register}: { register: any }) => {

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
      {...register}
    />
    <Spacer y={1} />
    </>
  )
}

export default InputItem;