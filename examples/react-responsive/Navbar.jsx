import { useMediaQuery } from "react-responsive"

const NavbarDesktop = ()=> {
    return <div></div>
}

const NavbarMobile = ()=> {
    return <div></div>
}

const Navbar = () => {

    // Media query
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)'
    })

    // Si se cumple la media query, muestra navbar de escritorio
    if (isDesktop) return <NavbarDesktop />

    // Si no, muestra la de mobile
    return <NavbarMobile />
}

export default Navbar