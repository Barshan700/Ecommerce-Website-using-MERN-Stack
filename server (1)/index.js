const exp=require("express")
const app=exp()
const mongoose=require("mongoose")
//mongoose.connect("mongodb+srv://partha:p123456@cluster0.ozsmzya.mongodb.net/nitproject?retryWrites=true&w=majority&appName=Cluster0")
mongoose.connect("mongodb+srv://kundubarshan2005:Barshan1234@cluster0.r2t3m.mongodb.net/nitproject?retryWrites=true&w=majority&appName=Cluster0")
const cors=require("cors")
const bodyParser=require("body-parser")
const ef=require("express-fileupload")

app.use(exp.static("public"))

app.use(cors());
app.use(ef());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("Hello node")
});
app.get("/about",(req,res)=>{
    res.send("Hello node About")
});
const pr=require("./routes/product_r");
app.use("/product",pr);

const ar=require("./routes/adminr");
app.use("/admin",ar);

app.listen(2000)

