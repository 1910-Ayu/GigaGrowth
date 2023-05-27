import React, { useState } from 'react'
import Navbar2 from '../com/Navbar2'
import axios from 'axios';

import "../styles/home.css"

const Home = () => {

    const [formData, setFormData] = useState({
        symbol: '',
        date: ''
      });

    const [formData2,setFormData2] = useState({
        email: '',
        price: '',
    })
    const [formData3,setFormData3] = useState({
        phone: '',
        price2: '',
    })
      const [data,setData] = useState("");
      const [mes,setMes] = useState("");
      const [mes2,setMes2] = useState("");

      const { symbol, date } = formData;
      const {email,price} = formData2;
      const {phone,price2} = formData3;


      const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const Fetch= async (e) => {
      e.preventDefault();
      try{
        const config = {
          method:"POST",
      }
      const {symbol,date}= formData;
         const res =await axios.post('http://localhost:5000/stock/fetch',{symbol,date},config);
        setData(`The cost of stock is ${res.data}`);
      }catch(err){
        console.error('Error logging in:', err);
      }
      
    };

    const onChange2 = e =>
    setFormData2({ ...formData2, [e.target.name]: e.target.value });



    const send1 = async (e)=>{
        e.preventDefault();
      try{
        const config = {
          method:"POST",
      }
      const {email,price} = formData2;
         const res =await axios.post('http://localhost:5000/share/email',{email,price},config);
        setMes(`Email Sent successfully`);
      }catch(err){
        console.error('Error logging in:', err);
      }
    }
    const onChange3 = e =>
    setFormData3({ ...formData3, [e.target.name]: e.target.value });



    const send2 = async (e)=>{
        e.preventDefault();
        try{
          const config = {
            method:"POST",
        }
        const {phone,price2} = formData3;
           const res =await axios.post('http://localhost:5000/share/phone',{phone,price2},config);
          setMes(`whatsapp Sent successfully`);
        }catch(err){
          console.error('Error logging in:', err);
        }
    }
  return (
   <>
   <Navbar2></Navbar2>
    <div class="home">
        <div>
        <form className="form" onSubmit={Fetch}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name of stock"
            name="symbol"
            value={symbol}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            placeholder="yyyy-mm-dd"
            name="date"
            value={date}
            onChange={onChange}
            min="1997-01-01" max="2030-12-31"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="submit" />
        {data && <div>
                {data}
            </div>}
      </form>
        </div>
        <h2> To send data to the boss you have two folowing options</h2>
        <div>
            <h3> Via email</h3>
        <form className="form" onSubmit={send1}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter email of boss"
            name="email"
            value={email}
            onChange={onChange2}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter price of stock"
            name="price"
            value={price}
            onChange={onChange2}
           
          />
        </div>
        <input type="submit" className="btn btn-primary" value="sub" />
        {mes && <div>
                {mes}
            </div>}
      </form>

        </div>
        <div>
            <h3>Via WhatsApp</h3>
        <form className="form" onSubmit={send2}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter phone number"
            name="phone"
            value={phone}
            onChange={onChange3}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter price of stock"
            name="price2"
            value={price2}
            onChange={onChange3}
            min="1997-01-01" max="2030-12-31"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="sub" />
        {data && <div>
                {data}
            </div>}
      </form>
        </div>
    </div>
   </>
  )
}

export default Home