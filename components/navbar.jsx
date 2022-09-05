import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image'
import Link from 'next/link'

import style from '../styles/main.module.scss';
import { isOnTop } from './helpers/isOnTop';

import I from '../img/images'

export const Navbar = ({ isSideMenuOpen, openSideMenu }) => {
    const { onTop, y } = isOnTop()
    const home = document.getElementById('home')
    console.log("🚀 ~ file: navbar.jsx ~ line 13 ~ Navbar ~ home", home)
    return (
        <header className={`${style.header} ${onTop ? style.defaultHeader : style.expandedHeader}`}>
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

                <button
                    onClick={() => { openSideMenu(!isSideMenuOpen) }}
                    type='button' className={style.header_burgerBtn}>
                    <span className={isSideMenuOpen ? style.burgerBtn_open : null}></span>
                    <span className={isSideMenuOpen ? style.burgerBtn_open : null}></span>
                    <span className={isSideMenuOpen ? style.burgerBtn_open : null}></span>
                </button >
            </div >

        </header >
    );
};
