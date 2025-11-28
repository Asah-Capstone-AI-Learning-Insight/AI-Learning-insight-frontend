import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';
import ProtectedRoute from '../routes/ProtectedRoute';
// import { getUserLogged, putAccessToken } from '../utils/api';

function InsightApp() {
  return (
    <Routes>
      {/* Protected Route */}
      <Route
        path="/"
        element={
          // <ProtectedRoute>
          <Dashboard />
          // </ProtectedRoute>
        }
      />

      {/* Public Route */}
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

// export default App;

// class InsightApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       authUser: null,
//       initializing: true,
//     };

//     this.onLoginSuccess = this.onLoginSuccess.bind(this);
//     this.onLogout = this.onLogout.bind(this);
//   }

//   async componentDidMount() {
//     const { data } = await getUserLogged();

//     this.setState(() => {
//       return {
//         authUser: data,
//         initializing: false,
//       };
//     });
//   }

//   async onLoginSuccess({ accessToken }) {
//     putAccessToken(accessToken);
//     const data = await getUserLogged();

//     this.setState(() => {
//       return {
//         authUser: data,
//       };
//     });
//   }

//   onLogout() {
//     this.setState(() => {
//       return {
//         authUser: null,
//       };
//     });
//     putAccessToken('');
//   }

//   render() {
//     if (this.state.initializing) {
//       return null;
//     }

//     if (this.state.authUser === null) {
//       return (
//         <Routes>
//           <Route
//             path="/*"
//             element={<LoginPage loginSuccess={this.onLoginSuccess} />}
//           />
//         </Routes>
//       );
//     }

//     return (
//       <Routes>
//         <Route path="/" element={Dashboard} />
//       </Routes>
//     );
//   }
// }

export default InsightApp;
