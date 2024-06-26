import React from 'react'
import style from "@/app/shared/Ui/Main/Main.module.scss"
import GetConsult from './components/GetConsult'
import Advantages from './components/Advantages'
import ButtonForDiscount from './components/ButtonForDiscount'
import Services from './components/Services'
import Stocks from './components/Stocks'
const Main = () => {
  return (
    <main className={style.main}>
        <GetConsult/>
        <Advantages/>
        <ButtonForDiscount/>
        <Services />
        <Stocks/>
    </main>
  )
}

export default Main