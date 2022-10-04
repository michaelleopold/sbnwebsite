import Image from 'next/image';
import Footer from '../components/Footer';

// components
import Header from '../components/Header';
import AboutUs from '../components/About/AboutUs';

// images
import meetingPic from '../public/images/meeting.jpg';
import AboutVisi from '../components/About/AboutVisi';
import AboutMisi from '../components/About/AboutMisi';

const About = () => (
  <div className="min-h-screen w-full bg-white">
    <section id="banner">
      <div className="w-full h-170 pt-6 flex flex-col absolute top-0 z-10">
        <Header />
        <div className="mt-52 flex flex-col items-center px-4">
          <h1 className="text-5xl md:text-[3.1rem] lg:text-6xl font-bold text-white mb-5">ABOUT US</h1>
          <h3 className="text-center text-lg md:text-[1.4rem] md:mb-1 lg:mb-0 lg:text-2xl font-extralight text-white w-110 md:w-150 lg:w-[42rem]">PT. Samudera Biru Nusantara has been established since 2000 and has been operating until now.</h3>
        </div>
      </div>
      <div className="relative w-full h-170 bg-gray-600">
        <Image
          alt="meeting"
          src={meetingPic}
          layout="fill"
          objectFit="cover"
          className="brightness-35"
          priority
        />
      </div>
    </section>

    <main>
      <section>
        <AboutUs />
      </section>

      <section id="visi">
        <AboutVisi />
      </section>

      <section id="misi">
        <AboutMisi />
      </section>

      {/* <section id="board">
        <div className="w-full h-100 bg-white">
          <h1>Board</h1>
        </div>
      </section> */}
    </main>

    <footer>
      <Footer />
    </footer>

  </div>
);

export default About;
