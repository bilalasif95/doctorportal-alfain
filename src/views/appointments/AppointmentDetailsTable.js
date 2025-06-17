// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import TableContainer from '@mui/material/TableContainer'
import useClipboard from 'src/@core/hooks/useClipboard'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const data = [
    {
        type: 'Type of Visit:',
        value: 'Walk In',
    },
    {
        type: 'Appointment booked at:',
        value: '04/01/2022 2:18 PM',
    },
    {
        type: 'Appointment booked for:',
        value: '04/01/2022 2:18 PM',
    },
    {
        type: 'Source:',
        value: '---',
    },
    {
        type: 'Reason:',
        value: 'Panic Attack',
    },
    {
        type: 'Doctor:',
        value: 'Nicholas Jordan',
    }
]

const files = [
    {
        name: 'dcotordetail1.png',
        date: 'Uploaded2:41 PM 05/12/2022',
    },
    {
        name: 'detail1.jpeg',
        date: 'Uploaded2:41 PM 05/12/2022',
    },
    {
        name: 'firstreport.pdf',
        date: 'Uploaded2:41 PM 05/12/2022',
    },
]

const rows = [
    {
        name: 'Covid-19 Vaccination Form',
        download: true,
        send: false,
        time: 'Sent at: 3:30 PM,05/16/2022',
        tooltip: 'Download Form'
    },
    {
        name: 'Patient Health Questionnaire',
        download: false,
        send: true,
        tooltip: 'Patient needs to fill this form first.',
        tooltipSend: 'Send Invitation'
    },
    {
        name: 'Intake Form',
        download: false,
        send: true,
        tooltip: 'Patient needs to fill this form first.',
        tooltipSend: 'Send Invitation'
    }
]

const AppointmentDetailsTable = () => {
    const clipboard = useClipboard()
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const BootstrapTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.black,
        },
    }));

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Card>
                    <CardHeader
                        title='Appointment Details'
                        action={
                            <Button variant='contained' style={{ backgroundColor: '#1376F0' }} fontSize={20}>
                                Edit Apppointment
                            </Button>
                        }
                    />
                    <Divider sx={{ m: '0 !important' }} />
                    <TableContainer>
                        <Table sx={{ minWidth: 500 }}>
                            <TableBody>
                                {data.map((item, index) => (
                                    <TableRow hover key={index} sx={{ '&:last-of-type td': { border: 0 } }}>
                                        <TableCell>{item.type}</TableCell>
                                        <TableCell>{item.value}</TableCell>
                                        <TableCell><IconButton
                                            edge='end'
                                            onClick={() => clipboard.copy(item.type + " " + item.value)}
                                            onMouseDown={e => e.preventDefault()}
                                            aria-label='toggle copy'
                                        >
                                            <Icon fontSize={20} icon='mdi:content-copy' />
                                        </IconButton></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardHeader
                        title='Shared Files'
                    />
                    <CardContent>
                        {files.map((file, index) => {
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        '&:not(:last-of-type)': { mb: 4 }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <div>
                                            <Typography color='#1376F0' sx={{ fontSize: '0.875rem', fontWeight: 600 }}>{file.name}</Typography>
                                            <Typography variant='caption'>{file.date}</Typography>
                                        </div>
                                    </Box>
                                </Box>
                            )
                        })}
                        <Box sx={{ mt: '2.7rem', display: 'flex', alignItems: 'center' }}>
                            <Button variant='outlined' style={{ color: '#1376F0', border: '1px solid #1376F0' }} fontSize={20}>
                                Generate Report
                            </Button>
                            <Button variant='outlined' style={{ color: '#1376F0', border: '1px solid #1376F0', marginLeft: '1rem' }} fontSize={20}>
                                Upload A File
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={8}>
                <Card>
                    <CardHeader title='Forms' />
                    <Divider sx={{ m: '0 !important' }} />
                    <TableContainer>
                        <Table sx={{ minWidth: 500 }}>
                            <TableHead
                                sx={{ backgroundColor: theme => (theme.palette.mode === 'light' ? 'grey.50' : 'background.default') }}
                            >
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Download</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>Send from URL</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
                                    <TableRow hover key={index} sx={{ '&:last-of-type td': { border: 0 } }}>
                                        <TableCell style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>{item.name}</TableCell>
                                        <TableCell style={{ textAlign: 'center', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                                            <BootstrapTooltip placement="right" title={item.tooltip}><IconButton
                                                edge='end'
                                                aria-label='toggle download'
                                            >
                                                <Icon color={item.download ? '#1376F0' : '#3A35416B'} fontSize={20} icon='mdi:download' />
                                            </IconButton>
                                            </BootstrapTooltip>
                                        </TableCell>
                                        <TableCell style={{ textAlign: 'center', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>{item.send ? <BootstrapTooltip placement="right" title={item.tooltipSend}><IconButton
                                            edge='end'
                                            aria-label='toggle send'
                                        >
                                            <Icon color='#1376F0' fontSize={20} icon='mdi:send-outline' />
                                        </IconButton></BootstrapTooltip> : item.time}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Divider sx={{ m: '0 !important' }} />
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 100]}
                        component='div'
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Card>
            </Grid>
        </Grid>
    )
}

export default AppointmentDetailsTable
