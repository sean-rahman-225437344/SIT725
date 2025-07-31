var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;

app.post("/subscribe", (req, res) => {
  const email = req.body.email;
  res.send(`<h2>Thanks for subscribing, ${email}!</h2>`);
});

app.listen(port,()=>{
console.log("App listening to: "+port)
})
