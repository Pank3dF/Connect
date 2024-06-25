import React from 'react'
import style from "@/app/shared/Ui/Main/Main.module.scss"
import GetConsult from './components/GetConsult'
import Advantages from './components/Advantages'
const Main = () => {
  return (
    <main className={style.main}>
        <GetConsult/>
        <Advantages/>
    </main>
  )
}

export default Main