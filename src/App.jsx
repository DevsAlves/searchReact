import { useState } from "react";

function App() {
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

  const [digited, setDigitado] = useState([]); // Valor do usuário
  const [filterValue, setFilterValue] = useState(digited); //Filtro

  // Função que faz a busca
  function searchValues(e) {
    e.preventDefault();

    const newDatas = datas.filter((data) =>
      data.toLowerCase().includes(digited.toLowerCase()),
    );
    setFilterValue(newDatas);
  }

  return (
    <div>
      <h2>Busca em Lista</h2>

      <form onSubmit={searchValues}>
         <input
        type="text"
        placeholder="Digite algo"
        onChange={(e) => {
          setDigitado(e.target.value);
        }}
      />
      <button>Buscar</button>
      </form>
     

      <div>
        {digited === "" ? ( datas.map((data, index) => <li key={index}>{data}</li>) ) : filterValue.length === 0 ? ( <p>Nenhum resultado </p> ) : ( filterValue.map((data, index) => <li key={index}>{data}</li>) )}
      </div>

    </div>
  );
}

export default App;
