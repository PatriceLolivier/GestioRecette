import { INavLinksProps } from "@atomes/NavLinks";

export const NavLinks: React.FC<INavLinksProps> = ({ links }) => {
    return (
        <ul className="flex justify-center gap-4">
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.href}>{link.label}</a>
                </li>
            ))}
        </ul>
    )
}