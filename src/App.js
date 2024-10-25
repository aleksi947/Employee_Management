import React, { useState } from 'react';
import './App.css';
import EmployeeList from './EmployeeList'; // Импортируем компонент EmployeeList
import EmployeeForm from './EmployeeForm'; // Импортируем компонент EmployeeForm

function App() {
  const [employees, setEmployees] = useState([
    { name: 'John Smith', salary: '1000$', eligibleForBonus: false },
    { name: 'Alice Johnson', salary: '1500$', eligibleForBonus: true },
    { name: 'Bob Brown', salary: '1200$', eligibleForBonus: false },
  ]);

  // Функция для добавления нового сотрудника
  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  // Функция для удаления сотрудника
  const handleDeleteEmployee = (index) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((_, i) => i !== index)
    );
  };

  // Функция для изменения статуса премии
  const toggleBonus = (index) => {
    const updatedEmployees = employees.map((employee, i) =>
      i === index ? { ...employee, eligibleForBonus: !employee.eligibleForBonus } : employee
    );
    setEmployees(updatedEmployees);
  };

  return (
    <div className="App">
      <h1>Employee Management</h1>

      {/* Список сотрудников */}
      <EmployeeList
        employees={employees} // Передаём сотрудников как пропс
        onDeleteEmployee={handleDeleteEmployee} // Функция для удаления сотрудника
        onToggleBonus={toggleBonus} // Функция для переключения бонуса
      />

      {/* Форма для добавления нового сотрудника */}
      <EmployeeForm onAddEmployee={handleAddEmployee} />
    </div>
  );
}

export default App;








