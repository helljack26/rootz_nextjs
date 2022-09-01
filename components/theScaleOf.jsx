import Image from 'next/image'

import style from '../styles/main.module.scss';

import I from '../img/images'

const theScaleOfData = [
    {
        scaleIcon: I.scaleUserIcon,
        scaleText: 'Assets value COMPOSER '
    },
    {
        scaleIcon: I.scaleGraphIcon,
        scaleText: 'GRAPH BUDGET ANALYZER'
    },
    {
        scaleIcon: I.scaleWashIcon,
        scaleText: 'MONTHLY AVG. REVENUE'
    },
]
export const TheScaleOf = () => {

    return (
        <div className={style.scaleOf}>
            <h2 className={style.scaleOf_title}>
                The scale of the challenges facing our planet can
                seem daunting, but we can all do something.
            </h2>

            <div className={style.scaleOf_row}>
                {theScaleOfData.map((scaleItem, id) => {
                    return (
                        <div key={id}>
                            <div className={style.scaleOf_row_item}  >
                                <Image src={scaleItem.scaleIcon} width={65} height={65} />

                                <span className={style.scaleOf_row_item_text}>
                                    {scaleItem.scaleText}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Backgrounds */}
            <span className={style.scale_leafs_left}>
                <Image src={I.scaleLeafsLeft} />
            </span>

            <span className={style.scale_gradient_circle}>
                <Image src={I.scaleGradientCircle} />
            </span>

            <span className={style.scale_leafs_right}>
                <Image src={I.scaleLeafsRight} />
            </span>
        </div>
    );
};
