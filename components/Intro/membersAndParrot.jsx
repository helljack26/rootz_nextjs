import { useEffect } from "react";
import Image from 'next/image'
import { gsap, Power3 } from "gsap";

import style from '../../styles/main.module.scss';
import I from '../../img/images'

export const MembersAndParrot = () => {
    useEffect(() => {

        gsap.from(`.${style.membersAndParrot_leafs_block}`, {
            duration: 3.2,
            y: 120,
            x: -235,
            rotate: 90,
            delay: 0.8,
            ease: Power3.easeInOut
        })
        gsap.from(`.${style.membersAndParrot_leafs_block}`, {
            duration: 0.5,
            opacity: 0,
            delay: 1.6,
            ease: Power3.easeInOut
        })
        gsap.from(`.${style.membersAndParrot_leafs1}`, {
            opacity: 0,
            duration: 3,
            delay: 2.2,
            rotate: 90,
            y: 70,
            x: -70,
            ease: Power3.easeInOut
        })
        gsap.from(`.${style.membersAndParrot_leafs2}`, {
            opacity: 0,
            duration: 3.5,
            delay: 2.2,
            rotate: 90,
            y: 20,
            x: -70,
            ease: Power3.easeInOut
        })
        gsap.from(`.${style.membersAndParrot_leafs3}`, {
            opacity: 0,
            duration: 3.2,
            delay: 2.2,
            rotate: 120,
            y: 20,
            x: -70,
            ease: Power3.easeInOut
        })
        gsap.from(`.${style.membersAndParrot_leafs4}`, {
            opacity: 0,
            duration: 3.7,
            delay: 2.2,
            rotate: 90,
            y: -20,
            x: -70,
            ease: Power3.easeInOut
        })
        gsap.from(`.${style.membersAndParrot_leafs5}`, {
            opacity: 0,
            duration: 3,
            delay: 2.2,
            rotate: 90,
            y: -50,
            x: -70,
            ease: Power3.easeInOut
        })
        gsap.from(`.${style.members_container}`, {
            duration: 2.5,
            y: 20,
            x: -40,
            delay: 0.4,
            opacity: 0,
            ease: Power3.easeInOut
        })
        gsap.from(`.${style.membersAndParrot_parrot_block}`, {
            duration: 2.5,
            y: 0,
            x: -40,
            delay: 0.4,
            opacity: 0,
            ease: Power3.easeInOut
        })
    });
    return (
        <div className={style.membersAndParrot_container}
        >
            <div className={style.membersAndParrot_leafs_block} >
                <div className={style.membersAndParrot_leafs_block_container} >
                    <div className={style.membersAndParrot_leafs1}
                        data-scroll
                        data-scroll-speed="4"
                        data-scroll-position="top"
                        data-scroll-direction="horizontal"
                    >
                        <Image src={I.leafs1} priority />
                    </div>
                    <div className={style.membersAndParrot_leafs2}
                        data-scroll
                        data-scroll-speed="3"
                        data-scroll-position="top"
                        data-scroll-direction="horizontal"
                    >
                        <Image src={I.leafs2} priority />
                    </div>
                    <div className={style.membersAndParrot_leafs3}
                        data-scroll
                        data-scroll-speed="4"
                        data-scroll-position="top"
                        data-scroll-direction="horizontal"
                    >
                        <Image src={I.leafs3} priority />
                    </div>
                    <div className={style.membersAndParrot_leafs4}
                        data-scroll
                        data-scroll-speed="5"
                        data-scroll-position="top"
                        data-scroll-direction="horizontal"
                    >
                        <Image src={I.leafs4} priority />
                    </div >
                    <div className={style.membersAndParrot_leafs5}
                        data-scroll
                        data-scroll-speed="3"
                        data-scroll-position="top"
                        data-scroll-direction="horizontal"
                    >
                        <Image src={I.leafs5} priority />
                    </div>
                </div >
            </div >

            <div className={style.membersAndParrot_parrot_block}
                data-scroll
                data-scroll-speed="2"
                data-scroll-position="top"
                data-scroll-direction="horizontal"
            >
                <Image className={style.membersAndParrot_parrot} src={I.parrot} priority />
            </div>

            <div className={style.members_container}
                data-scroll
                data-scroll-speed="1"
                data-scroll-position="top"
                data-scroll-direction="horizontal"
            >

                <button type="button" className={style.members_block_icon} >
                    <Image src={I.membersIcon} priority />
                </button>

                <div className={style.members_block_info}>

                    <span className={style.members_block_info_text}>
                        Members
                    </span>
                    <span className={style.members_block_info_numbers}>
                        29 128
                    </span>
                </div>
            </div>
        </div >
    );
};
