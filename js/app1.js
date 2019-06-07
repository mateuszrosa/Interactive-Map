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
    getLand(e) {
        return e.target
    }
    getTitle(e) {
        return e.target.getAttribute('title');
    }
    fillCountry(country) {
        country.style.fill = "gray"
    }
    fillCountries() {
        this.map.forEach(map => {
            map.style.fill = "#ac9d93"
        });
    }
    checkValue(value) {
        if (value === "South Korea") {
            value = "Korea (Republic of)";
        } else if (value === "North Korea") {
            value = "Korea (Democratic People's Republic of)";
        } else if (value === "Republic of Congo") {
            value = "Congo";
        } else if (value === "Democratic Republic of Congo") {
            value = "Congo (Democratic Republic of the)"
        }
        return value;
    }
    fillInfo(value) {
        console.log(value);
        fetch(`https://restcountries.eu/rest/v2/name/` + value)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                let country = data[0];
                console.log(country);
                if (value === "India") {
                    country = data[1];
                }
                this.name.innerHTML = `Name: <span class="inf">${country.name}</span>`
                this.region.innerHTML = `Region: <span class="inf">${country.region}</span>`
                this.subregion.innerHTML = `Subegion: <span class="inf">${country.subregion}</span>`
                this.nativeName.innerHTML = `Native name: <span class="inf">${country.nativeName}</span>`
                this.capital.innerHTML = `Capital: <span class="inf">${country.capital}</span>`
                this.language.innerHTML = `Language: <span class="inf">${country.languages[0].name}</span>`
                this.currency.innerHTML = `Currency: <span class="inf">${country.currencies[0].code}</span>`
                this.population.innerHTML = `Population: <span class="inf">${country.population.toLocaleString()}</span>`
                this.img.setAttribute("src", country.flag);
                this.img.style.boxShadow = '0 0 3px 3px gray';
                if (document.querySelector("body > section.info > h3:nth-child(3) > span").textContent === "Korea (Republic of)") {
                    document.querySelector("body > section.info > h3:nth-child(3) > span").textContent = "Republic of Korea";
                } else if (document.querySelector("body > section.info > h3:nth-child(3) > span").textContent === `Korea (Democratic People's Republic of)`) {
                    document.querySelector("body > section.info > h3:nth-child(3) > span").textContent = "Democratic People's Republic of Korea";
                } else if (document.querySelector("body > section.info > h3:nth-child(3) > span").textContent === `Congo (Democratic Republic of the)`) {
                    document.querySelector("body > section.info > h3:nth-child(3) > span").textContent = "Democratic Republic of the Congo";
                }

            })

    }
    startApp(e) {
        const item = this.getLand(e);
        const title = this.getTitle(e);
        const value = this.checkValue(title)
        this.fillCountries();
        this.fillCountry(item);
        this.fillInfo(value);
    }
}

setTimeout(() => {
    const world = new WorldMap;
}, 500);