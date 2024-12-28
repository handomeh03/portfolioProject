import { use, useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
export default function Projects(){
    let [buttonName,setButtonName]=useState([{id:uuidv4(),title:"AllProject"},{id:uuidv4(),title:"HTML & CSS"},{id:uuidv4(),title:"JavaScript"},{id:uuidv4(),title:" React & MUI"},{id:uuidv4(),title:"React & Tailwind"}]);
    let [cards,setcard]=useState([{id:uuidv4(),imgs:"https://i.ytimg.com/vi/sk66TjOVcvY/maxresdefault.jpg",title:"react Project",arti:"jkeflnlenflknwkenflknlkfnlkwlfn"},{id:uuidv4(),imgs:"https://reactjsexample.com/content/images/2020/04/WEATHER-APP.png",title:"React & Css Project",arti:"jkeflnlenflknwkenflknlkfnlknwlfn"},{id:uuidv4(),imgs:"https://i.ytimg.com/vi/CQZxeoQeo5c/maxresdefault.jpg",title:"Css Project",arti:"jkeflnlenflknwkenfnlkwnflknwlfn"},{id:uuidv4(),imgs:"https://newdocer.cache.wpscdn.com/photo/20211028/37ed067015a44d33b44119bb959bd0f0.jpg",title:"javaScript Project",arti:"jkeflnlenflknwkenflknlkfnlnwlfn"},{id:uuidv4(),imgs:"https://i.ibb.co/rHWTSkW/Screenshot-2021-04-09-190456.png",title:"React&Tailwind",arti:"jkeflnlenflknwkenflknlkfnlnwlfn"}]);
    let [state,setstate]=useState("all");
    const all=useMemo(()=>{
     return cards.filter((e)=>{
        return e;
     })
    },[cards])
     
    const reactProj=useMemo(()=>{
       return cards.filter((e)=>{
        return e.title=="react Project";
       })
    },[cards])
    const javaScriptProj=useMemo(()=>{
        return cards.filter((e)=>{
         return e.title=="javaScript Project";
        })
     },[cards])
     const reactandcss=useMemo(()=>{
        return cards.filter((e)=>{
         return e.title=="React & Css Project";
        })
     },[cards])
     const cssProj=useMemo(()=>{
        return cards.filter((e)=>{
         return e.title=="Css Project";
        })
     },[cards])
     const reactTail=useMemo(()=>{
        return cards.filter((e)=>{
         return e.title=="React&Tailwind";
        })
     },[cards])
    
     let newcards=all;
      if(state=="HtmlCSS"){
          newcards=cssProj;
      }
      if(state=="JavaScript"){
        newcards=javaScriptProj;
      }
      if(state=="ReactMui"){
      newcards=reactProj;
      }
      if(state=="Reacttail"){
        newcards=reactTail;
      }

   
    
    let arrayCard=newcards.map((e)=>{
        return(
            <Card img={e.imgs} title={e.title} arti={e.arti} key={e.id}/>
        );
    })
    return(
        <div className='flex mt-9 gap-14 mb-4'>
            <div className='buttom flex flex-col w-48 gap-4 '>
            <Button onClick={()=>{setstate("all")}}  className="bot" style={{width:"200px",padding:"10px",color:"white",border:"solid 1px #757575",background:"#757575"}}  variant="outlined">All Project</Button>
            <Button onClick={()=>{setstate("HtmlCSS")}} className="bot" style={{width:"200px",padding:"10px",color:"white",border:"solid 1px #757575",background:"#757575"}}  variant="outlined">HTML & CSS</Button>
            <Button onClick={()=>{setstate("JavaScript")}} className="bot" style={{width:"200px",padding:"10px",color:"white",border:"solid 1px #757575",background:"#757575"}}  variant="outlined">JavaScript</Button>
            <Button onClick={()=>{setstate("ReactMui")}} className="bot" style={{width:"200px",padding:"10px",color:"white",border:"solid 1px #757575",background:"#757575"}}  variant="outlined">React & MUI</Button>
            <Button onClick={()=>{setstate("Reacttail")}} className="bot" style={{width:"200px",padding:"10px",color:"white",border:"solid 1px #757575",background:"#757575"}}  variant="outlined">React & Tailwind</Button>
            </div>
            <div className= "flex flex-wrap gap-4">
                {arrayCard}
            </div>

        </div>
    );
}