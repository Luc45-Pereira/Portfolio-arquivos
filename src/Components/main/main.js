import React from "react";
import Img from "./Components/image";

const Main = () => (
    <main className="Header">
        <div id="form">
            <h1>Olá, eu sou o Lucas Pereira :)</h1>
            <h5>Desenvolvedor Front-end</h5>
            <form>
                <button id="down">Download CV</button>
                <button id="contato">Entrar em contato</button>
            </form>
        </div>
        <Img/>
    </main>
);

export default Main;