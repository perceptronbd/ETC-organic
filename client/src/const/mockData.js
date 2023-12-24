export const selectDesignation = {
  id: "designation",
  name: "designation",
  placeholder: "Designation",
  required: true,
  type: "select",
  selectOpts: {
    "Department 01": [
      { value: "designation1", label: "Designation 1" },
      { value: "designation2", label: "Designation 2" },
    ],
    "Department 02": [
      { value: "designation1", label: "Designation 1" },
      { value: "designation2", label: "Designation 2" },
    ],
  },
};

export const selectBranch = {
  id: "branch",
  name: "branch",
  placeholder: "Select Branch",
  required: true,
  type: "select",
  selectOpts: {
    "Select Branch": [
      { value: "dagun", label: "Dagun Bhuiyan" },
      { value: "feni", label: "Feni" },
    ],
  },
};

export const selectItem = {
  id: "item",
  name: "item",
  placeholder: "Select Item",
  required: true,
  type: "select",
  selectOpts: {
    "Select Item": [
      { value: "item-1", label: "Item 01" },
      { value: "item-2", label: "Item 02" },
    ],
  },
};

export const productData = [
  {
    sn: 1,
    name: "Product 1",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "This is a product without a detail",
  },
  {
    sn: 2,
    name: "Product 2",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 3,
    name: "Product 3",
    imgUrl: "https://picsum.photos/200/300",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 4,
    name: "Product 4",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 5,
    name: "Product 5",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  // Add more products here...
  {
    sn: 6,
    name: "Product 6",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 7,
    name: "Product 7",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 8,
    name: "Product 8",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 9,
    name: "Product 9",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 10,
    name: "Product 10",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 11,
    name: "Product 11",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 12,
    name: "Product 12",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 13,
    name: "Product 13",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 14,
    name: "Product 14",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 15,
    name: "Product 15",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 16,
    name: "Product 16",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 17,
    name: "Product 17",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 18,
    name: "Product 18",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 19,
    name: "Product 19",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    sn: 20,
    name: "Product 20",
    imgUrl: "",
    "sales price": 500,
    csb: 100,
    points: 40,
    description: "Loremipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

export const employeeData = [
  {
    id: 1,
    name: "Employee 1",
    designation: "Manager",
    branch: "Kathmandu",
    phoneNumber: "018999999",
  },
  {
    id: 2,
    name: "Employee 2",
    designation: "Supervisor",
    branch: "Pokhara",
    phoneNumber: "018888888",
  },
  {
    id: 3,
    name: "Employee 3",
    designation: "Staff",
    branch: "Birgunj",
    phoneNumber: "017777777",
  },
  {
    id: 4,
    name: "Employee 4",
    designation: "Manager",
    branch: "Lalitpur",
    phoneNumber: "016666666",
  },
  {
    id: 5,
    name: "Employee 5",
    designation: "Supervisor",
    branch: "Bhaktapur",
    phoneNumber: "015555555",
  },
  {
    id: 6,
    name: "Employee 6",
    designation: "Staff",
    branch: "Butwal",
    phoneNumber: "014444444",
  },
  {
    id: 7,
    name: "Employee 7",
    designation: "Manager",
    branch: "Dharan",
    phoneNumber: "013333333",
  },
  {
    id: 8,
    name: "Employee 8",
    designation: "Supervisor",
    branch: "Nepalgunj",
    phoneNumber: "012222222",
  },
  {
    id: 9,
    name: "Employee 9",
    designation: "Staff",
    branch: "Itahari",
    phoneNumber: "011111111",
  },
  {
    id: 10,
    name: "Employee 10",
    designation: "Manager",
    branch: "Hetauda",
    phoneNumber: "010000000",
  },
  {
    id: 11,
    name: "Employee 11",
    designation: "Supervisor",
    branch: "Dhangadhi",
    phoneNumber: "019999999",
  },
  {
    id: 12,
    name: "Employee 12",
    designation: "Staff",
    branch: "Bharatpur",
    phoneNumber: "019888888",
  },
  {
    id: 13,
    name: "Employee 13",
    designation: "Manager",
    branch: "Janakpur",
    phoneNumber: "019777777",
  },
  {
    id: 14,
    name: "Employee 14",
    designation: "Supervisor",
    branch: "Ghorahi",
    phoneNumber: "019666666",
  },
  {
    id: 15,
    name: "Employee 15",
    designation: "Staff",
    branch: "Siraha",
    phoneNumber: "019555555",
  },
  {
    id: 16,
    name: "Employee 16",
    designation: "Manager",
    branch: "Banepa",
    phoneNumber: "019444444",
  },
  {
    id: 17,
    name: "Employee 17",
    designation: "Supervisor",
    branch: "Tulsipur",
    phoneNumber: "019333333",
  },
  {
    id: 18,
    name: "Employee 18",
    designation: "Staff",
    branch: "Dhankuta",
    phoneNumber: "019222222",
  },
  {
    id: 19,
    name: "Employee 19",
    designation: "Manager",
    branch: "Gaur",
    phoneNumber: "019111111",
  },
  {
    id: 20,
    name: "Employee 20",
    designation: "Supervisor",
    branch: "Jaleshwor",
    phoneNumber: "019000000",
  },
];

export const ordersData = [
  {
    customerName: "Abdul Kuddus",
    customerNumber: "01711223344",
    orderAmount: "1200",
    date: "02 Jan 2023",
    address: "86, R.K Tower, Sonargaon Road, Banglamotor, Dhaka",
  },
  {
    customerName: "Ayesha Ahmed",
    customerNumber: "01899887766",
    orderAmount: "750",
    date: "10 Jan 2023",
    address: "42, Green Avenue, Gulshan, Dhaka",
  },
  {
    customerName: "Rahim Khan",
    customerNumber: "01674563210",
    orderAmount: "2200",
    date: "15 Jan 2023",
    address: "28, Red Plaza, Dhanmondi, Dhaka",
  },
  {
    customerName: "Sara Rahman",
    customerNumber: "01987654321",
    orderAmount: "1500",
    date: "20 Jan 2023",
    address: "10, Blue Tower, Uttara, Dhaka",
  },
  {
    customerName: "Nasir Uddin",
    customerNumber: "01555443322",
    orderAmount: "1800",
    date: "25 Jan 2023",
    address: "5, Yellow Lane, Mirpur, Dhaka",
  },
  // 10 more entries with status: false
  {
    customerName: "John Doe",
    customerNumber: "01234567890",
    orderAmount: "850",
    date: "28 Jan 2023",
    address: "123 Main Street, Cityville, Dhaka",
  },
  {
    customerName: "Jane Smith",
    customerNumber: "01987654321",
    orderAmount: "1600",
    date: "05 Feb 2023",
    address: "456 Elm Avenue, Townsville, Dhaka",
  },
  {
    customerName: "David Johnson",
    customerNumber: "01555443322",
    orderAmount: "2000",
    date: "12 Feb 2023",
    address: "789 Oak Road, Villagetown, Dhaka",
  },
  {
    customerName: "Emily Brown",
    customerNumber: "01711223344",
    orderAmount: "1200",
    date: "18 Feb 2023",
    address: "101 Pine Lane, Countryside, Dhaka",
  },
  {
    customerName: "Michael Wilson",
    customerNumber: "01899887766",
    orderAmount: "750",
    date: "25 Feb 2023",
    address: "555 Maple Street, Suburbia, Dhaka",
  },
  {
    customerName: "Jessica Davis",
    customerNumber: "01674563210",
    orderAmount: "3000",
    date: "03 Mar 2023",
    address: "777 Birch Avenue, Metroville, Dhaka",
  },
];

export const userData = [
  {
    supplierName: "Abdul Kuddus",
    number: "01712244605",
    purchaseAmount: "1200 BDT",
    transportation: "200 BDT",
    purchasingCost: "200 BDT",
  },
  {
    supplierName: "Ayesha Ahmed",
    number: "01899887766",
    purchaseAmount: "750 BDT",
    transportation: "100 BDT",
    purchasingCost: "150 BDT",
  },
  {
    supplierName: "Rahim Khan",
    number: "01674563210",
    purchaseAmount: "2200 BDT",
    transportation: "300 BDT",
    purchasingCost: "250 BDT",
  },
  {
    supplierName: "Sara Rahman",
    number: "01987654321",
    purchaseAmount: "1500 BDT",
    transportation: "150 BDT",
    purchasingCost: "180 BDT",
  },
  {
    supplierName: "Nasir Uddin",
    number: "01555443322",
    purchaseAmount: "1800 BDT",
    transportation: "250 BDT",
    purchasingCost: "220 BDT",
  },
  {
    supplierName: "John Doe",
    number: "01234567890",
    purchaseAmount: "850 BDT",
    transportation: "100 BDT",
    purchasingCost: "120 BDT",
  },
  {
    supplierName: "Jane Smith",
    number: "01987654321",
    purchaseAmount: "1600 BDT",
    transportation: "180 BDT",
    purchasingCost: "200 BDT",
  },
  {
    supplierName: "David Johnson",
    number: "01555443322",
    purchaseAmount: "2000 BDT",
    transportation: "220 BDT",
    purchasingCost: "270 BDT",
  },
  {
    supplierName: "Emily Brown",
    number: "01711223344",
    purchaseAmount: "1200 BDT",
    transportation: "150 BDT",
    purchasingCost: "180 BDT",
  },
  {
    supplierName: "Michael Wilson",
    number: "01899887766",
    purchaseAmount: "750 BDT",
    transportation: "80 BDT",
    purchasingCost: "100 BDT",
  },
  {
    supplierName: "Jessica Davis",
    number: "01674563210",
    purchaseAmount: "3000 BDT",
    transportation: "350 BDT",
    purchasingCost: "320 BDT",
  },
];

export const ordersData1 = [
  {
    customerName: "Abdul Kuddus",
    customerNumber: "01711223344",
    orderAmount: "1200",
    date: "02 Jan 2023",
    address: "86, R.K Tower, Sonargaon Road, Banglamotor, Dhaka",
    status: "incomplete",
  },
  {
    customerName: "Ayesha Ahmed",
    customerNumber: "01899887766",
    orderAmount: "750",
    date: "10 Jan 2023",
    address: "42, Green Avenue, Gulshan, Dhaka",
    status: "complete",
  },
  {
    customerName: "Rahim Khan",
    customerNumber: "01674563210",
    orderAmount: "2200",
    date: "15 Jan 2023",
    address: "28, Red Plaza, Dhanmondi, Dhaka",
    status: "complete",
  },
  {
    customerName: "Sara Rahman",
    customerNumber: "01987654321",
    orderAmount: "1500",
    date: "20 Jan 2023",
    address: "10, Blue Tower, Uttara, Dhaka",
    status: "complete",
  },
  {
    customerName: "Nasir Uddin",
    customerNumber: "01555443322",
    orderAmount: "1800",
    date: "25 Jan 2023",
    address: "5, Yellow Lane, Mirpur, Dhaka",
    status: "complete",
  },
  {
    customerName: "John Doe",
    customerNumber: "01234567890",
    orderAmount: "850",
    date: "28 Jan 2023",
    address: "123 Main Street, Cityville, Dhaka",
    status: "complete",
  },
  {
    customerName: "Jane Smith",
    customerNumber: "01987654321",
    orderAmount: "1600",
    date: "05 Feb 2023",
    address: "456 Elm Avenue, Townsville, Dhaka",
    status: "complete",
  },
  {
    customerName: "David Johnson",
    customerNumber: "01555443322",
    orderAmount: "2000",
    date: "12 Feb 2023",
    address: "789 Oak Road, Villagetown, Dhaka",
    status: "incomplete",
  },
  {
    customerName: "Emily Brown",
    customerNumber: "01711223344",
    orderAmount: "1200",
    date: "18 Feb 2023",
    address: "101 Pine Lane, Countryside, Dhaka",
    status: "complete",
  },
  {
    customerName: "Michael Wilson",
    customerNumber: "01899887766",
    orderAmount: "750",
    date: "25 Feb 2023",
    address: "555 Maple Street, Suburbia, Dhaka",
    status: "complete",
  },
  {
    customerName: "Jessica Davis",
    customerNumber: "01674563210",
    orderAmount: "3000",
    date: "03 Mar 2023",
    address: "777 Birch Avenue, Metroville, Dhaka",
    status: "complete",
  },
];
