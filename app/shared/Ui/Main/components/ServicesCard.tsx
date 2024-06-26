import React from 'react'
import style from '../Main.module.scss'
interface ServicesCardProps {
    p: string
}
const ServicesCard = ({ p }: ServicesCardProps) => {
    return (
        <div className={style.ServicesCardWrapper}>
            <div className={style.svgWrapper}>
                <svg className={style.svgArrow} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill="#E31D77" />
                    <path d="M25.3359 38.6693L38.6693 25.3359" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M25.3359 25.3359H38.6693V38.6693" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>

            <p className={style.pStyle}>{p}</p>
        </div>
    )
}

export default ServicesCard