// ** Mock Adapter
import mock from 'src/@fake-db/mock'

const data = [
  {
    id: 95,
    avatar: '2.png',
    full_name: 'Edwina Ebsworth',
    post: 'Fever',
    email: 'eebsworth2m@sbwire.com',
    city: 'Puzi',
    start_date: '12:00AM',
    salary: 19586.23,
    age: '27',
    experience: '2 Years',
    status: 1
  },
  {
    id: 1,
    avatar: '8.png',
    full_name: "Korrie O'Crevy",
    post: 'Anxiety',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    start_date: '12:00AM',
    salary: 23896.35,
    age: '61',
    experience: '1 Year',
    status: 1
  },
  {
    id: 7,
    avatar: '',
    full_name: 'Eileen Diehn',
    post: 'Abdominal Pain',
    email: 'ediehn6@163.com',
    city: 'Lampuyang',
    start_date: '12:00AM',
    salary: 18991.67,
    age: '59',
    experience: '9 Years',
    status: 2
  },
  {
    id: 11,
    avatar: '',
    full_name: 'De Falloon',
    post: 'Headache',
    email: 'dfalloona@ifeng.com',
    city: 'Colima',
    start_date: '12:00AM',
    salary: 19252.12,
    age: '30',
    experience: '0 Year',
    status: 1
  },
  {
    id: 3,
    avatar: '7.png',
    full_name: 'Stella Ganderton',
    post: 'Headache',
    email: 'sganderton2@tuttocitta.it',
    city: 'Golcowa',
    start_date: '12:00AM',
    salary: 13076.28,
    age: '66',
    experience: '6 Years',
    status: 1
  },
  {
    id: 5,
    avatar: '',
    full_name: 'Harmonia Nisius',
    post: 'Headache',
    email: 'hnisius4@gnu.org',
    city: 'Lucan',
    start_date: '12:00AM',
    salary: 10909.52,
    age: '33',
    experience: '3 Years',
    status: 1
  },
  {
    id: 6,
    avatar: '',
    full_name: 'Genevra Honeywood',
    post: 'Cancer',
    email: 'ghoneywood5@narod.ru',
    city: 'Maofan',
    start_date: '12:00AM',
    salary: 17803.8,
    age: '61',
    experience: '1 Year',
    status: 2
  },
  {
    id: 4,
    avatar: '8.png',
    full_name: 'Dorolice Crossman',
    post: 'Stomach-ache',
    email: 'dcrossman3@google.co.jp',
    city: 'Paquera',
    start_date: '12:00AM',
    salary: 12336.17,
    age: '22',
    experience: '2 Years',
    status: 1
  },
  {
    id: 8,
    avatar: '7.png',
    full_name: 'Richardo Aldren',
    post: 'Stomach-ache',
    email: 'raldren7@mtv.com',
    city: 'Skoghall',
    start_date: '12:00AM',
    salary: 19230.13,
    age: '55',
    experience: '5 Years',
    status: 2
  },
  {
    id: 9,
    avatar: '2.png',
    full_name: 'Allyson Moakler',
    post: 'Anxiety',
    email: 'amoakler8@shareasale.com',
    city: 'Mogilany',
    start_date: '12:00AM',
    salary: 11677.32,
    age: '39',
    experience: '9 Years',
    status: 1
  },
  {
    id: 10,
    avatar: '7.png',
    full_name: 'Merline Penhalewick',
    post: 'Abdominal Pain',
    email: 'mpenhalewick9@php.net',
    city: 'Kanuma',
    start_date: '12:00AM',
    salary: 15939.52,
    age: '23',
    experience: '3 Years',
    status: 2
  },
  {
    id: 12,
    avatar: '',
    full_name: 'Cyrus Gornal',
    post: 'Abdominal Pain',
    email: 'cgornalb@fda.gov',
    city: 'Boro Utara',
    start_date: '12:00AM',
    salary: 16745.47,
    age: '22',
    experience: '2 Years',
    status: 2
  },
  {
    id: 13,
    avatar: '',
    full_name: 'Tallou Balf',
    post: 'Anxiety',
    email: 'tbalfc@sina.com.cn',
    city: 'Siliana',
    start_date: '12:00AM',
    salary: 15488.53,
    age: '36',
    experience: '6 Years',
    status: 1
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
      item.id.toString().toLowerCase().includes(queryLowered) ||
      item.full_name.toLowerCase().includes(queryLowered) ||
      item.post.toLowerCase().includes(queryLowered) ||
      item.email.toLowerCase().includes(queryLowered) ||
      item.age.toLowerCase().includes(queryLowered) ||
      item.salary.toString().toLowerCase().includes(queryLowered) ||
      item.city.toLowerCase().includes(queryLowered) ||
      item.start_date.toLowerCase().includes(queryLowered)
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
