import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoaderSpinner from "./UI/LoaderSpinner";
import { useFetch } from "./components/useFetch";


function App() {
  const [userData] = useFetch(
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
  );

  if (!userData || !userData.user) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <LoaderSpinner />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero
        user={userData.user.about}
        social_handles={userData.user.social_handles}
      />
      <About user={userData.user.about} />
      <Services
        services={userData.user.services}
        subtitle={userData.user.about.subTitle}
      />
      <Skills skills={userData.user.skills} />
      <Projects projects={userData.user.projects} />
      <Resume timeline={userData.user.timeline} />
      <Testimonials testimonials={userData.user.testimonials} />
      <Contact user={userData.user.about} />
      <Footer />
    </div>
  );
}

export default App;
