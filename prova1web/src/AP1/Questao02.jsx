import { useState } from "react"

const Questao02 = () => {
    //Cria um status para setar a imagem e alternar entre frente e costas (true or false)
    const [virar, setVirar] = useState(true)

    const imgFrente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    const imgCostas = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";

    //verifica se o status da imagem está em true e o torna false para que a imagem vire de lado
    const virarImagem = () => { setVirar(!virar) }

    return (
        //Pega a imagem, verifica de qual lado ela está e a faz virar
        <div>
            <h1>Questão2</h1>
            <h2>Pikachu - 25</h2>
            <img src={virar ? imgFrente : imgCostas} alt="" onClick={virarImagem} />
            <button onClick={virarImagem}>Virar</button>
        </div>
    )
}

export default Questao02;