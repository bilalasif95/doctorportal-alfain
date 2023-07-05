// ** MUI Imports
import Grid from '@mui/material/Grid'
import AppointmentStatusCard from 'src/views/dashboard/AppointmentStatusCard'
import TelemedRoomCard from 'src/views/dashboard/TelemedRoomCard'

const Home = () => {
  return (
    <Grid container spacing={6}>
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
