import React from 'react';

function QueryResponse({ query, response }) {
  return (
    <div>
      <h2>Query:</h2>
      <p>{query}</p>
      <h2>Response:</h2>
      <p>{response}</p>
    </div>
  );
}

export default QueryResponse
