import { useEffect, useState } from 'react'
import { getHomepageData } from './api/fyndgeApi'
import AuthModal from './components/AuthModal'
import Logo from './components/Logo'
import RadarMark from './components/RadarMark'

const navigation = ['比价', '学习中心', '策略库', '行情']
const languages = ['中文', 'English', '日本語']

export default function App() {
  const [activeNav, setActiveNav] = useState('比价')
  const [language, setLanguage] = useState('中文')
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [authMode, setAuthMode] = useState(null)
  const [homeData, setHomeData] = useState(null)

  useEffect(() => {
    getHomepageData().then(setHomeData)
  }, [])

  const data = homeData ?? {
    exchanges: [],
    products: [],
    featuredOptions: [],
    featureCards: [],
    courses: [],
    updatedAtLabel: '加载中',
  }

  function handleProtectedAction(nextView = '比价') {
    setActiveNav(nextView)
    setAuthMode('register')
  }

  return (
    <div className="page">
      <nav className="nav">
        <button className="logo-button" type="button" onClick={() => setActiveNav('比价')}>
          <Logo />
        </button>
        <div className="nav-links" aria-label="主导航">
          {navigation.map((item) => (
            <button
              className={`nav-link ${activeNav === item ? 'active' : ''}`}
              type="button"
              key={item}
              onClick={() => setActiveNav(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="nav-right">
          <div className="lang-wrap">
            <button className="lang-btn" type="button" onClick={() => setIsLanguageOpen((value) => !value)}>
              <span className="globe" aria-hidden="true">◎</span>
              <span>{language}</span>
              <span aria-hidden="true">⌄</span>
            </button>
            <div className={`lang-dropdown ${isLanguageOpen ? 'open' : ''}`}>
              {languages.map((item) => (
                <button
                  className={`lang-option ${language === item ? 'selected' : ''}`}
                  type="button"
                  key={item}
                  onClick={() => {
                    setLanguage(item)
                    setIsLanguageOpen(false)
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="btn-auth">
            <button className="btn-auth-login" type="button" onClick={() => setAuthMode('login')}>登录</button>
            <div className="btn-auth-divider" />
            <button className="btn-auth-register" type="button" onClick={() => setAuthMode('register')}>注册</button>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-left">
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              <span className="hero-badge-text">实时扫描 · 全交易所加密期权</span>
            </div>
            <h1 className="hero-title">用数据，<br />找到你的<span>优势</span></h1>
            <div className="hero-slogan-en">Find where data meets your edge.</div>
            <div className="hero-slogan-zh">数据所指，<span>优势所在</span></div>
            <p className="hero-sub">一站式加密期权比价平台，数据驱动每一个交易决策。实时对比各交易所年化收益，配套系统化学习路径，让优势看得见。</p>
            <div className="hero-actions">
              <button className="btn-primary" type="button" onClick={() => handleProtectedAction('比价')}>开始比价</button>
              <button className="btn-ghost" type="button" onClick={() => setActiveNav('学习中心')}>浏览课程</button>
            </div>
          </div>
          <div className="hero-right">
            <RadarMark />
          </div>
        </section>

        <section className="stats-bar" aria-label="平台覆盖范围">
          <div className="stats-inner">
            <div className="stat">
              <div className="stat-val">{data.exchanges.length || 3}</div>
              <div className="stat-label">主流交易所</div>
              <div className="exch-row">
                {data.exchanges.map((exchange) => (
                  <span className={`exch-logo ${exchange.className}`} key={exchange.name}>{exchange.name}</span>
                ))}
              </div>
              <div className="stat-sub">覆盖全球加密期权主要流动性来源</div>
            </div>
            <div className="stat">
              <div className="stat-val">10+</div>
              <div className="stat-label">核心期权产品</div>
              <div className="prod-row">
                {data.products.map((product) => (
                  <span className="prod-tag" key={product}>{product}</span>
                ))}
              </div>
            </div>
            <div className="stat">
              <div className="stat-val">实时</div>
              <div className="stat-label">年化数据更新</div>
              <div className="stat-sub stat-refresh">报价与年化收益率<br />每分钟自动刷新</div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-title">精选推荐</span>
            <button className="section-more" type="button" onClick={() => handleProtectedAction('比价')}>查看全部比价 →</button>
          </div>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>标的</th>
                  <th>类型</th>
                  <th>行权价 (USDT)</th>
                  <th>到期日</th>
                  <th>最优年化</th>
                  <th>隐含波动率</th>
                  <th>最优来源</th>
                </tr>
              </thead>
              <tbody>
                {data.featuredOptions.map((option) => (
                  <tr key={`${option.symbol}-${option.type}-${option.expiry}-${option.strike}`}>
                    <td className="sym">{option.symbol}</td>
                    <td><span className={`tag tag-${option.type.toLowerCase()}`}>{option.type}</span></td>
                    <td>{option.strike}</td>
                    <td>{option.expiry}</td>
                    <td>
                      <div className="apr-cell">
                        <span className="apr-val up">{option.apr}</span>
                        <div className="apr-bar-bg"><div className="apr-bar-fg" style={{ width: `${option.aprBar}px` }} /></div>
                      </div>
                    </td>
                    <td className={option.ivDirection}>{option.iv}</td>
                    <td><span className="exch-best">{option.bestExchange}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-note">* {data.updatedAtLabel}，实际报价以交易所实时行情为准 · 注册后查看完整比价</div>
        </section>

        <section className="section">
          <div className="section-header"><span className="section-title">平台功能</span></div>
          <div className="feature-grid">
            {data.featureCards.map((feature) => {
              return (
                <button
                  className={`feature-card ${feature.wip ? 'wip' : ''}`}
                  type="button"
                  key={feature.title}
                  onClick={() => feature.wip ? setActiveNav('策略库') : handleProtectedAction('比价')}
                >
                  {feature.wip ? <span className="wip-badge">待开发</span> : null}
                  <div className="feature-icon"><FeatureIcon name={feature.icon} /></div>
                  <div className="feature-title">{feature.title}</div>
                  <div className="feature-desc">{feature.description}</div>
                </button>
              )
            })}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-title">学习中心 · 精选课程</span>
            <button className="section-more" type="button" onClick={() => setActiveNav('学习中心')}>全部课程 →</button>
          </div>
          <div className="learn-grid">
            {data.courses.map((course) => (
              <button
                className={`learn-card ${course.wip ? 'wip' : ''}`}
                type="button"
                key={course.title}
                onClick={() => setActiveNav('学习中心')}
              >
                {course.wip ? <span className="wip-badge">待开发</span> : null}
                <span className="learn-num">{course.level}</span>
                <span>
                  <span className="learn-title">{course.title}</span>
                  <span className="learn-desc">{course.description}</span>
                  <span className="learn-tag">{course.modules}</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-left">
          <div className="footer-logo">Fyndge</div>
          <div className="footer-slogan">Find where data meets your edge.</div>
        </div>
        <div className="footer-links">
          {['关于我们', '使用条款', '隐私政策', '联系我们'].map((item) => (
            <button className="footer-link" type="button" key={item}>{item}</button>
          ))}
        </div>
      </footer>

      <AuthModal mode={authMode} onClose={() => setAuthMode(null)} onModeChange={setAuthMode} />
    </div>
  )
}

function FeatureIcon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': 'true',
  }

  if (name === 'file') {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.2" />
        <line x1="7" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.2" />
        <line x1="7" y1="13" x2="14" y2="13" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )
  }

  if (name === 'chart') {
    return (
      <svg {...common}>
        <path d="M4 18L8 12L12 15L16 8L20 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="10" r="2" fill="currentColor" />
      </svg>
    )
  }

  if (name === 'grid') {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )
  }

  if (name === 'user') {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 20C5 16 19 16 19 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    )
  }

  if (name === 'star') {
    return (
      <svg {...common}>
        <path d="M12 3L14.5 9L21 9.5L16 14L17.5 21L12 17.5L6.5 21L8 14L3 9.5L9.5 9Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1" opacity=".8" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <line x1="12" y1="12" x2="19" y2="5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="19" cy="5" r="1.8" fill="currentColor" />
    </svg>
  )
}
