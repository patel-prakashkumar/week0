import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export function Navbar({
  src,
  List1,
  List2,
  List3,
  placeholderText,
  ...props
}) {
  return (
    <div>
      <ul className="nav-info">
        <li>
          <a href={src}>{List1}</a>
        </li>
        <li>
          <a href={src}>{List2}</a>
        </li>
        <li>
          <a href={src}>{List3}</a>
        </li>
        <li>
          <input type="text" placeholder={placeholderText} />
        </li>
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  List1: PropTypes.string.isRequired,
  List2: PropTypes.string.isRequired,
  List3: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
};
