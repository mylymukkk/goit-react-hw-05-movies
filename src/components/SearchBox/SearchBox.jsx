import PropTypes from 'prop-types';

import { Input, Form, Button } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="query"
        placeholder="search movie"
        autoComplete="off"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
