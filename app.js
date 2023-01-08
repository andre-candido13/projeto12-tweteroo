import express from "express"
import cors from "cors"



const app = express()


app.use(cors())
app.use(express.json())


const users = []
const tweets = []
const avatarCheck = [] 


app.post("/sign-up", (req, res) => {
    
    const signUp = req.body
    
    const id = users.length +1
    signUp.id = id
    users.push(signUp)

    res.send("OK")
}
)

app.post("/tweets", (req, res) => {

    const {username, tweet} = req.body

    if (username && tweet) {
        tweets.push({username, avatar: avatarCheck, tweet})

        res.send("OK")} 

        else {
            res.send("UNAUTHORIZED")}       
})

app.get("/tweets", (req, res) => {
     
    let lastTweets = tweets.slice(-10)
    return res.send(lastTweets)

}
)




app.listen(5000, () => {

    console.log("foi")

})

