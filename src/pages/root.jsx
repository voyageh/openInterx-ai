import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Tooltip } from 'antd'
import Icon from '@/components/icon'
import { useUserStore } from '@/store/user'

import './root.scss'
import { useEffect } from 'react'

export default function Root() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, theme, changeTheme, token } = useUserStore()
  
  // useEffect(() => {
  //   if (!token) {
  //     navigate('/login', { replace: true })
  //   }
  // }, [])

  return (
    <div className="openinterx-ai">
      <div className="openinterx-ai__left hidden-sm-and-down">
        <div className="logo">
          <Icon name="Logo" className="logo-icon" />
        </div>
        <div className="menu-wrapper">
          <Tooltip title="My video" placement="right">
            <NavLink to="/my-video" className={({ isActive }) => (isActive ? 'active' : '')}>
              <Icon name="MyVideo" className="menu-icon" />
            </NavLink>
          </Tooltip>
          <Tooltip title="Sample video" placement="right">
            <NavLink to="/sample-video" className={({ isActive }) => (isActive || location.pathname === '/' ? 'active' : '')}>
              <Icon name="SampleVideo" className="menu-icon" />
            </NavLink>
          </Tooltip>
        </div>
        <div className="user-avatar">
          <Tooltip title="Theme switch" placement="right">
            <Icon name={theme} className="theme-icon" onClick={changeTheme} />
          </Tooltip>
          <Tooltip title="User settings" placement="right">
            <img src={user.imageUrl} alt="avatar" />
          </Tooltip>
        </div>
      </div>
      <div className="openinterx-ai__right">
        <Outlet />
      </div>
    </div>
  )
}
