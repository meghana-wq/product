import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'


const ViewAll = () => {
    const[data,changeData]=useState([])
    const fetchData =()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
  useEffect(()=>{fetchData()},[])
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
                                <li class="list-group-item">{value.userId}</li>
                                <li class="list-group-item">{value.title}</li>
                                <li class="list-group-item">{value.body}</li>
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