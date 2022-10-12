import CreationInput from "../components/CreationInput";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

import '../styles/css/Home.css'

function Home() {
  return (
    <div className="home-container">
      <Navbar/>
      <CreationInput/>
      <Footer/>
    </div>
  );
}

export default Home;
