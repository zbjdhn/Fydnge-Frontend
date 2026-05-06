export default function AuthModal({ mode, onClose, onModeChange }) {
  if (!mode) {
    return null
  }

  const isLogin = mode === 'login'

  return (
    <div className="modal-overlay open" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="auth-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="关闭">
          x
        </button>
        <div className="modal-title" id="auth-title">欢迎来到 Fyndge</div>
        <div className="modal-sub">Find where data meets your edge.</div>
        <div className="modal-tabs">
          <button className={`modal-tab ${isLogin ? 'active' : ''}`} type="button" onClick={() => onModeChange('login')}>
            登录
          </button>
          <button className={`modal-tab ${!isLogin ? 'active' : ''}`} type="button" onClick={() => onModeChange('register')}>
            注册
          </button>
        </div>

        {isLogin ? (
          <form>
            <div className="form-field">
              <label className="form-label">邮箱</label>
              <input className="form-input" type="email" placeholder="your@email.com" />
            </div>
            <div className="form-field">
              <label className="form-label">密码</label>
              <input className="form-input" type="password" placeholder="至少8位字符" />
            </div>
            <div className="forgot-row">
              <button className="text-button" type="button">忘记密码？</button>
            </div>
            <button className="form-submit" type="submit">登录</button>
            <AuthAlternatives label="使用 Google 登录" />
            <div className="form-switch">没有账号？<button type="button" onClick={() => onModeChange('register')}>免费注册</button></div>
          </form>
        ) : (
          <form>
            <div className="form-field">
              <label className="form-label">邮箱</label>
              <input className="form-input" type="email" placeholder="your@email.com" />
            </div>
            <div className="form-field">
              <label className="form-label">密码</label>
              <input className="form-input" type="password" placeholder="至少8位字符" />
            </div>
            <div className="form-field">
              <label className="form-label">确认密码</label>
              <input className="form-input" type="password" placeholder="再次输入密码" />
            </div>
            <button className="form-submit" type="submit">创建账号</button>
            <AuthAlternatives label="使用 Google 注册" />
            <div className="form-switch">已有账号？<button type="button" onClick={() => onModeChange('login')}>直接登录</button></div>
          </form>
        )}
      </div>
    </div>
  )
}

function AuthAlternatives({ label }) {
  return (
    <>
      <div className="form-divider">或</div>
      <button className="google-btn" type="button">
        <svg width="15" height="15" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
          <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
          <path d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05" />
          <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.961L3.964 6.293C4.672 4.166 6.656 3.58 9 3.58z" fill="#EA4335" />
        </svg>
        {label}
      </button>
    </>
  )
}
