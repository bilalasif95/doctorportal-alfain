// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Component Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import OptionsMenu from 'src/@core/components/option-menu'

const donutColors = {
    series1: '#9155FD',
    series2: '#FFB400',
}

const MonthlyVisitsCard = () => {
    // ** Hook
    const theme = useTheme()

    const options = {
        tooltip: {
            enabled: false
        },
        stroke: { width: 0 },
        labels: ['Telemed: 986', 'Walk In: 4,000'],
        colors: [donutColors.series1, donutColors.series2],
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'bottom',
            markers: { offsetX: -3 },
            labels: { colors: theme.palette.text.secondary },
            itemMargin: {
                vertical: 3,
                horizontal: 10
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            fontSize: '1.2rem'
                        },
                        value: {
                            fontSize: '1.2rem',
                            color: theme.palette.text.secondary,
                            formatter: val => `${parseInt(val, 10)}`
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            fontSize: '1.2rem',
                            label: '4.9k',
                            formatter: () => 'Total Visits',
                            color: theme.palette.text.primary
                        }
                    },
                }
            },
        },
        responsive: [
            {
                breakpoint: 992,
                options: {
                    chart: {
                        height: 380
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            },
            {
                breakpoint: 576,
                options: {
                    chart: {
                        height: 320
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    show: true,
                                    name: {
                                        fontSize: '1rem'
                                    },
                                    value: {
                                        fontSize: '1rem'
                                    },
                                    total: {
                                        fontSize: '1rem'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        ]
    }

    return (
        <Card>
            <CardHeader
                title='Monthly Visits'
                action={
                    <OptionsMenu
                        options={['Last 28 Days', 'Last Month', 'Last Year']}
                        iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
                    />
                }
                subheaderTypographyProps={{ sx: { color: theme => `${theme.palette.text.disabled} !important` } }}
            />
            <CardContent>
                <ReactApexcharts type='donut' height={400} options={options} series={[75, 25]} />
            </CardContent>
        </Card>
    )
}

export default MonthlyVisitsCard
