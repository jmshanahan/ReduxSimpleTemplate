import React from 'react'

// The reason you’d want to do this with the href of a link is that normally, 
// a javascript: URL will redirect the browser to a plain text version of the result of evaluating that JavaScript. 
// But if the result is undefined, then the browser stays on the same page. 
// void(0) is just a short and simple script that evaluates to undefined.


const Filter = ({ name, onClick }) =>
  <a href="javascript:void(0)" onClick={onClick}>{name}</a>

export default Filter