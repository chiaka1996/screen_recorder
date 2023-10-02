import Image from 'next/image'
import styles from './page.module.css'
import Footer from '../../Components/Footer/footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.navigation}>
        <div className={styles.iconDiv}>
          <Image 
          src='/iconBold.png' 
          width="40" 
          height="40" 
          alt="helpmeLogo" 
          />
          <div>HelpMeOut</div>
        </div>

        <div className={styles.links}>
          <div>Features</div>
          <div>How it Works</div>
        </div>

        <div className={styles.getStarted}>Get Started</div>
      </nav>

      <section className={styles.heroSection}> 
      <div className={styles.heroFlex1}>
        <div className={styles.heroHeader}>
          Show Them<br/>
          Don't Just Tell
        </div>

        <div className={styles.heroText}>
        Help your friends and loved ones 
        by creating and sending videos on how
         to get things done on a website.
        </div>

        <button>
          Install HelpMeOut
          <Image 
          src='/arrow-right.png' 
          width="20" 
          height="20" 
          alt="arrow"
          className={styles.arrowRight} 
          />
        </button>
      </div>

      <div className={styles.heroFlex2}>
        <div className={styles.imgGrid1}>
          <div className={styles.heroImgContainer}>
          <Image 
          src='/heroImg2.png' 
          fill
          alt="arrow"
          className={styles.heroImg}
          />
          </div>
          <div className={styles.heroImgContainer}>
          <Image 
          src='/heroImg1.png' 
          fill
          alt="arrow"
          className={styles.heroImg}
          />
          </div>
          <Image 
          src='/dots2.png'
          width={330}
          height={313} 
          alt="dots"
          className={styles.dots2}
          />
          
        </div>

        <div className={styles.imgGrid2}>
        <Image 
          src='/dots.png'
          width={330}
          height={313} 
          alt="dots"
          className={styles.dots}
          />

          <div className={styles.heroImgContainer2}>
          <Image 
          src='/heroImg3.png' 
          fill
          alt="arrow"
          className={styles.heroImg}
          />
          </div>

        </div>

      </div>

      </section>
      <div className={styles.demarcation}></div>

      <section className={styles.featuresContainer}>
        <div className={styles.featureHeader}>Features</div>
        <div className={styles.headerText}>Key Highlights of Our Extension</div>

        <div className={styles.explanationContainer}> 
        <div className={styles.explanationFlex1}>
          <div className={styles.featureExplanation}>
           
           <div className={styles.roundedContainer}>
            <Image 
            src='/round.png' 
            width={22}
            height={22}
            alt="circle"
            />
            </div>
          <div className={styles.screenRecorder}>
            <div className={styles.subHeader}>
            Simple Screen Recording
            </div>
            <div className={styles.subText}>
            Effortless screen recording for everyone. 
            Record with ease, no tech expertise required.
            </div>
          </div>

          </div>

          <div className={styles.featureExplanation}>
           
           <div className={styles.roundedContainer}>
            <Image 
            src='/locate.png' 
            width={22}
            height={22}
            alt="circle"
            />
            </div>
          <div className={styles.screenRecorder}>
            <div className={styles.subHeader}>
            Easy-to-Share URL
            </div>
            <div className={styles.subText}>
            Share your recordings instantly
             with a single link. No attachments, no downloads.
            </div>
          </div>

          </div>

          <div className={styles.featureExplanation}>
           <div className={styles.roundedContainer}>
            <Image 
            src='/reload.png' 
            width={22}
            height={22}
            alt="circle"
            />
            </div>
          <div className={styles.screenRecorder}>
            <div className={styles.subHeader}>
            Revisit Recordings
            </div>
            <div className={styles.subText}>
            Access and review your past content effortlessly.
             Your recordings, always at your fingertips.
            </div>
          </div>

          </div>
        </div>

        <div className={styles.explanationFlex2}>
        <Image 
            src='/video.png' 
            fill
            alt="video"
            />
        </div>

        </div>

      </section>
      <div className={styles.demarcation}></div>

      <section className={styles.featuresContainer}>
      <div className={styles.featureHeader}>How it works</div>

      <div className={styles.howItWorksFlex}>
        <div className={styles.howFlex}>
          <div className={styles.number}>1</div>
          <div className={styles.howSubHeader}>
            Record Screen
          </div>

          <div className={styles.howExplanation}>
          Click the "Start Recording" button in our extension.  
          choose which part of your screen to capture and who 
          you want to send it to.
          </div>
        </div>
        <div className={styles.howFlex}>
        <div className={styles.number}>2</div>
          <div className={styles.howSubHeader}>
          Share Your Recording
          </div>

          <div className={styles.howExplanation}>
          We generate a shareable link for your video. 
          Simply send it to your audience via email or copy the link to 
          send via any platform.
          </div>
        </div>
        <div className={styles.howFlex}>
        <div className={styles.number}>3</div>
          <div className={styles.howSubHeader}>
          Learn Effortlessly
          </div>

          <div className={styles.howExplanation}>
          Recipients can access your video effortlessly 
          through the provided link, 
          with our user-friendly interface suitable for everyone.
          </div>
        </div>
      </div>
      </section>
      <Footer />
    </main>
  )
}
