// ** MUI Imports
import Grid from '@mui/material/Grid'
import AppointmentStatusCard from 'src/views/dashboard/AppointmentStatusCard'
import TelemedRoomCard from 'src/views/dashboard/TelemedRoomCard'
import MonthlyOverviewCard from 'src/views/dashboard/MonthlyOverviewCard'
import MonthlyVisitsCard from 'src/views/dashboard/MonthlyVisitsCard'
import AvailablityCard from 'src/views/dashboard/AvailablityCard'
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
  const LinkStyled = styled(Link)(() => ({
    textDecoration: 'none',
    color: '#1376F0 !important'
  }))
  const StyledGrid = styled(Grid)(() => ({
    '@media (max-width:1004px)': {
      maxWidth: '100%',
      flexBasis: '100%'
    }
  }))
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <StyledAlert severity='warning'><strong>Seth Hallam</strong> is waiting in the room. <LinkStyled href='https://anything/anywhere/ghtg/anything/anywhere/ghtg/anything/' target='_blank'>Join the call</LinkStyled> to start the appointment session.</StyledAlert>
      </Grid>
      <StyledGrid item xs={12} md={7}>
        <AppointmentStatusCard />
      </StyledGrid>
      <StyledGrid item xs={12} md={5}>
        <TelemedRoomCard />
      </StyledGrid>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <Grid container spacing={6}>
              <Grid item xs={6} sm={12}>
                <MonthlyOverviewCard />
              </Grid>
              <Grid item xs={6} sm={12}>
                <MonthlyVisitsCard />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8}>
            <AvailablityCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
