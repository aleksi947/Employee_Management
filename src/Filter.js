// src/EmployeeList/Filter.js
import React, { useState } from 'react';
import './Filter.css'; // Подключаем стили

const Filter = ({ onSearch, onFilterBonus, onFilterSalary }) => {
  // Состояния для поиска и активной вкладки
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // Возможные значения: 'all', 'bonus', 'salary'

  // Обрабатываем изменение строки поиска
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Передаём значение поиска наверх
  };

  // Обрабатываем выбор вкладки фильтра
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === 'bonus') {
      onFilterBonus();
    } else if (filter === 'salary') {
      onFilterSalary();
    } else {
      onSearch(searchTerm); // Если выбрана вкладка 'all', показываем всех
    }
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
        className="filter-search"
      />
      <div className="filter-tabs">
        <button
          className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button
          className={`filter-tab ${activeFilter === 'bonus' ? 'active' : ''}`}
          onClick={() => handleFilterChange('bonus')}
        >
          Bonus Eligible
        </button>
        <button
          className={`filter-tab ${activeFilter === 'salary' ? 'active' : ''}`}
          onClick={() => handleFilterChange('salary')}
        >
          Salary &gt; 1000$
        </button>
      </div>
    </div>
  );
};

export default Filter;
