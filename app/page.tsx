import  "./global.scss"
import style from "./page.module.scss"
import Header from "./shared/Ui/Header"

const MainPage = () => {
  return (
    <section className={style.wrapper}>
      <Header/>
    </section>
  )
}

export default MainPage