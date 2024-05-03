import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../common/components/Loading'

import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const { token, loading } = useSelector((state) => state.auth)

  if (loading) {
    return <Loading />
  }
  return token ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
