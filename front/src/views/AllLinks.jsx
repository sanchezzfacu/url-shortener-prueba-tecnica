import { useState, useEffect } from "react"
import axios from 'axios'

import Navbar from "../components/Navbar"
import UrlTable from "../components/UrlTable"
import Footer from "../components/Footer"

function AllLinks() {
    const [links, setLinks] = useState([])

    async function callApi() {
      let info = await axios.get('/getUrls')
      let json = info.data
      setLinks(json)
    }
  
    useEffect(() => {
      callApi()
    },[])
    
    return (
        <div>
            <Navbar/>

            <UrlTable urlInfo={links}/>
            
            <Footer/>
        </div>
    )
}

export default AllLinks
