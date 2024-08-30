import './App.css';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';
import ProjectCard from './projects/projectcard'
import Header from './headerbottom/header';
import AboutProject from './body/aboutproject';
import AboutMe from './body/aboutme';
import ServicesCard from './body/servicescard'
function App() {  
  return (
    <>
      <NavBar />
      <Header/>
      <AboutMe></AboutMe>
      <h1 className='services'>Services</h1>
      <ServicesCard/>
      <AboutProject/>
      <ProjectCard/>  
      <Footer></Footer>
    </>
  );
}

export default App;
