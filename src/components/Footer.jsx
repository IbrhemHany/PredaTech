import { FaFacebook,FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram,FaSquareXTwitter,  } from "react-icons/fa6";
function Footer() {
  return (
    <section className="footer">
      <h4>Social Media</h4>
       <div className="social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaSquareInstagram/></a>
            <a href="#"><FaSquareXTwitter/> </a>
            <a href="#"><FaGithubSquare/> </a>
          </div>
      <p>Copyright &copy; 2025 Predatech ,All rights reserved, made by <span className="text-primary">Ibrahim Hany</span> .</p>
    </section>
  )
}

export default Footer
