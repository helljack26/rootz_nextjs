import Image from 'next/image'
import Link from 'next/link'

import style from '../../styles/main.module.scss';

import { NatureNeedsYou } from './natureNeedsYou';
import { MembersAndParrot } from './membersAndParrot';
import I from '../../img/images'

export const Intro = () => {

    return (
        <div className={style.intro}>
            <NatureNeedsYou />

            <MembersAndParrot />
        </div>
    );
};
