// pages/_app.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { getRandomUser } from '../utils/fetchUser';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getRandomUser();
      setUser(userData);
    };
    fetchUser();
  }, []); // runs only on initial load

  if (!user) return <p style={{ padding: '20px' }}>Loading user...</p>;

  return (
    <>
      <Navbar profilePic={user.picture.large} firstName={user.name.first} />
      <Component {...pageProps} user={user} />
    </>
  );
}

export default MyApp;
