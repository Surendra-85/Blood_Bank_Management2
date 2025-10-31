import React from 'react'
import Banner4 from '../../src/assets/images/banner5.png';
import Banner2 from '../../src/assets/images/banner2.png';
import Banner3 from '../../src/assets/images/banner3.png';
import Banner5 from '../../src/assets/images/2.png';
const Banner = () => {
  return (
    <>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Banner2} class="d-block w-100" alt="..."  width={250}  height={500}/>
    </div>
    <div class="carousel-item">
      <img src={Banner5} class="d-block w-100" alt="..."  width={250}  height={500} />
    </div>
    <div class="carousel-item">
      <img src={Banner4} class="d-block w-100" alt="..."  width={250}  height={500} />
    </div>
  </div>
</div>
    </>
  )
}

export default Banner
