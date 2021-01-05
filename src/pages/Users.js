import React, { useState, useEffect } from 'react';

import api from '../api';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users').then((response) => setUsers(response.data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.firstName} {user.lastName}</h2>
        </div>
      ))}
    </div>
  );
}

export default Users;
