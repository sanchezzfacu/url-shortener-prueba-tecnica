import { useState } from 'react'
import axios from 'axios'

import '../styles/css/CreationInput.css'

function CreationInput() {
    const [input, setInput] = useState('')
    const [urlInfo, setUrlInfo] = useState([])

    async function generateUrl(e) {
        e.preventDefault()
        let urlObj = {fullUrlVersion: input}
        const postUrl = await axios.post('/createUrl', urlObj )
        setUrlInfo(postUrl.data)
    }

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    return (
        <div className='form-container'>
            <form onSubmit={generateUrl}>
                <input onChange={handleInputChange} type="url" placeholder='Enter an URL..' required/>
                <button type="submit">Generate URL</button>
            </form>
            <div className={Object.entries(urlInfo).length ? 'url-info-container' : 'url-info-none'}>
                <div className='url-created-info'>
                    <h4>{urlInfo.fullUrlVersion}</h4>
                    <h4><a href={urlInfo.shortUrlVersion}>{'https://url-shortener-front-six.vercel.app/' + urlInfo.shortUrlVersion}</a></h4>
                </div>
                <hr />
                <a className='create-another-url' href="/">Create another short url</a>
            </div>
            <div className='redirect-all-urls'>
                <a href="/all">
                    <h3>View all URLS</h3>
                </a>
            </div>
        </div>
    )
}

export default CreationInput
