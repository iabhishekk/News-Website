const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios')
const PORT = 7000;

//Middlewares
app.use(cors())
app.get('/fetch/', async(req, res,) => {
    const query = req.query.q || 'Latest News';
  
    const data = await fetch(query);

    res.send({'msg' : data})
    
})


//function
const fetch= async(query)=>{
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=1c3f31670b904f368600a4bab9902636`);
        const data = response.data.articles;
        return data;
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      } 
}

app.listen(PORT, (err) => {
    if (err) {
        console.log("Found Error : ", err);
    } else {
        console.log("App is Listening at PORT ", PORT);
    }
})