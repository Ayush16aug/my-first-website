import React, {  useState }  from 'react'

const Contactus =()=>{
  const [data,setData]=useState({
    fullname:"",
    village:"",
    contact:"",
    message:"",
  });
  const InputEvent=(event)=>{
    const {name,value}=event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      };
    });
  };
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`${data.fullname} ${data.village}`);
   
  };
  return (
<>
<div className='my-5'>
  <h1 className='text-center'>Contact Us</h1>
</div>
<div className='container contact_div '>
  <div className='row'>
    <div className='col-md-4 col-10 mx-auto'>
      <form onSubmit={formSubmit}>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" 
   name="fullname"
   value={data.name}
   onChange={InputEvent}
   placeholder="Enter Your Name"/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Village</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" 
   name='village'
   value={data.village}
   onChange={InputEvent}
   placeholder="Enter Your Village"/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" 
   name='contact'
   value={data.contact}
   onChange={InputEvent}
   placeholder="Enter Your Number"/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
  name="message"
  value={data.message}
  onChange={InputEvent}
  ></textarea>

  </div> 
  <button type="button" className="btn btn-primary" onClick={formSubmit}>Submit </button>
      </form>
    </div>
  </div>
</div></>
  );
};
export default Contactus;


