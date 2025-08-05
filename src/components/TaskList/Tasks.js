import React, { useState, useEffect } from 'react';
import { getLocalStorage } from '../../utils/LocalStorage';
import { FiCheck, FiX, FiClock, FiAlertCircle } from 'react-icons/fi';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(() => {
    const storedTasks = getLocalStorage('tasks') || [];
    // Filter tasks assigned to current user
    const userTasks = storedTasks.filter(task => 
      task.assignedTo === currentUser.id.toString() || 
      task.assignedTo === currentUser.employeeName
    );
    
    setTimeout(() => {
      setTasks(userTasks);
      setLoading(false);
    }, 500);
  }, [currentUser]);

  const handleTaskUpdate = (taskId, newStatus) => {
    const allTasks = getLocalStorage('tasks') || [];
    const updatedTasks = allTasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setLocalStorage('tasks', updatedTasks);
    setTasks(updatedTasks.filter(task => 
      task.assignedTo === currentUser.id.toString() || 
      task.assignedTo === currentUser.employeeName
    ));
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading your tasks...</p>
      </div>
    );
  }

  return (
    <div className="tasks-container">
      <h2>My Tasks</h2>
      
      {tasks.length === 0 ? (
        <div className="no-tasks">
          <p>No tasks assigned to you yet</p>
        </div>
      ) : (
        <div className="tasks-list">
          {tasks.map(task => (
            <div key={task.id} className="task-card">
              <div className="task-header">
                <h3>{task.title}</h3>
                <span className={`priority ${task.priority}`}>
                  {task.priority}
                </span>
              </div>
              
              <p className="task-description">{task.description}</p>
              
              <div className="task-meta">
                <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                <span className={`status ${task.status}`}>
                  {task.status.replace('-', ' ')}
                </span>
              </div>
              
              <div className="task-actions">
                {task.status === 'pending' && (
                  <button 
                    className="btn-start"
                    onClick={() => handleTaskUpdate(task.id, 'in-progress')}
                  >
                    <FiClock /> Start Task
                  </button>
                )}
                
                {task.status === 'in-progress' && (
                  <>
                    <button 
                      className="btn-complete"
                      onClick={() => handleTaskUpdate(task.id, 'completed')}
                    >
                      <FiCheck /> Complete
                    </button>
                    <button 
                      className="btn-cancel"
                      onClick={() => handleTaskUpdate(task.id, 'pending')}
                    >
                      <FiX /> Cancel
                    </button>
                  </>
                )}
                
                {task.status === 'completed' && (
                  <button 
                    className="btn-reopen"
                    onClick={() => handleTaskUpdate(task.id, 'in-progress')}
                  >
                    <FiAlertCircle /> Reopen
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tasks;