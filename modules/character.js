class Character {
    constructor(name, height, mass, hair_color, skin_color, eye_color, birth_year) {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.hair_color = hair_color;
        this.skin_color = skin_color;
        this.eye_color = eye_color;
        this.birth_year = birth_year;
    }

    buildCharacterInf() {
        let infStr = `<div class="characterInfItem">Height: ${this.height}</div>
        <div class="characterInfItem">Mass: ${this.mass}</div>
        <div class="characterInfItem">Hair color: ${this.hair_color}</div>
        <div class="characterInfItem">Skin color: ${this.skin_color}</div>
        <div class="characterInfItem">Eye color: ${this.eye_color}</div>
        <div class="characterInfItem">Birth year: ${this.birth_year}</div>`;

        let characterName = document.body.querySelector(".characterName");
        characterName.innerHTML = this.name;

        if (!document.body.querySelector(".characterInfWrap")) {
            let divWrap = document.createElement("div");
            divWrap.className = "characterInfWrap";
            divWrap.innerHTML = infStr;

            document.body.append(divWrap);
        } else {
            let divWrap = document.body.querySelector(".characterInfWrap");
            divWrap.innerHTML = infStr;
        }
    };
}

export default Character;