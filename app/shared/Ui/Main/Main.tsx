import React from 'react'
import style from "@/app/shared/Ui/Main/Main.module.scss"
import GetConsult from './components/GetConsult'
import Advantages from './components/Advantages'
import ButtonForDiscount from './components/ButtonForDiscount'
import Services from './components/Services'
import Stocks from './components/Stocks'
import LinkWithUs from '@/app/enteties/User/LinkWithUs'
import Footer from '../Footer/Footer'
const Main = () => {
  return (
    <main className={style.main}>
      <GetConsult />
      <Advantages />
      <ButtonForDiscount />
      <Services />
      <Stocks />
      <div className={style.contacts}>
        <h2>Контакты</h2>
        <div className={style.footerDesktop}>
          <LinkWithUs h3="Связаться с нами" />
          <Footer />
        </div>
      </div>
    </main>
  )
}

export default Main