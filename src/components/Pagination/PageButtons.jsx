import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../hooks/appContext';

const PageButtons = ({ page }) => {
  const dispatch = useDispatch();

  const pageUp = () => dispatch({ type: 'PAGE_UP' });
  const pageDown = () => dispatch({ type: 'PAGE_DOWN' });

  return (
    <div>
      <button onClick={pageDown}>Prev</button>
      {page}
      <button onClick={pageUp}>Next</button>
    </div>
  );
};

PageButtons.propTypes = {
  page: PropTypes.number.isRequired
};

export default PageButtons;
