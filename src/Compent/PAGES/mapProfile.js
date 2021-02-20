import React from 'react'
import Profile02 from './Email'
import Orders from './MyOrder'
const MapProfile = ({userapdated}) => {
    return (
        <div className="TestBackground" >
            <div className="LoyalCustomer">
            <p>Loyal Customer</p>
            </div>
            <div className="LoyalCustomer02">
            <p>RANKING :10/10</p>
            </div>
             <div className="UserId">
            <p className="UserIdd">userId</p>
         <p className="Morh">{userapdated._id}</p>
         </div>
            <div className="Name"  >
            <p className="Name01">Name</p>
         <p className="Name002">{userapdated.name}</p>
         </div>
         <div className="LastName02">
            <p className="Lastname03">LastName</p>
         <p className="LastNmae04">{userapdated.lastName}</p>
         </div>
            
         <div className="Email01">
            <p className="Email005">Email</p>
         <p className="Email006">{userapdated.email}</p>
         </div>
            <div className="Buttond">
                <Orders/>
            <Profile02/>
            </div>
           
          
        </div>
    )
}

export default MapProfile
