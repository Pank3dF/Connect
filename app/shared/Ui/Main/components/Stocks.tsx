import style from "../Main.module.scss"
import Image from "next/image"
import BannerImage from "@/public/StocksFirtBannerImage.png"
import VK from "@/public/VK.png"
import Telegramm from "@/public/Telegram.png"
import Wapp from "@/public/Whatsapp.png"
import Helix from "@/public/Helix.png"
import Knot from "@/public/Knot.png"
import Table from "@/public/Table.png"
const Stocks = () => {
    return (
        <section className={style.stocksWrapper}>
            <h2 className={style.stocksTitle}>
                Акции
            </h2>
            <div className={style.bannersWrapper}>

                <div className={style.bannersWithStocks}>
                    <div className={style.giftBanner}>
                        <h3 className={style.giftBannerTitle}>
                            Дарим подарки
                        </h3>
                        <p className={style.giftBannerText}>
                            При замене дисплея или стекла по промокоду &quot;GIFT 3D&quot; защитное стекло наклеим в подарок (при наличии).
                        </p>
                        <Image className={style.giftBannerImage} src={BannerImage} alt={""} />
                    </div>
                </div>
                <div className={style.bannersWithStocksSecond}>
                    <div className={style.giftBannerSecond}>
                        <h3 className={style.giftBannerTitleSecond}>
                            Скидки подписчикам
                        </h3>
                        <p className={style.giftBannerTextSecond}>
                            У подписчиков наших соцсетей есть доп. скидки и бесплатная поклейка защитных стекл.
                        </p>
                    </div>
                        <div className={style.socialLinks}>
                            <Image src={Telegramm} alt={""} />
                            <Image src={VK} alt={""} />
                            <Image  src={Wapp} alt={""} />
                        </div>
                </div>
                <div className={style.bannersWithStocksThird}>
                    <div className={style.giftBannerThird}>
                        <h3 className={style.giftBannerTitleThird}>
                        Бесплатная диагностика
                        </h3>
                        <p className={style.giftBannerTextThird}>
                        Бесплатная диагностика смартфонов, без каких-либо условий, мелкого шрифта и звездочек.
                        </p>
                    </div>
                        <div >
                            <Image className={style.Helix} src={Helix} alt={""} />
                            <Image className={style.Knot} src={Knot} alt={""} />
                            <Image className={style.Table}  src={Table} alt={""} />
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Stocks