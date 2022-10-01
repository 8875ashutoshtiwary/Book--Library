import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
    const [search, setSearch] = useState("");
    const [bg3Data, setData] = useState([]);
    const searchbg3 = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEKwnSU' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1> A room is beautifully when is <br /> present book in everywhere.</h1>
                </div>
                <div className="row2">
                    <h2>Find your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                            value={search} onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchbg3} />
                         <button><i className="fas fa-search"></i></button>

                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>
            <div className="container">
                {
                    <Card bg3={bg3Data} />
                }



            </div>

        </>
    )
}
export default Main;