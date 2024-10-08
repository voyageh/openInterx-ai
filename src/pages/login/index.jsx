import { useNavigate } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
import Logo from '@/assets/images/login/logo.svg'
import Google from '@/assets/images/login/google.svg'
import { useUserStore } from '@/store/user'

import './index.scss'

export default function Login() {
  const navigate = useNavigate()
  const login = useUserStore((state) => state.login)

  const googleLogin = useGoogleLogin({
    onSuccess: (respnse) => {
      login(respnse.access_token).then(() => {
        navigate('/')
      })
    },
  })

  return (
    <div className="login-wrapper">
      <div className="login-main">
        <div className="logo-box">
          <Logo className="icon" />
          <div className="tips">Multimodal AI that understands videos like humans</div>
        </div>

        <div className="btn-box">
          <div className="login-btn" onClick={googleLogin}>
            <Google className="icon" />
            <span className="text"> Log with Google</span>
          </div>
          <div className="tips">No account? Sign up quickly with Google</div>
        </div>
      </div>
    </div>
  )
}
