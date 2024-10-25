// EmployeeFilter.js
import React, { useState } from 'react';
import './EmployeeFilter.css';

const EmployeeFilter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterByBonus, setFilterByBonus] = useState(false);
  const [filterBySalary, setFilterBySalary] = useState(false);

  // Обновляем фильтр при изменении значений
  const handleFilterChange = () => {
    onFilterChange({ searchTerm, filterByBonus, filterBySalary });
  };

  return (
    <div className="filter-container">
      {/* Строка поиска по имени */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleFilterChange();
        }}
      />

      {/* Вкладка фильтрации по премии */}
      <label>
        <input
          type="checkbox"
          checked={filterByBonus}
          onChange={(e) => {
            setFilterByBonus(e.target.checked);
            handleFilterChange();
          }}
        />
        Bonus Eligible
      </label>

      {/* Вкладка фильтрации по зарплате больше 1000$ */}
      <label>
        <input
          type="checkbox"
          checked={filterBySalary}
          onChange={(e) => {
            setFilterBySalary(e.target.checked);
            handleFilterChange();
          }}
        />
        Salary > 1000$
      </label>
    </div>
  );
};

export default EmployeeFilter;
