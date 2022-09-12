import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import { isOnTop } from './helpers/isOnTop';
import { detectActiveLink } from './helpers/detectActiveLink';

import style from '../styles/main.module.scss';

import { menuData } from '../res/menuLinks';

export const SideMenu = ({ isSideMenuOpen, openSideMenu }) => {
    const sideMenuRef = useRef(null);
    const { onTop, y } = isOnTop()
    const activeLink = detectActiveLink({ y: y })

    const [isAnimateBackground, setAnimateBackground] = useState(false);

    useEffect(() => {
        if (isSideMenuOpen) {
            document.body.classList.add("no_scroll")
            setTimeout(() => { setAnimateBackground(true) }, 400);
        } else {
            document.body.classList.remove("no_scroll")
            setAnimateBackground(false)
        }
    }, [isSideMenuOpen]);

    return (
        <>
            <div className={`${style.sideMenu_bg} ${isAnimateBackground ? style.sideMenu_Bg_Open : null} `}
                onClick={() => { openSideMenu(false) }} data-scroll-section></div>
            <div className={`${style.sideMenu} ${isSideMenuOpen ? style.sideMenuOpen : null} ${onTop ? style.sideMenuDefault : style.sideMenuExpand}`}>

                <nav className={style.sideMenu_nav} ref={sideMenuRef}>

                    {menuData.map((link, id) => {
                        const { linkHash, linkName } = link;
                        return (
                            <Link
                                href={linkHash}
                                scroll={true}
                                key={id}>
                                <a
                                    onClick={() => {
                                        document.body.classList.remove("no_scroll")
                                        openSideMenu(false)
                                    }}
                                    className={activeLink === id ? style.sideMenu_navlink_active : null}
                                >{linkName}
                                </a>
                            </Link>
                        )
                    })}
                </nav>

                <button type='button' className={style.sideMenu_header_button}>
                    Apply
                </button>
            </div >
        </>

    );
};
