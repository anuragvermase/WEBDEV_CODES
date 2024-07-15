import express from 'express'    // mention "type": "module" in JSON file to use import statement
const app = express()


app.get('/', (req, res) => {
    res.send('<h1>Hello from express server!</h1>')
})
  
app.get('/x', (req,res)=>{
   res.send("<h1>@anuragvermase</h1>")
})
  
app.get('/linkedIn', (req,res)=>{
   res.send("<h1>@anuragvermase</h1>")
})
  
app.get('/Instagram', (req,res)=>{
   res.send("<h1>@anuragvermase</h1>")
})

  export default app;