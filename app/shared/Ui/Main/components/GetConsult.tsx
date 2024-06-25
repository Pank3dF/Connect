import React from 'react'
import style from '../Main.module.scss'

const GetConsult = () => {
    return (
        <section className={style.getConsultWrapper}>
            <h2 className={style.getConsultTitle}>
                Сеть комплексных сервисных центров по ремонту электроники
            </h2>
            <p className={style.getConsultText}>Решим Ваш вопрос о цифровой технике - от покупки до ремонта или продажи</p>
            <button className={style.getConsultButton}>
                Получить консультацию
            </button>
        </section>
    )
}

export default GetConsult