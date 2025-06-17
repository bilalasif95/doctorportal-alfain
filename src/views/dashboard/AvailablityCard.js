// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

const data = [
  {
    chipText: 'Tuesday',
    chipColor: 'success',
    title: 'January 12, 2022',
    src: '/images/avatars/4.png',
    subtitle: '12:56pm - 12:00am',
    midtitle: 'Urgent Health Care',
    iconcolor: '#56CA00'
  },
  {
    chipColor: 'warning',
    chipText: 'Wednesday',
    title: 'January 13, 2022',
    src: '/images/avatars/8.png',
    subtitle: '12:56pm - 12:00am',
    midtitle: 'Primary Health Care',
    iconcolor: '#FFB400'
  },
  {
    chipText: 'Thursday',
    chipColor: 'secondary',
    title: 'January 14, 2022',
    src: '/images/avatars/7.png',
    subtitle: '21 Jul | 08:20-10:30',
    midtitle: 'Asthma Treatment',
    iconcolor: '#3A35416B'
  },
  {
    chipText: 'Friday',
    chipColor: 'error',
    title: 'January 15, 2022',
    src: '/images/avatars/3.png',
    subtitle: '12:56pm - 12:00am',
    midtitle: 'Asthma Treatment',
    iconcolor: '#FF4C51'
  },
  {
    chipText: 'Saturday',
    chipColor: 'primary',
    title: 'January 16, 2022',
    src: '/images/avatars/2.png',
    subtitle: '12:56pm - 12:00am',
    midtitle: 'Asthma Treatment',
    iconcolor: '#9155FD'
  },
  {
    chipText: 'Monday',
    chipColor: 'success',
    title: 'January 17, 2022',
    src: '/images/avatars/4.png',
    subtitle: '12:56pm - 12:00am',
    midtitle: 'Urgent Health Care',
    iconcolor: '#56CA00'
  },
  {
    chipColor: 'warning',
    chipText: 'Tuesday',
    title: 'January 18, 2022',
    src: '/images/avatars/8.png',
    subtitle: '12:56pm - 12:00am',
    midtitle: 'Primary Health Care',
    iconcolor: '#FFB400'
  },
  {
    chipText: 'Wednesday',
    chipColor: 'secondary',
    title: 'January 19, 2022',
    src: '/images/avatars/7.png',
    subtitle: '21 Jul | 08:20-10:30',
    midtitle: 'Asthma Treatment',
    iconcolor: '#3A35416B'
  },
  {
    chipText: 'Thursday',
    chipColor: 'error',
    title: 'January 20, 2022',
    src: '/images/avatars/3.png',
    subtitle: '12:56pm - 12:00am',
    midtitle: 'Asthma Treatment',
    iconcolor: '#FF4C51'
  },
  {
    chipText: 'Friday',
    chipColor: 'primary',
    title: 'January 21, 2022',
    src: '/images/avatars/2.png',
    subtitle: '12:56pm - 12:00am',
    midtitle: 'Asthma Treatment',
    iconcolor: '#9155FD'
  },
  {
    chipText: 'Saturday',
    chipColor: 'success',
    title: 'January 22, 2022',
    src: '/images/avatars/4.png',
    subtitle: '12:56pm - 12:00am',
    midtitle: 'Urgent Health Care',
    iconcolor: '#56CA00'
  },
  {
    chipColor: 'warning',
    chipText: 'Sunday',
    title: 'January 23, 2022',
    src: '/images/avatars/8.png',
    subtitle: '12:56pm - 12:00am',
    midtitle: 'Primary Health Care',
    iconcolor: '#FFB400'
  },
  {
    chipText: 'Monday',
    chipColor: 'secondary',
    title: 'January 24, 2022',
    src: '/images/avatars/7.png',
    subtitle: '21 Jul | 08:20-10:30',
    midtitle: 'Asthma Treatment',
    iconcolor: '#3A35416B'
  },
  {
    chipText: 'Tuesday',
    chipColor: 'error',
    title: 'January 25, 2022',
    src: '/images/avatars/3.png',
    subtitle: '12:56pm - 12:00am',
    midtitle: 'Asthma Treatment',
    iconcolor: '#FF4C51'
  },
  {
    chipText: 'Wednesday',
    chipColor: 'primary',
    title: 'January 26, 2022',
    src: '/images/avatars/2.png',
    subtitle: '12:56pm - 12:00am',
    midtitle: 'Asthma Treatment',
    iconcolor: '#9155FD'
  },
]

const AvailablityCard = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevWeek = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 5);
    }
  };

  const handleNextWeek = () => {
    if (startIndex + 5 < data.length) {
      setStartIndex(startIndex + 5);
    }
  };

  const displayedData = data.slice(startIndex, startIndex + 5);
  const hasPreviousItems = startIndex > 0;
  const hasNextItems = startIndex + 5 < data.length;

  return (
    <Card>
      <CardHeader
        title='Availability'
        action={
          <OptionsMenu
            options={['Refresh', 'Share', 'Reschedule']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
          />
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary', display: 'flex', alignItems: 'center' }}>
              <Icon fontSize={20} icon='mdi:chevron-left' onClick={handlePrevWeek} style={{ cursor: hasPreviousItems ? 'pointer' : 'not-allowed' }} />
              <Icon fontSize={20} icon='mdi:chevron-right' onClick={handleNextWeek} style={{ cursor: hasNextItems ? 'pointer' : 'not-allowed' }} />
              {displayedData.length > 0 &&
                `${displayedData[0].title} - ${displayedData[displayedData.length - 1].title}`}
            </Box>
          </Typography>
        }
      />
      <CardContent>
        {displayedData.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                ...(index !== displayedData.length - 1 ? { mb: 6 } : {})
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Grid item xs={12} sm={5}>
                  <Box sx={{ mr: 2, display: 'flex', mb: 0.4, flexDirection: 'column' }}>
                    <Typography
                      sx={{ fontWeight: 500, lineHeight: 1.71, letterSpacing: '0.22px', fontSize: '0.875rem !important' }}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& svg': { mr: 1, color: 'text.secondary', verticalAlign: 'middle' }
                      }}
                    >
                      <Icon fontSize='0.875rem' icon='mdi:calendar-blank-outline' />
                      <Typography variant='caption'>{item.subtitle}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Box
                    sx={{
                      mb: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      '& svg': { mr: 1.5, fontSize: '0.75rem', color: item.iconcolor }
                    }}
                  >
                    <Icon icon='mdi:circle' />
                    <Typography variant='body2'>{item.midtitle}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Box sx={{ float: 'right' }}>
                    <CustomChip
                      skin='light'
                      size='small'
                      label={item.chipText}
                      color={item.chipColor}
                      sx={{ height: 20, mt: 0.4, fontSize: '0.75rem', fontWeight: 600 }}
                    />
                  </Box>
                </Grid>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default AvailablityCard
