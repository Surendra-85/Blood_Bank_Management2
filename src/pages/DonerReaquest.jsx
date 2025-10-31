import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Donor8 from '../../src/assets/images/donor3.png'
const DonerReaquest = () => {
  return (
    <>
    <Header/>
    <div className=""  style={{background:"rgba(244,244,244)",paddingTop:"20px" ,paddingBottom:"20px"}}>
        <div className="container">
            <div className="text-center">
                <h2>Become a Doonor</h2>

            </div>
            <div className="card "  style={{padding:"20px" ,margin:"10px"}}>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={Donor8} alt=""  style={{width:"100%"}}/>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group mt-4">
                            <label for="name">Name:</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="form-group mt-4">
                            <label for="name">Email:</label>
                            <input type="email" className='form-control' />
                        </div>
                        <div className="form-group mt-4">
                            <label for="name">Mobile Number :</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="form-group mt-4">
                            <label for="name">Blood Group :</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="form-group mt-4">
                            <label for="name">Remarks :</label>
                            <textarea className='form-control'></textarea>
                        </div>
                        <div className="form-group mt-4">
                          <button className='btn btn-danger'>Submit Request</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default DonerReaquest
