interface PokemonProps{
    name: string;
    image: string;
}

const Pokemon: React.FC<PokemonProps> = ({
    name,
    image
}) =>{
    return(
       <div>
        <div>{name}</div>
        <div><img src={image}/></div>
       </div>
    )
}

export default Pokemon;