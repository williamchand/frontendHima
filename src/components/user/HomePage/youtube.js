import axios from "axios";
import React, { useEffect, useState } from "react";

const Youtube = () => {
    const [youtube,setYoutube] = useState([])

    const getYoutube = async() => {
        // const data = await axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCBM5CV_neo8JDUtBuiMLTcg&maxResults=50&key=AIzaSyDgDjgO_-2S0wrqUnoz8avsowc1FC5IXH0&type=video'
        const data = await axios.get('https://cuaca-gempa-rest-api.vercel.app/'
        ,{
            withCredentials: true
        }
        )
        setYoutube(data.data)
    }
    
    useEffect(() => {
    console.log(youtube);
        getYoutube();
      });

    return (
        <div>
            <div
            className="has-text-left my-6"
            style={{ borderLeft: "6px solid red" }}
            >
                <p className="is-size-6 pl-2 has-text-weight-bold">
                    video
                </p>
            </div>
            <div className="columns is-multiline">
                <div className="column is-one-third">
                    <iframe src="https://www.youtube.com/embed/5dVMl493BRk"></iframe>
                </div>
                <div className="column is-one-third">
                    <iframe src="https://www.youtube.com/embed/5dVMl493BRk"></iframe>
                </div>
                <div className="column is-one-third">
                    <iframe src="https://www.youtube.com/embed/5dVMl493BRk"></iframe>
                </div>
                <div className="column is-one-third">
                    <iframe src="https://www.youtube.com/embed/5dVMl493BRk"></iframe>
                </div>
                <div className="column is-one-third">
                    <iframe src="https://www.youtube.com/embed/5dVMl493BRk"></iframe>
                </div>
                <div className="column is-one-third">
                    <iframe src="https://www.youtube.com/embed/5dVMl493BRk"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Youtube