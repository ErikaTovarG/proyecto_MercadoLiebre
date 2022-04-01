const express = require('express');
const app = express();
const path = require('path')

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3030, () =>
  console.log("Web levantada con exito en el puerto 3030")
);

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});