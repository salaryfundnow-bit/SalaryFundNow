import React, { useState } from "react";
import "../css/contact.css";

export default function Contact() {

const [form,setForm]=useState({
name:"",
email:"",
phone:"",
subject:"",
message:""
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
}

const handleSubmit=async(e)=>{

e.preventDefault();

await fetch(
"https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
{
method:"POST",
body:JSON.stringify(form)
});

alert("Message Sent Successfully");

setForm({
name:"",
email:"",
phone:"",
subject:"",
message:""
});

}

return(

<section className="contact">

<div className="contact-left">

<h2>Contact Us</h2>

<p>
Have questions about our loan services? Fill out the form and our team will get back to you shortly.
</p>

<div className="info">

<p>📞 +91 9792355358</p>

<p>✉ support@salaryfundnow.com</p>

<p>
📍 Gurugram, Haryana
</p>

</div>

</div>

<div className="contact-right">

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Full Name"
value={form.name}
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Email Address"
value={form.email}
onChange={handleChange}
required
/>

<input
type="text"
name="phone"
placeholder="Phone Number"
value={form.phone}
onChange={handleChange}
required
/>

<input
type="text"
name="subject"
placeholder="Subject"
value={form.subject}
onChange={handleChange}
required
/>

<textarea
rows="6"
name="message"
placeholder="Write your message..."
value={form.message}
onChange={handleChange}
required
></textarea>

<button>
Send Message
</button>

</form>

</div>

</section>

)

}