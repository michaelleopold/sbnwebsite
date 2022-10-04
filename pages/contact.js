// components
import ContactInformations from '../components/Contact/ContactInformations';
import ContactLocation from '../components/Contact/ContactLocation';
import ContactMessage from '../components/Contact/ContactMessage';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => (
  <div className="min-h-screen w-full bg-white">

    <section id="banner">
      <div className="w-full h-170 pt-6 flex flex-col absolute top-0 z-10">
        <Header />
        <div className="flex flex-col items-center mt-52">
          <h1 className="text-center text-5xl md:text-[3.1rem] lg:text-6xl font-bold text-white mb-5">CONTACT INFORMATIONS</h1>
          <h3 className="text-center text-lg md:text-[1.4rem] md:mb-1 lg:mb-0 lg:text-2xl font-extralight text-white w-110 md:w-150 lg:w-[42rem]">
            Looking for All in One Pump Provider Solution?
            You found it here.
          </h3>
        </div>
        <a href="http://api.whatsapp.com/send?phone=6285251455565" className="self-center rounded-md shadow-lg flex justify-center items-center bg-whatsapp hover:opacity-60 active:opacity-20 w-fit py-2 px-6 space-x-3 cursor-pointer transition-all mt-6">
          <h1 className="font-bold text-white">Contact Us</h1>
          <img src='/icons/whatsapp-white.png' alt="whatsapp" className="w-7" />
        </a>
      </div>
      <div className="relative w-full h-170 bg-gray-600">
        <img src="./images/contactus.jpg" alt="contact us" className="brightness-35 w-full h-full object-cover" />
      </div>
    </section>

    <main>
      <section id="informations">
        <ContactInformations />
      </section>

      <section id="message" className="xl:hidden">
        <ContactMessage />
      </section>

      <section id="location">
        <ContactLocation />
      </section>
    </main>

    <footer>
      <Footer />
    </footer>

  </div>
);

export default Contact;
