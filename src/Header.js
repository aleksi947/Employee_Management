// src/EmployeeList/Header.js
import React from 'react';
import './Header.css'; // Для стилей

// Компонент шапки, который отображает заголовки
const Header = ({ totalEmployees, bonusEligible }) => {
  return (
    <div className="header">
      <h2>Total Employees: {totalEmployees}</h2>
      <h3>Bonus Eligible: {bonusEligible}</h3>
    </div>
  );
};

export default Header;
