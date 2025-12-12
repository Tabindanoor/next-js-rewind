"use client"

import { useEffect, useState } from "react";

type User ={
    id: number;
    name:string;
    username:string;
    website:string;
    phone:number
}
export default function Page() {
    const [users,setUsers]= useState<User[]>([]);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
        const fetchUsers = async ()=>{
            const myData = await fetch("https://jsonplaceholder.typicode.com/users/")
            const result: User[] = await myData.json()
            setUsers(result)
            setLoading(false)
        }
        fetchUsers();

    },[])

        if (loading) return <div>loading.......</div>

   
  return (
    <div>
        <h1>this is the list</h1>
        {users.map((user)=>{
            return(
                <ul key={user.id}>
                    <li>{user.name}</li>
                    <li>{user.phone}</li>
                    <li>{user.username}</li>
                    <li>{user.website}</li>
                </ul>
            )
        })}
    </div>
  )
}


//  async function ko directly use nhi kr sktay csr men
// ye hoook  me hi use ho ga 
// useefect k sath 