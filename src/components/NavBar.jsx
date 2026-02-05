//import css
import '../assets/css/NavBar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
//imagen dentro de src
import logoSrc from '../assets/react.svg'

//imagen en public NO SE IMPORTAN

const NavBar = () => {
    console.log('NavBar')
    return (
        <nav className='nav-container'>
            <NavLink to='/' className='anchor-nav'>
                {/* IMAGEN SRC */}
                {/* <img src={logoSrc} alt='logo-react'/> */}
                {/* IMAGEN PUBLIC */}
                <img src={'../logo-shop.png'} alt='logo-SHOP' className='logo'/> 
            </NavLink>
            <NavLink className='anchor-nav' to="/category/nuevos">Nuevos</NavLink>
            <NavLink className='anchor-nav' to="/category/ofertas">Ofertas</NavLink>
            <NavLink className='anchor-nav' to="/category/mas vendidos">Mas vendidos</NavLink>
            <CartWidget/>
        </nav>
    )
}

export default NavBar