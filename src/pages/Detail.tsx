import { AddCircleOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Detail() {
  const { id } = useParams();
  const [pokeDetail, setPokeDetail] = useState<any>({});

  const getPokeDetails = async () => {
    try { 
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      // const responses = (await Promise.all(promises)).map(response => response.json());
      const data = await resp.json();
      // console.log(data);
      setPokeDetail(data);
    } catch(err) {console.error(err); }
  }

  useEffect(() => {
    getPokeDetails();
  },[])
  return (
    <div className="container-center">

      <h1 className="title">{pokeDetail.name}</h1>
       
      <ul className="poke-detail">
        <li >
          <img
          src={`${pokeDetail?.sprites?.front_default}`}
          // srcSet={`${pokeResults[i]?.sprites?.front_default}?w=100&fit=none&dpr=2 2x`}
          // alt={item.name}
          loading="lazy"
          //  onClick={(event) => goToDetail(event, i)}
          /> 
          <div>
            <IconButton color="success" aria-label="adicionar">
              <AddCircleOutlined />
            </IconButton> 
          </div>
        </li> 
      </ul>
        <Link to="/detail/new">New Pokemon</Link>
        <br />
      {/* <a href="#" onClick={(event) => goToDetail(event, 1)}>Edit Pokemon 1</a> */}
        <p>detail works!</p>
        idToEdit: { id }
        <br />
        <Link to="/list">Back</Link>
    </div>
  )
}