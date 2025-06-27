
function Service({title,shortDescription,fullDescription,img}) {
 return(
  <div className="content">
        <img src={img}alt={title}  />
        <h3>{title}</h3>
        <p>{shortDescription}</p>
        <p>{fullDescription}</p>
      
    </div>
  )  
}

export default Service
