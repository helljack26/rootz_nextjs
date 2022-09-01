import Head from 'next/head'
import Image from 'next/image'

import style from '../styles/main.module.scss'

import I from '../img/images'
// Components
import { Navbar } from '../components/navbar';
import { NatureNeedsYou } from '../components/Intro/natureNeedsYou';
import { MembersAndParrot } from '../components/Intro/membersAndParrot';
import { Blog } from '../components/blog';
import { FirstSlider } from '../components/firstSlider';
import { OurTeam } from '../components/ourTeam';
import { TheScaleOf } from '../components/theScaleOf';

export default function Home() {
    return (
        <>
            <Head>
                <title>Rootz</title>
                <link rel="icon" href="/favicon.svg" />
                <meta charSet="utf-8" />
            </Head>

            <Navbar />

            <main>
                <div className={style.intro}>
                    <NatureNeedsYou />
                    <MembersAndParrot />
                </div>

                <Blog />
                <FirstSlider />
                <OurTeam />
                <TheScaleOf />

            </main>

        </>
    )
}
