const express = require('express')
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname,"frontend")))

app.get("/",(req,res)=>{
	res.sendFile("index.html");
	}
)
app.listen(1200,()=>{
	console.log("web is running on port 1200");
	})
