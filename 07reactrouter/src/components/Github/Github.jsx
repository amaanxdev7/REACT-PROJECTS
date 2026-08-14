import { useState } from "react"
import React, {useEffect} from 'react'
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/amaanxdev7')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
            
            
    //     })
    // },[])
    return (
        <div className='text-center bg-gray-800 text-3xl p-3.5 text-red-500'>Github username: {data.login}
        <br />
        Github repos: {data.public_repos}
       <div className="flex justify-center m-4"> <img src={data.avatar_url} alt="Github pic" width={300} /></div>
        
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/amaanxdev7')
    return response.json()
}