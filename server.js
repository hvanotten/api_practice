const express = require('express')

const app = express()
const PORT = 8000



let Pokémon = {
  'bulbasaur': {
    'name': 'Bulbasaur',
    'type': 'Grass Poison',
    'National Pokédex #': 1,
  },
  'ivysaur': {
    'name': 'Ivysaur',
    'type': 'Grass Poison',
    'National Pokédex #': 2,
  },
  'venusaur': {
    'name': 'Venusaur',
    'type': 'Grass Poison',
    'National Pokédex #': 3,
    },
    'unknown': {
        'name': 'unknown',
        'type': 'unknown',
        'National Pokédex #': 'unknown'
    }

};
//set up server to serve up a file
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

//
app.get('/api/:pokemonName', (request, response) => {
    const pokemonName = request.params.pokemonName.toLowerCase()
    if (Pokémon[pokemonName]) {
        response.json(Pokémon[pokemonName]);
    } else {
        response.json(Pokémon['unknown']);
    } ;
})
//have server listen for requests
app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${PORT} ! You better go catch it!`)
})