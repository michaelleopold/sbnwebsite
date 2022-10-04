/* eslint-disable max-len */
// eslint-disable-next-line import/no-unresolved

import Head from 'next/head';
import Image from 'next/image';

// components
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// public
import boosterPic from '../public/images/boosterpump.png';
import HomeHeaderContent from '../components/Home/HomeHeaderContent';
import HomeServices from '../components/Home/HomeServices';
import HomeExperience from '../components/Home/HomeExperience';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Head>
        <title>Samudera Biru Nusantara</title>
        <meta name="description" content="SBN provide all pumping services from slurry pumping for mud usually coal mines, dewatering pumping usually in coal mines, palm oil mines, to sand pumping for sand construction, dredging, silting of the wharf, silting of the ship's path, others." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="banner">
        <div className="w-full h-170 pt-6 flex flex-col absolute top-0 z-10">
          <Header />
          <HomeHeaderContent />
        </div>

        <div className="relative w-full h-170 bg-gray-600">
          <Image
            alt="booster pump in coal mining"
            src={boosterPic}
            layout="fill"
            objectFit="cover"
            className="brightness-25"
            priority
          />
        </div>
      </section>

      <main>
        <section id="experience">
          <HomeExperience />
        </section>

        <section id="our-services">
          <HomeServices />
        </section>

      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
