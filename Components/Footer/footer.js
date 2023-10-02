import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <main className={styles.main}>
        <div className={styles.logoImage}>
            <Image
                src='/whiteLogo.png'
                width={40}
                height={40}
                alt='logo'
                className={styles.whiteLogo}
                />
            <span>HelpMeOut</span>
        </div>

        <div className={styles.footerFlex}>
        <div className={styles.footerHeader}>Menu</div>
        <div className={styles.footerList}>Home</div>
        <div className={styles.footerList}>Converter</div>
        <div className={styles.footerList}>How it works</div>
        </div>

        <div className={styles.footerFlex}>
        <div className={styles.footerHeader}>About us</div>
        <div className={styles.footerList}>About</div>
        <div className={styles.footerList}>Contact us</div>
        <div className={styles.footerList}>Privacy Policy</div>
        </div>

        <div className={styles.footerFlex}>
        <div className={styles.footerHeader}>Screen Record</div>
        <div className={styles.footerList}>Browser Window</div>
        <div className={styles.footerList}>Desktop</div>
        <div className={styles.footerList}>Application</div>
        </div>
    </main>
  )
}