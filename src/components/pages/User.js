import React from 'react'
import {Link} from 'react-router-dom'
function User(props) {
    let id = props.match.params.id;
    const user = props.location.param1;
    return (
        <div>
            <Link to='/users' className='btn btn-primary backtoprofile'>
            Back to profiles
          </Link>
          <div className="user-block">
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>DOB: {user.dob}</p>
            <p>Profession: {user.profession}</p>
            <p>Locality: {user.locality}</p>
            <p>No. Of Guests: {user.noofguests}</p>
            <p>Address: {user.address}</p>
          </div>
        </div>
    )
}

export default User;
