import { useMemo, useState } from "react";


const datas = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "C#",
    "Go",
  ];


function App() {
  const [digited, setDigitado] = useState(""); // Valor do usuário

  // Função que faz a busca no array
  const searchValues = useMemo(() => {
    const lowerDigited = digited.toLowerCase();
    return datas.filter((data) => data.toLowerCase().includes(lowerDigited));
  }, [digited]);

  return (
    <div>
      <h2>Busca em Lista</h2>
      <input
        type="text"
        placeholder="Digite algo"
        value={digited}
        onChange={(e) => {
          setDigitado(e.target.value);
        }}
      />

      <div>
        {
          digited === "" ? (
            searchValues.map((data, index) => <li key={index}>{data}</li>) //Retorna a lista toda 
          ) : searchValues.length === 0 ? (
            <p>Nenhum resultado encontrado </p>
          ) : (
            searchValues.map((data, index) => <li key={index}>{data}</li>)
          ) // Retorna o valor que foi encontrado depois da busca
        }
      </div>
    </div>
  );
}

export default App;
