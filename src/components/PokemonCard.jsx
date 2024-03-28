
function PokemonCard({ pokemon }) {
    return (
        <div>
            {pokemon.imgSrc ? (<figure>
                <img src={pokemon.imgSrc} alt={pokemon.name} />
                <figcaption>{pokemon.name}</figcaption>
            </figure>) : (<figure> <figcaption>{pokemon.name}</figcaption><p>???</p></figure>)}

        </div>
    );
}

export default PokemonCard;


