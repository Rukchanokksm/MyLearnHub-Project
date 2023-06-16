import React from "react"

import { Navigate, Outlet } from "react-router-dom"

const GuardedRoute = (props) => {
  const { isRouteAccessible, redirectRoute } = props

  return isRouteAccessible ? <Outlet /> : <Navigate to={redirectRoute} replace />
}

export default GuardedRoute
