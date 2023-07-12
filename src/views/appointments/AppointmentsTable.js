// ** React Imports
import { useEffect, useState, useCallback } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { DataGrid, GridOverlay } from '@mui/x-data-grid'

// ** ThirdParty Components
import axios from 'axios'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import ServerSideToolbar from './ServerSideToolbar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** renders client column
const renderClient = params => {
  const { row } = params
  // const stateNum = Math.floor(Math.random() * 6)
  // const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  // const color = states[stateNum]
  if (row.avatar.length) {
    return <CustomAvatar src={`/images/avatars/${row.avatar}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
  } else {
    return (
      // color={color}
      <CustomAvatar skin='light' sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}>
        {getInitials(row.full_name ? row.full_name : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const statusObj = {
  1: { title: 'Telemed', color: 'primary' },
  2: { title: 'Walk In', color: 'warning' },
}

const columns = [
  {
    flex: 0.25,
    minWidth: 290,
    field: 'full_name',
    headerName: 'Patient',
    renderCell: params => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(params)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
              {row.full_name}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.175,
    minWidth: 120,
    headerName: 'Appointment Time',
    field: 'start_date',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.start_date}
      </Typography>
    )
  },
  {
    flex: 0.175,
    minWidth: 110,
    field: 'post',
    headerName: 'Reason for visit',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.post}
      </Typography>
    )
  },
  {
    flex: 0.175,
    minWidth: 140,
    field: 'status',
    headerName: 'Type of Appointment',
    renderCell: params => {
      const status = statusObj[params.row.status]

      return (
        <CustomChip
          size='small'
          skin='light'
          color={status.color}
          label={status.title}
          sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
        />
      )
    },
    valueGetter: (params) => {
      const status = statusObj[params.row.status];
      return status.title;
    },
  }
]

const AppointmentsTable = () => {
  // ** State
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [sort, setSort] = useState('asc')
  const [pageSize, setPageSize] = useState(10)
  const [rows, setRows] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [sortColumn, setSortColumn] = useState('full_name')
  function loadServerRows(currentPage, data) {
    return data.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
  }

  const fetchTableData = useCallback(
    async (sort, q, column) => {
      await axios
        .get('/api/table/data', {
          params: {
            q,
            sort,
            column
          }
        })
        .then(res => {
          setTotal(res.data.total)
          setRows(loadServerRows(page, res.data.data))
        })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [page, pageSize]
  )
  useEffect(() => {
    fetchTableData(sort, searchValue, sortColumn)
  }, [fetchTableData, searchValue, sort, sortColumn])

  const handleSortModel = newModel => {
    if (newModel.length) {
      setSort(newModel[0].sort)
      setSortColumn(newModel[0].field)
      fetchTableData(newModel[0].sort, searchValue, newModel[0].field)
    } else {
      setSort('asc')
      setSortColumn('full_name')
    }
  }

  const handleSearch = value => {
    setSearchValue(value)
    fetchTableData(sort, value, sortColumn)
  }

  const CustomNoResultsOverlay = () => (
    <GridOverlay>
      <Typography variant="body1" color="textSecondary">
        No result found
      </Typography>
    </GridOverlay>
  );

  return (
    <Card>
      <DataGrid
        autoHeight
        pagination
        rows={rows}
        rowCount={total}
        columns={columns}
        pageSize={pageSize}
        sortingMode='server'
        paginationMode='server'
        // disableColumnMenu
        onSortModelChange={handleSortModel}
        rowsPerPageOptions={[10, 25, 50]}
        onPageChange={newPage => setPage(newPage)}
        components={{ Toolbar: ServerSideToolbar, NoRowsOverlay: CustomNoResultsOverlay }}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        componentsProps={{
          baseButton: {
            variant: 'outlined'
          },
          toolbar: {
            value: searchValue,
            clearSearch: () => handleSearch(''),
            onChange: event => handleSearch(event.target.value)
          }
        }}
      />
    </Card>
  )
}

export default AppointmentsTable
