import { NavLinks } from "@atomes/NavLinks"

export const NavMenu = () => {
    const links = [
        { label: "Home", href: "/", },
        { label: "Recettes", href: "/recette"},
    ]
    
    return (
        <>
            <NavLinks links={links} />
        </>
    )
    
}