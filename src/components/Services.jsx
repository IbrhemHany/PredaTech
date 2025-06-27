import {servicesdata} from "../data";
import Service from "./Service";
function Services() {
  return (
    <div id="services">
        <div className="container">
            <h2>Our Services</h2>
            <div className="services">
                <div className="product">
                 {servicesdata.map(service=>{
                   const {id,title,shortDescription,fullDescription,img}= service
                        return <Service key={id} title={title} shortDescription={shortDescription}  fullDescription={fullDescription} img={img}  />
                    })}

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Services
