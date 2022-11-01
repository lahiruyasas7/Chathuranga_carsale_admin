import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1145155,
      model: "premio",
      img: "",
      customer: "kasun",
      date: "1 March",
      amount: 800000,
      method: "Cash",
      
    },
    {
      id: 2235235,
      model: "vagonr",
      img: "",
      customer: "dilum jayawardane",
      date: "1 March",
      amount: 3900000,
      method: "cash",
      
    },
    {
      id: 2342353,
      model: "Nissan gt",
      img: "",
      customer: "Nuwan",
      date: "1 March",
      amount: 3500000,
      method: "Cash",
      
    },
    {
      id: 2357741,
      model: "alto",
      img: "",
      customer: "namal",
      date: "1 March",
      amount: 2000000,
      method: "cash",
      
    },
    {
      id: 2342355,
      model: "charod",
      img: "",
      customer: "chirath",
      date: "1 March",
      amount: 800000,
      method: "cash",
      
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">model</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
