import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image'
import Link from 'next/link'

import style from '../styles/main.module.scss';

import I from '../img/images'

export const Navbar = () => {

    const [y, setY] = useState(0);
    const [height, setHeight] = useState(style.defaultHeader);

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (window.scrollY < 10) {
                setHeight(style.defaultHeader)
            } else {
                setHeight(style.expandedHeader)
            }
            setY(window.scrollY);
        }, [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    return (
        <header className={`${style.header} ${height}`}>
            <div className={style.header_block}>
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

                <button type='button' className={style.header_button}
                    style={{
                        transform: y > 10 ? 'scale(0.75)' : 'scale(1)'
                    }}
                >
                    Apply
                </button>
            </div>

        </header>
    );
};
