import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search for a book"
        className="mr-sm-3 ml-sm-6`"
      ></Form.Control>
      <Button type="submit" variant="success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
