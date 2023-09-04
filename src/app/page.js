"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import Social from './components/social'
import styles from './page.module.css'

export default function Page() {

  return (
    <main className={styles.main}>
 
      <div className={styles.description}>
        <p>
          {/* Get started by editing&nbsp; */}
          <code className={styles.code}>
            K Singh
         
          </code>
        </p>
        {/* <div>
          <a
            href="github.com/ksinghofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="./icon.svg"
              alt="ksingh"
              className={styles.vercelLogo}
              width={50}
              height={50}
              priority
            />
          </a>
        </div> */}
        <Social/>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="./icon.svg"
          alt="Next.js Logo"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className={styles.grid}>
      <Link href="/hire">
        <div
          
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            hire me <span>-&gt;</span>
          </h2>
          <p>Hire me from your favorite online freelancing website.</p>
        </div>
</Link>
<Link href="/contact">
        <div
          
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            contact me <span>-&gt;</span>
          </h2>
          <p>Send your Message to me :)</p>
        </div>
        </Link>
        <Link href="/support">
        <div
          
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          support me <span>-&gt;</span>
          </h2>
          <p>Let's Together we make future open source.</p>
        </div>
        </Link>
        <Link href="/portfolio">
        <div
         
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            portfolio <span>-&gt;</span>
          </h2>
          <p>
           Founder of codnap & STREETSFOODS .
          </p>
        </div>
        </Link >
      </div>
    </main>
   );
  }
