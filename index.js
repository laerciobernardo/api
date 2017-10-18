const app = require('./app')

app.get('/', (req, res) => res.send('Index'))

app.listen(3000, ()=>console.log("Servidor is listening on http://localhost:3000"))