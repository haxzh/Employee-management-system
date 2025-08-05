import React, { useState, useEffect } from 'react';
import { 
  FiHome, FiClipboard, FiBarChart2, FiMail, FiSettings, 
  FiBell, FiSearch, FiPlus, FiCheck, FiX, FiUser, FiCalendar,
  FiPhone, FiBriefcase, FiMapPin, FiAward, FiClock
} from 'react-icons/fi';
import '../style/EmployeeDashboard.css';
import { Link } from 'react-router-dom';

const EmployeeDashboard = () => {
  const [employee, setEmployee] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch employee data from localStorage
    const userData = JSON.parse(localStorage.getItem('currentUser'));
    setEmployee(userData);

    // Mock tasks data
    const mockTasks = [
      {
        id: 'T-' + Math.random().toString(36).substr(2, 6).toUpperCase(),
        title: 'Project Dashboard Design',
        dueDate: '2023-06-15',
        priority: 'high',
        status: 'in-progress',
        progress: 65
      },
      {
        id: 'T-' + Math.random().toString(36).substr(2, 6).toUpperCase(),
        title: 'API Integration',
        dueDate: '2023-06-10',
        priority: 'medium',
        status: 'pending',
        progress: 0
      },
      {
        id: 'T-' + Math.random().toString(36).substr(2, 6).toUpperCase(),
        title: 'Database Optimization',
        dueDate: '2023-06-05',
        priority: 'low',
        status: 'completed',
        progress: 100
      }
    ];

    setTimeout(() => {
      setTasks(mockTasks);
      setLoading(false);
    }, 1200);
  }, []);

  const handleTaskUpdate = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const getTaskCountByStatus = (status) => {
    return tasks.filter(task => task.status === status).length;
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading your workspace...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Navigation Sidebar */}
      <div className="app-sidebar">
        <div className="sidebar-header">
          <h2>WorkSpace</h2>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <div className="nav-btn-content">
              <FiHome className="nav-icon" />
              <span>Dashboard</span>
            </div>
            <div className="nav-btn-highlight"></div>
          </button>

          <button 
            className={`nav-btn ${activeTab === 'tasks' ? 'active' : ''}`}
            onClick={() => setActiveTab('tasks')}
          >
            <Link to="/tasks" className={`nav-btn ${activeTab === 'tasks' ? 'active' : ''}`}>
              <div className="nav-btn-content">
                <FiClipboard className="nav-icon" />
                <span>My Tasks</span>
              </div>
              <div className="nav-btn-highlight"></div>
            </Link>
          </button>

          <button 
            className={`nav-btn ${activeTab === 'performance' ? 'active' : ''}`}
            onClick={() => setActiveTab('performance')}
          >
            <Link to="/performance" className={`nav-btn ${activeTab === 'performance' ? 'active' : ''}`}>
              <div className="nav-btn-content">
                <FiBarChart2 className="nav-icon" />
                <span>Performance</span>
              </div>
              <div className="nav-btn-highlight"></div>
            </Link>
          </button>

          <button 
            className={`nav-btn ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <Link to="/contact" className={`nav-btn ${activeTab === 'messages' ? 'active' : ''}`}>
              <div className="nav-btn-content">
                <FiMail className="nav-icon" />
                <span>Messages</span>
                <span className="message-count">5</span>
              </div>
              <div className="nav-btn-highlight"></div>
            </Link>
          </button>

          <button 
            className={`nav-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <div className="nav-btn-content">
              <FiSettings className="nav-icon" />
              <span>Settings</span>
            </div>
            <div className="nav-btn-highlight"></div>
          </button>
        </nav>

        <div className="user-profile-card">
          <div className="profile-avatar">
            {employee && employee.employeeName.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="profile-info">
            <h4>{employee ? employee.employeeName : 'Loading...'}</h4>
            <p>{employee ? employee.position : 'Position'}</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="app-main">
        {/* Top Header Bar */}
        <header className="app-header">
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search tasks, projects..." />
          </div>
          <div className="header-actions">
            <button className="notification-btn">
              <FiBell />
              <span className="notification-badge">3</span>
            </button>
            <button className="new-task-btn">
              <FiPlus /> New Task
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="dashboard-content">
          <div className="welcome-banner">
            <h1>Good Morning, {employee ? employee.employeeName.split(' ')[0] : 'User'}!</h1>
            <p>Here's your daily work summary</p>
          </div>

          {/* Stats Overview Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon total-tasks">
                <FiClipboard />
              </div>
              <div className="stat-info">
                <h3>{tasks.length}</h3>
                <p>Total Tasks</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon pending-tasks">
                <FiClock />
              </div>
              <div className="stat-info">
                <h3>{getTaskCountByStatus('pending')}</h3>
                <p>Pending</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon progress-tasks">
                <FiAward />
              </div>
              <div className="stat-info">
                <h3>{getTaskCountByStatus('in-progress')}</h3>
                <p>In Progress</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon completed-tasks">
                <FiCheck />
              </div>
              <div className="stat-info">
                <h3>{getTaskCountByStatus('completed')}</h3>
                <p>Completed</p>
              </div>
            </div>
          </div>

          {/* Employee Profile Section */}
          <div className="profile-section">
            <h2 className="section-title">My Profile</h2>
            <div className="profile-details">
              <div className="detail-row">
                <FiUser className="detail-icon" />
                <div>
                  <p className="detail-label">Full Name</p>
                  <h4 className="detail-value">{employee?.employeeName}</h4>
                </div>
              </div>
              <div className="detail-row">
                <FiBriefcase className="detail-icon" />
                <div>
                  <p className="detail-label">Position</p>
                  <h4 className="detail-value">{employee?.position}</h4>
                </div>
              </div>
              <div className="detail-row">
                <FiCalendar className="detail-icon" />
                <div>
                  <p className="detail-label">Join Date</p>
                  <h4 className="detail-value">
                    {employee ? new Date(employee.joinDate).toLocaleDateString() : ''}
                  </h4>
                </div>
              </div>
              <div className="detail-row">
                <FiPhone className="detail-icon" />
                <div>
                  <p className="detail-label">Contact</p>
                  <h4 className="detail-value">{employee?.phoneNo}</h4>
                </div>
              </div>
              <div className="detail-row">
                <FiMail className="detail-icon" />
                <div>
                  <p className="detail-label">Email</p>
                  <h4 className="detail-value">{employee?.email}</h4>
                </div>
              </div>
              <div className="detail-row">
                <FiMapPin className="detail-icon" />
                <div>
                  <p className="detail-label">Department</p>
                  <h4 className="detail-value">{employee?.department}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Tasks Section */}
          <div className="tasks-section">
            <div className="section-header">
              <h2 className="section-title">Recent Tasks</h2>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="tasks-list">
              {tasks.length > 0 ? (
                tasks.map(task => (
                  <div key={task.id} className="task-card">
                    <div className="task-header">
                      <span className={`priority-dot ${task.priority}`}></span>
                      <h3 className="task-title">{task.title}</h3>
                      <span className={`task-status ${task.status}`}>
                        {task.status.replace('-', ' ')}
                      </span>
                    </div>
                    <div className="task-meta">
                      <span className="task-id">#{task.id}</span>
                      <span className="task-due">Due: {task.dueDate}</span>
                    </div>
                    <div className="task-progress">
                      <div 
                        className="progress-bar" 
                        style={{ width: `${task.progress}%` }}
                      ></div>
                      <span>{task.progress}%</span>
                    </div>
                    <div className="task-actions">
                      {task.status === 'pending' && (
                        <button 
                          className="action-btn accept-btn"
                          onClick={() => handleTaskUpdate(task.id, 'in-progress')}
                        >
                          <FiCheck /> Accept
                        </button>
                      )}
                      {task.status === 'in-progress' && (
                        <>
                          <button 
                            className="action-btn complete-btn"
                            onClick={() => handleTaskUpdate(task.id, 'completed')}
                          >
                            <FiCheck /> Complete
                          </button>
                          <button 
                            className="action-btn cancel-btn"
                            onClick={() => handleTaskUpdate(task.id, 'pending')}
                          >
                            <FiX /> Cancel
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-tasks">
                  <p>No tasks assigned yet</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;




















