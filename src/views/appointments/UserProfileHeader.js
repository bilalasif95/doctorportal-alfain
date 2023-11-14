// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ProfilePicture = styled('img')(({ theme }) => ({
    width: 120,
    height: 120,
    borderRadius: theme.shape.borderRadius,
    border: `5px solid ${theme.palette.common.white}`,
    [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(4)
    }
}))

const UserProfileHeader = ({ data }) => {
    return data !== null ? (
        <Card>
            <CardContent
                sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                    justifyContent: { xs: 'center', md: 'flex-start' }
                }}
            >
                <ProfilePicture src={`/images/avatars/${data.avatar}`} alt='profile-picture' />
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        ml: { xs: 0, md: 6 },
                        alignItems: 'flex-end',
                        flexWrap: ['wrap', 'nowrap'],
                        justifyContent: ['center', 'space-between']
                    }}
                >
                    <Box sx={{ mb: [6, 0], display: 'flex', flexDirection: 'column', alignItems: ['center', 'flex-start'] }}>
                        <Typography variant='h5' sx={{ mb: 4 }}>
                            {data.full_name}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: ['center', 'flex-start']
                            }}
                        >
                            <Box sx={{ mr: 5, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                                <Icon icon='mdi:user' />
                                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>{data.gender}</Typography>
                            </Box>
                            <Box sx={{ mr: 5, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                                <Icon icon='mdi:email' />
                                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>{data.email}</Typography>
                            </Box>
                            <Box sx={{ mr: 5, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                                <Icon icon='ic:round-local-phone' />
                                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>{data.phone}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                                <Icon icon='mdi:calendar-blank' />
                                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>{data.date}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Button variant='contained' style={{ backgroundColor: '#1376F0' }} endIcon={<Icon icon='material-symbols:arrow-drop-down' fontSize={20} />}>
                        Pending
                    </Button>
                </Box>
            </CardContent>
        </Card>
    ) : null
}

export default UserProfileHeader
