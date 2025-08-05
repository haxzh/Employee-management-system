// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaUser, FaEnvelope, FaLock, FaIdBadge, FaPhone, FaBriefcase, FaBuilding, FaCalendarAlt, FaSignInAlt } from 'react-icons/fa';
// import '../style/AdminEmpRegister.css';

// const EmployeeRegister = () => {
//   // Initialize form data from localStorage (except password)
//   const [formData, setFormData] = useState({
//     username: localStorage.getItem('reg_username') || '',
//     email: localStorage.getItem('reg_email') || '',
//     password: '',
//     employeeName: localStorage.getItem('reg_employeeName') || '',
//     phoneNo: localStorage.getItem('reg_phoneNo') || '',
//     position: localStorage.getItem('reg_position') || '',
//     department: localStorage.getItem('reg_department') || '',
//     joinDate: localStorage.getItem('reg_joinDate') || ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');

//   // Save form data to localStorage as user types (except password)
//   useEffect(() => {
//     const { password, ...dataToStore } = formData;
//     Object.entries(dataToStore).forEach(([key, value]) => {
//       localStorage.setItem(`reg_${key}`, value);
//     });
//   }, [formData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       console.log("Registration successful", {
//         ...formData,
//         password: '**HIDDEN**' // Never log actual password
//       });
      
//       setSuccessMessage(`Registration successful! Welcome ${formData.employeeName}`);
      
//       // Save non-sensitive data to localStorage
//       const { password, ...safeUserData } = formData;
//       localStorage.setItem('employeeData', JSON.stringify(safeUserData));
      
//       // Clear form and localStorage
//       setFormData({
//         username: '',
//         email: '',
//         password: '',
//         employeeName: '',
//         phoneNo: '',
//         position: '',
//         department: '',
//         joinDate: ''
//       });
      
//       // Clear registration form data from localStorage
//       Object.keys(formData).forEach(key => {
//         if (key !== 'password') {
//           localStorage.removeItem(`reg_${key}`);
//         }
//       });
      
//     } catch (error) {
//       console.error("Registration failed:", error);
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => setSuccessMessage(''), 5000);
//     }
//   };

//   return (
//     <div className="register-page">
//       <div className="register-container">
//         <div className="register-card">
//           <div className="card-header">
//             <h2 className="text-center">
//               <span className="text-primary">Registration</span> 
//             </h2>
//             <p className="text-center text-muted">Join our organization</p>
//           </div>

//           {successMessage && (
//             <div className="alert alert-success text-center">
//               {successMessage}
//             </div>
//           )}

//           <form onSubmit={submitHandler} className="register-form">
//             {/* Basic Information Section */}
//             <div className="section-title">
//               <FaUser className="icon" /> Basic Information
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="username" className="form-label">
//                 <FaUser className="icon" /> Username
//               </label>
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="username"
//                   name="username"
//                   placeholder="Enter your username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="email" className="form-label">
//                 <FaEnvelope className="icon" /> Email address
//               </label>
//               <div className="input-group">
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="password" className="form-label">
//                 <FaLock className="icon" /> Password
//               </label>
//               <div className="input-group">
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   placeholder="Create password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Employee Information Section */}
//             <div className="section-title">
//               <FaIdBadge className="icon" /> Employee Details
//             </div>

//             <div className="form-group">
//               <label htmlFor="employeeName" className="form-label">
//                 <FaUser className="icon" /> Full Name
//               </label>
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="employeeName"
//                   name="employeeName"
//                   placeholder="Enter full name"
//                   value={formData.employeeName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="phoneNo" className="form-label">
//                 <FaPhone className="icon" /> Phone Number
//               </label>
//               <div className="input-group">
//                 <input
//                   type="tel"
//                   className="form-control"
//                   id="phoneNo"
//                   name="phoneNo"
//                   placeholder="Enter phone number"
//                   value={formData.phoneNo}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="position" className="form-label">
//                 <FaBriefcase className="icon" /> Position
//               </label>
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="position"
//                   name="position"
//                   placeholder="Enter position"
//                   value={formData.position}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="department" className="form-label">
//                 <FaBuilding className="icon" /> Department
//               </label>
//               <div className="input-group">
//                 <select
//                   className="form-select"
//                   id="department"
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Department</option>
//                   <option value="Engineering">Engineering</option>
//                   <option value="Marketing">Marketing</option>
//                   <option value="HR">Human Resources</option>
//                   <option value="Finance">Finance</option>
//                   <option value="Operations">Operations</option>
//                 </select>
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="joinDate" className="form-label">
//                 <FaCalendarAlt className="icon" /> Join Date
//               </label>
//               <div className="input-group">
//                 <input
//                   type="date"
//                   className="form-control"
//                   id="joinDate"
//                   name="joinDate"
//                   value={formData.joinDate}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <button
//                 type="submit"
//                 className="register-btn"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                     <span className="ms-2">Registering...</span>
//                   </>
//                 ) : (
//                   <>
//                     <FaSignInAlt className="me-2" />
//                     Complete Registration
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>

