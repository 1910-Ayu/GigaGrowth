
const axios = require('axios');


module.exports.fetchPrice = async(req,res)=>{
    const {symbol,date} = req.body;

    const apikey = process.env.API_KEY;

    try{
        const response = await axios.get(
            `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${apikey}`
          );

          const stockData = response.data["Time Series (Daily)"];

          const stockPrice = stockData[date]['4. close'];
      
          res.json({price:stockPrice});
    }catch(error){
        console.error('Error fetching stock price:', error);
        res.status(500).json({ error: 'An error occurred while fetching the stock price.' });
    }
}

 