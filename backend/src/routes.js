const express = require('express')

const routes = express.Router()


routes.get('/', (request, response) => {
    return response.json({
        evento: 'Iae',
        aluno: 'abestado 3'
    })
})

module.exports = routes