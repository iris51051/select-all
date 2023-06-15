import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const MySelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selectedValues) => {
    setSelectedOptions(selectedValues);
  };

  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options.map((option) => option.value));
    }
  };

  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
  ];

  const isAllOptionsSelected = selectedOptions.length === options.length;

  return (
    <Select
      mode="multiple"
      onChange={handleSelectChange}
      value={selectedOptions}
      optionLabelProp="label"
      dropdownRender={(menu) => (
        <div>
          <div
            onClick={() => handleSelectAll()}
            style={{ padding: '8px', cursor: 'pointer' }}
          >
            <input type="checkbox" checked={isAllOptionsSelected} readOnly />
            Select All
          </div>
          <hr style={{ margin: '5px 0' }} />
          {menu}
        </div>
      )}
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value} label={option.label}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default MySelect;
