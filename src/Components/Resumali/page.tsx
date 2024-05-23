import Image from "next/image"
import styles from "./index.module.css"
import { FaBook, FaMapMarkedAlt, FaWalking } from "react-icons/fa"

const Resumali = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Alireza Akbari</h1>
          <h6>Full Stack Developer</h6>
        </div>
          <Image
          className={styles.akbarimage}
            src={"/akbariovich.jpg"}
            alt='Alireza Akbari (web-developer[react,node,next,nest,go,python].include(dev))'
            width={333}
            height={333}
          />

        <div className={styles.body}>
          <div className={styles.expirence}>
            <h1>Web developer</h1>
            <h1>2 Years</h1>
            <h6>work experience as a support and software developer</h6>
            <FaMapMarkedAlt />
            <h2>Live in Tehran Since 2001</h2>
          </div>
          <div className={styles.personal}>
            <h1>PERSONAL</h1>
            <p>
              I have a powerful and creative mind and I always ready for any
              requirement. Despite having an introverted personality, I’m
              humorous and can be happy alone. I have a creative mindset and in
              the future, I will become a good writer with more experience
            </p>
            <FaWalking />
            <FaBook />
          </div>
          <div className={styles.contact}>
            Email: akbariovich@gmail.com Website https://akbariovich.ir Phone
            09332343466 LinkedIn lihttps://www.linkedin.com/in/
            alireza-akbari-21a318250/
            https://objkt.com/users/tz1cSMYy1QmsGedZezt7dE7jp sRmAqHPYEDF
          </div>
          <div className={styles.ShortBio}>
            <h1>Short Bio</h1>
            <p>
              Two years of work experience as a network technician in the field
              of creating and supporting private network connections. I talented
              in coding and I love JS. I like meeting new technologies ,
              Traading and marketing. I’m looking for a new position as my job
              in developing web apps. I met with many things and I can learn any
              thing that I want .
            </p>
          </div>
          <div className={styles.Education}>
            2021 School Iranian Software Engineering 2019 Studying at Shamsipor
            Information technology 2016 Studying at School computer
          </div>
          <div className={styles.Expertise}></div>
          <div className={styles.SoftwareSkills}>
            <h1>Software Skills</h1>
          </div>
          <div className={styles.remote}>
            <h2>Can Remote work</h2>
          </div>
        </div>
      </div>
    </>
  )
}
export default Resumali
