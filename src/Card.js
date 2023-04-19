import React  from 'react'

const Card =(props)=>{
  return (
<>

      <div className='col-md-4 col-10 mx-auto'>
      <div className="card" >
  <img src={props.imgsrc} className="card-img-top"  height="400" width="400" alt={props.imgsrc}/>
  <div className="card-body" >
    <h4 className="card-title" style={{color:'brown'}}>{props.title}</h4>
    
  </div>
</div>
      </div>
    
</>
  );
};
export default Card;


