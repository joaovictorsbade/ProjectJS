const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const indexRouter = require('./routes/index');
const somaRouter = require('./routes/soma');
const userRouter = require('./routes/user');

app.use('/index' , indexRouter);
app.use('/soma', somaRouter);
app.use('/user' ,userRouter);



app.listen(port, () => {
    console.log(`A desgrama da api tá funcionando em localhost:${port}`);
});