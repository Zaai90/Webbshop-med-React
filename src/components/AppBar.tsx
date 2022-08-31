import { NavLink } from 'react-router-dom'

const AppBar = () => {
  return (
    <header>
    <nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="store">Store</NavLink>
        <NavLink to="checkout">Checkout</NavLink>
        <NavLink to="admin">Admin</NavLink>
    </nav>
    </header>
  )
}

export default AppBar