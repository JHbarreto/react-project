import { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  const [likes, setLikes] = useState(0);
  const [input, setInput] = useState('');
  const [ultimaHora, setUltimaHora] = useState('');
  
  function darLike(){
    setLikes(prevLikes => prevLikes +1);
    setUltimaHora(new Date().toLocaleTimeString());
  }

  function resetar(){
    setInput("");
    setLikes(0);
    setUltimaHora("");
  }

  useEffect(()=>{
    document.title  = `digitado: ${input} - Likes ${likes}`;
  }, [input,likes]
  );

  return (
    <>
      <div>Numero de caracteres: {input.length}</div>
      você digitou:{input}<br></br>
      <input type="text" value={input} onChange={event => setInput(event.target.value)} placeholder='Digite algo!'/>
      <div style={{color : likes >= 4  ? 'red' : 'black'}}>Likes: {likes}</div>
      <button onClick={darLike} disabled={likes >= 4}>
        {likes>= 4 ? "Limite esgotado" : "Clicar"}</button>
      <button onClick={resetar} style={{marginLeft:'10px'}}>Resetar</button>

        {likes >= 4 && <p>Você atingiu o limite!</p>}

      <p>Ultimo clique: {ultimaHora || "Nenhuma ainda"}</p>

    <ProductList />
    </>
  )
}

export default App
