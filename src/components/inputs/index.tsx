import { TextFieldProps } from "@mui/material"
import InputStyles from "./utils/input-styles"

const Input = ({
  ...rest
}: Readonly<TextFieldProps>) => {

  return (
    <InputStyles
      {...rest}
      size='small'
      className='select-none'
    />
  )
}

export default Input
