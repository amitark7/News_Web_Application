const express=require('express')
const cors=require('cors')

const app=express()
app.use(cors())
const port=5000
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello Team How Are You!!")
})

app.post('/news',async (req,res)=>{
    const {category,country,page,pageSize}=req.body
    try {      
        const url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=68cef29466d44cef89e0d613453136b2&page=${page}&pageSize=${pageSize}`
        const response=await fetch(url)
        const data=await response.json()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`)
})