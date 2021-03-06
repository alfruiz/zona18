import React from 'react';

/**
 * Component Header
 * 1) it's a "Functional component"
 * 2) it return a view layout
 *
 * Documentation:
 * @param {number} number
 * @return {JSX}
 * @author Alfonso Ruiz alfonso.ruiz@walmart.com
*/

const Header = ({ number }) => {
    return (
        <div>
            <h1>TODOS LIST ({number})</h1>
        </div>
    );
}

export default Header;