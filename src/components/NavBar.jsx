
function NavBar({ pokemonList, setPokemonIndex }) {

    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>{pokemon.name}</button>
            ))}

        </div>
    );
}

export default NavBar; 
