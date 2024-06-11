import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'


const ViewAll = () => {
    const[data,changeData]=useState([
        {"procuctname":"facewash","productbrand":"cetaphil","rating":"five"},
        {"procuctname":"sunscreen","productbrand":"dermaco","rating":"two"},
        {"procuctname":"handcream","productbrand":"ponds","rating":"one"},
        {"procuctname":"moisturizer","productbrand":"minimalist","rating":"four"}
            
       
        
    ])
    
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    {data.map(
                            (value,index)=>{
                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">    
                        <div class="card">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">{value.procuctname}</li>
                                <li class="list-group-item">{value.productbrand}</li>
                                <li class="list-group-item">{value.rating}</li>
                                
                            </ul>
                            </div>
                        </div>
                            }
                        )}
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll