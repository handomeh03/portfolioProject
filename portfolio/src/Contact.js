import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
export default function Contact(){
    return(
        <div className='flex gap-10 '>
          <div className='flex flex-col  gap-8 m-5 w-fit '>
            <div className='text-white flex items-center gap-4' >
                <EmailIcon style={{color:"white",fontSize:"50px"}}/>
                <h1 className='font-bold text-6xl'>contact us</h1>
            </div>


            <p className='text-white'>Contact us for more information and Get  notified when I publish somthing new </p>


           <div className='form flex flex-col w-1/2'>
              <div className='mb-6 flex gap-2' >
              <label className='text-white '>Email Address: </label>
              <input style={{background:"#424242",border:"1px solid white",outline:"none",borderRadius:"10px",padding:"10px",color:"white"}} className='w-96'></input>
              </div>


             <div className='flex items-center gap-2'>
             <label className='text-white'>your message: </label>
             <textarea style={{background:"#424242",border:"1px solid white",outline:"none",borderRadius:"10px",padding:"10px",color:"white"}} className='h-40 w-96'></textarea>
             </div>

              
           </div>

           <Button className='bots'  style={{width:"80px",background:"#424242",border:"1px solid white",color:"white"}} variant="outlined">Submit</Button>
        </div>
        
      <div className=' flex justify-center items-center '>
      <MoveToInboxIcon  style={{fontSize:"200px",color:"white"}}/>
      </div>

        </div>
    );
}