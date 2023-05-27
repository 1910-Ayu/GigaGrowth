const nodemailer = require('nodemailer');
const twilio = require('twilio');

module.exports.whatsappShare = async(req,res) =>{
    const {number,price} = req.body;

    try{
        if (whatsappNumber) {
            // Send WhatsApp message
            const client = twilio(process.env.Account, process.env.Authtoken);
      
            await client.messages.create({
              body: `The stock price on the 15th of May is ${price}`,
              from: 'whatsapp:+1234567890', // Your Twilio WhatsApp number
              to: `whatsapp:${number}`,
            });
          }
      
          res.status(200).json({ message: 'Stock price shared successfully.' });

    }catch(error){
        console.error('Error sharing stock price:', error);
    res.status(500).json({ error: 'An error occurred while sharing the stock price.' });

    }

}

module.exports.emailShare = async(req,res)=>{
    const {email,price} = req.body;
    try{
        if(email){
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: process.env.email,
                  pass: process.env.emailpassword,
                },
              });
        
              const mailOptions = {
                from: process.env.mail,
                to: email,
                subject: 'Stock Price Information',
                text: `The stock price on the 15th of May is ${price}`,
              };
        
              await transporter.sendMail(mailOptions);
        }
        res.status(200).json({ message: 'Stock price shared successfully.' });

    }catch(error){
        console.error('Error sharing stock price:', error.message);
        res.status(500).json({ error: 'An error occurred while sharing the stock price.' });
    
    }
}