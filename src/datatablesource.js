export const carColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "model",
    headerName: "Model",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.carname}
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "price",
    width: 230,
  },

  {
    field: "year",
    headerName: "Year",
    width: 100,
  },
 // {
   // field: "status",
  //  headerName: "Status",
  //  width: 160,
   // renderCell: (params) => {
    //  return (
     //   <div className={`cellWithStatus ${params.row.status}`}>
      //    {params.row.status}
     //   </div>
    //  );
   // },
//  },
];

//temporary data
export const carRows = [
  {
    id: 1,
    carname: "Kia stonic",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    price: "1200000",
    year: 2017,
  },
  {
    id: 2,
    carname: "Honda civic",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: "10000000",
    status: "passive",
    year: 2018,
  },
  {
    id: 3,
    carname: "Nissan navara",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: "6600000",
    status: "pending",
    year: 2005,
  },
  {
    id: 4,
    carname: "Benz cla",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: "1200000",
    status: "active",
    year: 2015,
  },
  {
    id: 5,
    carname: "Audi Q3",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: "23000000",
    status: "passive",
    year: 2018,
  },
  
];
