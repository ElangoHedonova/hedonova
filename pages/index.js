import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import home_page_1 from "../public/images/home/home_page_1.webp";
import home_page_2 from "../public/images/home/home_page_2.webp";
import home_page_3 from "../public/images/home/home_page_3.webp";
import home_page_4 from "../public/images/home/home_page_4.webp";
import home_page_5 from "../public/images/home/home_page_5.webp";
import home_page_6 from "../public/images/home/home_page_6.webp";
import home_page_7 from "../public/images/home/home_page_7.webp";
import home_page_8 from "../public/images/home/home_page_8.webp";
import home_page_9 from "../public/images/home/home_page_9.webp";
import home_page_10 from "../public/images/home/home_page_10.jpeg";

export default function Home() {
  console.log(styles);
  return (
    <>
      <Head>
        <title>
          Best Alternative Investment Firm | Alternative Asset Investments -
          Hedonova
        </title>
        <meta
          name="description"
          content="Hedonova is the best alternative investment firm that invests in alternative assets like art, startups, equities, wine, and more. Start investing with $1000."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.header_title}>
          12+ modern asset classes in one fund
        </h1>
        <div className={styles.button_container}>
          <button className={`button button_outline ${styles.book_call}`}>
            Book a call
          </button>
          <button className={`button button_primary ${styles.start_investing}`}>
            Start investing with $1000
          </button>
        </div>
      </header>
      <section className={styles.general_info}>
        <h2 className={styles.general_info_heading}>
          Think mutual fund, but for alternative assets
        </h2>
        <p className={styles.general_info_paragraph}>
          Art, wine, crypto, equipment finance, P2P lending and so many more -
          there are more alternative assets than stocks listed on the NYSE.
          There are funds for stocks, now there's one for alternative
          investments.
        </p>
      </section>
      <section className={styles.asset_listings}>
        <div
          className={`${styles.asset_listing} ${styles.asset_listing_type_one}`}
        >
          <div
            className={`${styles.asset_listing_left}`}
            style={{ position: "relative" }}
          >
            <div>
              <Image
                src={home_page_1}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
                layout="fill"
              />
            </div>
          </div>
          <div
            className={`${styles.asset_listing_right}`}
            style={{ backgroundColor: "#1c1818" }}
          >
            <h2 className={`${styles.secondary_heading}`}>
              Open to US and international investors
            </h2>
            <h4 className={`${styles.paragraph}`}>Explore the portfolio</h4>
          </div>
        </div>
        {/* Listing */}
        <div
          className={`${styles.asset_listing} ${styles.asset_listing_type_two}`}
        >
          <div
            className={`${styles.asset_listing_left}`}
            style={{ position: "relative" }}
          >
            <div>
              <Image
                src={home_page_2}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
                layout="fill"
              />
            </div>
          </div>
          <div
            className={`${styles.asset_listing_right}`}
            style={{ backgroundColor: "#1d252d" }}
          >
            <h2 className={`${styles.secondary_heading}`}>
              Open to US and international investors
            </h2>
            <h4 className={`${styles.paragraph}`}>Explore the portfolio</h4>
          </div>
        </div>
        <div
          className={`${styles.asset_listing} ${styles.asset_listing_type_one}`}
        >
          <div
            className={`${styles.asset_listing_left}`}
            style={{ position: "relative" }}
          >
            <div>
              <Image
                src={home_page_3}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
                layout="fill"
              />
            </div>
          </div>
          <div
            className={`${styles.asset_listing_right}`}
            style={{ backgroundColor: "#414752" }}
          >
            <h2 className={`${styles.secondary_heading}`}>
              Open to US and international investors
            </h2>
            <h4 className={`${styles.paragraph}`}>Explore the portfolio</h4>
          </div>
        </div>
        <div
          className={`${styles.asset_listing} ${styles.asset_listing_type_two}`}
        >
          <div
            className={`${styles.asset_listing_left}`}
            style={{ position: "relative" }}
          >
            <div>
              <Image
                src={home_page_4}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
                layout="fill"
              />
            </div>
          </div>
          <div
            className={`${styles.asset_listing_right}`}
            style={{ backgroundColor: "#38454e" }}
          >
            <h2 className={`${styles.secondary_heading}`}>
              Open to US and international investors
            </h2>
            <h4 className={`${styles.paragraph}`}>Explore the portfolio</h4>
          </div>
        </div>
        <div
          className={`${styles.asset_listing} ${styles.asset_listing_type_one}`}
        >
          <div
            className={`${styles.asset_listing_left}`}
            style={{ position: "relative" }}
          >
            <div>
              <Image
                src={home_page_5}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
                layout="fill"
              />
            </div>
          </div>
          <div
            className={`${styles.asset_listing_right}`}
            style={{ backgroundColor: "#152a41" }}
          >
            <h2 className={`${styles.secondary_heading}`}>
              Open to US and international investors
            </h2>
            <h4 className={`${styles.paragraph}`}>Explore the portfolio</h4>
          </div>
        </div>
        <div
          className={`${styles.asset_listing} ${styles.asset_listing_type_two}`}
        >
          <div
            className={`${styles.asset_listing_left}`}
            style={{ position: "relative" }}
          >
            <div>
              <Image
                src={home_page_6}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
                layout="fill"
              />
            </div>
          </div>
          <div
            className={`${styles.asset_listing_right}`}
            style={{ backgroundColor: "#4e5624" }}
          >
            <h2 className={`${styles.secondary_heading}`}>
              Open to US and international investors
            </h2>
            <h4 className={`${styles.paragraph}`}>Explore the portfolio</h4>
          </div>
        </div>
        <div
          className={`${styles.asset_listing} ${styles.asset_listing_type_one}`}
        >
          <div
            className={`${styles.asset_listing_left}`}
            style={{ position: "relative" }}
          >
            <div>
              <Image
                src={home_page_7}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
                layout="fill"
              />
            </div>
          </div>
          <div
            className={`${styles.asset_listing_right}`}
            style={{ backgroundColor: "#382c0e" }}
          >
            <h2 className={`${styles.secondary_heading}`}>
              Open to US and international investors
            </h2>
            <h4 className={`${styles.paragraph}`}>Explore the portfolio</h4>
          </div>
        </div>
        <div
          className={`${styles.asset_listing} ${styles.asset_listing_type_two}`}
        >
          <div
            className={`${styles.asset_listing_left}`}
            style={{ position: "relative" }}
          >
            <div>
              <Image
                src={home_page_8}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
                layout="fill"
              />
            </div>
          </div>
          <div
            className={`${styles.asset_listing_right}`}
            style={{ backgroundColor: "#1e252d" }}
          >
            <h2 className={`${styles.secondary_heading}`}>
              Open to US and international investors
            </h2>
            <h4 className={`${styles.paragraph}`}>Explore the portfolio</h4>
          </div>
        </div>
        <div
          className={`${styles.asset_listing} ${styles.asset_listing_type_one}`}
        >
          <div
            className={`${styles.asset_listing_left}`}
            style={{ position: "relative" }}
          >
            <div>
              <Image
                src={home_page_9}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
                layout="fill"
              />
            </div>
          </div>
          <div
            className={`${styles.asset_listing_right}`}
            style={{ backgroundColor: "#5a1d25" }}
          >
            <h2 className={`${styles.secondary_heading}`}>
              Open to US and international investors
            </h2>
            <h4 className={`${styles.paragraph}`}>Explore the portfolio</h4>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </>
  );
}

// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }
