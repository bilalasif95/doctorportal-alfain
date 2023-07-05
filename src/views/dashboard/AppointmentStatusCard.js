// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import CustomAvatar from 'src/@core/components/mui/avatar'

const data = [
  {
    stats: '12',
    title: 'Scheduled',
    color: 'primary',
    icon: <Icon icon='mdi:trending-up' />
  },
  {
    stats: '4',
    title: 'Completed',
    color: 'success',
    icon: <Icon icon='mdi:account-outline' />
  },
  {
    stats: '2',
    color: 'warning',
    title: 'Remaining',
    icon: <Icon icon='mdi:cellphone-link' />
  },
  {
    stats: '6',
    color: 'error',
    title: 'Cancelled',
    icon: <Icon icon='mdi:currency-usd' />
  }
]

const renderStats = () => {
  return data.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar
          variant='rounded'
          color={item.color}
          sx={{ mr: 3, boxShadow: 3, width: 44, height: 44, '& svg': { fontSize: '1.75rem' } }}
        >
          {item.icon}
        </CustomAvatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const AppointmentStatusCard = () => {
  return (
    <Card>
      <CardHeader
        title='Welcome Dr. Drake!'
        action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
          />
        }
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
              Your Today's Appointment Status
            </Box>
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AppointmentStatusCard
