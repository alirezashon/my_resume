'use client'
import Image from 'next/image'
import styles from './index.module.css'
import {
  FaBook,
  FaChrome,
  FaLaptopCode,
  FaLinkedin,
  FaMailBulk,
  FaMapMarkedAlt,
  FaPhone,
  FaWalking,
} from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import { Chart } from 'chart.js/auto'
import { doughnutConfig, lineConfig } from '../Chart/config'
import { texts } from './text'

const Resumali = () => {
  const [language, setLanguage] = useState<'fa' | 'en' | 'ar'>('ar')

  const doughnutRef = useRef<HTMLCanvasElement>(null)
  const lineRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const doughnutCTX = doughnutRef.current?.getContext('2d')
    const lineCTX = lineRef.current?.getContext('2d')
    if (!doughnutCTX || !lineCTX) return
    const doughnutChart = new Chart(doughnutCTX, doughnutConfig)
    const lineChart = new Chart(lineCTX, lineConfig)
    return () => {
      doughnutChart.destroy()
      lineChart.destroy()
    }
  }, [])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
        <div className={styles.languageSwitch}>
          <div onClick={() => setLanguage('fa')}>فارسی</div>
          <div onClick={() => setLanguage('en')}>English</div>
          <div onClick={() => setLanguage('ar')}>العربية</div>
        </div>
          <h1>{texts.name[language]}</h1>
          <h6>{texts.jobTitle[language]}</h6>
        </div>
        <Image
          className={styles.akbarimage}
          src={'/akbariovich.jpg'}
          alt='Alireza Akbari (web-developer[react,node,next,nest,go,python].include(dev))'
          width={333}
          height={333}
        />
        <div className={styles.body}>
          <div className={styles.expirence}>
            <h1>{texts.experienceTitle[language]}</h1>
            <h5 className={styles.years} style={{ fontSize: '4vh' }}>
              {texts.workExperience[language]}
              <p>{texts.years[language]}</p>
              <a className={styles.numbero}>4</a>
            </h5>
            <div>
              <span className={styles.numbero}> 2 </span>
              {texts.years[language]}
            </div>
            <li>{texts.mobinnetJob1[language]}</li>
            <div>
              <span className={styles.numbero}> 2 </span>
              {texts.years[language]}
            </div>
            <li>{texts.mobinnetJob2[language]}</li>
            <FaMapMarkedAlt size={'6vh'} className={styles.icon} />
            <h5>{texts.tehranBorn[language]}</h5>
          </div>
          <div className={styles.personal}>
            <h1>{texts.personalityTitle[language]}</h1>
            <p>{texts.personalityDesc[language]}</p>
            <div className={styles.personalIcons}>
              <FaBook size={'4vh'} className={styles.icon} />
              <FaLaptopCode size={'4vh'} className={styles.icon} />
              <FaWalking size={'4vh'} className={styles.icon} />
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.contactRow}>
              <p>
                <a>
                  {texts.contact[language]}
                  <FaMailBulk
                    size={'4vh'}
                    onClick={() =>
                      navigator.clipboard.writeText('akbariovich@gmail.com')
                    }
                    className={styles.icon}
                  />
                </a>
                akbariovich@gmail.com
              </p>
            </div>
            <div className={styles.contactRow}>
              <p
                style={{ cursor: 'pointer' }}
                onClick={() => window.open('https://akbariovich.ir')}
              >
                <a>
                  {texts.website[language]}
                  <FaChrome size={'4vh'} className={styles.icon} />
                </a>
                https://akbariovich.ir
              </p>
            </div>
            <div className={styles.contactRow}>
              <p
                onClick={() =>
                  window.open(
                    'https://ir.linkedin.com/in/alireza-akbari-21a318250'
                  )
                }
              >
                {texts.phone[language]}
                <FaPhone size={'4vh'} className={styles.icon} />
                09332343466
              </p>
              <p
                onClick={() =>
                  window.open(
                    'https://ir.linkedin.com/in/alireza-akbari-21a318250'
                  )
                }
              >
                {texts.linkedin[language]}
                <FaLinkedin size={'4vh'} className={styles.icon} />
              </p>
            </div>
          </div>
          <div className={styles.ShortBio}>
            <h1>{texts.bioTitle[language]}</h1>
            <p>{texts.bioDesc[language]}</p>
          </div>
          <div className={styles.Education}>
            <h1>{texts.educationTitle[language]}</h1>
            <p className={styles.numbero}>1401 - 1403</p>
            <p>{texts.iranianUni[language]}</p>
            <Image
              className={styles.educationImage}
              src={'/iranian.png'}
              onClick={() => window.open('https://iranian.ac.ir/')}
              alt='دانشگاه ایرانیان رشته تحصیلی مهندسی نرم افزار - تحصیلات آکادمیک'
              width={999}
              height={333}
            />
            <p className={styles.numbero}>1399 - 1401</p>
            <p>
              {texts.shamsiUni[language]}
              <Image
                className={styles.shamsImage}
                src={'/shamsikhanom.png'}
                onClick={() => window.open('https://shamsipour.tvu.ac.ir/')}
                alt='دانشگاه شمسی پور رشته تحصیلی فناوری اطلاعات - تحصیلات آکادمیک'
                width={999}
                height={333}
              />
            </p>
          </div>
          <div className={styles.Expertise}>
            <h3>{texts.skillsTitle[language]}</h3>
            <canvas className={styles.charto} ref={lineRef} height={'220%'} />
          </div>
          <div className={styles.SoftwareSkills}>
            <h2>{texts.softwareSkillsTitle[language]}</h2>
            <div className={styles.charto}>
              <canvas className={styles.charto} ref={doughnutRef} />
            </div>
          </div>
          <div className={styles.remote}>
            <h2>{texts.remoteWork[language]}</h2>
            <Image
              className={styles.worldImage}
              src={'/world-map.jpg'}
              alt='Alireza Akbari (web-developer[react,node,next,nest,go,python].include(dev))'
              width={2222}
              height={2221}
            />
          </div>
        </div>
       
      </div>
    </>
  )
}
export default Resumali

