import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../store/slices/authThunk';
import Button from '../common/components/Button';

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className="page">
      <h2>Dashboard</h2>

      <div>
        <Button onClick={() => dispatch(signOut())} name="Sign Out" />
      </div>
    </div>
  );
};

export default Dashboard;
