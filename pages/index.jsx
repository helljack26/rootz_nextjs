import Head from 'next/head'
import { useState, useEffect } from 'react';
import { gsap, Power3 } from "gsap";
import { SmoothScrollProvider } from "../stores/scroll";

import style from '../styles/main.module.scss'

// Components
import { Navbar } from '../components/navbar';
import { SideMenu } from '../components/sideMenu';
import { NatureNeedsYou } from '../components/Intro/natureNeedsYou';
import { MembersAndParrot } from '../components/Intro/membersAndParrot';
import { Blog } from '../components/blog';
import { FirstSlider } from '../components/firstSlider';
import { OurTeam } from '../components/ourTeam';
import { TheScaleOf } from '../components/theScaleOf';
import { GetStartedForm } from '../components/getStartedForm';
import { ReadyAccordion } from '../components/readyAccordion';
import { SecondSlider } from '../components/secondSlider';
import { Footer } from '../components/footer';

export default function Home() {
    const [isSideMenuOpen, openSideMenu] = useState(false);

    let tl = gsap.timeline({ delay: 0.3 });
    useEffect(() => {
        tl.from('.header_block', {
            duration: 1,
            y: -10,
            opacity: 0,
            ease: Power3.easeIn,
            delay: 0.4,
        });
    });
    return (
        <>
            <Head>
                <title>Rootz</title>
                <link rel="icon" href="/favicon.svg" />
                <meta charSet="utf-8" />
            </Head>

            <SmoothScrollProvider>

                <Navbar isSideMenuOpen={isSideMenuOpen} openSideMenu={openSideMenu} />
                <SideMenu isSideMenuOpen={isSideMenuOpen} openSideMenu={openSideMenu} />
                <div id='home' className={style.intro} data-scroll-section>
                    <NatureNeedsYou />
                    <MembersAndParrot />
                </div>
                <Blog />
                <FirstSlider />
                <OurTeam />
                <TheScaleOf />
                <GetStartedForm />
                <ReadyAccordion />
                <SecondSlider />
                <Footer />

            </SmoothScrollProvider>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.6.0/polyfill.min.js" ></script>
            <script src="https://polyfill.io/v3/polyfill.min.js?features=Object.assign%2CElement.prototype.append%2CNodeList.prototype.forEach%2CCustomEvent%2Csmoothscroll"></script>
        </>
    )
}
