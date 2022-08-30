import Head from 'next/head'
import Image from 'next/image'

import style from '../styles/main.module.scss'

import I from '../img/images'
// Components
import { Navbar } from '../components/navbar';


export default function Home() {
    return (
        <>
            <Head>
                <title>Rootz</title>
                <link rel="icon" href="/favicon.svg" />
                <meta charSet="utf-8" />
            </Head>

            <div className={style.intro}>
                <Navbar />

            </div>

        </>
    )
}
