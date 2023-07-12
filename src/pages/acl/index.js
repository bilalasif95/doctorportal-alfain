// ** MUI Imports
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import AppointmentsTable from 'src/views/appointments/AppointmentsTable'

const ACLPage = () => {
  const StyledAlert = styled(Alert)(() => ({
    '& .MuiAlert-message': {
      color: 'black',
    },
    '& .MuiAlert-icon': {
      color: 'black',
    }
  }))
  const LinkStyled = styled(Link)(() => ({
    textDecoration: 'none',
    color: '#1376F0 !important'
  }))
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <StyledAlert severity='warning'>Your appointment with <strong>Jordan Stevenson</strong> is in <strong>5 minutes</strong> from now. <LinkStyled href='https://anything/anywhere/ghtg/anything/anywhere/ghtg/anything/' target='_blank'>Join the room</LinkStyled></StyledAlert>
      </Grid>
      <Grid item xs={12}>
        <AppointmentsTable />
      </Grid>
    </Grid>
  )
}

export default ACLPage
