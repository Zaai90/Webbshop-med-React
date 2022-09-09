import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useProducts } from "../../contexts/ProductContext";
import { Product } from "../../ProductData";

function Row(props: { product: Product }) {
  const { product } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell sx={{ padding: "1px" }}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {product.id}
        </TableCell>
        <TableCell sx={{ padding: "1px" }} align="left">
          {product.title}
        </TableCell>
        <TableCell sx={{ padding: "1px" }} align="left">
          {product.designer}
        </TableCell>
        <TableCell sx={{ padding: "1px" }} align="left">
          {product.price}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 0.5 }}>
              <Table size="small" aria-label="products">
                <TableHead>
                  <Typography variant="h6" gutterBottom component="div">
                    Details
                  </Typography>
                </TableHead>
                <TableBody sx={{ display: "flex", flexDirection: "column" }}>
                  <TableRow component="th">
                    <TableRow>Description</TableRow>
                    <TableCell>{product.description}</TableCell>
                  </TableRow>
                  <TableRow component="th">
                    <TableRow>Img urls</TableRow>
                    <TableCell sx={{ display: "flex", flexDirection: "column" }}>
                      {product.img.map((img) => (
                        <>{img}</>
                      ))}
                    </TableCell>
                  </TableRow>
                  <TableRow component="th">
                    <TableRow>Color</TableRow>
                    <TableCell>{product.color}</TableCell>
                  </TableRow>
                  <TableRow component="th">
                    <TableRow>Size</TableRow>
                    <TableCell>{product.size}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function AdminTableMobile() {
  const { products, editProduct, deleteProducts } = useProducts();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ padding: "2px" }} align="left">
              Id
            </TableCell>
            <TableCell sx={{ padding: "2px" }} align="left">
              Title
            </TableCell>
            <TableCell sx={{ padding: "1px" }} align="left">
              Designer
            </TableCell>
            <TableCell sx={{ padding: "1px" }} align="left">
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <Row key={row.id} product={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
