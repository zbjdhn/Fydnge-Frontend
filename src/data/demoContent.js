export const exchanges = [
  { name: 'Deribit', className: 'exch-deribit' },
  { name: 'OKX', className: 'exch-okx' },
  { name: 'Bybit', className: 'exch-bybit' },
]

export const products = ['BTC-CALL', 'BTC-PUT', 'ETH-CALL', 'ETH-PUT', '更多即将上线']

export const featuredOptions = [
  {
    symbol: 'BTC',
    type: 'CALL',
    strike: '70,000',
    expiry: '2025-06-27',
    apr: '48.3%',
    aprBar: 36,
    iv: '72.4%',
    ivDirection: 'up',
    bestExchange: 'Deribit',
  },
  {
    symbol: 'ETH',
    type: 'PUT',
    strike: '3,200',
    expiry: '2025-05-30',
    apr: '31.7%',
    aprBar: 24,
    iv: '58.1%',
    ivDirection: 'down',
    bestExchange: 'OKX',
  },
]

export const featureCards = [
  {
    title: '实时年化扫描',
    description: '聚合3家主流交易所报价，自动计算年化收益率，秒速锁定最优机会',
    icon: 'target',
  },
  {
    title: 'Greeks 分析',
    description: 'Delta、Gamma、Theta、Vega 可视化，量化加密期权风险敞口',
    icon: 'file',
    wip: true,
  },
  {
    title: '波动率追踪',
    description: 'BTC/ETH 历史波动率与隐含波动率实时对比，识别高性价比时机',
    icon: 'chart',
    wip: true,
  },
  {
    title: '策略组合器',
    description: '可视化构建 Covered Call、Price Spread 等策略，预测盈亏曲线',
    icon: 'grid',
    wip: true,
  },
  {
    title: '年化提醒',
    description: '设定年化阈值与IV条件，第一时间捕捉高收益卖权机会',
    icon: 'user',
    wip: true,
  },
  {
    title: '学习成就系统',
    description: '从入门到进阶，完成模块解锁徽章，追踪你的加密期权学习进度',
    icon: 'star',
    wip: true,
  },
]

export const courses = [
  {
    level: '入门',
    title: '加密期权基础：Call & Put 怎么运作',
    description: '从零理解合约结构、行权价、到期日与权利金，以 BTC 期权为例',
    modules: '8 个模块',
  },
  {
    level: '进阶',
    title: '读懂年化收益率：怎么比较不同合约',
    description: '掌握年化计算逻辑，横向对比不同到期日、不同交易所的真实收益',
    modules: '10 个模块',
    wip: true,
  },
  {
    level: '策略',
    title: 'Covered Call 实战：持币增收',
    description: '用真实 BTC 持仓案例拆解 Covered Call 的年化增强与风险边界',
    modules: '12 个模块',
    wip: true,
  },
  {
    level: '高阶',
    title: '加密波动率交易：买 IV 还是卖 IV',
    description: '隐含波动率的读法、加密市场 IV 特性与跨式策略在高波动中的运用',
    modules: '15 个模块',
    wip: true,
  },
]
