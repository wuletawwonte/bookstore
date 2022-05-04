import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button type="button" onClick={checkStatusHandler}>Check Status</button>
    </>
  );
};

export default Categories;
