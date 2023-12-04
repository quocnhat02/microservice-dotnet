import styles from "./page.module.css"

export default function Home() {
  return (
    <section>
      <div className='container'>
        <p className={`${styles.title}`}>Hello World</p>
      </div>
    </section>
  )
}
