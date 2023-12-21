import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import styles from './MainHeader.module.css';
import NavLink from './NavLink';

const MainHeader = () => {

    return (
        <header className={styles.header} >
            <Link className={styles.logo} href='/'>
                <Image src={logo} alt={"A plate with food on it"} priority />
                NextLevel Food
            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li><NavLink href="/meals" title={'Bowse Meals'} /></li>
                    <li><NavLink href="/community" title={'Foodies Community'} /></li>
                </ul>
            </nav>

        </header>
    )
}

export default MainHeader;