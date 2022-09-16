import Image from 'next/image'
import Link from 'next/link'
import { useRef } from "react";

import style from '../styles/main.module.scss';

import I from '../img/images'
import { observer } from 'mobx-react'

export const Footer = observer(() => {
    const footerRef = useRef(null)

    return (

        <footer
            className={style.footer}
            ref={footerRef}
            data-scroll-section
        >

            <div className={style.footer_col}
            >
                <h4>Contacts</h4>

                <div className={style.footer_col_text_row}>
                    <span className={style.footer_col_text}>
                        2019 Rootz Foundation.
                    </span>
                    <span className={style.footer_col_text}>
                        All rights reserved.
                    </span>
                </div>
            </div>

            <div className={style.footer_col_row}

            >

                <div className={style.footer_col}>
                    <span className={style.footer_col_title}>Headquarters</span>

                    <span className={style.footer_col_text}>
                        1234 Taliban
                    </span>
                    <span className={style.footer_col_text}>
                        Los Angeles, La 1234567
                    </span>
                    <span className={style.footer_col_text}>
                        (123) 456-7890
                    </span>
                </div>

                <div className={style.footer_col}>
                    <span className={style.footer_col_title}>Social media</span>

                    <div className={style.footer_col_links}>
                        <Link href={'/'}>
                            <a className={style.footer_info_link}>
                                <Image src={I.twitterIcon} />
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a className={style.footer_info_link}>
                                <Image src={I.facebookIcon} />
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a className={style.footer_info_link}>
                                <Image src={I.linkedInIcon} />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

        </footer>
    );
})
