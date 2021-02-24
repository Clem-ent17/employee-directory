import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Search({ handleQueryChange, getQuery }) {
  return (
    <div>
      <form >
        <TextField onChange={handleQueryChange} id="query" label="Enter your search"/>
        <Button onClick={getQuery} variant="contained" color="primary">
            Search
        </Button>
      </form>
    </div>
  );
}