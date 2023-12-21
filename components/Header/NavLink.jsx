'use client'
import Link from 'next/link';
import { usePathname } from "next/navigation";
import styles from './NavLink.module.css'

const NavLink = ({ href, title }) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={pathname.startsWith(href) ? `${styles.active} ${styles.link}` : `${styles.link}`}>
            {title}
        </Link>
    )

}

export default NavLink;