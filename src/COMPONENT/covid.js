import React, { useEffect, useState } from 'react' 

const Covid = ()=>{

    const [data ,setData]=useState([])
    const gertCovidData = async()=>{
        try{
           const res = await fetch('https://data.covid19india.org/data.json')
           const actuleData = await res.json()
           setData(actuleData.statewise[0])
           console.log(actuleData.statewise[0])
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        gertCovidData()
    },[])
    return(
        <>
            <h1>🔴 LIVE</h1>
            <h2>COVIDE-19 CORONAVIRUS TRAKER</h2>

            <ul>
                <li>
                    <div>
                        <p><span>OUR</span>COUNTRY</p>
                        <p>INDIA</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div>
                        <p><span>TOTAL</span>RECOVERED</p>
                        <p>{data.recovered}</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div>
                        <p><span>TOTAL</span>CONFIRMED</p>
                        <p>{data.confirmed}</p>
                    </div>
                </li>
            </ul>
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
            </ul>
        </>
    )
}

export default Covid