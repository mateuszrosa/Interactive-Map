class WorldMap {
    constructor() {
        this.map = document.querySelectorAll('.land');
        this.map.forEach(map => {
            map.addEventListener('click', this.startApp.bind(this));
        })
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
}, 300);