
import PropTypes from 'prop-types';

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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

export default PokemonCard;


