const express = require('express') 

const app = express()

app.get('/', (request, response) => {
    return response.json({
        evento: 'Iae',
        aluno: 'abestado'
    })
})

app.listen(3333)