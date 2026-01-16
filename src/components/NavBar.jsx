//import css
import '../assets/css/NavBar.css'
import CartWidget from './CartWidget'

//imagen dentro de src
import logoSrc from '../assets/react.svg'

//imagen en public NO SE IMPORTAN

const NavBar = () => {
    console.log('NavBar')
    return (
        <nav className='nav-container'>
            <a className='anchor-nav' href="">
                {/* IMAGEN SRC */}
                {/* <img src={logoSrc} alt='logo-react'/> */}
                {/* IMAGEN PUBLIC */}
                <img src={'../logo-shop.png'} alt='logo-SHOP' className='logo'/> 
            </a>
            <a className='anchor-nav' href="">Nuevos</a>
            <a className='anchor-nav' href="">Ofertas</a>
            <a className='anchor-nav' href="">Mas vendidos</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar