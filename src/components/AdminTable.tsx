import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { alpha } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { visuallyHidden } from "@mui/utils";
import * as React from "react";
import { useState } from "react";
import { useProducts } from "../contexts/ProductContext";
import { Product } from "../ProductData";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof Record<string, any>>(order: Order, orderBy: Key): (a: any, b: any) => number {
  return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Product;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "Id",
  },
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title",
  },
  {
    id: "designer",
    numeric: false,
    disablePadding: false,
    label: "Designer",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "category",
    numeric: false,
    disablePadding: false,
    label: "Category",
  },
  {
    id: "color",
    numeric: false,
    disablePadding: false,
    label: "Color",
  },
  {
    id: "size",
    numeric: false,
    disablePadding: false,
    label: "Size",
  },
  {
    id: "img",
    numeric: false,
    disablePadding: false,
    label: "Image Url",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Product) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof Product) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all products",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  selectedId: number[];
  products: Product[];
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;

  const handleSelectedId = (selectedId: number[]) => {
    
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
          Products
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={() => handleSelectedId(props.selectedId)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default function AdminTable() {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Product>("id");
  const [selected, setSelected] = useState<number[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { products, editProduct, deleteProduct } = useProducts();

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

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

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
    console.log("selected title: " + selected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar products={products} selectedId={selected} numSelected={selected.length} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? "small" : "medium"}>
            <EnhancedTableHead
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
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {product.id}
                      </TableCell>
                      <TableCell align="left">{product.title}</TableCell>
                      <TableCell align="left">{product.designer}</TableCell>
                      <TableCell align="left">{product.description}</TableCell>
                      <TableCell align="left">{product.price}</TableCell>
                      <TableCell align="left">{product.category}</TableCell>
                      <TableCell align="left">{product.color}</TableCell>
                      <TableCell align="left">{product.size}</TableCell>
                      <TableCell align="left">{product.img}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
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
      <FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label="Dense padding" />
    </Box>
  );
}
