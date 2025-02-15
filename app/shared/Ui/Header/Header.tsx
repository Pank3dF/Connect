import React from 'react'
import Image from 'next/image'
import style from "@/app/shared/Ui/Header/Header.module.scss"


const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <Image src="/MainLogo.png" alt="" width={197} height={47} />
                <ul className={style.navList}>
                    <li>Услуги</li>
                    <li>Цены</li>
                    <li>Акции</li>
                    <li>Контакты</li>

                </ul>
                <ul className={style.navListSocialMedia}>
                    <li className={style.navListSocialMediaItemWApp}><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_725_31221)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3136 22.5938C24.928 23.6853 23.3952 24.5883 22.1728 24.8523C21.336 25.03 20.2448 25.1705 16.568 23.6469C12.4384 21.936 6.704 15.8416 6.704 11.7859C6.704 9.72131 7.8944 7.31719 9.976 7.31719C10.9776 7.31719 11.1984 7.33672 11.528 8.12734C11.9136 9.05883 12.8544 11.3538 12.9664 11.5891C13.4288 12.5542 12.496 13.1191 11.8192 13.9594C11.6032 14.2122 11.3584 14.4857 11.632 14.9563C11.904 15.4172 12.8448 16.9505 14.2272 18.1812C16.0128 19.7721 17.4608 20.28 17.9792 20.4961C18.3648 20.6561 18.8256 20.6189 19.1072 20.318C19.464 19.9323 19.9072 19.2923 20.3584 18.6617C20.6768 18.2104 21.0816 18.154 21.5056 18.3141C21.792 18.4133 25.432 20.1037 25.5856 20.3742C25.6992 20.5711 25.6992 21.5022 25.3136 22.5938ZM16.0032 0H15.9952C7.17439 0 0 7.17656 0 16C0 19.4987 1.12801 22.7445 3.04641 25.3773L1.05281 31.3227L7.20161 29.3578C9.73121 31.0319 12.7504 32 16.0032 32C24.824 32 32 24.8234 32 16C32 7.17656 24.824 0 16.0032 0Z" fill="#333333" />
                        </g>
                        <defs>
                            <clipPath id="clip0_725_31221">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    </li>
                    <li className={style.navListSocialMediaItemTg}>
                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_725_31235)">
                                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="url(#paint0_linear_725_31235)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.24138 15.8319C11.9057 13.7997 15.016 12.46 16.5722 11.8127C21.0156 9.96457 21.9389 9.64353 22.5407 9.63293C22.673 9.63059 22.969 9.6634 23.1607 9.81895C23.3225 9.95029 23.3671 10.1277 23.3884 10.2522C23.4097 10.3768 23.4362 10.6605 23.4151 10.8821C23.1744 13.4121 22.1325 19.5517 21.6024 22.3853C21.3781 23.5843 20.9365 23.9863 20.509 24.0257C19.5798 24.1112 18.8743 23.4116 17.9743 22.8217C16.5661 21.8986 15.7706 21.324 14.4037 20.4232C12.824 19.3822 13.848 18.8101 14.7483 17.875C14.9839 17.6303 19.0778 13.9066 19.157 13.5688C19.1669 13.5266 19.1761 13.3691 19.0825 13.2859C18.989 13.2028 18.8509 13.2312 18.7513 13.2538C18.61 13.2859 16.3604 14.7728 12.0024 17.7146C11.3638 18.1531 10.7855 18.3667 10.2672 18.3555C9.69596 18.3432 8.59704 18.0325 7.78011 17.767C6.77811 17.4413 5.98174 17.2691 6.05108 16.7159C6.0872 16.4278 6.48397 16.1331 7.24138 15.8319Z" fill="#F8F8F8" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_725_31235" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stop-color="var(--start-color, #333333)" />
                                    <stop offset="100%" stop-color="var(--end-color, #333333)" />
                                </linearGradient>
                                <clipPath id="clip0_725_31235">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </li>

                    <li className={style.navListSocialMediaItemVK}>
                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_725_31229)">
                                <mask id="mask0_725_31229" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                                    <path d="M31.8394 0H0.15625V31.6832H31.8394V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_725_31229)">
                                    <path className="vk-path" fill-rule="evenodd" clip-rule="evenodd" d="M2.3834 2.22715C0.15625 4.4543 0.15625 8.03884 0.15625 15.2079V16.4752C0.15625 23.6443 0.15625 27.2289 2.3834 29.456C4.61055 31.6832 8.19509 31.6832 15.3642 31.6832H16.6315C23.8006 31.6832 27.3851 31.6832 29.6123 29.456C31.8394 27.2289 31.8394 23.6443 31.8394 16.4752V15.2079C31.8394 8.03884 31.8394 4.4543 29.6123 2.22715C27.3851 0 23.8006 0 16.6315 0H15.3642C8.19509 0 4.61055 0 2.3834 2.22715ZM5.50285 9.63704C5.67444 17.8747 9.79322 22.8251 17.0144 22.8251H17.4237V18.1123C20.0771 18.3763 22.0836 20.3169 22.8889 22.8251H26.6382C25.6084 19.076 22.902 17.0033 21.2123 16.2113C22.902 15.2344 25.2783 12.8581 25.8459 9.63704H22.4399C21.7006 12.2509 19.5095 14.6271 17.4237 14.8515V9.63704H14.0176V18.7723C11.9054 18.2443 9.2388 15.6832 9.11999 9.63704H5.50285Z" fill="var(--vk-fill-color, #333333)" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_725_31229">
                                    <rect width="32" height="31.6832" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </li>

                </ul>
                <button className={style.buttonCall}>
                    Позвонить
                </button>
            </nav>

        </header>
    )
}

export default Header