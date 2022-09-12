import { useState, useEffect } from "react";
import Image from 'next/image'
import { gsap, Power3 } from "gsap";

import style from '../../styles/main.module.scss';
import I from '../../img/images'

export const NatureNeedsYou = () => {
    const [isInputFocus, setInputFocus] = useState(false);
    const [isInputActive, setInputActive] = useState(false);

    let tl = gsap.timeline({ delay: 0.7 });
    useEffect(() => {
        gsap.from(`.${style.natureNeedsYou_container}`, {
            duration: 1.2,
            y: 20,
            opacity: 0,
            delay: 0.4,
            ease: Power3.easeIn
        })
    });

    return (
        <div className={style.natureNeedsYou_container}>
            <div className={style.natureNeedsYou_img}
                data-scroll
                data-scroll-speed="1.5"
                data-scroll-position="top"
                data-scroll-direction="horizontal"
            >
                <Image src={I.natureNeedsYou} alt="Nature needs you calligraphy" priority />
            </div>

            <p className={style.natureNeedsYou_text}
                data-scroll
                data-scroll-speed="1"
                data-scroll-position="top"
                data-scroll-direction="horizontal"
            >
                The scale of the challenges facing our planet can
                seem daunting, but we can all do something.
            </p>

            <div className={style.search_container}
                style={{ borderColor: isInputActive ? '#f2726c' : isInputFocus ? '#f2726c' : 'transparent' }}
                data-scroll
                data-scroll-speed="0.5"
                data-scroll-position="top"
                data-scroll-direction="horizontal"
            >
                <span className={style.search_icon}>
                    <Image src={I.locationIcon} width={18} height={22} priority />
                </span>

                <input
                    type="text"
                    placeholder='Find the place to help'
                    className={style.search_input}
                    onFocus={() => setInputActive(true)}
                    onBlur={() => setInputActive(false)}
                    onMouseEnter={() => setInputFocus(true)}
                    onMouseLeave={() => setInputFocus(false)}
                />

                <button type='button' className={style.search_button}>
                    Search
                </button>
            </div>
        </div>
    );
};
