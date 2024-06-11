import React, { useState } from 'react'
import Navbar from './Navbar'

const AddProduct = () => {
    const [data,changeData] = useState(

        {
        "productname":"",
        "productbrand":"",
        "rating":""
        
        }
    )
   
    const inputHandler=(event)=>{

        changeData({...data,[event.target.name]:event.target.value})
    }
      const readValue=()=>{
        console.log(data)
    } 

  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PRODUCT NAME</label>
                            <input type="text" className="form-control" name='productname' value={data.productname} onChange={inputHandler} />
                        </div>

                        < div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            < label htmlFor="" className="form-label">PRODUCT BRAND</label>
                            <input type="text" className="form-control" name='productbrand' value={data.productbrand} onChange={inputHandler} />
                        </div>
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">RATING</label>
                            <input type="text" className="form-control" name='rating' value={data.rating} onChange={inputHandler} />
                        </div>
                        
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button onClick={readValue} className="btn btn-success">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct