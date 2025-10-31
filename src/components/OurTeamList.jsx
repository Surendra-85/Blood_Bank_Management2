import React from 'react'
import ProfileImg from '../../src/assets/images/profile.png'
const OurTeamList = () => {

    const team=[
        {
            id:1,
            name:'User 1',
            Image:ProfileImg
        },

        {
            id:2,
            name:'User 2',
            Image:ProfileImg
        },

        {
            id:3,
            name:'User 3',
            Image:ProfileImg
        },
        {
            id:4,
            name:'User 4',
            Image:ProfileImg
        },
        {
            id:5,
            name:'User 5',
            Image:ProfileImg
        },
        {
            id:6,
            name:'User 6',
            Image:ProfileImg
        }
        ,
        {
            id:7,
            name:'User 7',
            Image:ProfileImg
        },
        {
            id:8,
            name:'User 8',
            Image:ProfileImg
        },
         {
    id:9,
    name:'User 9',
    Image:ProfileImg
}
, {
    id:10,
    name:'User 10',
    Image:ProfileImg
},
{
    id:11,
    name:'User 11',
    Image:ProfileImg
},
{
    id:12,
    name:'User 12',
    Image:ProfileImg
}
    ]
  return (
    
      <div className="row" style={{background:"#f4f4f4"}}>
        <div className="text-center">
            <h2 style={{marginTop:"20px",marginBottom:"20px"}}>Our Team</h2>
        </div>
        {team.map((item) =>{
            return(
                <div className="col-sm-3">
                <div class="card "  style={{margin:"20px"}} >
                                <div className="text-center">
                                <img src={item.Image} class="card-img-top" alt="..."  style={{height:"100px" , width:"100px" ,marginTop:"30px"}} />
        
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-center" >{item.name}</h5>
        
                                </div>
                            </div>
                        </div>
            )
        })}
      

        </div>
      

  )
}

export default OurTeamList
