import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  Table,
  Space,
  Button,
  Input,
  Select,
  Tag,
  message,
  Collapse,
  Row,
  Col,
  Tabs,
} from 'antd';
import {
  PlusOutlined,
  DownloadOutlined,
  SearchOutlined,
  EyeOutlined,
  EditOutlined,
  CloseOutlined,
  UpOutlined,
  DownOutlined,
} from '@ant-design/icons';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { mockStrategies, Strategy, StrategyStatus, DisposalMethod, Platform } from '../../data/mockData';
import CreateStrategyModal from './components/CreateStrategyModal';
import AdjustStrategyModal from './components/AdjustStrategyModal';
import CancelStrategyModal from './components/CancelStrategyModal';

const { Option } = Select;
const { Panel } = Collapse;

const StrategyList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<Strategy[]>(mockStrategies);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [adjustModalVisible, setAdjustModalVisible] = useState(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [currentStrategy, setCurrentStrategy] = useState<Strategy | null>(null);
  const [filterExpanded, setFilterExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('all');

  // 筛选条件
  const [filters, setFilters] = useState({
    vin: '',
    licensePlate: '',
    store: '',
    platform: '',
    status: '',
    method: '',
  });

  // 分页
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 20,
    total: mockStrategies.length,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total) => `共 ${total} 条记录`,
    pageSizeOptions: ['10', '20', '50', '100'],
  });

  const statusConfig = {
    pending: { color: '#f9ab00', text: '待执行', bgColor: '#fef7e0' },
    executing: { color: '#1a73e8', text: '执行中', bgColor: '#e8f0fe' },
    completed: { color: '#1e8e3e', text: '已完成', bgColor: '#e6f4ea' },
    cancelled: { color: '#5f6368', text: '已取消', bgColor: '#f1f3f4' },
  };

  const methodConfig = {
    auction_open: { color: '#1a73e8', text: '线上明标' },
    auction_sealed: { color: '#8e24aa', text: '线上暗标' },
    fixed_price: { color: '#1e8e3e', text: '一口价' },
    wholesale: { color: '#ea8600', text: '线下批发' },
    resale: { color: '#0d9488', text: '转售' },
    scrap: { color: '#5f6368', text: '报废' },
    other: { color: '#f9ab00', text: '其他' },
  };

  const platformConfig = {
    zhuandian: { color: '#8e24aa', text: '专电优拍' },
    youliang: { color: '#0d9488', text: '有辆' },
    qichejie: { color: '#e91e63', text: '汽车街' },
    youxinpai: { color: '#ea8600', text: '优信拍' },
    offline: { color: '#5f6368', text: '线下门店' },
  };

  const columns: ColumnsType<Strategy> = [
    {
      title: '序号',
      width: 60,
      fixed: 'left',
      align: 'center',
      render: (_, __, index) => (pagination.current! - 1) * pagination.pageSize! + index + 1,
    },
    {
      title: '策略编号',
      dataIndex: 'strategyNo',
      key: 'strategyNo',
      width: 180,
      fixed: 'left',
      render: (text, record) => (
        <a onClick={() => navigate(`/disposal/strategy/${record.id}`)} style={{ fontWeight: 500 }}>
          {text}
        </a>
      ),
    },
    {
      title: 'VIN码',
      dataIndex: 'vin',
      key: 'vin',
      width: 180,
      ellipsis: true,
      render: (text) => <span style={{ fontFamily: 'monospace', fontSize: '13px' }}>{text}</span>,
    },
    {
      title: '车牌号',
      dataIndex: 'licensePlate',
      key: 'licensePlate',
      width: 100,
      align: 'center',
    },
    {
      title: '品牌车型',
      dataIndex: 'brandModel',
      key: 'brandModel',
      width: 200,
      render: (text) => <span style={{ fontWeight: 500 }}>{text}</span>,
    },
    {
      title: '处置方式',
      dataIndex: 'method',
      key: 'method',
      width: 120,
      align: 'center',
      render: (method: DisposalMethod) => (
        <Tag color={methodConfig[method].color} style={{ margin: 0, fontWeight: 500 }}>
          {methodConfig[method].text}
        </Tag>
      ),
    },
    {
      title: '处置平台',
      dataIndex: 'platform',
      key: 'platform',
      width: 120,
      align: 'center',
      render: (platform: Platform) => (
        <Tag color={platformConfig[platform].color} style={{ margin: 0, fontWeight: 500 }}>
          {platformConfig[platform].text}
        </Tag>
      ),
    },
    {
      title: '起拍价(元)',
      dataIndex: 'startPrice',
      key: 'startPrice',
      width: 120,
      align: 'right',
      render: (price) => <span style={{ fontWeight: 500 }}>¥{price.toLocaleString()}</span>,
      sorter: (a, b) => a.startPrice - b.startPrice,
    },
    {
      title: '保留价(元)',
      dataIndex: 'reservePrice',
      key: 'reservePrice',
      width: 120,
      align: 'right',
      render: (price) => <span style={{ fontWeight: 500 }}>¥{price.toLocaleString()}</span>,
      sorter: (a, b) => a.reservePrice - b.reservePrice,
    },
    {
      title: '策略状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      align: 'center',
      render: (status: StrategyStatus) => (
        <Tag
          color={statusConfig[status].color}
          style={{
            margin: 0,
            fontWeight: 500,
            backgroundColor: statusConfig[status].bgColor,
            borderColor: statusConfig[status].color,
          }}
        >
          {statusConfig[status].text}
        </Tag>
      ),
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
      title: '制定时间',
      dataIndex: 'createdTime',
      key: 'createdTime',
      width: 150,
      render: (text) => <span style={{ color: '#5f6368' }}>{text}</span>,
      sorter: (a, b) => new Date(a.createdTime).getTime() - new Date(b.createdTime).getTime(),
    },
    {
      title: '制定人',
      dataIndex: 'creator',
      key: 'creator',
      width: 100,
      align: 'center',
    },
    {
      title: '拍卖次数',
      dataIndex: 'auctionCount',
      key: 'auctionCount',
      width: 100,
      align: 'center',
      render: (count) => (
        <span
          style={{
            color: count >= 2 ? '#d93025' : '#202124',
            fontWeight: count >= 2 ? 600 : 400,
          }}
        >
          {count}
        </span>
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 260,
      fixed: 'right',
      align: 'center',
      render: (_, record) => (
        <Space size="small">
          <Button
            type="link"
            size="small"
            icon={<EyeOutlined />}
            onClick={() => navigate(`/disposal/strategy/${record.id}`)}
            style={{ padding: '0 8px' }}
          >
            查看
          </Button>
          {(record.status === 'pending' || record.status === 'executing') && (
            <Button
              type="link"
              size="small"
              icon={<EditOutlined />}
              onClick={() => {
                setCurrentStrategy(record);
                setAdjustModalVisible(true);
              }}
              style={{ padding: '0 8px' }}
            >
              调整
            </Button>
          )}
          {record.status === 'pending' && (
            <Button
              type="link"
              size="small"
              danger
              icon={<CloseOutlined />}
              onClick={() => {
                setCurrentStrategy(record);
                setCancelModalVisible(true);
              }}
              style={{ padding: '0 8px' }}
            >
              取消
            </Button>
          )}
        </Space>
      ),
    },
  ];

  // 计算统计数量（基于筛选条件，但不包括状态筛选）
  const getFilteredDataForStats = () => {
    let filtered = [...mockStrategies];

    if (filters.vin) {
      filtered = filtered.filter(item => item.vin.toLowerCase().includes(filters.vin.toLowerCase()));
    }
    if (filters.licensePlate) {
      filtered = filtered.filter(item => item.licensePlate.includes(filters.licensePlate));
    }
    if (filters.store) {
      filtered = filtered.filter(item => item.store === filters.store);
    }
    if (filters.platform) {
      filtered = filtered.filter(item => item.platform === filters.platform);
    }
    if (filters.method) {
      filtered = filtered.filter(item => item.method === filters.method);
    }

    return filtered;
  };

  const statsData = getFilteredDataForStats();
  const tabStats = {
    all: statsData.length,
    pending: statsData.filter(s => s.status === 'pending').length,
    executing: statsData.filter(s => s.status === 'executing').length,
    completed: statsData.filter(s => s.status === 'completed').length,
    cancelled: statsData.filter(s => s.status === 'cancelled').length,
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    setFilters({ ...filters, status: key === 'all' ? '' : key });
  };

  // 当Tab或筛选条件变化时，自动搜索
  useEffect(() => {
    handleSearch();
  }, [filters]);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...mockStrategies];

      if (filters.vin) {
        filtered = filtered.filter(item => item.vin.toLowerCase().includes(filters.vin.toLowerCase()));
      }
      if (filters.licensePlate) {
        filtered = filtered.filter(item => item.licensePlate.includes(filters.licensePlate));
      }
      if (filters.store) {
        filtered = filtered.filter(item => item.store === filters.store);
      }
      if (filters.platform) {
        filtered = filtered.filter(item => item.platform === filters.platform);
      }
      if (filters.status) {
        filtered = filtered.filter(item => item.status === filters.status);
      }
      if (filters.method) {
        filtered = filtered.filter(item => item.method === filters.method);
      }

      setDataSource(filtered);
      setPagination({ ...pagination, total: filtered.length, current: 1 });
      setLoading(false);
    }, 300);
  };

  const handleReset = () => {
    setFilters({
      vin: '',
      licensePlate: '',
      store: '',
      platform: '',
      status: '',
      method: '',
    });
    setDataSource(mockStrategies);
    setPagination({ ...pagination, total: mockStrategies.length, current: 1 });
  };

  const handleExport = () => {
    message.success('导出功能开发中');
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys: React.Key[]) => {
      setSelectedRowKeys(selectedKeys);
    },
  };

  const tabItems = [
    { key: 'all', label: `全部(${tabStats.all})` },
    { key: 'pending', label: `待执行(${tabStats.pending})` },
    { key: 'executing', label: `执行中(${tabStats.executing})` },
    { key: 'completed', label: `已完成(${tabStats.completed})` },
    { key: 'cancelled', label: `已取消(${tabStats.cancelled})` },
  ];

  return (
    <div style={{ padding: '0 24px', maxWidth: '1920px', margin: '0 auto' }}>
      {/* 页面标题 */}
      <div className="page-header" style={{ marginBottom: '24px' }}>
        <h1 className="page-title">车辆全生命周期</h1>
        <p className="page-subtitle">追踪车辆跨平台处置状态，管理处置策略与记录</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Tab筛选器 */}
        <div key="section-tabs" style={{ background: '#fff', borderRadius: '8px', padding: '16px 20px', boxShadow: '0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)', border: '1px solid #dadce0' }}>
          <Tabs
            activeKey={activeTab}
            onChange={handleTabChange}
            items={tabItems}
          />
        </div>

        {/* 筛选栏 */}
        <div key="section-filters" className="filter-section">
          <div className="filter-title">
            <span>筛选条件</span>
            <span
              className="filter-toggle"
              onClick={() => setFilterExpanded(!filterExpanded)}
            >
              {filterExpanded ? <><UpOutlined style={{ fontSize: '12px' }} /> 收起</> : <><DownOutlined style={{ fontSize: '12px' }} /> 展开</>}
            </span>
          </div>

          {filterExpanded && (
            <>
              <Row gutter={[16, 16]}>
                <Col span={6} key="filter-vin">
                  <div>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>
                      车架号/VIN
                    </div>
                    <Input
                      placeholder="支持模糊搜索"
                      value={filters.vin}
                      onChange={(e) => setFilters({ ...filters, vin: e.target.value })}
                      prefix={<SearchOutlined style={{ color: '#80868b' }} />}
                    />
                  </div>
                </Col>
                <Col span={6} key="filter-license">
                  <div>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>
                      车牌号
                    </div>
                    <Input
                      placeholder="支持模糊搜索"
                      value={filters.licensePlate}
                      onChange={(e) => setFilters({ ...filters, licensePlate: e.target.value })}
                    />
                  </div>
                </Col>
                <Col span={6} key="filter-store">
                  <div>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>
                      所属门店
                    </div>
                    <Select
                      placeholder="请选择"
                      style={{ width: '100%' }}
                      value={filters.store || undefined}
                      onChange={(value) => setFilters({ ...filters, store: value })}
                      allowClear
                    >
                      <Option value="中原门店">中原门店</Option>
                      <Option value="金水门店">金水门店</Option>
                      <Option value="二七门店">二七门店</Option>
                      <Option value="管城门店">管城门店</Option>
                      <Option value="惠济门店">惠济门店</Option>
                    </Select>
                  </div>
                </Col>
                <Col span={6} key="filter-platform">
                  <div>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>
                      当前处置平台
                    </div>
                    <Select
                      placeholder="请选择"
                      style={{ width: '100%' }}
                      value={filters.platform || undefined}
                      onChange={(value) => setFilters({ ...filters, platform: value })}
                      allowClear
                    >
                      <Option value="zhuandian">专电优拍</Option>
                      <Option value="youliang">有辆</Option>
                      <Option value="qichejie">汽车街</Option>
                      <Option value="youxinpai">优信拍</Option>
                    </Select>
                  </div>
                </Col>
                <Col span={6} key="filter-status">
                  <div>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>
                      处置状态
                    </div>
                    <Select
                      placeholder="请选择"
                      style={{ width: '100%' }}
                      value={filters.status || undefined}
                      onChange={(value) => setFilters({ ...filters, status: value })}
                      allowClear
                    >
                      <Option value="pending">待执行</Option>
                      <Option value="executing">执行中</Option>
                      <Option value="completed">已完成</Option>
                      <Option value="cancelled">已取消</Option>
                    </Select>
                  </div>
                </Col>
                <Col span={6} key="filter-method">
                  <div>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>
                      策略状态
                    </div>
                    <Select
                      placeholder="请选择"
                      style={{ width: '100%' }}
                      value={filters.method || undefined}
                      onChange={(value) => setFilters({ ...filters, method: value })}
                      allowClear
                    >
                      <Option value="auction_open">线上明标</Option>
                      <Option value="auction_sealed">线上暗标</Option>
                      <Option value="fixed_price">一口价</Option>
                      <Option value="wholesale">线下批发</Option>
                    </Select>
                  </div>
                </Col>
              </Row>

              <div style={{ marginTop: '16px', textAlign: 'right' }}>
                <Space>
                  <Button onClick={handleReset}>重置</Button>
                  <Button type="primary" onClick={handleSearch}>
                    筛选
                  </Button>
                </Space>
              </div>
            </>
          )}
        </div>

        {/* 操作栏 */}
        <div key="section-actions" className="action-bar">
          <Space>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setCreateModalVisible(true)}
            >
              新增策略
            </Button>
            <Button icon={<DownloadOutlined />} onClick={handleExport}>
              导出数据
            </Button>
          </Space>
          <span style={{ color: '#5f6368', fontSize: '14px' }}>共 {pagination.total} 条记录</span>
        </div>

        {/* 列表 */}
        <div key="section-table" className="table-wrapper">
          <Table
            rowKey="id"
            columns={columns}
            dataSource={dataSource}
            loading={loading}
            rowSelection={rowSelection}
            pagination={pagination}
            scroll={{ x: 1860 }}
            onChange={(newPagination) => setPagination(newPagination)}
            size="middle"
          />
        </div>
      </div>

      {/* 弹窗 */}
      <CreateStrategyModal
        visible={createModalVisible}
        onClose={() => setCreateModalVisible(false)}
        onSuccess={() => {
          setCreateModalVisible(false);
          message.success('策略创建成功');
        }}
      />

      {currentStrategy && (
        <>
          <AdjustStrategyModal
            visible={adjustModalVisible}
            strategy={currentStrategy}
            onClose={() => {
              setAdjustModalVisible(false);
              setCurrentStrategy(null);
            }}
            onSuccess={() => {
              setAdjustModalVisible(false);
              setCurrentStrategy(null);
              message.success('策略调整成功');
            }}
          />

          <CancelStrategyModal
            visible={cancelModalVisible}
            strategy={currentStrategy}
            onClose={() => {
              setCancelModalVisible(false);
              setCurrentStrategy(null);
            }}
            onSuccess={() => {
              setCancelModalVisible(false);
              setCurrentStrategy(null);
              message.success('策略已取消');
            }}
          />
        </>
      )}
    </div>
  );
};

export default StrategyList;
