// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

// ** Styled Components
const ChatFormWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  boxShadow: theme.shadows[1],
  padding: theme.spacing(1.25, 4),
  justifyContent: 'space-between',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper
}))

const Form = styled('form')(({ theme }) => ({
  padding: theme.spacing(0, 5, 5)
}))

const SendMsgForm = props => {
  // ** Props
  const { store, dispatch, sendMsg } = props

  // ** State
  const [msg, setMsg] = useState('')

  const handleSendMsg = e => {
    e.preventDefault()
    if (store && store.selectedChat && msg.trim().length) {
      dispatch(sendMsg({ ...store.selectedChat, message: msg }))
    }
    setMsg('')
  }

  return (
    <Form onSubmit={handleSendMsg}>
      <ChatFormWrapper>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <TextField
            fullWidth
            value={msg}
            size='small'
            placeholder='Type your message here…'
            onChange={e => setMsg(e.target.value)}
            sx={{ '& .MuiOutlinedInput-input': { pl: 0, fontSize: '24.17px' }, '& fieldset': { border: '0 !important' } }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button style={{ backgroundColor: '#1376F0', border: '1px solid #1376F0' }} type='submit' variant='contained'>
            Send
          </Button>
        </Box>
      </ChatFormWrapper>
    </Form>
  )
}

export default SendMsgForm
