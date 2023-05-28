import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

const AutocompleteInput = ({ control, name, options }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select
          {...field}
          options={options}
          isClearable
          isSearchable
          placeholder="Search..."
        />
      )}
    />
  );
};

export default AutocompleteInput;
