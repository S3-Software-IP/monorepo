import react, { useEffect, useState } from "react";
import axios from "axios";
import { useAmp } from "next/amp";
import { headers } from "../../next.config";

const   TOPTRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks"

const GetTopNumbersButton = () => {
    const [token, setToken] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        if(localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken"));
        }
    }, []);

    const handleGetTop50Numbers = () => {
        axios
        .get(TOPTRACKS_ENDPOINT,  {
            headers: {
                Authorization: "Bearer " + token, 
            },
        })
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="get-top-songs-container">
            <button className="flex p-4 mx-auto bg-blue-600 rounded text-white" onClick={handleGetTop50Numbers}>
            Retrieve top songs
          </button>
        </div>
    )
}

export default GetTopNumbersButton;