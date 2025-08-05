import React, { useState } from 'react';
import '../style/EmployeeDashboard.css'
import AddTask from '../TaskList/AddTask';

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([
    {
      id: 'EMP-001',
      name: 'John Doe',
      position: 'Senior Developer',
      department: 'Engineering',
      email: 'john.doe@company.com',
      status: 'active',
      lastActive: '2023-06-10'
    },
    {
      id: 'EMP-002',
      name: 'Jane Smith',
      position: 'Product Manager',
      department: 'Product',
      email: 'jane.smith@company.com',
      status: 'active',
      lastActive: '2023-06-09'
    },
    {
      id: 'EMP-003',
      name: 'Mike Johnson',
      position: 'UX Designer',
      department: 'Design',
      email: 'mike.johnson@company.com',
      status: 'on-leave',
      lastActive: '2023-05-28'
    },
    {
      id: 'EMP-004',
      name: 'Sarah Williams',
      position: 'Junior Developer',
      department: 'Engineering',
      email: 'sarah.williams@company.com',
      status: 'active',
      lastActive: '2023-06-10'
    }
  ]);

  const [tasks, setTasks] = useState([
    {
      id: 'TASK-101',
      name: 'Implement Admin Dashboard',
      assignedTo: 'John Doe',
      deadline: '2023-06-15',
      status: 'in-progress',
      priority: 'high'
    },
    {
      id: 'TASK-102',
      name: 'Database Migration',
      assignedTo: 'Team',
      deadline: '2023-06-20',
      status: 'pending',
      priority: 'critical'
    },
    {
      id: 'TASK-103',
      name: 'User Training',
      assignedTo: 'Jane Smith',
      deadline: '2023-06-25',
      status: 'not-started',
      priority: 'medium'
    }
  ]);

  const handleAddEmployee = () => {
    alert('Add Employee button clicked! This would open an employee creation form.');
  };

  const handleAssignTask = () => {
    alert('Assign Task button clicked! This would open a task assignment form.');
  };

  const handleGenerateReport = () => {
    alert('Report generation initiated! This would create a performance report.');
  };

  const handleSystemSettings = () => {
    alert('Opening system settings panel!');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Admin Portal</h2>
        </div>
        <div className="sidebar-nav">
          <div className="nav-item active">Dashboard</div>
          <div className="nav-item">Employees</div>
          <div className="nav-item" to="/add-task">Tasks</div>
          <div className="nav-item">Reports</div>
          <div className="nav-item">Settings</div>
          <div className="nav-item">Audit Log</div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Admin Dashboard</h1>
          <div className="user-profile">
            <div className="user-avatar">AD</div>
            <span>Admin User</span>
          </div>
        </div>
        
        {/* Admin Action Buttons */}
        <div className="admin-buttons">
          <button className="btn btn-primary" onClick={handleAddEmployee}>
            <i className="fas fa-user-plus "></i> Add Employee
          </button>
          <button className="btn btn-success" onClick={handleAssignTask}>
            {/* <i className="fas fa-tasks "></i>  */}
             <a href="/add-task" className="text-primary">Assign Task</a>
          </button>
          <button className="btn btn-info" onClick={handleGenerateReport}>
            <i className="fas fa-chart-bar"></i> Generate Report
          </button>
          <button className="btn btn-secondary" onClick={handleSystemSettings}>
            <i className="fas fa-cog"></i> System Settings
          </button>
        </div>
        
        {/* Stats Cards */}
        <div className="dashboard-cards">
          <div className="card">
            <div className="card-title">Total Employees</div>
            <div className="card-value">127</div>
            <div className="card-change positive">+5% from last month</div>
          </div>
          <div className="card">
            <div className="card-title">Active Tasks</div>
            <div className="card-value">48</div>
            <div className="card-change negative">-3 from yesterday</div>
          </div>
          <div className="card">
            <div className="card-title">Departments</div>
            <div className="card-value">8</div>
            <div className="card-change neutral">No change</div>
          </div>
          <div className="card">
            <div className="card-title">System Health</div>
            <div className="card-value">98%</div>
            <div className="card-change positive">Stable</div>
          </div>
        </div>
        
        {/* Quick Admin Tools */}
        <div className="admin-tools">
          <div className="tools-header">
            <h3>Quick Tools</h3>
          </div>
          <div className="tools-grid">
            <div className="tool-item">
              <i className="fas fa-envelope"></i>
              <span>Send Announcement</span>
            </div>
            <div className="tool-item">
              <i className="fas fa-calendar-alt"></i>
              <span>Schedule Meeting</span>
            </div>
            <div className="tool-item">
              <i className="fas fa-file-export"></i>
              <span>Export Data</span>
            </div>
            <div className="tool-item">
              <i className="fas fa-bell"></i>
              <span>Manage Notifications</span>
            </div>
          </div>
        </div>
        
        {/* Employee Management */}
        <div className="management-section">
          <div className="section-header">
            <h3>Employee Management</h3>
            <button className="btn btn-sm btn-outline">View All</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Status</th>
                <th>Last Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>
                    <div className="employee-info">
                      <div className="employee-avatar">
                        {employee.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="employee-name">{employee.name}</div>
                        <div className="employee-email">{employee.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{employee.position}</td>
                  <td>{employee.department}</td>
                  <td>
                    <span className={`status-badge status-${employee.status}`}>
                      {employee.status === 'active' && 'Active'}
                      {employee.status === 'on-leave' && 'On Leave'}
                      {employee.status === 'inactive' && 'Inactive'}
                    </span>
                  </td>
                  <td>{employee.lastActive}</td>
                  <td>
                    <button className="btn-icon" title="Edit">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn-icon" title="View Profile">
                      <i className="fas fa-user"></i>
                    </button>
                    <button className="btn-icon" title="Message">
                      <i className="fas fa-comment"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Task Overview */}
        <div className="management-section">
          <div className="section-header">
            <h3>Task Overview</h3>
            <button className="btn btn-sm btn-outline">View All Tasks</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Task ID</th>
                <th>Task Name</th>
                <th>Assigned To</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.name}</td>
                  <td>{task.assignedTo}</td>
                  <td>{task.deadline}</td>
                  <td>
                    <span className={`status-badge status-${task.status}`}>
                      {task.status === 'in-progress' && 'In Progress'}
                      {task.status === 'pending' && 'Pending'}
                      {task.status === 'not-started' && 'Not Started'}
                      {task.status === 'completed' && 'Completed'}
                    </span>
                  </td>
                  <td>
                    <span className={`priority-badge priority-${task.priority}`}>
                      {task.priority === 'critical' && 'Critical'}
                      {task.priority === 'high' && 'High'}
                      {task.priority === 'medium' && 'Medium'}
                      {task.priority === 'low' && 'Low'}
                    </span>
                  </td>
                  <td>
                    <button className="btn-icon" title="Edit Task">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn-icon" title="Reassign">
                      <i className="fas fa-user-friends"></i>
                    </button>
                    <button className="btn-icon" title="View Details">
                      <i className="fas fa-eye"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;










