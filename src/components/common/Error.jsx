import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Error({ error }) {
  return (
    <Wrapper>
      {error}
      <StyledLinkButton to="/" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vw;
  background: #fff;
`;

const StyledLinkButton = styled(Link)`
  display: inline-block;
  min-width: 80px;
  height: 45px;
  border-radius: 8px;
  background-color: #2f49d1;
`;

Error.propTypes = {
  error: PropTypes.any,
};

export default Error;
