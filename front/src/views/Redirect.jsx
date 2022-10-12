import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Redirect() {
    const { id } = useParams()

    async function redirect (id) {
        let json = await axios.get('/redirect/' + id)
        console.log(json)
        let url = json.data
        
        window.location.href = url
    }
    
    useEffect(() => {
        redirect(id)
    })
}

export default Redirect
