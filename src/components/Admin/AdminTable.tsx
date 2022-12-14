import EditIcon from "@mui/icons-material/Edit";
import { Box, Checkbox, IconButton, Paper, Table, TableBody, TableContainer, TablePagination, TableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import { useState } from "react";
import styled from "styled-components";
import { useProducts } from "../../contexts/ProductContext";
import Product from "../../models/Product";
import { AdminTableHead } from "./AdminTableHead";
import AdminTableToolbar from "./AdminTableToolbar";

const TableCellEllipse = styled(TableCell)`
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export type Order = "asc" | "desc";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof Record<string, any>>(order: Order, orderBy: Key): (a: any, b: any) => number {
  return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

interface Props {
  handleEditClicked: (product: Product) => void;
}

export default function AdminTable({ handleEditClicked }: Props) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Product>("title");
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { products, deleteProducts } = useProducts();

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Product) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = products.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <AdminTableToolbar deleteProducts={deleteProducts} selectedIds={selected} numSelected={selected.length} />
        <TableContainer sx={{ padding: "0.5rem" }}>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="small">
            <AdminTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={products.length}
            />
            <TableBody>
              {products
                .slice()
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product, index) => {
                  const isItemSelected = isSelected(product.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, product.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={product.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      {/* <TableCell style={{ maxWidth: "60px" }} component="th" id={labelId} scope="row" padding="none">
                        {product.id}
                      </TableCell> */}
                      <TableCell style={{ maxWidth: "69px" }} align="left">
                        {product.title}
                      </TableCell>
                      <TableCell style={{ maxWidth: "69px" }} align="left">
                        {product.designer}
                      </TableCell>
                      <TableCellEllipse align="left">{product.description}</TableCellEllipse>
                      <TableCell style={{ maxWidth: "69px" }} align="left">
                        {product.price}
                      </TableCell>
                      <TableCell style={{ maxWidth: "69px" }} align="left">
                        {product.category}
                      </TableCell>
                      <TableCell style={{ maxWidth: "69px" }} align="left">
                        {product.color}
                      </TableCell>
                      <TableCell style={{ maxWidth: "69px" }} align="left">
                        {product.size}
                      </TableCell>
                      <TableCellEllipse align="left">{product.img}</TableCellEllipse>
                      <TableCell style={{ maxWidth: "69px" }} align="left">
                        <IconButton
                          onClick={() => {
                            handleEditClicked(product);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
