import * as Icon from "@mui/icons-material/";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../../contexts/CartContext";
import { useCurrency } from "../../contexts/CurrencyContext";
import { CartItem } from "../../models/CartItem";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem 0;
  border-bottom: 1px solid gray;
`;

const ImgContainer = styled.div<{ imgUrl: string }>`
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 70px;
  height: 70px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: auto;
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 1rem;
  gap: 0.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 0.5rem;
  align-items: center;

  & span {
    font-size: 1.3rem;
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

interface Props {
  cartItem: CartItem;
  toggleDrawer: () => void;
}

const CartDrawerItem = ({ cartItem, toggleDrawer }: Props) => {
  const { addToCart, removeFromCart, getItemQty, removeItemFromCart } = useCart();
  const { convertToCurrencyValue } = useCurrency();

  // TODO: use update cart functions
  function handleSubstract() {
    removeFromCart(cartItem.product.id, 1);
  }

  function handleAdd() {
    addToCart(cartItem.product, cartItem.size, 1);
  }

  function handleRemove() {
    removeItemFromCart(cartItem);
  }

  return (
    <Wrapper>
      <NavLink to={`../product/${cartItem.product.id}`} onClick={toggleDrawer}>
        <ImgContainer imgUrl={cartItem.product.img[0]} />
      </NavLink>
      <InfoContainer>
        {/* TODO Use mui Typography instead of spans?
         or at least fix proper style */}
        <NavLinkStyled to={`../product/${cartItem.product.id}`} onClick={toggleDrawer}>
          <span style={{ fontWeight: "700" }}>{cartItem.product.title}</span>
        </NavLinkStyled>
        <span style={{ fontWeight: "300", textTransform: "uppercase", fontSize: ".7rem" }}>
          ( {cartItem.product.color && cartItem.product.color}
          {cartItem.size && " " + cartItem.size} )
        </span>
        <span>{convertToCurrencyValue(cartItem.product.price * cartItem.quantity)}</span>
      </InfoContainer>
      <QuantityContainer>
        <IconButton sx={{ alignSelf: "end" }} onClick={handleRemove}>
          <Icon.DeleteOutline sx={{ fontSize: "1.3rem" }} />
        </IconButton>
        <ButtonWrapper>
          <IconButton onClick={handleSubstract}>
            <Icon.Remove />
          </IconButton>
          <span>{getItemQty(cartItem.product.id)}</span>
          <IconButton onClick={handleAdd}>
            <Icon.Add />
          </IconButton>
        </ButtonWrapper>
      </QuantityContainer>
    </Wrapper>
  );
};

export default CartDrawerItem;
