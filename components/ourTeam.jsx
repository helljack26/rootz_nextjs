import Image from 'next/image'
import Link from 'next/link'

import style from '../styles/main.module.scss';

import I from '../img/images'

const teamData = [
    {
        teamId: 1,
        teamImg: I.team1,
        teamMask: I.teamMask1,
    },
    {
        teamId: 2,
        teamImg: I.team2,
        teamMask: I.teamMask2,
    },
    {
        teamId: 3,
        teamImg: I.team3,
        teamMask: I.teamMask3,
    },
]
export const OurTeam = () => {

    return (
        <div className={style.ourTeam}>
            <h2 className={style.ourTeam_title}>Our Top Team</h2>
            <p className={style.ourTeam_text}>Learn more about how you can save our planet's nature. </p>

            <div className={style.ourTeam_row}>
                <div className={style.ourTeam_row_block}>

                    {teamData.map((teammate, id) => {
                        return (
                            // <>
                            <span className={style.ourTeam_row_item} key={id} >
                                <Image src={teammate.teamImg} />
                            </span>
                            // </>
                        )
                    })}
                </div>

                <span className={style.chain_between_team_left}>
                    <Image src={I.chainBetweenTeam} />
                </span>

                <span className={style.chain_between_team_right}>
                    <Image src={I.chainBetweenTeam} />
                </span>
            </div>
        </div>

    );
};
