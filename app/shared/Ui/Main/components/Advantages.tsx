import style from "../Main.module.scss"
import CardAdvantages from "./CardAdvantages"

const Advantages = () => {
  return (
    <section className={style.advantagesWrapper}>
      <h2 className={style.h2TextAdvantages}>
        Преимущества
      </h2>
      <div className={style.advantagesText}>
        <CardAdvantages h3="Скорость" p1="Доставка любой модели техники с нашего склада за 2 часа" p2="Ремонт устройств за 15 минут" />
        <CardAdvantages h3="Обратная связь" p1="С нами можно связаться в соцсетях и чатах, на сайте и по телефону:" p2="+7 (909) 40 40 140" />
        <CardAdvantages h3="Универсальность" p1="Мы занимаемся продажей и ремонтом: смартфонов, планшетов, ноутбуков, ПК,игровых приставок, любых брендов"  />
      </div>
    </section>
  )
}

export default Advantages