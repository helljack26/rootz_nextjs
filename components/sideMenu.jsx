import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { isOnTop } from './helpers/isOnTop';

import style from '../styles/main.module.scss';

import I from '../img/images'

export const SideMenu = ({ isSideMenuOpen, openSideMenu }) => {
    const sideMenuRef = useRef(null);
    const { onTop } = isOnTop()
    const [isAnimateBackground, setAnimateBackground] = useState(false);
    const [isActiveLink, setActiveLink] = useState('Home');

    useEffect(() => {
        if (isSideMenuOpen) {
            document.body.classList.add("no_scroll")
            setTimeout(() => { setAnimateBackground(true) }, 400);
        } else {
            document.body.classList.remove("no_scroll")
            setAnimateBackground(false)
        }
    }, [isSideMenuOpen]);

    const scrollTo = (hash) => {
        document.body.classList.remove("no_scroll")
        openSideMenu(false)
        setActiveLink(hash)
    }
    return (
        <>
            <div className={`${style.sideMenu_bg} ${isAnimateBackground ? style.sideMenu_Bg_Open : null} `}
                onClick={() => { openSideMenu(false) }}></div>
            <div className={`${style.sideMenu} ${isSideMenuOpen ? style.sideMenuOpen : null} ${onTop ? style.sideMenuDefault : style.sideMenuExpand}`}>

                <nav className={style.sideMenu_nav} ref={sideMenuRef}>
                    <Link href="#home" scroll={true}><a
                        onClick={() => { scrollTo('Home') }}
                        className={isActiveLink === 'Home' ? style.sideMenu_navlink_active : null}
                    >Home</a></Link>
                    <Link href="#ourMission" scroll={true}><a
                        onClick={() => { scrollTo('Our mission') }}
                        className={isActiveLink === 'Our mission' ? style.sideMenu_navlink_active : null}
                    >Our mission</a></Link>
                    <Link href="#places" scroll={true}><a
                        onClick={() => { scrollTo('Places') }}
                        className={isActiveLink === 'Places' ? style.sideMenu_navlink_active : null}
                    >Places</a></Link>
                    <Link href="#team" scroll={true}><a
                        onClick={() => { scrollTo('Team') }}
                        className={isActiveLink === 'Team' ? style.sideMenu_navlink_active : null}
                    >Team</a></Link>
                </nav>

                <button type='button' className={style.sideMenu_header_button}>
                    Apply
                </button>


            </div >
        </>

    );
};
