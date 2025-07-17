// pages/about.js

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Page</h1>
      <p style={styles.text}>
        This is a static page. The Navbar above still shows a random profile picture every time you refresh.
      </p>
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
    color: '#0f172a',
    marginBottom: '10px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#334155'
  }
};

export default About;
