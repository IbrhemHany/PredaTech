
function Contact() {
  return (
    <div id="contact">
        <div className="container">
            <h2>Contact US</h2>
            <div className="content">
                <img src="images/download-removebg-preview.png" alt="Contact us" />
                <div className="form">
                    <form >
                        <input type="email" name="email" placeholder="Enter Your Email" />
                        <textarea name="massge" placeholder="Enter Your Massage"  />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
