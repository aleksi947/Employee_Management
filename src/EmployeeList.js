import React, { useState, useEffect } from 'react';
import './EmployeeList.css';
import Header from './Header'; // Импортируем компонент Header
import Filter from './Filter'; // Импортируем компонент Filter

const EmployeeList = ({ employees, onDeleteEmployee, onToggleBonus }) => {
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  // Обновление фильтрованных сотрудников при изменении списка
  useEffect(() => {
    setFilteredEmployees(employees);
  }, [employees]);

  // Обработка поиска
  const handleSearch = (searchTerm) => {
    const result = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(result);
  };

  // Фильтрация по премии
  const handleFilterBonus = () => {
    const result = employees.filter((employee) => employee.eligibleForBonus);
    setFilteredEmployees(result);
  };

  // Фильтрация по зарплате
  const handleFilterSalary = () => {
    const result = employees.filter((employee) => parseInt(employee.salary) > 1000);
    setFilteredEmployees(result);
  };

  // Подсчёт сотрудников, которые получат премию
  const bonusEligibleCount = employees.filter(employee => employee.eligibleForBonus).length;

  return (
    <div className="employee-list">
      <Header totalEmployees={employees.length} bonusEligible={bonusEligibleCount} />

      <Filter
        onSearch={handleSearch}
        onFilterBonus={handleFilterBonus}
        onFilterSalary={handleFilterSalary}
      />

      {filteredEmployees.map((employee, index) => (
        <div
          key={index}
          className={`employee-item ${employee.eligibleForBonus ? 'highlight' : ''}`}
        >
          <span className="employee-info">
            {employee.name} — {employee.salary}
          </span>
          <div className="employee-icons">
            <span
              role="img"
              aria-label="favorite"
              className="icon"
              onClick={() => onToggleBonus(index)} // Изменение статуса бонуса
              style={{ color: employee.eligibleForBonus ? 'gold' : 'gray' }}
            >
              ⭐
            </span>
            <span
              role="img"
              aria-label="delete"
              className="icon"
              onClick={() => onDeleteEmployee(index)} // Удаление сотрудника
            >
              🗑️
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;






