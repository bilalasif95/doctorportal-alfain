// ** MUI Imports
import Grid from '@mui/material/Grid'
import AppointmentStatusCard from 'src/views/dashboard/AppointmentStatusCard'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={7}>
        <AppointmentStatusCard />
      </Grid>
    </Grid>
  )
}

export default Home
