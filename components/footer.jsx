import Image from 'next/image'
import Link from 'next/link'

import style from '../styles/main.module.scss';

import I from '../img/images'

const blog = [
    {
        footer_Id: 1,
        footer_Img: I.post1,
        footer_Hash: 'Stories',
        footer_Title: 'Travel In Japan: The True Experience',
    },
    {
        footer_Id: 2,
        articleImg: I.post2,
        articleVideoLink: 'https://www.youtube.com/watch?v=q9XAUBwTS7Y',
        articleHash: 'VideoTutor',
        articleTitle: 'Helping Wild Turtles',
    },
    {
        articleId: 3,
        articleImg: I.post3,
        articleHash: 'Photostory',
        articleTitle: 'Threats of Indusrial World',
    },
]
export const Footer = () => {

    return (
        <footer className={style.footer}>

            <div className={style.footer_col}>
                <h4>Contacts</h4>

                <span className={style.footer_col_text}>
                    2019 Rootz Foundation
                </span>
                <span className={style.footer_col_text}>
                    All rights reserved
                </span>
            </div>

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

                <div className={style.footer_col_row}>
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

        </footer>
    );
};
