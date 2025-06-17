// ** Mock Adapter
import mock from 'src/@fake-db/mock'

const data = [
  {
    id: 1,
    avatar: '2.png',
    full_name: 'Edwina Ebsworth',
    reason: 'Fever',
    email: 'eebsworth2m@sbwire.com',
    phone: '0312-3456789',
    time: '12:00AM',
    gender: 'Female',
    date: '12/09/1989',
    type: 1
  },
  {
    id: 2,
    avatar: '8.png',
    full_name: "Korrie O'Crevy",
    reason: 'Anxiety',
    email: 'kocrevy0@thetimes.co.uk',
    phone: '0312-3456789',
    time: '12:00AM',
    gender: 'Female',
    date: '12/09/1989',
    type: 1
  },
  {
    id: 3,
    avatar: '1.png',
    full_name: 'Eileen Diehn',
    reason: 'Abdominal Pain',
    email: 'ediehn6@163.com',
    phone: '0312-3456789',
    time: '12:00AM',
    gender: 'Female',
    date: '12/09/1989',
    type: 2
  },
  {
    id: 4,
    avatar: '3.png',
    full_name: 'De Falloon',
    reason: 'Headache',
    email: 'dfalloona@ifeng.com',
    phone: '0312-3456789',
    time: '12:00AM',
    gender: 'Male',
    date: '12/09/1989',
    type: 1
  },
  {
    id: 5,
    avatar: '4.png',
    full_name: 'Stella Ganderton',
    reason: 'Headache',
    email: 'sganderton2@tuttocitta.it',
    phone: '0312-3456789',
    time: '12:00AM',
    gender: 'Female',
    date: '12/09/1989',
    type: 1
  },
  {
    id: 6,
    avatar: '4.png',
    full_name: 'Harmonia Nisius',
    reason: 'Headache',
    email: 'hnisius4@gnu.org',
    phone: '0312-3456789',
    time: '12:00AM',
    gender: 'Female',
    date: '12/09/1989',
    type: 1
  },
  {
    id: 7,
    avatar: '5.png',
    full_name: 'Genevra Honeywood',
    reason: 'Cancer',
    email: 'ghoneywood5@narod.ru',
    phone: '0312-3456789',
    time: '12:00AM',
    gender: 'Female',
    date: '12/09/1989',
    type: 2
  },
  {
    id: 8,
    avatar: '8.png',
    full_name: 'Dorolice Crossman',
    reason: 'Stomach-ache',
    email: 'dcrossman3@google.co.jp',
    phone: '0312-3456789',
    time: '12:00AM',
    gender: 'Female',
    date: '12/09/1989',
    type: 1
  },
  {
    id: 9,
    avatar: '7.png',
    full_name: 'Richardo Aldren',
    reason: 'Stomach-ache',
    email: 'raldren7@mtv.com',
    phone: '0312-3456789',
    time: '12:00AM',
    gender: 'Male',
    date: '12/09/1989',
    type: 2
  },
  {
    id: 10,
    avatar: '2.png',
    full_name: 'Allyson Moakler',
    reason: 'Anxiety',
    email: 'amoakler8@shareasale.com',
    phone: '0312-3456789',
    time: '12:00AM',
    gender: 'Female',
    date: '12/09/1989',
    type: 1
  },
  {
    id: 11,
    avatar: '7.png',
    full_name: 'Merline Penhalewick',
    reason: 'Abdominal Pain',
    email: 'mpenhalewick9@php.net',
    phone: '0312-3456789',
    time: '12:00AM',
    gender: 'Female',
    date: '12/09/1989',
    type: 2
  },
  {
    id: 12,
    avatar: '6.png',
    full_name: 'Cyrus Gornal',
    reason: 'Abdominal Pain',
    email: 'cgornalb@fda.gov',
    phone: '0312-3456789',
    time: '12:00AM',
    gender: 'Male',
    date: '12/09/1989',
    type: 2
  },
  {
    id: 13,
    avatar: '1.png',
    full_name: 'Tallou Balf',
    reason: 'Anxiety',
    email: 'tbalfc@sina.com.cn',
    phone: '0312-3456789',
    time: '12:00AM',
    gender: 'Male',
    date: '12/09/1989',
    type: 1
  },
]
mock.onGet('/api/table/data').reply(config => {
  const { q = '', column = '', sort = '' } = config.params
  const queryLowered = q.toLowerCase()

  // @ts-ignore
  const dataAsc = data.sort((a, b) => (a[column] < b[column] ? -1 : 1))
  const dataToFilter = sort === 'asc' ? dataAsc : dataAsc.reverse()

  const filteredData = dataToFilter.filter(
    item =>
      item.full_name.toLowerCase().includes(queryLowered) ||
      item.reason.toLowerCase().includes(queryLowered) ||
      item.city.toLowerCase().includes(queryLowered) ||
      item.time.toLowerCase().includes(queryLowered)
  )

  return [
    200,
    {
      allData: data,
      total: filteredData.length,
      data: filteredData
    }
  ]
})
