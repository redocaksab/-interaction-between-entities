//Type module creates it's own Lexical Environment
import Character from "./character.js";

class StarWarCharacter extends Character {
    constructor(name, height, mass, hair_color, skin_color, eye_color, birth_year, films, species, vehicles) {
        super(name, height, mass, hair_color, skin_color, eye_color, birth_year);

        this.films = films;
        this.specie = species;
        this.vehicle = vehicles;
    }
    getItem(item) {
        let requests = item.map(item => fetch(item));
        return Promise.all(requests).then((responses) => Promise.all(responses.map(item => item.json())));
    }
    buildStarWarCharacterInf() { //Outer Lexical Environment
        super.buildCharacterInf();
        let selectsWrap;

        if (!document.body.querySelector(".selectsWrap")) {
            selectsWrap = document.createElement("div");
            selectsWrap.className = "selectsWrap";
        } else {
            selectsWrap = document.body.querySelector(".selectsWrap");
            selectsWrap.innerHTML = "";
        }
        document.body.append(selectsWrap);

        let filmSelect = document.createElement("select");
        filmSelect.className = "selectItem";
        filmSelect.name = "Films";

        let specieSelect = document.createElement("select");
        specieSelect.className = "selectItem";
        specieSelect.name = "Species";

        let vehicleSelect = document.createElement("select");
        vehicleSelect.className = "selectItem";
        vehicleSelect.name = "Vehicles";

        function buildItem(responses, str, select, labelStr, title) {  
            //Inner Lexical Environment
            //nested function
            //can access external variables
            //created for convenience
            if (responses.length) {
                this[str] = responses.map(item => item[title]);
                select.innerHTML = "";
                for (let title of this[str]) {
                    select.innerHTML += `<option>${title}</option>`;
                }
                selectsWrap.insertAdjacentHTML("beforeend", `<label for="${labelStr}">${labelStr}: </label>` + select.outerHTML);
            }
        }
        this.getItem(this.films).then(responses => {
            buildItem.call(this, responses, "filmTitles", filmSelect, "Films", "title");
        });

        this.getItem(this.specie).then(responses => {
            buildItem.call(this, responses, "specieTitles", specieSelect, "Species", "name");
        });

        this.getItem(this.vehicle).then(responses => {
            buildItem.call(this, responses, "vehicleTitles", vehicleSelect, "Vehicles", "name");
        });

    }
}

export default StarWarCharacter;