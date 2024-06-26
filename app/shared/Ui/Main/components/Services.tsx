import React from 'react'
import style from '../Main.module.scss'
import ServicesCard from './ServicesCard'
import Image from 'next/image'
import Banner from  "@/public/IphoneBanner.png"

const Services = () => {
    return (
        <section className={style.servicesWrapper}>
            <h2 className={style.servicesTitle}>Услуги</h2>
            <div className={style.bannerWithCards}>
                <div className={style.ServicesCardWrapperOnPage}>
                    <ServicesCard p="Ремонт: смартфонов, ноутбуков, планшетов, компьютеров и т.д." />
                    <ServicesCard p="Выкуп и продажа Б/У техники" />
                    <ServicesCard p="Продажа гаджетов и аксессуаров" />
                </div>
                <Image className={style.bannerIphone} src={Banner} width={590} height={489} alt={''}/>
            </div>

        </section>
    )
}

export default Services