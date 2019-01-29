import React, { memo } from 'react';

export default memo(function (props) {
  return <div>Hello world!</div>;
}, function (prevProps, nextProps) {
  // are equal
  // return true to avoid rendering,
  // inverse from shouldComponentUpdate
  return prevProps.color === nextProps.color;
});
