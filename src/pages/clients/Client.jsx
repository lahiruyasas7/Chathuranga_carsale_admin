import "./client.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReportGmailerrorred } from "@mui/icons-material";

const client = () => {
  const rows = [
    {
      id: 1145155,
      
      img: "",
      customer: "kasun",
      telno: "0782345665",
      email: kasungmail.com,
      
      
    },
    {
      id: 2235235,
      
      img: "",
      customer: "dilum jayawardane",
      telno: "0712534586",
      email : dilumgmail.com,
      
      
    },
    {
      id: 2342353,
      
      img: "",
      customer: "Nuwan",
      telno: "0712938465",
      email: nuwangamil.com,
      
      
    },
    {
      id: 2357741,
      
      img: "",
      customer: "namal",
      telno: "0761938472",
      email: namalgmail.com,
      
      
    },
    {
      id: 2342355,
      
      img: "",
      customer: "chirath",
      telno: "0721436475",
      email: chirathgmail.com,
      
      
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">email</TableCell>
            <TableCell className="tableCell">phone number</TableCell>
            
            
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
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.phonenumber}</TableCell>
              
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

export default client;