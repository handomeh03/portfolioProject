import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Header(){
    let [MenuList,setmenuList]=useState([{id:uuidv4(),title:"About"},{id:uuidv4(),title:"Article"},{id:uuidv4(),title:"Project"},{id:uuidv4(),title:"Speaking"},{id:uuidv4(),title:"Contact"},]);
    let arrayList=MenuList.map((e)=>{
        return(
            <li className="hover:bg-zinc-700 p-2 rounded-3xl cursor-pointer" key={e.id}>{e.title}</li>
        );
    })
    return(
        
        <div className="List ">
           <div style={{background:"#757575"}} className=" flex w-fit list-none gap-4 justify-center m-2 p-1 rounded-3xl font-bold text-white">
             {arrayList}
           </div>
        </div>
        
    
    );
}