// import React, { useState } from 'react';
// import '../style/AddTask.css';

// const NewTask = () => {
//   const [task, setTask] = useState({
//     id: '',
//     title: '',
//     description: '',
//     dueDate: '',
//     priority: 'medium',
//     status: 'pending',
//     assignedTo: '',
//     category: 'general'
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTask(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!task.title.trim()) newErrors.title = 'Title is required';
//     if (!task.dueDate) newErrors.dueDate = 'Due date is required';
//     if (new Date(task.dueDate) < new Date()) newErrors.dueDate = 'Due date cannot be in the past';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
    
//     setIsSubmitting(true);
//     // Here you would typically send the data to your API
//     console.log('Task submitted:', task);
//     setTimeout(() => {
//       alert('Task created successfully!');
//       setIsSubmitting(false);
//       // Reset form
//       setTask({
//         id: '',
//         title: '',
//         description: '',
//         dueDate: '',
//         priority: 'medium',
//         status: 'pending',
//         assignedTo: '',
//         category: 'general'
//       });
//       setErrors({});
//     }, 1000);
//   };

//   return (
//     <div className="new-task-container">
//       <div className="new-task-card">
//         <div className="task-header">
//           <h2>Create New Task</h2>
//           <p>Fill in the details to assign a new task</p>
//         </div>
        
//         <form onSubmit={handleSubmit}>
//           <div className="form-grid">
//             <div className="form-group">
//               <label htmlFor="id">Task ID</label>
//               <input
//                 type="text"
//                 id="id"
//                 name="id"
//                 value={task.id}
//                 onChange={handleChange}
//                 placeholder="e.g. TASK-001"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="title">Task Title*</label>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 value={task.title}
//                 onChange={handleChange}
//                 className={errors.title ? 'error' : ''}
//                 placeholder="Enter task title"
//               />
//               {errors.title && <span className="error-message">{errors.title}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={task.description}
//                 onChange={handleChange}
//                 rows="4"
//                 placeholder="Describe the task in detail..."
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="dueDate">Due Date*</label>
//               <input
//                 type="date"
//                 id="dueDate"
//                 name="dueDate"
//                 value={task.dueDate}
//                 onChange={handleChange}
//                 className={errors.dueDate ? 'error' : ''}
//                 min={new Date().toISOString().split('T')[0]}
//               />
//               {errors.dueDate && <span className="error-message">{errors.dueDate}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="priority">Priority</label>
//               <select
//                 id="priority"
//                 name="priority"
//                 value={task.priority}
//                 onChange={handleChange}
//               >
//                 <option value="low">Low</option>
//                 <option value="medium">Medium</option>
//                 <option value="high">High</option>
//                 <option value="critical">Critical</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label htmlFor="status">Status</label>
//               <select
//                 id="status"
//                 name="status"
//                 value={task.status}
//                 onChange={handleChange}
//               >
//                 <option value="pending">Pending</option>
//                 <option value="in-progress">In Progress</option>
//                 <option value="completed">Completed</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label htmlFor="assignedTo">Assign To</label>
//               <input
//                 type="text"
//                 id="assignedTo"
//                 name="assignedTo"
//                 value={task.assignedTo}
//                 onChange={handleChange}
//                 placeholder="Employee name or ID"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="category">Category</label>
//               <select
//                 id="category"
//                 name="category"
//                 value={task.category}
//                 onChange={handleChange}
//               >
//                 <option value="general">General</option>
//                 <option value="development">Development</option>
//                 <option value="design">Design</option>
//                 <option value="marketing">Marketing</option>
//                 <option value="support">Support</option>
//               </select>
//             </div>
//           </div>

//           <div className="form-actions">
//             <button
//               type="submit"
//               className="submit-btn"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <>
//                   <span className="spinner"></span> Creating...
//                 </>
//               ) : (
//                 'Create Task'
//               )}
//             </button>
//             <button type="button" className="cancel-btn">
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewTask;












import React, { useState } from 'react';
import '../style/AddTask.css';
import { getLocalStorage, setLocalStorage } from '../../utils/LocalStorage';
import { useNavigate } from 'react-router-dom';

const NewTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    status: 'pending',
    assignedTo: '',
    category: 'general'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const generateTaskId = () => {
    return 'TASK-' + Math.random().toString(36).substr(2, 6).toUpperCase();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!task.title.trim()) newErrors.title = 'Title is required';
    if (!task.dueDate) newErrors.dueDate = 'Due date is required';
    if (new Date(task.dueDate) < new Date()) newErrors.dueDate = 'Due date cannot be in the past';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Save to localStorage
    const newTask = {
      ...task,
      id: generateTaskId(),
      createdAt: new Date().toISOString()
    };
    
    const existingTasks = getLocalStorage('tasks') || [];
    const updatedTasks = [...existingTasks, newTask];
    setLocalStorage('tasks', updatedTasks);
    
    setTimeout(() => {
      alert('Task created successfully!');
      setIsSubmitting(false);
      navigate('/admin-dashboard');
    }, 1000);
  };
 return (
    <div className="new-task-container">
      <div className="new-task-card">
        <div className="task-header">
          <h2>Create New Task</h2>
          <p>Fill in the details to assign a new task</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="id">Task ID</label>
              <input
                type="text"
                id="id"
                name="id"
                value={task.id}
                onChange={handleChange}
                placeholder="e.g. TASK-001"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Task Title*</label>
              <input
                type="text"
                id="title"
                name="title"
                value={task.title}
                onChange={handleChange}
                className={errors.title ? 'error' : ''}
                placeholder="Enter task title"
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={task.description}
                onChange={handleChange}
                rows="4"
                placeholder="Describe the task in detail..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="dueDate">Due Date*</label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
                className={errors.dueDate ? 'error' : ''}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.dueDate && <span className="error-message">{errors.dueDate}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select
                id="priority"
                name="priority"
                value={task.priority}
                onChange={handleChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={task.status}
                onChange={handleChange}
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="assignedTo">Assign To</label>
              <input
                type="text"
                id="assignedTo"
                name="assignedTo"
                value={task.assignedTo}
                onChange={handleChange}
                placeholder="Employee name or ID"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={task.category}
                onChange={handleChange}
              >
                <option value="general">General</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="support">Support</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span> Creating...
                </>
              ) : (
                'Create Task'
              )}
            </button>
            <button type="button" className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
