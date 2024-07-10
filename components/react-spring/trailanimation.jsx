import { useTrail, a } from '@react-spring/web';
import {Children} from "react";


const Trail =  ({ open, children }) => {
    const items = Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200,duration:250 },
        opacity: open ? 1 : 0,
        display: "block",
        height:"auto",
        y: open ? 0 : 20,
        from: { opacity: 0, y: 10,display:"none",height:0},
    })
    return (
        <>
            {trail.map(({...style }, index) => (
                <a.div key={index} className="overflow-hidden  w-full will-change-transform" style={style}>
                   {items[index]}
                </a.div>
            ))}
        </>
    )
}

export default Trail;


export const Trail2 =  ({ open, children }) => {
    const items = Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200,duration:300},
        opacity: open ? 1 : 0,
        display: "block",
        height:"auto",
        x: open ? 0 : 20,
        from: { opacity: 0, x: 20,display:"none",height:0},
    })
    return (
        <>
            {trail.map(({...style }, index) => (
                <a.div key={index} className="overflow-hidden  w-full will-change-transform" style={style}>
                   {items[index]}
                </a.div>
            ))}
        </>
    )
}