//           <div className="login-link">
//             Already have an account? <a href="/login" className="text-primary">Login here</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeRegister;






















import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaEnvelope, FaLock, FaIdBadge, FaPhone, FaBriefcase, FaBuilding, FaCalendarAlt, FaSignInAlt } from 'react-icons/fa';
import '../style/AdminEmpRegister.css';
import { getLocalStorage, setLocalStorage } from '../../utils/LocalStorage';

const AdminEmpRegister = () => {
  const [formData, setFormData] = useState({
    username: getLocalStorage('reg_username') || '',
    email: getLocalStorage('reg_email') || '',
    password: getLocalStorage('reg_password') || '',
    employeeName: getLocalStorage('reg_employeeName') || '',
    phoneNo: getLocalStorage('reg_phoneNo') || '',
    position: getLocalStorage('reg_position') || '',
    department: getLocalStorage('reg_department') || '',
    joinDate: getLocalStorage('reg_joinDate') || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  // Save form data to localStorage as user types (except password)
  useEffect(() => {
    const { password, ...dataToStore } = formData;
    Object.entries(dataToStore).forEach(([key, value]) => {
      localStorage.setItem(`reg_${key}`, value);
    });
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      // Check if email already exists
      const employees = getLocalStorage('employees') || [];
      const admin = getLocalStorage('admin');
      if (
        employees.some(emp => emp.email === formData.email) ||
        (admin && admin.email === formData.email)
      ) {
        setError('Email already registered.');
        setIsSubmitting(false);
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Add new employee
      const newEmployee = {
        id: Date.now(),
        ...formData,
        lastLogin: null
      };
      setLocalStorage('employees', [...employees, newEmployee]);

      setSuccessMessage(`Registration successful! Welcome ${formData.employeeName}`);

      // Clear form and localStorage
      setFormData({
        username: '',
        email: '',
        password: '',
        employeeName: '',
        phoneNo: '',
        position: '',
        department: '',
        joinDate: ''
      });

      Object.keys(formData).forEach(key => {
        if (key !== 'password') {
          localStorage.removeItem(`reg_${key}`);
        }
      });
    } catch (error) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSuccessMessage(''), 5000);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">
          <div className="card-header">
            <h2 className="text-center">
              <span className="text-primary">Employee Registration</span>
            </h2>
            <p className="text-center text-muted">Join our organization</p>
          </div>

          {successMessage && (
            <div className="alert alert-success text-center">
              {successMessage}
            </div>
          )}
          {error && (
            <div className="alert alert-danger text-center">
              {error}
            </div>
          )}

          <form onSubmit={submitHandler} className="register-form">
            <div className="section-title">
              <FaUser className="icon" /> Basic Information
            </div>
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                <FaUser className="icon" /> Username
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <FaEnvelope className="icon" /> Email address
              </label>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                <FaLock className="icon" /> Password
              </label>
              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={3}
                />
              </div>
            </div>
            <div className="section-title">
              <FaIdBadge className="icon" /> Employee Details
            </div>
            <div className="form-group">
              <label htmlFor="employeeName" className="form-label">
                <FaUser className="icon" /> Full Name
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="employeeName"
                  name="employeeName"
                  placeholder="Enter full name"
                  value={formData.employeeName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNo" className="form-label">
                <FaPhone className="icon" /> Phone Number
              </label>
              <div className="input-group">
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNo"
                  name="phoneNo"
                  placeholder="Enter phone number"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="position" className="form-label">
                <FaBriefcase className="icon" /> Position
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="position"
                  name="position"
                  placeholder="Enter position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="department" className="form-label">
                <FaBuilding className="icon" /> Department
              </label>
              <div className="input-group">
                <select
                  className="form-select"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Department</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Marketing">Marketing</option>
                  <option value="HR">Human Resources</option>
                  <option value="Finance">Finance</option>
                  <option value="Operations">Operations</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="joinDate" className="form-label">
                <FaCalendarAlt className="icon" /> Join Date
              </label>
              <div className="input-group">
                <input
                  type="date"
                  className="form-control"
                  id="joinDate"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="register-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="ms-2">Registering...</span>
                  </>
                ) : (
                  <>
                    <FaSignInAlt className="me-2" />
                    Complete Registration
                  </>
                )}
              </button>
            </div>
          </form>
          <div className="login-link">
            Already have an account? <a href="/login" className="text-primary">Login here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEmpRegister;