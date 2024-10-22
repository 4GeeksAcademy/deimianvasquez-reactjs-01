// componente es una función que retorna jsx (un solo bloque de jsx)
import React from "react"
import { Navbar } from "../js/components/Navbar.jsx"
import Saludar from "../js/components/Saludar.jsx"
import Jumbotron from "../js/components/Jumbotron.jsx"


function App() {
    return (
        <> {/*Fragmento de React */}
            <Navbar />

            <div className="container border border-danger">
                <Jumbotron />
            </div>

            <h1>Footer</h1>{/* footer */}
        </>
    )
}

export default App