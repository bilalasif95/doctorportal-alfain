// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const data = [
    {
        title: 'Completed Appointments',
        avatarColor: 'success',
        subtitle: '1,536',
        icon: <Icon icon='mdi:trending-up' fontSize='1.875rem' />
    },
    {
        title: 'Pending Appointments',
        avatarColor: 'info',
        subtitle: '189',
        icon: <Icon icon='mdi:clock' color='#1376F0' fontSize='1.875rem' />
    },
    {
        title: 'No-show Appointments',
        avatarColor: 'secondary',
        subtitle: '257',
        icon: <Icon icon='mdi:cellphone-link' />
    }
]

const MonthlyOverviewCard = () => {
    return (
        <Card>
            <Grid container>
                <Grid item xs={12}>
                    <CardHeader
                        title='Monthly Overview'
                        subheaderTypographyProps={{ sx: { lineHeight: '1.25rem', fontSize: '0.875rem !important' } }}
                        titleTypographyProps={{
                            sx: {
                                fontSize: '1.5rem !important',
                                lineHeight: '2rem !important',
                                letterSpacing: '0.43px !important'
                            }
                        }}
                    />
                    <CardContent
                        sx={{ pt: theme => `${theme.spacing(4)} !important`, pb: theme => `${theme.spacing(5.5)} !important` }}
                    >
                        {data.map((item, index) => {
                            return (
                                <Box key={index} sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                                    <CustomAvatar
                                        skin='light'
                                        variant='rounded'
                                        color={item.avatarColor}
                                        sx={{ mr: 3.5, '& svg': { color: `${item.avatarColor}.main` } }}
                                    >
                                        {item.icon}
                                    </CustomAvatar>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography sx={{ fontWeight: 600 }}>{item.title}</Typography>
                                        <Typography variant='body2'>{item.subtitle}</Typography>
                                    </Box>
                                </Box>
                            )
                        })}
                        <Button variant='contained' style={{ backgroundColor: '#1376F0', width: '75%' }}>
                            View All
                        </Button>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}

export default MonthlyOverviewCard
