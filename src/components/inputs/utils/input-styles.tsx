import { memo } from 'react'
import { styled, TextField } from '@mui/material'

const InputTextField = styled(TextField)({
  '& input': {
    fontFamily: 'Poppins !important',
    fontSize: '14px',
    color: '#333',
  },
  '& label': {
    fontFamily: 'Poppins !important',
    fontSize: '14px',
    color: '#333',
  },
  '& label.Mui-focused': {
    color: '#059669',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#059669',
  },
  '& .MuiOutlinedInput-root': {
    fontFamily: 'Poppins !important',
    '& fieldset': {
      borderColor: '#059669',
    },
    '&:hover fieldset': {
      borderColor: '#059669',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#059669',
    },
  },
  '& .MuiFilledInput-root': {
    fontFamily: 'Poppins !important',
    backgroundColor: '#f5f5f5',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
    '&:before': {
      borderBottomColor: '#059669',
    },
    '&:hover:before': {
      borderBottomColor: '#059669',
    },
    '&:after': {
      borderBottomColor: '#059669',
    },
  },
  '& .MuiInputBase-input': {
    fontFamily: 'Poppins !important',
    fontSize: '14px',
    color: '#333',
  },
  '& .MuiFormHelperText-root': {
    fontFamily: 'Poppins !important',
    fontSize: '10px',
    marginLeft: 2,
  },
})
export default memo(InputTextField)