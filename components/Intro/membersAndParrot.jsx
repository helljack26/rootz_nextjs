import { useState, useRef } from "react";
import Image from 'next/image'

import style from '../../styles/main.module.scss';
import I from '../../img/images'
import membersBg from '../../img/members_bg.svg'

export const MembersAndParrot = () => {
    const inputRef = useRef(null);
    const [isInputFocus, setInputFocus] = useState(false);

    return (
        <div className={style.membersAndParrot_container}>
            <div className={style.membersAndParrot_leafs_block}>
                <Image className={style.membersAndParrot_leafs} src={I.leafs} priority />
            </div>
            <div className={style.membersAndParrot_parrot_block}>
                <Image className={style.membersAndParrot_parrot} src={I.parrot} priorit />
            </div>

            <div className={style.members_container}>
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


        </div>
    );
};
