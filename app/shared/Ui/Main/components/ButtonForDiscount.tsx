import React from 'react'
import style from '../Main.module.scss'
const ButtonForDiscount = () => {
    return (
        <section className={style.buttonForDiscountWrapper}>
            <p className={style.textButtonDiscount}>
                Потратьте 30 секунд своего времени и получите скидку до 20%
            </p>
            <button className={style.buttonForDiscount}>
                <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_725_31048)">
                        <circle cx="32" cy="32" r="32" transform="matrix(-1 0 0 1 76 12)" fill="white" />
                    </g>
                    <path d="M37.3359 50.6693L50.6693 37.3359" stroke="var(--svg-stroke-color, #E31D77)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M37.3359 37.3359H50.6693V50.6693" stroke="var(--svg-stroke-color, #E31D77)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <filter id="filter0_d_725_31048" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="6" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.156858 0 0 0 0 0.181932 0 0 0 0 0.270833 0 0 0 0.15 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_725_31048" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_725_31048" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </button>
 
        </section>
    )
}

export default ButtonForDiscount