import Image from 'next/image';

// components
import Header from '../components/Header';

// images
import boosterPic from '../public/images/boosterpumpworkshop.png';
import Footer from '../components/Footer';
import ServiceContent from '../components/Service/ServiceContent';

const Services = () => (
  <div className="min-h-screen w-full bg-white">

    <section id="banner">
      <div className="w-full h-170 pt-6 flex flex-col absolute top-0 z-10">
        <Header />
        <div className="self-center mt-52">
          <h1 className="text-5xl md:text-[3.1rem] md:mb-1 lg:mb-0 lg:text-6xl font-bold text-white">OUR SERVICES</h1>
        </div>
      </div>
      <div className="relative w-full h-170 bg-gray-600">
        <Image
          alt="meeting"
          src={boosterPic}
          layout="fill"
          objectFit="cover"
          className="brightness-35"
          priority
        />
      </div>
    </section>

    <main>
      <section id="services">
        <ServiceContent />
      </section>
    </main>

    <footer>
      <Footer />
    </footer>

  </div>
);

export default Services;
