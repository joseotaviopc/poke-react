// , Container, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Pagination 
import { IconButton, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { MouseEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function List() {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=12";
  const navigate = useNavigate();
  const [results, setResults] = useState<any>({});
  const [pokeResults, setPokeResults] = useState<any>([]);
  const [page, setPage] = useState(1);

  function goToDetail(event: MouseEvent, id: number) {
    event.preventDefault();
    navigate(`/detail/${id}`, {replace: true})
  }
  
  const getPokes = async (url: string) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setResults(data);
    } catch(err) {
      console.error(err);
    }
  }

  const getPokeDetail = async (url: string) => {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        setPokeResults([...pokeResults, data]);
      
    } catch(err) {console.error(err); }
    console.log(pokeResults);
  };
  
  const getPokeDetails = async () => {
    try { 
      const promises = results.results.map((result: any) => fetch(result.url));
      const responses = (await Promise.all(promises)).map(response => response.json());
      const datas = await Promise.all(responses);
      console.log(datas);
      setPokeResults(datas);
    } catch(err) {console.error(err); }
  }

  useEffect(() => {
    getPokeDetails();
  },[results])

  useEffect(() => {  
    getPokes(BASE_URL);
  },[])
  
  const totalPokes = results.count;

  return (
    <div className="container-center">

      <h1 className="title">Pokemons disponíveis: {totalPokes}</h1>
      <nav className="pagination">
        <Button
          sx={{ my: 0.5 }}
          variant="outlined"
          size="small"
          onClick={() => getPokes(results.previous)}
          disabled={results.previous === null}
          aria-label="move selected right"
        >
          &lt;
        </Button>
        <Button
          sx={{ my: 0.5 }}
          variant="outlined"
          size="small"
          onClick={() => getPokes(results.next)}
          disabled={results.next === null}
          aria-label="move selected right"
        >
          &gt;
        </Button>
      </nav>
      <ul className="poke-list">

        {results.results?.map((item: any, i: any) => {
          return (
          <li key={i}>
            <img
              src={`${pokeResults[i]?.sprites?.front_default}`}
              // srcSet={`${pokeResults[i]?.sprites?.front_default}?w=100&fit=none&dpr=2 2x`}
              // alt={item.name}
              loading="lazy"
              onClick={(event) => goToDetail(event, i + 1)}
            />
            <div>
            <IconButton color="success" aria-label="adicionar">
              <AddIcon />
            </IconButton>
            {/* <IconButton aria-label="editar">
              <CreateIcon />
            </IconButton>
            <IconButton color="error"  aria-label="deletar">
              <DeleteIcon />
            </IconButton> */}
            </div>
          </li>
          )}
        )}
      </ul>
      <Link to="/detail/new">New Pokemon</Link>
      <br />
      <a href="#" onClick={(event) => goToDetail(event, 1)}>Edit Pokemon 1</a>
    </div>
  )
}