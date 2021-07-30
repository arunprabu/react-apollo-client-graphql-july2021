import { gql, useQuery } from '@apollo/client';
import React from 'react';

function Users(){
  const USER_LIST = gql`
    query{
      userList{
        id
        name
        phone
      }
    }
  `;
  
  const { loading, error, data } = useQuery(USER_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // useEffect() -- Learn about this hook. 
  // loop thru 
  let usersCard = null; 
  usersCard = data.userList.map( ( user ) => {
    console.log(user);
    return(
      <div className="col-md-3" key={user.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{user.phone}</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    )
  });

  return(
    <div className="container">
      <h2>Listing Users</h2>
      <div className="row">

        { data.userList && data.userList.length > 0? 
            usersCard
          :
          <div className="alert alert-danger">
            Unable to Load data.. Pls check later.
          </div>
        }
        

      </div>

    </div>
  )
}

export default Users;