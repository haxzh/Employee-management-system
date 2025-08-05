export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  try {
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const initializeStorage = () => {
  if (!getLocalStorage('employees')) {
    setLocalStorage('employees', [
      {
        id: 1,
        username: "employee1",
        email: "employee1@example.com",
        password: "123",
        employeeName: "John Doe",
        phoneNo: "1234567890",
        position: "Developer",
        department: "Engineering",
        joinDate: "2023-01-01",
        lastLogin: null
      }
    ]);
  }
  if (!getLocalStorage('admin')) {
    setLocalStorage('admin', {
      id: 0,
      username: "admin",
      email: "admin@example.com",
      password: "admin123",
      employeeName: "System Administrator",
      phoneNo: "0000000000",
      position: "Administrator",
      department: "Management",
      joinDate: "2023-01-01",
      isAdmin: true,
      lastLogin: null
    });
  }
  if (!getLocalStorage('tasks')) {
    setLocalStorage('tasks', [
      {
        id: 'TASK-101',
        title: 'Implement Admin Dashboard',
        description: 'Create admin dashboard with employee management',
        assignedTo: '1',
        dueDate: '2023-06-15',
        priority: 'high',
        status: 'in-progress',
        category: 'development',
        createdAt: new Date().toISOString()
      }
    ]);
  }
  if (!getLocalStorage('loginHistory')) {
    setLocalStorage('loginHistory', []);
  }
};

export const addLoginRecord = (userId) => {
  const history = getLocalStorage('loginHistory') || [];
  history.push({
    userId,
    timestamp: new Date().toISOString()
  });
  setLocalStorage('loginHistory', history);
};

const SetLocalStorage = {
  setMockData: () => {
    localStorage.setItem('users', JSON.stringify([
      { id: 1, name: 'Admin', role: 'admin' },
      { id: 2, name: 'Employee', role: 'employee' }
    ]));
    localStorage.setItem('tasks', JSON.stringify([
      { id: 1, title: 'Sample Task', assignedTo: 2 }
    ]));
  }
};

export default SetLocalStorage;