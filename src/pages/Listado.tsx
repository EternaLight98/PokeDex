import  { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Getpokemons } from "../controller/GetPokemons";
import { Pokemon } from "../models/pokemonM";



const Listado = () => { 

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect(()=>{
        const obtenerTodos = async() => {
            const allPokemon = await Getpokemons();
            setPokemons(allPokemon);
        }
        obtenerTodos();
    });

return(
    <>
    <h1>Listado Poke Dex</h1>
        <div className="content-wrapper">
            <div className="content">
                <div className="row gap-3">

                        {pokemons?.slice(0,151).map((pokemon)=>(
                            <Card className="mx-auto" style={{ width: '18rem' }}>
                                <Card.Header><b>Tipo: </b>{pokemon.type}</Card.Header>
                                    <Card.Img width="80" height="100" variant="top" src={pokemon.imglarge} className="d-block mx-auto w-50"/>
                                        <Card.Body>
                                            <Card.Title className="text-center">{pokemon.id} - {pokemon.name}</Card.Title>
                                            <ListGroup variant="flush" className="text-center">
                                            <ListGroup.Item> <b> Hp: </b>{pokemon.hp}</ListGroup.Item>
                                            <ListGroup.Item> <b>Ataque: </b>{pokemon.attack}</ListGroup.Item>
                                            <ListGroup.Item><b>Defensa: </b>{pokemon.defense}</ListGroup.Item>
                                            <ListGroup.Item> <b>E.Ataque: </b>{pokemon.sp_atk}</ListGroup.Item>
                                            <ListGroup.Item> <b>E.Defensa: </b>{pokemon.sp_def}</ListGroup.Item>
                                            <ListGroup.Item> <b>Velocidad: </b>{pokemon.speed}</ListGroup.Item>
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