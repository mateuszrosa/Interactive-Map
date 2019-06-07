class WorldMap {
    constructor() {
        this.map = document.querySelectorAll('.land');
        this.map.forEach(map => {
            map.addEventListener('click', this.startApp.bind(this));
        });
        this.input = document.querySelector('input');
        this.form = document.querySelector('form');
        this.name = document.querySelector('h3:nth-of-type(2)');
        this.region = document.querySelector("h3:nth-of-type(3)");
        this.subregion = document.querySelector("h3:nth-of-type(4)");
        this.nativeName = document.querySelector("h3:nth-of-type(5)");
        this.capital = document.querySelector("h3:nth-of-type(6)");
        this.language = document.querySelector("h3:nth-of-type(7");
        this.currency = document.querySelector("h3:nth-of-type(8)");
        this.population = document.querySelector("h3:nth-of-type(9)");
        this.img = document.querySelector(".info img");
        this.infos = document.querySelectorAll('.infos');
    }
    getTitle(e) {
        return e.target
    }
    fillCountry(country) {
        country.style.fill = "gray"
    }
    fillCountries() {
        this.map.forEach(map => {
            map.style.fill = "#ac9d93"
        });
    }
    startApp(e) {
        const item = this.getTitle(e);
        this.fillCountries();
        this.fillCountry(item);
    }
}

setTimeout(() => {
    const world = new WorldMap;
}, 500);