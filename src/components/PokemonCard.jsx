const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "Mew",
    },
];

function PokemonCard() {
    const pokemon = pokemonList[1]; /* création d'une variable qui contient le premier Pokemon de la liste*/

    return (
        <div>
            {pokemon.imgSrc ? (<figure>
                <img src={pokemon.imgSrc} alt={pokemon.name} />
                <figcaption>{pokemon.name}</figcaption>
            </figure>) : (<figure> <figcaption>{pokemon.name}</figcaption><p>???</p></figure>)}

        </div>                          /* les données de la variable pokemon remplacent les attributs fixes - opérateur ternaire */
    );
}

export default PokemonCard;



/* function MyTitle() {

  return <h1>Hello React</h1>;

}


export default MyTitle; */