import Image from 'next/image'
import Link from 'next/link'

import style from '../styles/main.module.scss';

import I from '../img/images'

export const Navbar = () => {

    return (
        <header className={style.header}>
            <Image
                className={style.logo}
                src={I.logo}
                alt="Site logo"
                priority
            />

            <nav className={style.nav}>
                <Link href={'/'}><a className={style.navlink_active}>Home</a></Link>
                <Link href={'/'}><a>Our mission</a></Link>
                <Link href={'/'}><a>Places</a></Link>
                <Link href={'/'}><a>Team</a></Link>
            </nav>

            <button type='button' className={style.header_button}>
                Apply
            </button>
        </header>
    );
};
