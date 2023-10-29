const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRoutes=require('./routes/userRoutes');
const connectDb = require('./config/db');

/* create server */
app.use(express.json())

connectDb()
/* routes */
// app.use('/',require('./routes/useRoutes'))
app.use('/user',userRoutes)

/* Middelware */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("dev"))/* morgan use for get time of response or which req from client side and status code */


// app.get('/', (req, res) => {
//     const { Name } = req.body;
//     res.json({
//         "success": "true",
//         "data": Name    
//     })
// })

// app.post('/form', (req, res) => {
//     console.log(req)
//     res.send("Hi this is post request")
// })

/* server listen port */
app.listen(8000, () => {
    console.log('listening on port 8000');
})