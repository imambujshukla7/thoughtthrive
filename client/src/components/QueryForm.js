import React, { useState } from 'react';

const QueryForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQuerySubmit = () => {
    onSubmit(query);
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleQuerySubmit}>Submit Query</button>
    </div>
  );
};

export default QueryForm;
