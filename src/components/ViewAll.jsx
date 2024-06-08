import React, { useState } from 'react'
import Navbar from './Navbar'


const ViewAll = () => {
    const[data,changeData]=useState(
        [
        
            {"Name":"cetaphil","price":111,"rating":3},
            {"Name":"dermaco","price":113,"rating":2},
            {"Name":"pilgrim","price":114,"rating":5},
            {"Name":"ponds","price":114,"rating":4}
        ]
    )
  
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
                                <li class="list-group-item">{value.Name}</li>
                                <li class="list-group-item">{value.price}</li>
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