import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

class Users extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
  };
  fetchUsers = () => {
    fetch(`https://my.api.mockaroo.com/users.json?key=09e9b680`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch((error) => this.setState({ error, isLoading: false }));
  };

 

  componentDidMount = () =>{
    this.fetchUsers();
  }

  render() {
    const { isLoading, users, error } = this.state;
    return (
      <div className='users-page'>
        <div className='users-data'>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            users.map((user) => {
              const { id, name, locality } = user;
              const newTo = { 
                pathname: `/user/${id}`, 
                param1: user 
              };
              return (
                <div key={id} className="users-block" >
                  <p>Name: {name}</p>
                  <p>Locality: {locality}</p>
                  <div className='buttons m-1'>
                    
                  <Link to={newTo} className='btn-primary'>
                    View Profile
                  </Link>
                </div>
                  <hr />
                </div>
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </div>
    );
  }
}
export default Users;
