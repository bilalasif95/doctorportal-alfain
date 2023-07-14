import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'
import UserProfileHeader from 'src/views/appointments/UserProfileHeader'
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTabList from '@mui/lab/TabList'
import Icon from 'src/@core/components/icon'
import AppointmentDetailsTable from 'src/views/appointments/AppointmentDetailsTable'

const TabList = styled(MuiTabList)(({ theme }) => ({
    '& .MuiTabs-indicator': {
        display: 'none'
    },
    '& .Mui-selected': {
        backgroundColor: '#1376F0',
        color: `${theme.palette.common.white} !important`,
    },
    '& .MuiTab-root': {
        minHeight: 38,
        minWidth: 130,
        flexDirection: 'row',
        borderRadius: theme.shape.borderRadius
    },
    '& .MuiTab-iconWrapper': {
        marginBottom: '0px !important'
    }
}))

const AppointmentDetails = () => {
    const router = useRouter();
    const { query } = router;
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/appointments">
                    All Appointments
                </Link>
                <Typography color="#1376F0 !important">{query.full_name}</Typography>
            </Breadcrumbs>
            <Grid style={{ marginTop: '1rem' }}>
                <UserProfileHeader data={query} />
            </Grid>
            <Grid style={{ marginTop: '1rem' }}>
                <TabContext value={value}>
                    <TabList onChange={handleChange} aria-label='customized tabs example'>
                        <Tab icon={<Icon icon='mdi:account-outline' />} value='1' label='Appoinment Details' />
                        <Tab icon={<Icon icon='mdi:view-grid-outline' />} value='2' label='Patient Prescription' />
                        <Tab icon={<Icon icon='mdi:account-outline' />} value='3' label='Clinic Notes' />
                        <Tab icon={<Icon icon='mdi:account-outline' />} value='4' label='Patient History' />
                    </TabList>
                    <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }} value='1'>
                        <AppointmentDetailsTable />
                    </TabPanel>
                    <TabPanel value='2'>
                        <Typography>
                            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
                            sesame snaps halvah.
                        </Typography>
                    </TabPanel>
                    <TabPanel value='3'>
                        <Typography>
                            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
                            carrot cake gummi bears.
                        </Typography>
                    </TabPanel>
                    <TabPanel value='4'>
                        <Typography>
                            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
                            carrot cake gummi bears.
                        </Typography>
                    </TabPanel>
                </TabContext>
            </Grid>
        </Grid>
    )
}

export default AppointmentDetails
