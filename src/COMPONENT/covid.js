import React, { useEffect, useState } from 'react' 
import Paper from '@material-ui/core/Paper';
import "./covid.css"

const Covid = ()=>{

    const [data ,setData]=useState([])
    const gertCovidData = async()=>{
        try{
           const res = await fetch('https://data.covid19india.org/data.json')
           const actuleData = await res.json()
           setData(actuleData.statewise)
           console.log(actuleData)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        gertCovidData()
    },[])
    return(
        <>
            {/* <h1>🔴 LIVE</h1>
            <h2>COVIDE-19 CORONAVIRUS TRAKER</h2> */}

            {/* <Paper className="paper">
                <p><span>OUR</span>COUNTRY</p>
                <p>INDIA</p>
             </Paper>      
            <Paper>
                <p><span>TOTAL</span>RECOVERED</p>
                <p>{data.recovered}</p>
            </Paper>      
            <Paper>
                <p><span>TOTAL</span>CONFIRMED</p>
                <p>{data.confirmed}</p>
            </Paper>
            <ul>
                <li>
                    <div>
                        <p><span>TOTAL</span>DEATH</p>
                        <p>{data.deaths}</p>
                    </div>
                </li>
            </ul><ul>
                <li>
                    <div>
                        <p><span>TOTAL</span>ACTIVE</p>
                        <p>{data.active}</p>
                    </div>
                </li>
            </ul><ul>
                <li>
                    <div>
                        <p><span>LAST </span>UPDATE</p>
                        <p>{data.lastupdatedtime}</p>
                    </div>
                </li>
            </ul> */}

            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className='mb-5 text-center'><span className="font-weight-bold">INDIA</span> COVID=19 Dashboard</h1>
                </div>
                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curEle,ind)=>{
                                    return(
                                        <tr key='ind'>
                                        <th>{curEle.state}</th>
                                        <td>{curEle.confirmed}</td>
                                        <td>{curEle.recovered}</td>
                                        <td>{curEle.deaths}</td>
                                        <td>{curEle.active}</td>
                                        <td>{curEle.lastupdatedtime}</td>
                                    </tr>  
                                    )
                                })
                            }
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Covid