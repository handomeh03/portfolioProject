import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Foter';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useRef } from 'react';
function App() {
  let go=useRef();
  function gos(){
    go.current.scrollIntoView({behavior:"smooth"});
  }
  return (
   
      <Container  style={{background:"#424242"}} maxWidth="lg">
       <div className='Main p-5 '>

       <div ref={go} className='Header mb-9  flex justify-center flex-col items-center '>

<div className='Header'>
  <Header/>
</div>


       </div>


       <div className='Hero '>
 <div className='Hero'>
  <Hero/>
 </div>
       </div>
      
     <Divider style={{background:"white",marginTop:"10px"}}/>
      <div className='projects'>
      <Projects/>
      </div>
      <Divider style={{background:"white",marginTop:"10px"}}/>
     <div className='Contact'>
       <Contact/>
     </div>
      <Divider style={{background:"white",marginTop:"10px"}}/>
      <div className='footer'>

      </div>
     <Footer/>
       </div>
       <Button className='bot' onClick={gos} style={{borderRadius:"30%",background:"#424242",border:"1px solid white",position:"fixed",left:"80%",bottom:"100px"}} variant="contained"><ArrowUpwardIcon/></Button>
      </Container>  

  );
}

export default App;
