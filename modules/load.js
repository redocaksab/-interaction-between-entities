import StarWarCharacter from './starWarCharacter.js';
import { errorHandler } from './errorHandler.js';

const Load = {
    getData: async function (url) {
        try {
            let response = await fetch(url);

            let character = await response.json();
            let starWarCharacter = new StarWarCharacter(character.name,
                character.height,
                character.mass,
                character.hair_color,
                character.skin_color,
                character.eye_color,
                character.birth_year,
                character.films,
                character.species,
                character.vehicles);
            starWarCharacter.buildStarWarCharacterInf();
        } catch (err) {
            errorHandler(err);
        }
    }
}
export default Load;