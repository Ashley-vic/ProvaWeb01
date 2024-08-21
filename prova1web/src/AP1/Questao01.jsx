import React from "react";

const Questao01A = () => {
  //cração da lista com os valores de cada elemento de cada linha
    const lista = [
        {a:10, b:3, c:7},
        {a:5, b:-3, c:9},
        {a:1, b:9, c:40}
    ]

    return(
      //Faz a verificação de cada item da lista chamando a função  Questao01B
        <div>
            <Questao01B lista = {lista}/>
        </div>
    )
}

function Questao01B(props) {
  //Função para pegar a lista criada na Questao01A e verificar qual o maior elemento de cada linha
    const maiores = props.lista.map((obj, ind) => {
      return (
        <div key={ind}>
          <p>Maior valor da linha {ind + 1}: {Math.max(obj.a, obj.b, obj.c)}</p>
        </div>
      );
    });
  
    return (
      <div>
        <h1>Questão 01</h1>
        <h2>Maiores Números</h2>
        {maiores}
      </div>
    );
  }
  
  export default Questao01A;