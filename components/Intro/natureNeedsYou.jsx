import { useState, useRef } from "react";
import Image from 'next/image'

import style from '../../styles/main.module.scss';
import I from '../../img/images'

export const NatureNeedsYou = () => {
    const [isInputFocus, setInputFocus] = useState(false);
    const [isInputActive, setInputActive] = useState(false);

    return (
        <div className={style.natureNeedsYou_container}>
            <Image src={I.natureNeedsYou} alt="Nature needs you calligraphy" priority />

            <p className={style.natureNeedsYou_text} >
                The scale of the challenges facing our planet can
                seem daunting, but we can all do something.
            </p>

            <div className={style.search_container}
                style={{ borderColor: isInputActive ? '#f2726c' : isInputFocus ? '#f2726c' : 'transparent' }}
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
