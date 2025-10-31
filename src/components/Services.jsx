import React from 'react'
import Help from '../../src/assets/images/help.png'
const Services = () => {
    return (
        <div className='service-container'>
            <div className="text-center">

            <h2 className='service-title'>Our Services</h2>

            </div>
            <div className="row">
                <div className="col-sm-3 text-center service-card">
                    <div class="card w-80"  >
                        <div className="text-center">
                        <img src={Help} class="card-img-top" alt="..."  style={{height:"100px" , width:"100px" ,marginTop:"30px"}} />

                        </div>
                        <div class="card-body">
                            <h5 class="card-title" style={{color:"red"}}>Service 1</h5>

                        </div>
                    </div>
                </div>
               
                <div className="col-sm-3 text-center service-card">
                    <div class="card w-80"  >
                        <div className="text-center">
                        <img src={Help} class="card-img-top" alt="..."  style={{height:"100px" , width:"100px" ,marginTop:"30px"}} />

                        </div>
                        <div class="card-body">
                            <h5 class="card-title" style={{color:"red"}}>Service 2</h5>

                        </div>
                    </div>
                </div>

                <div className="col-sm-3 text-center service-card">
                    <div class="card w-80"  >
                        <div className="text-center">
                        <img src={Help} class="card-img-top" alt="..."  style={{height:"100px" , width:"100px" ,marginTop:"30px"}} />

                        </div>
                        <div class="card-body">
                            <h5 class="card-title" style={{color:"red"}}>Service 3</h5>

                        </div>
                    </div>
                </div>

                <div className="col-sm-3 text-center service-card">
                    <div class="card w-80"  >
                        <div className="text-center">
                        <img src={Help} class="card-img-top" alt="..."  style={{height:"100px" , width:"100px" ,marginTop:"30px"}} />

                        </div>
                        <div class="card-body">
                            <h5 class="card-title" style={{color:"red"}}>Service 4</h5>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-sm-3 text-center service-card">
                    <div class="card w-80"  >
                        <div className="text-center">
                        <img src={Help} class="card-img-top" alt="..."  style={{height:"100px" , width:"100px" ,marginTop:"30px"}} />

                        </div>
                        <div class="card-body">
                            <h5 class="card-title" style={{color:"red"}}>Service 5</h5>

                        </div>
                    </div>
                </div>
               
                <div className="col-sm-3 text-center service-card">
                    <div class="card w-80"  >
                        <div className="text-center">
                        <img src={Help} class="card-img-top" alt="..."  style={{height:"100px" , width:"100px" ,marginTop:"30px"}} />

                        </div>
                        <div class="card-body">
                            <h5 class="card-title" style={{color:"red"}}>Service 6</h5>

                        </div>
                    </div>
                </div>

                <div className="col-sm-3 text-center service-card">
                    <div class="card w-80"  >
                        <div className="text-center">
                        <img src={Help} class="card-img-top" alt="..."  style={{height:"100px" , width:"100px" ,marginTop:"30px"}} />

                        </div>
                        <div class="card-body">
                            <h5 class="card-title" style={{color:"red"}}>Service 7</h5>

                        </div>
                    </div>
                </div>

                <div className="col-sm-3 text-center service-card">
                    <div class="card w-80"  >
                        <div className="text-center">
                        <img src={Help} class="card-img-top" alt="..."  style={{height:"100px" , width:"100px" ,marginTop:"30px"}} />

                        </div>
                        <div class="card-body">
                            <h5 class="card-title" style={{color:"red"}}>Service 8</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
