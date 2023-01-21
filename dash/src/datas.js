let xAsxisData = [
  { name: "Jan", sale: 112_000 },
  { name: "Feb", sale: 99_000 },
  { name: "Mar", sale: 12_000 },
  { name: "Apr", sale: 97_000 },
  { name: "May", sale: 11_000 },
  { name: "Jun", sale: 86_000 },
  { name: "Jul", sale: 102_000 },
  { name: "Agu", sale: 119_000 },
  { name: "Sep", sale: 152_000 },
  { name: "Oct", sale: 82_000 },
  { name: "Nov", sale: 62_000 },
  { name: "Dec", sale: 97_000 },
];

const newMembers = [
  {
    id: 1,
    username: "Nhadipour",
    title: "Developer",
    img: "images/nhadipour.jpg",
  },
  { id: 2, username: "Mjalalian", title: "Solution Developer" },
  { id: 3, username: "Fmoradi", title: "Scrum Master" },
  { id: 4, username: "Ferfani", title: "Solution Developer" },
  { id: 5, username: "Nhosseini", title: "Solution Developer" },
  { id: 6, username: "Msormeili", title: "Data Developer" },
  { id: 7, username: "Pjafarzadeh", title: "Data Developer" },
  { id: 8, username: "TShavandi", title: "Solution Developer" },
];

const usersRows = [
  {
    id: 1,
    username: "Nhadipour",
    title: "Web Developer",
    status: "DeActive",
    avatar: "images/nhadipour.jpg",
    email: "Nhadipour@SayeSaman.com",
    realname: "Nima Hadipour",
  },
  {
    id: 2,
    username: "Mjalalian",
    title: "Solution Developer",
    status: "Active",
    email: "Mjalalian@SayeSaman.com",
    realname: "Mina Jalalian",
  },
  {
    id: 3,
    username: "Fmoradi",
    title: "Scrum Master",
    status: "Active",
    email: "Fmoradi@SayeSaman.com",
    realname: "Faeze Moradi",
  },
  {
    id: 4,
    username: "Ferfani",
    title: "Solution Developer",
    status: "Active",
    email: "Ferfani@SayeSaman.com",
    realname: "Fateme Erfani",
  },
  {
    id: 5,
    username: "Nhosseini",
    title: "Solution Developer",
    status: "Active",
    email: "Nhosseini@SayeSaman.com",
    realname: "Nasibeh Hosseini",
  },
  {
    id: 6,
    username: "Msormeili",
    title: "Data Developer",
    status: "Active",
    email: "Msormeili@SayeSaman.com",
    realname: "Mehdi Sormeili",
  },
  {
    id: 7,
    username: "Pjafarzadeh",
    title: "Data Developer",
    status: "Active",
    email: "Pjafarzadeh@SayeSaman.com",
    realname: "Parisa JafarZadeh",
  },
  {
    id: 8,
    username: "TShavandi",
    title: "Solution Developer",
    status: "Active",
    email: "Tshavandi@SayeSaman.com",
    realname: "Tarane Shavandi",
  },
];

const transActions = [
  {
    id: 1,
    customer: "Ahmad Molaee",
    date: "1401/05/05",
    amount: 130,
    status: "Declined",
  },
  {
    id: 2,
    customer: "Reza AkbarNasab",
    date: "1401/04/02",
    amount: 299,
    status: "Approved",
  },
  {
    id: 3,
    customer: "Mohammad Alizade",
    date: "1401/05/23",
    amount: 440,
    status: "Declined",
  },
  {
    id: 4,
    customer: "Mehdi Karodi",
    date: "1401/05/25",
    amount: 350,
    status: "Pending",
  },
  {
    id: 5,
    customer: "Morteza Esmaiel",
    date: "1401/10/05",
    amount: 480,
    status: "Declined",
  },
];

let products = [
  {
    id: 1,
    title: 'Mobile',
    avatar: '',
    price: 1200,
    status: 'inOrder'
  },
  {
    id: 2,
    title: 'Car',
    avatar: '',
    price: 2000,
    status: 'inOrder'
  },
  {
    id: 3,
    title: 'Home',
    avatar: '',
    price: 40000,
    status: 'inOrder'
  },
  {
    id: 4,
    title: 'Scanner',
    avatar: '',
    price: 130,
    status: 'notFound'
  },

]
export { xAsxisData, newMembers, transActions, usersRows, products };
