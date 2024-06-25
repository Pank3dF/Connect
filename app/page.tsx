import  "./global.scss"
import style from "./page.module.scss"
import Header from "./shared/Ui/Header/Header"
import Main from "./shared/Ui/Main/Main"

const MainPage = () => {
  return (
    <section className={style.wrapper}>
      <Header/>
      <Main/>
    </section>
  )
}

export default MainPage