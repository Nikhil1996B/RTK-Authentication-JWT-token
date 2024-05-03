import React from 'react'
import Login from '../pages/Login'
import NoMatch from '../pages/NotFound'
import Dashboard from '../pages/Dashboard'
import PrivateRoutes from './PrivateRoute'
import { Routes, Route } from 'react-router-dom'

const Navigator = () => (
  <Routes>
    <Route exact path="/" element={<Login />}></Route>
    <Route exact path="/login" element={<Login />}></Route>
    <Route element={<PrivateRoutes />}>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
    <Route path="*" element={<NoMatch />} />
  </Routes>
)

export default Navigator
