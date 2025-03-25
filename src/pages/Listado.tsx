import  { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Getpokemons } from "../controller/GetPokemons";
import { Pokemon } from "../models/pokemonM";
import "./Listado.css"


const Listado = () => { 

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [query, setQuery] = useState("");
    useEffect(()=>{
        const obtenerTodos = async() => {
            const allPokemon = await Getpokemons();
            setPokemons(allPokemon);
        }
        obtenerTodos();
    });

    const filtrarpokemon = pokemons?.slice(0,151).filter((pokemon) =>{
        return pokemon.name.toLowerCase().match(query.toLowerCase());
    })

return(
    <>
    <h1 className="efecto-espejo">Listado Poke Dex</h1>

    <header className="barra-buscador">
        <input 
            value={query}
            placeholder="Buscar pokemon"
            onChange={(event) => setQuery(event.target.value.trim())}
            type="text"
         />
    </header>

        <div className="content-wrapper">
            <div className="content">
                <div className="row gap-3">

                        {filtrarpokemon?.slice(0,151).map((pokemon)=>(
                            <Card className="mx-auto card" style={{ width: '18rem' }}>
                                <Card.Header><b>Tipo: </b>{pokemon.type}</Card.Header>
                                    <Card.Img  variant="top" src={pokemon.imglarge} className="d-block mx-auto w-50 img-poke"/>
                                        <Card.Body className="card-body">
                                            <Card.Title className="text-center title-poke">{pokemon.id} - {pokemon.name}</Card.Title>
                                            <ListGroup variant="flush" className="text-center ">
                                            <div className="info-poke">
                                            <ListGroup.Item className="info-poke"> <b> Hp: </b>{pokemon.hp}</ListGroup.Item>
                                            <ListGroup.Item className="info-poke"> <b>Ataque: </b>{pokemon.attack}</ListGroup.Item>
                                            <ListGroup.Item className="info-poke"><b>Defensa: </b>{pokemon.defense}</ListGroup.Item>
                                            <ListGroup.Item className="info-poke"> <b>E.Ataque: </b>{pokemon.sp_atk}</ListGroup.Item>
                                            <ListGroup.Item className="info-poke"> <b>E.Defensa: </b>{pokemon.sp_def}</ListGroup.Item>
                                            <ListGroup.Item className="info-poke"> <b>Velocidad: </b>{pokemon.speed}</ListGroup.Item>
                                            </div>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        ))}
                </div>
            </div>
        </div>
        
    </>
)
}

export default Listado;