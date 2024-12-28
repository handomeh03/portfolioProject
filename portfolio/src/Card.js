import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
export default function Card({img,title,arti}){
    return (
        <div className="card w-64 text-white" style={{border:"1px solid #0000008f",borderRadius:"10px"}}>
            <img className='rounded-lg h-56 ' src={img}></img>
           <div className='m-3'>
           <h1 className='font-bold text-2xl'>{title}</h1>
            <p >{arti}</p>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex gap-1 '>
                <LinkIcon className='icons'/>
                <GitHubIcon className='icons'/>
                </div>
                <Button style={{background:"#424242",border:"none"}} variant="contained" endIcon={<SendIcon />}>
                   More
                </Button>
            </div>
           </div>

        </div>
    );
}