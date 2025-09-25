'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditTopicFrom({id , title , description}){

    const [newTitle , setNewTitle] = useState(title);
    const [newDescription ,setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault();
    
           try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
                method: "PUT",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify({newTitle , newDescription}),
            });
               if (!res.ok) {
                throw new Error("failed to fecth topics");
               }
               router.refresh();
               router.push('/');
           } catch (error) {
            console.log(error)
           }
    }
    return(
        <div className="edit-container">
            <form onSubmit={handleSubmit}>
                <h2>Edit your Topic</h2>
           <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} placeholder="Edit Title"/>
           <textarea onChange={(e) => setNewDescription(e.target.value)} value={newDescription} placeholder="Edit Description"/>
           <button type="submit">Update Topic</button>
           </form>
        </div>
    )
}