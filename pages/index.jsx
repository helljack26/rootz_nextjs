import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';

import style from '../styles/main.module.scss'

import I from '../img/images'
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

    return (
        <>
            <Head>
                <title>Rootz</title>
                <link rel="icon" href="/favicon.svg" />
                <meta charSet="utf-8" />
            </Head>

            <Navbar isSideMenuOpen={isSideMenuOpen} openSideMenu={openSideMenu} />
            <SideMenu isSideMenuOpen={isSideMenuOpen} openSideMenu={openSideMenu} />

            <main>
                <div id='home' className={style.intro}>
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
            </main>

        </>
    )
}
