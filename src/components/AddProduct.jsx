import React from 'react'
import Navbar from './Navbar'

const AddProduct = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PRODUCT NAME</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">PRODUCT PRICE</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">PRODUCT BRANDS</label>
                        <select name="" id="" className="form-control">
                            <options>FACEWASH</options>
                            <options>EYECREAM</options>
                            <options>PERFUMES</options>
                            <options>BODYWASH</options>
                        </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">RATING</label>
                        <select name="" id="" className="form-control">
                            <options>1</options>
                            <options>2</options>
                            <options>3</options>
                            <options>4</options>
                            <options>5</options>

                        </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">PRODUCT QUANTITY</label>
                        <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct