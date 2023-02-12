import PropTypes from 'prop-types';

import { HiArrowLeft } from 'react-icons/hi';

import { StyledLink } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft />
      {children}
    </StyledLink>
  );
};

export default BackLink;

BackLink.propTypes = {
  children: PropTypes.node.isRequired,
};
