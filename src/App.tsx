import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App(){

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isloading, setLoading] = useState(false);

  useEffect (()  => {
    setLoading(true);
    axios
    .get<User[]>('https://jsonplaceholder.typicode.com/usxers')
    .then(response => {
      setUsers(response.data);
      setLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setLoading(false);
    });
  }, [])

  return <>
  {error && <p className="text-danger">{error}</p>}
  {isloading && <div className="spinner-border"></div>}
  <ul>
    {users.map(user => <li key={user.id}>{user.name}</li>)};
  </ul>
  </>


}

export default App; 