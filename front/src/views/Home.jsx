import CreationInput from "../components/CreationInput";
import Navbar from "../components/Navbar";

import '../styles/css/Home.css'

function Home() {
  return (
    <div className="home-container">
      <Navbar/>
      <CreationInput/>
    </div>
  );
}

export default Home;
