import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
    <div className="row " style={{paddingBlock:"20px",paddingInline:"20px"}}>
        <div class="col-6 col-md-2 mb-8 ">
            <h5>Section</h5>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
            </ul>
        </div>
        <div class="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
            </ul>
        </div>
        <div class="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
            </ul>
        </div>
        <div class="col-md-5 offset-md-1 mb-3">
            <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2"> 
                    <label for="newsletter1"
                        class="visually-hidden">Email address</label> 
                        <input id="newsletter1" type="email"
                        class="form-control" placeholder="Email address"  style={{width:"400px"}}/>
                        </div>
                         <button class="btn btn-danger mt-4"
                        type="button">Subscribe</button> 
            </form>
        </div>
    </div>
    <div >
        <p className='text-center'>© 2025 Company, Inc. All rights reserved.</p>
        
    </div>
</footer>
  )
}

export default Footer
