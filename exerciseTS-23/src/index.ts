import  express from "express";

const app = express();
app.get('/',(req,res) => {
  return res.send('Hello World 2');
});

app.listen(3333);
