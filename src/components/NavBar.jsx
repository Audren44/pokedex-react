
function NavBar({ pokemonList, setPokemonIndex }) {
    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button key={pokemon.name} onClick={() => {
                    setPokemonIndex(index);
                    if (pokemon.name === "pikachu") {
                        alert("pika pikachu !!!")
                    }
                }}>{pokemon.name}</button>
            ))}

        </div>
    );
}

export default NavBar; 
