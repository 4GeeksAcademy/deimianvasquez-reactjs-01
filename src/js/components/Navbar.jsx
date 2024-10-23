import React, { useState } from "react";
import "../../styles/index.css";

function Navbar() {
    const [linked, setLinked] = useState([
        {
            "href": "http://google.com",
            "value": "Home"
        },
        {
            "href": "#",
            "value": "About"
        },
        {
            "href": "#",
            "value": "Services"
        },
        {
            "href": "#",
            "value": "Contact"
        },
        {
            "href": "https://4geeks.com",
            "value": "4GeeksAcademy"
        }
    ])


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container p-0">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

                    {
                        linked.map((item, index) => {
                            const { href, value } = item
                            return (
                                <div key={`navbar-${index}`} className="navbar-nav">
                                    {
                                        value.toLowerCase() === "home" ?
                                            <a className="nav-link text-success" href={href} > {value}</a>
                                            :
                                            <a className="nav-link text-warning" href={href} > {value}</a>

                                    }
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </nav >
    )
}

export default Navbar