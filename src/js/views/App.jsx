import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import Card from "../components/Card.jsx";
import Saludar from "../components/Saludar.jsx";

function App() {
    const [news, setNews] = useState([
        {
            id: 1,
            title: "First title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae velit enim doloremque iure mollitia nihil incidunt amet, eligendi rerum veniam.",
            image: "https://picsum.photos/seed/picsum/500/320"
        },
        {
            id: 2,
            title: "Second title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae velit enim doloremque iure mollitia nihil incidunt amet, eligendi rerum veniam.",
            image: "https://picsum.photos/seed/picsum/500/320"
        },
        {
            id: 3,
            title: "Three title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae velit enim doloremque iure mollitia nihil incidunt amet, eligendi rerum veniam.",
            image: "https://picsum.photos/seed/picsum/500/320"
        }
    ])


    /*En JSX podemos usar javascript, el que necesitemos */
    return (
        <>
            {/* navbar */}

            <Navbar />

            <div className="container">
                {/* jumbotron */}
                <Jumbotron />

                <Saludar
                    lastName="Alejandro"
                    className="text-warning bg-dark"
                />

                <Saludar lastName="Gabriel" className="text-danger" />
                <Saludar lastName="Gabriel" className="text-danger" />




                {/* card */}

                <div className="row d-flex justify-content-center mb-4">

                    {
                        news.map((item) => {
                            return (
                                <Card key={item.id} news={item} />
                            )
                        })
                    }
                </div>
            </div>


            <div className="bg-dark text-white text-center py-5">Copyright @ Your Website 2019</div>
        </>
    )
}

export default App