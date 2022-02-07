import axios from 'axios';
import React, { useEffect, useState } from 'react'




function Api() {
    const [item, setItem] = useState([])

    useEffect(()=>{

        axios.get('https://randomuser.me/api/0.8/?results=20')
      .then(function (response) {
        
        setItem(response.data.results[0].user)

      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      });
    },[])
    return (
        <div>
            <h1>heyyy</h1>
            
            { item.map((itm)=>{
              <h1>{itm.gender}</h1>
            })}
        </div>
    )
}

export default Api
