
const fetch = require('node-fetch');

const processWeatherData = async data => {
    const sorted = [...data].sort((a,b) => {
        if (Number(b.temperatura) > Number(a.temperatura)) {
          return 1;
        }

        if (Number(a.temperatura) > Number(b.temperatura)) {
          return -1;
        }

        return 0;
    });

    sorted.forEach((el) => {
        const {
            stacja: station,
            temperatura: temp,
        } = el;

        console.log(`Stacja ${station}, Temperatura ${temp}`)
    })
};



const findWarmestPlaceInPoland = async () => {
    try {

    const result = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
    const data = await result.json();
    await processWeatherData(data);

    } catch (error) {
        console.log('Error has occurred', error)
    }
}

findWarmestPlaceInPoland();




