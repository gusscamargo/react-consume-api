import {useQuery } from "react-query"
import './App.css';
import axios from 'axios';
import { Color } from './types';


function App() {
  const { data, isFetching } = useQuery<Color[]>("colors", async () => {
    const response = await axios.get("https://reqres.in/api/unknown")
    
    return response.data.data
  })


  return (
    <>
      <ul>
      {isFetching && <h1>Carregando...</h1>}
      {
          !isFetching
          && 
          data?.map((item: Color, index: number) => (
            <li key={index} style={{ backgroundColor: item.color }}>
                <h2>{item.id} - {item.name}</h2>
                <p>{item.year}</p>
            </li>
          ))
      }
      </ul>
    </>
  );
}

export default App;
