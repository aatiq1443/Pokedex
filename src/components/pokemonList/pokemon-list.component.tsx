import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../pokemon/pokemon.component";
import { Button } from "../Button";


const PokemonList:React.FC= () =>{
    
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    
    const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');

    const fetchData = async () =>{
        setIsLoading(true);
        const response = await axios.get(pokedexUrl);
        console.log('hi from response', response);
        const pokemonResults = response.data.results;

        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);

        const pokemonResultsPromise =  pokemonResults.map((pokemon : {url : string}) => axios.get(pokemon.url));

        const pokemonData = await axios.all(pokemonResultsPromise);

        console.log("--------",pokemonData);

        const res =  pokemonData.map((pokeData :any) => {
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image : pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types}

        })
         
        console.log("result",res);
        setPokemonList(res);
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[pokedexUrl])
    return (
        <div>
            <div>
                {isLoading ? <h1>Loading....</h1>:
                    pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id}/>)
                } 
            </div>
            <div className="flex my-5 gap-3">
                <button className="py-2 px-4 border rounder-lg border-stroke shadow-lg" disabled={prevUrl == null} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
                <button className="py-2 px-4 border rounder-lg border-stroke shadow-lg" disabled={nextUrl == null} onClick={() => setPokedexUrl(nextUrl)}>Next</button>
            </div>
        </div>
    )
}

export default PokemonList;