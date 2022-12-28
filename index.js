const express = require('express')
const cors = require('cors')
const app = express()
const port =  process.env.PORT || 5000;

// middle ware
app.use(cors())
app.use(express.json())

const run = async () =>{
// CRUD Operations

//CREATE====================================

//READ======================================

//UPDATE====================================

//DELETE====================================

}
run().catch((error) => console.error(error));

app.get('/', (req, res) => {
  res.send('My Todo App Server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})