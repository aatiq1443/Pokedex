import React from 'react'
import Search from '../search/search';
import PokemonList from '../pokemonList/pokemon-list.component';

 const Pokedex:React.FC  = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <span className='font-bold'>
            PokeDex
        </span>
        <div>
            <Search />
        </div>
        <div>
            <PokemonList />
        </div>
     </div>
  )
}

export default Pokedex;
