'use client'

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";  


export default function RemoveBtn({id}){

    const router = useRouter();

      const removeTopic = async ()=> {
        const confirmed = confirm("Are you Sure ,dont funck around 🤨");

        if(confirmed){
         const res=    await fetch(`http://localhost:3000/api/topics?id=${id}` ,{
                method:"DELETE"
            });

           if (res.ok) {
             router.refresh();
           }
        }
      };

    return(
        <div>
           <button onClick={removeTopic} className="text-red-400" > <HiOutlineTrash/></button>
        </div>
    )
}