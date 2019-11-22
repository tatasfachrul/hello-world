const server = require('express')()

server.listen(4040, () => console.log(`\n This is running`))

server.get('/', (req, res) => res.send({msg: 'Hello world'}))
