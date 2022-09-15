import { useEffect, useRef } from 'react';
import style from '../styles/main.module.scss';
import { observer } from 'mobx-react'
import { gsap, Power3 } from "gsap";
import GlobalState from '../stores/GlobalState'

export const LeafsFalling = observer(() => {
    const leafsFallingRef = useRef(null)

    useEffect(() => {
        if (typeof window === 'undefined' || !leafsFallingRef.current) {
            return
        }
    }, []);
    const isShowLeafFalling = GlobalState.isShowLeafFalling
    console.log("🚀 ~ file: leafsFalling.jsx ~ line 15 ~ useEffect ~ isShowLeafFalling", isShowLeafFalling)

    // console.log("🚀 ~ file: leafsFalling.jsx ~ line 17 ~ LeafsFalling ~ isShowLeafFalling", isShowLeafFalling)

    return (
        <>
            <div className={style.leafs_falling}
                style={{ display: isShowLeafFalling ? 'block' : 'none' }}
                ref={leafsFallingRef}
            >
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>

            </div >
        </>

    );
})
