import { useState } from "react"
import './App.css';

export default function App() {
   // let numero = 0
    const [numero, setNumero] = useState(0)

function aumentar(){

    setNumero(numero + 1) 
}

function diminuir(){

    setNumero(numero - 1) 

}
    return <div class="container">
        <h1>Contador</h1>
        <p>{numero}</p>
        <div class="buttons">
        <button class="button button1" onClick={aumentar}>Mais</button> <br></br>
        <button class="button button2" onClick={diminuir}>Menos</button>
        </div>
    </div>
}