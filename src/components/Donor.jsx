import React from 'react'

import Donor2 from '../../src/assets/images/donor.png'
import { Button } from 'bootstrap/dist/js/bootstrap.bundle'
import { Link } from 'react-router-dom'
const Donor = () => {
  return (
    <div className="row" style={{marginTop:"20px" ,marginBottom:"20px"}}>
        <div className="col-sm-6">
            <div className='text-center'>
                <h2 style={{color:"red" ,marginBottom:"20px" ,marginTop:"20px"}}>Become a Donor</h2>
            </div>
            <div className='' style={{display:"flex",justifyContent:"center"}}>
                <div className="" style={{width:"80%"}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis vitae et minus aliquam dicta odio doloribus praesentium quibusdam porro?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ad aperiam recusandae magnam soluta! Nam natus ab nihil quaerat odio fugiat eum itaque laborum repudiandae rem. Nobis ratione, enim tempore quasi accusantium praesentium repudiandae blanditiis iste libero laudantium eos corporis quod recusandae odit ullam. Molestias quis magni obcaecati pariatur praesentium sapiente totam dicta voluptatum a ea laboriosam voluptate quidem natus ducimus quia, itaque autem assumenda? Commodi voluptatum nulla minima voluptatibus aut reprehenderit voluptate corrupti nobis dignissimos vero, doloremque eveniet repudiandae sed officia ratione ut consequuntur quo beatae voluptas? Repellat fugiat quod cum, ad at perspiciatis nihil earum modi fuga deleniti iste quam dicta placeat magnam error molestias beatae quia provident ipsam consectetur inventore eius illo. Doloribus nec</p>
                </div>
            </div>
            <div className="text-center">
<Link to="/doner-request">
<button className="btn btn-danger" style={{marginTop:"10px"}}>Join Us</button>

</Link>
        </div>
        </div>

            <div className="col-sm-6">
                <img src={Donor2}  style={{width:"100%"}}/>
            </div>
        
    </div>
  )
}

export default Donor
