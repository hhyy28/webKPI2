import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import { fetchUsers } from './api/userApi';
import UserGrid from './components/users/UserGrid';
import Loader from './components/ui/Loader';
import ScrollButton from './components/ui/ScrollButton';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1>Наша команда</h1>
        <p style={{ color: '#6b7280' }}>Перегляньте список активних користувачів платформи</p>
      </div>

      {loading ? <Loader /> : <UserGrid users={users} />}
      
      <ScrollButton />
    </Layout>
  );
}

export default App;