import ComputerIcon from '@mui/icons-material/Computer';
import { v4 as uuidv4 } from 'uuid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Hero(){
    
    return(
        <div className="Hero grid grid-cols-2  ">
            <div className="info flex flex-col gap-4">

              <div className="jameelImg w-40">
              <img  src="jameel-modified.png"></img>
              </div>
              <p className="font-bold text-6xl text-white">Frontend developer using React Js</p>
              <p style={{color:"#9e9e9e"}}>My name is Jameel handomeh,I live in Jordan, I study software engineering at the Middle East University, I have many skills such as programming and design using many tools such as Reactjs Html Css JavaScript Mui Tailwind React API</p>
             <div className='icon flex gap-4'>
             <a href='https://www.instagram.com/hando78_/'><p className='text-white hover:text-red-600'><InstagramIcon/></p></a>
             <a href='https://www.facebook.com/jameell.jalal/'><p className='text-white hover:text-blue-800'><FacebookIcon/></p></a>
             <a href='https://www.linkedin.com/in/jameel-handomeh-38197b235/'><p className='text-white hover:text-blue-500'><LinkedInIcon/></p></a>
             </div>

            </div>


            <div className="img flex justify-center items-center ">
            <ComputerIcon style={{fontSize:"200px", color:"white"}}/>
            </div>

        </div>
    );
}