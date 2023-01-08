import express from "express"
import cors from "cors"



const app = express()


app.use(cors())
app.use(express.json())


const users = []
const tweets = []
const avatarCheck = [{avatar:""}] 


app.post("/sign-up", (req, res) => {
    
    const signUp = req.body
    
    const id = users.length +1
    signUp.id = id
    users.push(signUp)

    res.send("OK")
}
)

app.post("/tweets", (req, res) => {

    let userCheck = req.body

    if (users.find((item) => item.username === userCheck.username)) {

        res.send("UNAUTHORIZED")} 

        else {
            res.send("OK")}
      tweets.push(...avatarCheck,...userCheck)
        
})

app.get("/tweets", (req, res) => {
     
    let lastTweets = tweets.slice(0, 10)
    return res.send(lastTweets)

}
)




app.listen(5000, () => {

    console.log("foi")

})

