// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = ({ profilePic, firstName }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
      </div>
      <div className={styles.right}>
        <span className={styles.greeting}>Hello, {firstName} </span>
        <img
          src={profilePic}
          alt="User Profile"
          width={40}
          height={40}
          className={styles.avatar}
        />
      </div>
    </nav>
  );
};

export default Navbar;
