import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .catch(error => console.log(error));
  }, []
  
  );

  return (
    <div className="App">
      <h2>Lista de usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Género</th>
            <th>Celular</th>
            <th>País</th>
            <th>Ciudad</th>
            <th>Calle</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <img src={user.picture.thumbnail} alt="usuario" />
              </td>
              <td>
                {user.name.first} {user.name.last}
              </td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.cell}</td>
              <td>{user.location.country}</td>
              <td>{user.location.city}</td>
              <td>
                {user.location.street.name}{", "}{user.location.street.number}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default App;
