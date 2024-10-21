// componente es una función que retorna jsx (un solo bloque de jsx)
import React from "react"
import { Navbar } from "../js/components/Navbar.jsx"
import Saludar from "../js/components/Saludar.jsx"


function App() {
    return (
        <> {/*Fragmento de React */}
            <Navbar />
            <h1>Hola ¿qué tal?. Estoy desde el componente app</h1>
            <Saludar />
            <Navbar />

            <Navbar />

            <Navbar />
            <Navbar />
            <Navbar />
            <Navbar />

        </>
    )
}

export default App