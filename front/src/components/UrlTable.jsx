import { useEffect } from "react"
import axios from "axios"

import '../styles/css/UrlTable.css'

function UrlTable({urlInfo}) {
    
    useEffect(() => {

    }, [urlInfo])
    
    return (
        <div className="table-container">
            { urlInfo?.map(el => {
                return (
                    <div className="table-info-container" key={el._id}>
                        <div className="row-container">
                            <div className="table-row">
                                <h4>Original URL</h4>
                                <h3><a href={el.fullUrlVersion}>{el.fullUrlVersion.length > 50 ? el.fullUrlVersion.slice(0, 50) + '...' : el.fullUrlVersion}</a></h3>
                            </div>
                            
                            <div className="table-row">
                                <h4>Short URL</h4>
                                <h3><a href={el.shortUrlVersion}>{axios.defaults.baseURL + '/' +el.shortUrlVersion}</a></h3>
                            </div>
                        </div>
                        <div className="table-row-cli clicked">
                            <h4>Times clicked: </h4>
                            <h2>{el.clicks}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default UrlTable
