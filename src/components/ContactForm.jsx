import React from 'react'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "de89cad2-a952-43f5-8b26-6c85803cadf6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
      a
    }
  };



  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'>
        
  <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 text-left'>
        <label htmlFor="name">Name </label>
        <input  className='w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none' type="text" placeholder='Name' required name='name'/>
        </div>
        <div className='w-full md:w-1/2 text-left md:pl-4'>
        <label htmlFor="email">Email </label>
        <input  className='w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none' type="email" placeholder='Example@gmail.com' required name='email'/>
        </div>
        
    </div>
    <div className="text-left my-6">
      <label htmlFor="message">Message</label>
      <textarea name="message" className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none focus:outline-none" required id=""></textarea>
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-12 mb-10 rounded mr-4">
   {result ? result : "Send Message"}
   </button>

   <Link
    to="/"
    className="bg-gray-200 hover:bg-gray-300 text-blue-500 font-bold py-3 px-12 mb-10 rounded border border-blue-500 "
    >
    Back to Homepage
   </Link>

 </form>
    </div>



  )
}

export default ContactForm