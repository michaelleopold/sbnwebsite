import Footer from '../components/Footer';

// components
import Header from '../components/Header';
import ProjectListVertical from '../components/Project/ProjectListVertical';

const Projects = () => (
  <div className="min-h-screen w-full bg-white">

    <section id="banner">
      <div className="w-full h-170 pt-6 flex flex-col absolute top-0 z-10">
        <Header />
        <div className="self-center mt-52">
          <h1 className="text-5xl md:text-[3.1rem] md:mb-1 lg:mb-0 lg:text-6xl font-bold text-white">OUR PROJECTS</h1>
        </div>
      </div>
      <div className="relative w-full h-170 bg-gray-600">
        <img src="./images/pipepumpinstallment.jpg" alt="hdpe pipe installment" className="brightness-35 w-full h-full object-cover" />
      </div>
    </section>

    <main>
      <section id="listProjects">
        <ProjectListVertical />
      </section>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default Projects;
