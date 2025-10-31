import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
        <Header/>
     <div className="text-center mt-4">
      
      <h2>Connect With US</h2>
      </div> 
      <div className="row contect-container" style={{marginTop:"50px"}}>
        <div className="col-sm-6 ">
          <div className="" style={{marginLeft:"50px"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115553.03576485282!2d82.3922182666352!3d25.16838490751429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fc1592f37f2ab%3A0xbea20b10387e3dd1!2zU3VtYW5nYWwgSG9zcGl0YWwgKOCkuOClgeCkruCkguCkl-CksiDgpLngpYngpLjgpY3gpKrgpL_gpJ_gpLIs4KSh4KWJLuCkheCkquClguCksOCljeCktSDgpLjgpLDgpY3gpLDgpL7gpKssIOCkoeCliS7gpLbgpYfgpKvgpL7gpLLgpYAg4KS44KSw4KWN4KSw4KS-4KSrKSBNaXJ6YXB1cihVLlAp!5e0!3m2!1sen!2sin!4v1760338983790!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group mt-4">
            <label for="name" >Name:</label>
            <input type="text" className='form-control'  placeholder="Name" style={{width:"400px"}}/>
          </div>
          <div className="form-group mt-4">
            <label for="name" >Email:</label>
            <input type="text" className='form-control'  placeholder="Name" style={{width:"400px"}}/>
          </div>
          <div className="form-group mt-4">
            <label for="name" >Moble Number:</label>
            <input type="text" className='form-control'  placeholder="Name" style={{width:"400px"}}/>
          </div>
          <div className="form-group mt-4">
            <label for="name" >Message:</label>
            <input type="text" className='form-control'  placeholder="Name" style={{width:"400px"}}/>
          </div>
          <div className="form-group mt-4">
           <button className='btn btn-danger'>Submit</button>
          </div>
        </div>
      </div>
   <div style={{background:"red" ,marginTop:"20px" ,marginBottom:"20px"}}>
   <div className="container">
    <div className="row">
      <div className="col-sm-12">
  <p className='mt-4 text-white'><b>Address :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aliquam.</p>
  <p className=' text-white'>Phone :<b>123424325454</b></p>
  <p className=' text-white'>Email :<b>skbmazp365@gmail.com</b></p>
      </div>
      </div>
    </div>
   </div>
      <Footer/>
    </>

  )
}

export default Contact
