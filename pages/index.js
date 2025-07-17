// pages/index.js

const Home = ({ user }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Profile</h1>
      <div style={styles.card}>
        <img src={user.picture.large} alt="User" style={styles.image} />
        <div style={styles.info}>
          <p><strong>N:</strong> {user.name.first} {user.name.last}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Location:</strong> {user.location.city}, {user.location.country}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#0f172a'
  },
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    alignItems: 'center',
    background: '#f8fafc',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    maxWidth: '700px',
  },
  image: {
    borderRadius: '50%',
    border: '3px solid #0f172a',
    width: '120px',
    height: '120px',
    objectFit: 'cover'
  },
  info: {
    fontSize: '16px',
    lineHeight: '1.6',
    flex: 1,
    minWidth: '220px'
  }
};

export default Home;