// "use client"
// import Image from "next/image"
// import styles from "./index.module.css"
// import {
//   FaBook,
//   FaChrome,
//   FaLaptopCode,
//   FaLinkedin,
//   FaMailBulk,
//   FaMapMarkedAlt,
//   FaPhone,
//   FaWalking,
// } from "react-icons/fa"
// import { useEffect, useRef } from "react"
// import { Chart } from "chart.js/auto"
// import { doughnutConfig, lineConfig } from "../Chart/config"
// const Resumali = () => {
//   const doughnutRef = useRef<HTMLCanvasElement>(null)
//   const lineRef = useRef<HTMLCanvasElement>(null)
//   useEffect(() => {
//     const doughnutCTX = doughnutRef.current?.getContext("2d")
//     const lineCTX = lineRef.current?.getContext("2d")
//     if (!doughnutCTX || !lineCTX) return
//     const doughnutChart = new Chart(doughnutCTX, doughnutConfig)
//     const lineChart = new Chart(lineCTX, lineConfig)
//     return () => {
//       doughnutChart.destroy()
//       lineChart.destroy()
//     }
//   }, [])
//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.header}>
//           <h1>علیرضا اکبری</h1>
//           <h6>فول استک جاوا اسکریپت</h6>
//         </div>
//         <Image
//           className={styles.akbarimage}
//           src={"/akbariovich.jpg"}
//           alt='Alireza Akbari (web-developer[react,node,next,nest,go,python].include(dev))'
//           width={333}
//           height={333}
//         />
//         <div className={styles.body}>
//           <div className={styles.expirence}>
//             <h1>توسعه دهنده وب</h1>
//             <h5 className={styles.years} style={{ fontSize: "4vh" }}>
//               تجربه کاری
//               <p>سال</p>
//               <a className={styles.numbero}>4</a>
//             </h5>
//             <div>
//               به مدت
//               <span className={styles.numbero}> 2 </span>
//               سال
//             </div>
//             <li>کارشناس طرح و توسعه سامانه ها در مبین نت</li>
//             <div>
//               به مدت
//               <span className={styles.numbero}> 2 </span>
//               سال
//             </div>
//             <li>تکنسین شبکه در پیمانکاری مبین نت</li>
//             <FaMapMarkedAlt size={"6vh"} className={styles.icon} />
//             <h5>متولد و ساکن تهران</h5>
//           </div>
//           <div className={styles.personal}>
//             <h1>شخصیت شناسی</h1>
//             <p>
//               من ذهن توانمند و خلاقی دارم و همیشه برای هر نیازمندی آماده
//               هستم.نویسنده خوبی هستم. ورزش و پیاده روی را دوست دارم. آشنایی با
//               تکنولوژی های جدید ، ابزار ها و زبان ها و ساختارها برایم لذت بخش
//               است.
//             </p>
//             <div className={styles.personalIcons}>
//               <FaBook size={"4vh"} className={styles.icon} />
//               <FaLaptopCode size={"4vh"} className={styles.icon} />
//               <FaWalking size={"4vh"} className={styles.icon} />
//             </div>
//           </div>
//           <div className={styles.contact}>
//             <div className={styles.contactRow}>
//               <p>
//                 <a>
//                   ایمیل
//                   <FaMailBulk
//                     size={"4vh"}
//                     onClick={() =>
//                       navigator.clipboard.writeText("akbariovich@gmail.com")
//                     }
//                     className={styles.icon}
//                   />
//                 </a>
//                 akbariovich@gmail.com
//               </p>
//             </div>
//             <div className={styles.contactRow}>
//               <p
//                 style={{ cursor: "pointer" }}
//                 onClick={() => window.open("https://akbariovich.ir")}
//               >
//                 <a>
//                   وب
//                   <FaChrome size={"4vh"} className={styles.icon} />
//                 </a>
//                 https://akbariovich.ir
//               </p>
//             </div>
//             <div className={styles.contactRow}>
//               <p
//                 onClick={() =>
//                   window.open(
//                     "https://ir.linkedin.com/in/alireza-akbari-21a318250"
//                   )
//                 }
//               >
//                 تلفن
//                 <FaPhone size={"4vh"} className={styles.icon} />
//                 09332343466
//               </p>
//               <p
//                 onClick={() =>
//                   window.open(
//                     "https://ir.linkedin.com/in/alireza-akbari-21a318250"
//                   )
//                 }
//               >
//                 لینکدین
//                 <b /> <FaLinkedin size={"4vh"} className={styles.icon} />
//               </p>
//             </div>
//           </div>
//           <div className={styles.ShortBio}>
//             <h1>بیوگرافی</h1>
//             <p>
//               در مدرسه رشته کامپیوتر را انتخاب کردم و با ساختار برنامه نویسی و
//               مفاهیم پایه از زمان آشنا شدم. برای قبولی در دانشگاه تلاش کردم و
//               توانستم کنکور را با موفقیت پشت سر بگذارم. در آن زمان به عنوان
//               تکنسین شبکه در یک شرکت پیمانکاری مشغول به کار بودم که به دلیل
//               علاقه به نرم افزار گرایش رشته تحصیلی خودم را تغییر دادم. شغلم را
//               ترک کردم و مداوم در حال یادگیری زبان های مختلف شدم تا مسیر خود را
//               پیدا کردم. مدتی درگیر پیدا کردن شغل بودم که یک ایده نرم افزاری
//               برای بهبود کاری که در گذشته داشتم به ذهنم رسید و با ساختن یک دمو
//               از آن در تلاش ارائه به مسئولین مربوطه شدم. بعد از اولین مصاحبه
//               توانستم در واحد فناوری اطلاعات سازمان مبین نت استخدام شوم.
//             </p>
//           </div>
//           <div className={styles.Education}>
//             <h1>تحصیلات</h1>
//             <p className={styles.numbero}>1401 - 1403</p>
//             <p>مهندسی نرم افزار در دانشگاه ایرانیان</p>
//             <Image
//               className={styles.educationImage}
//               src={"/iranian.png"}
//               onClick={() => window.open("https://iranian.ac.ir/")}
//               alt='دانشگاه ایرانیان رشته تحصیلی مهندسی نرم افزار - تحصیلات آکادمیک'
//               width={999}
//               height={333}
//             />
//             <p className={styles.numbero}>1399 - 1401</p>
//             <p>
//               فناوری اطلاعات در دانشگاه شمسی پور
//               <Image
//                 className={styles.shamsImage}
//                 src={"/shamsikhanom.png"}
//                 onClick={() => window.open("https://shamsipour.tvu.ac.ir/")}
//                 alt='دانشگاه شمسی پور رشته تحصیلی فناوری اطلاعات - تحصیلات آکادمیک'
//                 width={999}
//                 height={333}
//               />
//             </p>
//           </div>
//           <div className={styles.Expertise}>
//             <h3>مهارت های من</h3>
//             <canvas className={styles.charto} ref={lineRef} height={"220%"} />
//           </div>
//           <div className={styles.SoftwareSkills}>
//             <h2>توانمندی در زبان های برنامه نویسی</h2>
//             <div className={styles.charto}>
//               <canvas className={styles.charto} ref={doughnutRef} />
//             </div>
//           </div>
//           <div className={styles.remote}>
//             <h2>Can Remote work</h2>
//             <Image
//               className={styles.worldImage}
//               src={"/world-map.jpg"}
//               alt='Alireza Akbari (web-developer[react,node,next,nest,go,python].include(dev))'
//               width={2222}
//               height={2221}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
// export default Resumali
