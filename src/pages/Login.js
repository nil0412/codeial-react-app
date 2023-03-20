// import { useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useToasts } from 'react-toast-notifications';

import styles from '../styles/login.module.css';
// import { useAuth } from '../hooks';

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggingIn, setLoggingIn] = useState(false);
//   const { addToast } = useToasts();
//   const auth = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoggingIn(true);

//     if (!email || !password) {
//       return addToast('Please enter both email and password', {
//         appearance: 'error',
//       });
//     }

//     const response = await auth.login(email, password);

//     if (response.success) {
//       addToast('Successfully logged in', {
//         appearance: 'success',
//       });
//     } else {
//       addToast(response.message, {
//         appearance: 'error',
//       });
//     }

//     setLoggingIn(false);
//   };

//   if (auth.user) {
//     return <Navigate to="/" />;
//   }

const Login = () => {
  return (
    <form className={styles.loginForm}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email"
          isRequired
        />
      </div>

      <div className={styles.field}>
        <input
          type="password"
          placeholder="Paasword"
          isRequired
        />
      </div>

      <div className={styles.field}>
        <button>
          Log In
        </button>
      </div>
    </form>
  );
};

export default Login;
