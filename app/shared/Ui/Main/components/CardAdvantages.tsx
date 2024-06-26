import React from 'react'
import style from "../Main.module.scss"

interface CardAdvantagesProps {
    h3: string,
    p1:string,
    p2?:string,
}

const CardAdvantages = ({h3, p1, p2}:CardAdvantagesProps) => {
  return (
    <div className={style.cardAdvantagesWrapper}>
        <h3 className={style.h3Style}>
            {h3}
        </h3>
        <p className={style.p1Style}>
            {p1}
        </p>
        {p2 && <p className={style.p2Style}>{p2}</p>} 
    </div>
  )
}

export default CardAdvantages