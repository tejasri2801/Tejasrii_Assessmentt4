import React, { useState } from 'react';
import { Link } from "react-router-dom";


const TableComponent = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

 
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  
  const getFilteredData = () => {
    return data.filter((row) => {
      return Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  };

  
  const getSortedData = (filteredData) => {
    if (!sortConfig.key) return filteredData;

    const sortedData = [...filteredData];
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return sortedData;
  };

  
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  
  const filteredData = getFilteredData();
  const sortedData = getSortedData(filteredData);

  
  const headers = Object.keys(data[0] || {});

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
      />
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} style={{ cursor: 'pointer' }} onClick={() => handleSort(header)}>
                {header}
                {sortConfig.key === header && (
                  <span>{sortConfig.direction === 'asc' ? ' ?' : ' ?'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <>
                <td key={header}>{row[header]}</td>
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button><Link to={`/details/`}>Details</Link></button>
    </div>
  );
};
export default TableComponent;