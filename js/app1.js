class WorldMap {
    constructor() {
        this.map = document.querySelectorAll('.land');
        this.map.forEach(map => {
            map.addEventListener('click', this.startApp.bind(this));
        })
    }
    getTitle(e) {
        return e.target.getAttribute('title');
    }
    startApp(e) {
        const item = this.getTitle(e);
        console.log(item);
    }
}

setTimeout(() => {
    const world = new WorldMap;
}, 300);