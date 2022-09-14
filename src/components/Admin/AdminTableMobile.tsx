import { Edit } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
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
import Product from "../../models/Product";

interface Props {
  handleEdit: (product: Product) => void;
  handleDelete: (id: string) => void;
}

interface RowProps {
  product: Product;
  handleEdit: (product: Product) => void;
  handleDelete: (id: string) => void;
}

function Row({ product, handleEdit, handleDelete }: RowProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell width="20px" align="left" sx={{ padding: "2px" }}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {/* <TableCell padding="none">{product.id}</TableCell> */}
        <TableCell padding="none" align="left">
          {product.title}
        </TableCell>
        <TableCell padding="none" align="left">
          {product.designer}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: 0 }}>
              <Typography fontWeight={900} variant="body1" component="div">
                Description
                <Typography variant="subtitle2">{product.description}</Typography>
              </Typography>
              <Typography fontWeight={900} variant="body1" component="div">
                Img urls
                {product.img.map((img, index) => (
                  <Typography sx={{ wordBreak: "break-all" }} variant="subtitle2" key={index}>
                    {img}
                  </Typography>
                ))}
              </Typography>
              <Typography fontWeight={900} component="div">
                Price
                <Typography variant="subtitle2">{product.price}</Typography>
              </Typography>
              <Typography fontWeight={900} component="div">
                Size
                <Typography variant="subtitle2">{product.size}</Typography>
              </Typography>
              <Typography fontWeight={900} component="div">
                Color
                <Typography variant="subtitle2">{product.color}</Typography>
              </Typography>
              <IconButton onClick={() => handleEdit(product)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => handleDelete(product.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function AdminTableMobile({ handleEdit, handleDelete }: Props) {
  const { products, editProduct, deleteProducts } = useProducts();

  return (
    <TableContainer sx={{ marginBottom: "1rem" }} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            {/* <TableCell sx={{ padding: "2px" }} align="left">
              Id
            </TableCell> */}
            <TableCell sx={{ padding: "2px" }} align="left">
              Title
            </TableCell>
            <TableCell sx={{ padding: "2px" }} align="left">
              Designer
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <Row
              key={product.id}
              product={product}
              handleEdit={() => {
                handleEdit(product);
              }}
              handleDelete={() => {
                handleDelete(product.id);
              }}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
