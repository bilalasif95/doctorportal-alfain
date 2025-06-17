// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'

const data = [
    {
        id: 1,
        name: 'Fever, Flu, Cough',
        date: '14-Mar-2023',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
    {
        id: 2,
        name: 'Fever',
        date: '09-Feb-2023',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
    {
        id: 3,
        name: 'Stomach Ache',
        date: '18-Jan-2023',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
    {
        id: 4,
        name: 'Cough',
        date: '18-Dec-2022',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
    {
        id: 5,
        name: 'Fever',
        date: '12-Nov-2022',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
    {
        id: 6,
        name: 'Fever',
        date: '12-Nov-2022',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
    {
        id: 7,
        name: 'Cough',
        date: '18-Dec-2022',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
    {
        id: 8,
        name: 'Stomach Ache',
        date: '18-Jan-2023',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
    {
        id: 9,
        name: 'Fever',
        date: '09-Feb-2023',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
    {
        id: 10,
        name: 'Fever, Flu, Cough',
        date: '14-Mar-2023',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
    {
        id: 11,
        name: 'Fever, Flu, Cough',
        date: '14-Mar-2023',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
    {
        id: 12,
        name: 'Fever',
        date: '09-Feb-2023',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
    {
        id: 13,
        name: 'Stomach Ache',
        date: '18-Jan-2023',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
    {
        id: 14,
        name: 'Cough',
        date: '18-Dec-2022',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
    {
        id: 15,
        name: 'Fever',
        date: '12-Nov-2022',
        description: 'Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.Take this medicine for upto 15 days and consult me again in case of any side effects.'
    },
]

const StyledAccordion = styled(Accordion)(() => ({
    marginTop: '1rem',
    borderRadius: '5px',
    boxShadow: 'none',
    backgroundColor: '#E3EFFD',
    border: '1px solid #1376F06B !important',
    color: '#3A3541DE',
    ':before': {
        backgroundColor: 'unset',
    },
    '& .MuiAccordionSummary-root': {
        padding: '1rem'
    },
    '& .MuiTypography-root': {
        color: '#3A3541DE'
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: '#3A35418A'
    },
    '& .MuiAccordionSummary-content': {
        margin: '12px 0'
    }
}))

const StyledPagination = styled(Pagination)(() => ({
    '& .Mui-selected': {
        backgroundColor: '#1376F0 !important',
        ':hover': {
            backgroundColor: '#1376F0'
        }
    }
}))

const CustomTextField = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#1376F0',
        },
    },
}))

const PatientHistory = () => {
    const [expanded, setExpanded] = useState(false)
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 5;

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleSearchChange = (event) => {
        setPage(1);
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.date.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginatedData = filteredData.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Card>
                    <CardHeader
                        title='Previous Prescriptions'
                    />
                    <CardContent>
                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                            <CustomTextField
                                size='small'
                                placeholder='Search...'
                                fullWidth
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </Grid>
                        {filteredData.length === 0 ? (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '200px',
                                }}
                            >
                                <Typography>No result found</Typography>
                            </Box>
                        ) : (
                            <>
                                {paginatedData.map((item) => {
                                    return (
                                        <StyledAccordion key={item.id} expanded={expanded === item.id} onChange={handleChange(item.id)}>
                                            <AccordionSummary
                                                id={`controlled-panel-header-${item.id}`}
                                                aria-controls={`controlled-panel-content-${item.id}`}
                                                expandIcon={<Icon icon='mdi:chevron-down' />}
                                            >
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                                    <Typography><strong>Appointment Booked For:</strong> {item.name}</Typography>
                                                    <Typography><strong>{item.date}</strong></Typography>
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    {item.description}
                                                </Typography>
                                            </AccordionDetails>
                                        </StyledAccordion>
                                    )
                                })}
                            </>
                        )}
                        <Box sx={{ mt: '1.5rem', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                            <StyledPagination count={Math.ceil(filteredData.length / itemsPerPage)} onChange={handlePageChange} page={page} shape='rounded' color='primary' />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default PatientHistory
