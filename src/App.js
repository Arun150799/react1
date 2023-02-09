import './App.css';
import './index.css';
import './FOOTER.css';
import FOOTER from './FOOTER';
import Image from './Image';

function App() {
  return (
    <>
   <div className='info'>
   <h1>An inspiring design delivered to your inbox every morning</h1><br></br>
   <p>Our team scouts the internet for the best design,illustration and art and delivers truly inspiring one every day to your inbox</p><br></br>
   <h3>Show me how it looks</h3><br></br>
   <div className="mail">
            <input type="email" placeholder="Your e-mail address"/>
        </div>
   </div>
   <div className="register">
        <button class="btn" width="20px">Register Now</button>
    </div>
    <div className="span">
        Free - No Span - No Data Sharing
    </div>
    <Image/>
    
    <FOOTER/>
    
   </>    

  );
}



export default App;
