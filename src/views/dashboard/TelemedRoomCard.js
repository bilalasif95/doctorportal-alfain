// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import useClipboard from 'src/@core/hooks/useClipboard'
import { styled } from '@mui/material/styles'

const TelemedRoomCard = () => {
    const clipboard = useClipboard()
    const url = 'https://anything/anywhere/ghtg/anything/anywhere/ghtg/anything/'
    const InputBase = styled(OutlinedInput)(() => ({
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'blue !important',
        },
    }))
    return (
        <Card>
            <CardHeader
                title='Your Telemed Room'
                action={
                    <OptionsMenu
                        options={['Last 28 Days', 'Last Month', 'Last Year']}
                        iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
                    />
                }
                subheader={
                    <Typography variant='body2'>
                        <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                            Share your URL to invite people in your room.
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
                    <FormControl fullWidth>
                        <InputBase
                            value={url}
                            id='icons-adornment-copy'
                            readOnly
                            disabled
                            inputProps={{ style: { color: 'blue', WebkitTextFillColor: 'blue', height: '1.2em' } }}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        edge='end'
                                        onClick={() => clipboard.copy(url)}
                                        onMouseDown={e => e.preventDefault()}
                                        aria-label='toggle copy'
                                    >
                                        <Icon color='blue' fontSize={20} icon='mdi:content-copy' />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TelemedRoomCard
