
import { useState, useEffect, useCallback } from 'react';

export const isOnTop = () => {
    const [y, setY] = useState(0);

    const [result, setResult] = useState({
        onTop: true,
        y: 0
    });
    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (window.scrollY < 10) {
                return setResult({
                    onTop: true,
                    y: y
                })

            } else {
                return setResult({
                    onTop: false,
                    y: y
                })
            }
        }, [y]
    );


    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return result

}