// ** MUI Imports
import Grid from '@mui/material/Grid'
import AppointmentStatusCard from 'src/views/dashboard/AppointmentStatusCard'
import TelemedRoomCard from 'src/views/dashboard/TelemedRoomCard'
import Alert from '@mui/material/Alert'
import { styled } from '@mui/material/styles'
import Link from 'next/link'

const Home = () => {
  const StyledAlert = styled(Alert)(() => ({
    '& .MuiAlert-message': {
      color: 'black',
    },
    '& .MuiAlert-icon': {
      color: 'black',
    }
  }))
  const LinkStyled = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: `${theme.palette.primary.main} !important`
  }))
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <StyledAlert severity='warning'><strong>Seth Hallam</strong> is waiting in the room. <LinkStyled href='https://anything/anywhere/ghtg/anything/anywhere/ghtg/anything/' target='_blank'>Join the call</LinkStyled> to start the appointment session.</StyledAlert>
      </Grid>
      <Grid item xs={12} md={6}>
        <AppointmentStatusCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <TelemedRoomCard />
      </Grid>
    </Grid>
  )
}

export default Home
