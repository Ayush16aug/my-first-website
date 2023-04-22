import React  from 'react'
import './index.css';
import { NavLink } from 'react-router-dom'; 

const Home =()=>{
  return (
<>
<div className='mittal'>
<p className='jecrc'>Since-2015</p>
<section id='header' className='d-flex align-item-center'>
<div className="conatiner-fluid nav_bg">
     <div className="row">
     <div className='col-10 mx-auto' >
     <div className='col-md-9 pt-5 my-8 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
     <h1 className='computer'>Enjoy Your Fashion With <i><strong className='computersc'>Riddhi Siddhi Sarees</strong></i></h1>
     <h3 className='my-3 computer'>
     Happiness is Wearing Saree.
     </h3>
     <div className='mt-3'>
      <NavLink to='/contactus' className='btn btn-warning'>Contact Us</NavLink>
     </div>
     </div>


     </div>
     </div>
    
     </div>

</section>
</div>

</>
  );
};
export default Home;


