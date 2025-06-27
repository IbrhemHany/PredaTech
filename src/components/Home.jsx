import { FaFacebook,FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram,FaSquareXTwitter,  } from "react-icons/fa6";


function Home() {
  return (
    <div id="home">
        <nav className="navbar">
            <h1>PredaTech Solutions</h1>
            <div className="links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
        <div className="container">
          <h3 className="text-primary" > What is PredaTech ?</h3>
          <p className="text-secodary">هي شركة متخصصة في تطوير البرمجيات وحلول التقنية الحديثة</p> <p className="text-secodary">تساعدك على تحويل أفكارك إلى واقع رقمي باحترافية وسرعة </p>
          <div className="social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaSquareInstagram/></a>
            <a href="#"><FaSquareXTwitter/> </a>
            <a href="#"><FaGithubSquare/> </a>
          </div>
          <div className="btns">
            <div className="btn ">Learn More</div>
            <div className=" btn btn-red">Let's Get Start</div>
          
          </div>
        </div>
      
    </div>
  )
}

export default Home
