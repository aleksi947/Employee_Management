// src/EmployeeForm.js
import React, { useState } from 'react';
import './EmployeeForm.css';

const EmployeeForm = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  // Обрабатываем добавление нового сотрудника
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && salary.trim()) {
      onAddEmployee({ name, salary: `${salary}$`, eligibleForBonus: false });
      setName('');  // Сбрасываем поля
      setSalary('');
    }
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="employee-input"
        required
      />
      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        className="employee-input"
        required
      />
      <button type="submit" className="employee-button">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
