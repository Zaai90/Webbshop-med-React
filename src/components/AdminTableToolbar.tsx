import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { alpha, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { Product } from "../ProductData";

interface Props {
  numSelected: number;
  selectedIds: number[];
  products: Product[];
  deleteProducts: (selectedIds: number[]) => void;
}

export const AdminTableToolbar = (props: Props) => {
  const { numSelected } = props;

  const handleSelectedIds = (selectedId: number[]) => {
    props.deleteProducts(selectedId);
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
          <IconButton onClick={() => handleSelectedIds(props.selectedIds)}>
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
