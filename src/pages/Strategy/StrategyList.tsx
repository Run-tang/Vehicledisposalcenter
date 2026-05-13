import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  Table,
  Button,
  Input,
  Select,
  Tag,
  message,
  Row,
  Col,
  Tabs,
  Tooltip,
  Modal,
  Form,
  Space as AntSpace,
} from 'antd';
import {
  DownloadOutlined,
  SearchOutlined,
  EyeOutlined,
  SyncOutlined,
  CloseOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  UpOutlined,
  DownOutlined,
  PlusOutlined,
  EditOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { mockStrategies, Strategy, StrategyStatus, DisposalType, Platform } from '../../data/mockData';
import CreateStrategyModal from './components/CreateStrategyModal';
import UpdateWholesaleProgressModal from './components/UpdateWholesaleProgressModal';
import UpdateRetailProgressModal from './components/UpdateRetailProgressModal';

const { Option } = Select;

const StrategyList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<Strategy[]>(mockStrategies);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [filterExpanded, setFilterExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [updateWholesaleModalVisible, setUpdateWholesaleModalVisible] = useState(false);
  const [updateRetailModalVisible, setUpdateRetailModalVisible] = useState(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [createStrategyModalVisible, setCreateStrategyModalVisible] = useState(false);
  const [currentStrategy, setCurrentStrategy] = useState<Strategy | null>(null);
  const [form] = Form.useForm();

  // 筛选条件
  const [filters, setFilters] = useState({
    vin: '',
    licensePlate: '',
    store: '',
    platform: '',
    status: '',
    disposalType: '',
    retailVehicleType: '',
    vehicleCategory: '',
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
    pending_disposal: { color: '#d93025', text: '待处置', bgColor: '#fce8e6' },
    executing: { color: '#1a73e8', text: '执行中', bgColor: '#e8f0fe' },
    completed: { color: '#1e8e3e', text: '已完成', bgColor: '#e6f4ea' },
    cancelled: { color: '#5f6368', text: '已取消', bgColor: '#f1f3f4' },
  };

  const vehicleStatusConfig = {
    待拍卖: { color: '#f9ab00', text: '待拍卖' },
    流拍: { color: '#d93025', text: '流拍' },
    成交: { color: '#1e8e3e', text: '成交' },
    寄售中: { color: '#1a73e8', text: '寄售中' },
    已成交: { color: '#1e8e3e', text: '已成交' },
    已取消: { color: '#5f6368', text: '已取消' },
  };

  const platformConfig = {
    youjia: { color: '#8e24aa', text: '优加车拍' },
    zhuandian: { color: '#8e24aa', text: '专电优拍' },
    youliang: { color: '#00acc1', text: '有辆' },
    qichejie: { color: '#d81b60', text: '汽车街' },
    youxinpai: { color: '#f9ab00', text: '优信拍' },
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
      title: '策略ID',
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
      title: '车牌号',
      dataIndex: 'licensePlate',
      key: 'licensePlate',
      width: 100,
      align: 'center',
      render: (text) => <span style={{ fontWeight: 500 }}>{text}</span>,
    },
    {
      title: '品牌车型',
      dataIndex: 'brandModel',
      key: 'brandModel',
      width: 180,
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement="topLeft" title={text}>
          <span style={{ fontWeight: 500 }}>{text}</span>
        </Tooltip>
      ),
    },
    {
      title: '车辆所在地',
      dataIndex: 'location',
      key: 'location',
      width: 120,
      align: 'center',
    },
    {
      title: '收车时间',
      dataIndex: 'purchaseTime',
      key: 'purchaseTime',
      width: 120,
      sorter: (a, b) => new Date(a.purchaseTime).getTime() - new Date(b.purchaseTime).getTime(),
    },
    {
      title: '收购价格(万)',
      dataIndex: 'purchasePrice',
      key: 'purchasePrice',
      width: 120,
      align: 'right',
      render: (price) => (
        <span style={{ fontWeight: 500 }}>¥{(price / 10000).toFixed(2)}</span>
      ),
      sorter: (a, b) => a.purchasePrice - b.purchasePrice,
    },
    {
      title: '批发-车辆类别',
      dataIndex: 'vehicleCategory',
      key: 'vehicleCategory',
      width: 120,
      align: 'center',
      render: (category, record) =>
        record.disposalType === 'wholesale' && category ? (
          <Tag style={{ margin: 0 }}>{category}</Tag>
        ) : (
          <span style={{ color: '#80868b' }}>-</span>
        ),
    },
    {
      title: '零售-车辆类型',
      dataIndex: 'retailVehicleType',
      key: 'retailVehicleType',
      width: 130,
      align: 'center',
      render: (type, record) =>
        record.disposalType === 'retail' && type ? (
          <span>{type}</span>
        ) : (
          <span style={{ color: '#80868b' }}>-</span>
        ),
    },
    {
      title: '库存时长(天)',
      dataIndex: 'inventoryDays',
      key: 'inventoryDays',
      width: 120,
      align: 'center',
      render: (days) => (
        <span
          style={{
            color: days > 60 ? '#d93025' : days > 30 ? '#f9ab00' : '#202124',
            fontWeight: days > 30 ? 600 : 400,
          }}
        >
          {days}
        </span>
      ),
      sorter: (a, b) => a.inventoryDays - b.inventoryDays,
    },
    {
      title: '处置方式',
      dataIndex: 'disposalType',
      key: 'disposalType',
      width: 100,
      align: 'center',
      render: (type: DisposalType) => (
        <Tag color={type === 'wholesale' ? '#1a73e8' : '#8e24aa'} style={{ margin: 0, fontWeight: 500 }}>
          {type === 'wholesale' ? '批发' : '零售'}
        </Tag>
      ),
    },
    {
      title: '处置渠道名称',
      dataIndex: 'channelName',
      key: 'channelName',
      width: 140,
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ),
    },
    {
      title: '所属门店',
      dataIndex: 'store',
      key: 'store',
      width: 120,
      align: 'center',
    },
    {
      title: '当前保留价/底价(万)',
      dataIndex: 'currentReservePrice',
      key: 'currentReservePrice',
      width: 160,
      align: 'right',
      render: (price, record) => (
        <span style={{ fontWeight: 500 }}>
          {record.disposalType === 'wholesale' ? '批-' : '零-'}
          ¥{(price / 10000).toFixed(2)}
        </span>
      ),
    },
    {
      title: '公司标准保留价(万)',
      dataIndex: 'standardReservePrice',
      key: 'standardReservePrice',
      width: 150,
      align: 'right',
      render: (price) => <span>¥{(price / 10000).toFixed(2)}</span>,
    },
    {
      title: '市场价格区间(万)',
      key: 'marketPriceRange',
      width: 150,
      align: 'center',
      render: (_, record) =>
        record.marketPriceMin && record.marketPriceMax ? (
          <span style={{ fontSize: 12 }}>
            ¥{record.marketPriceMin}-{record.marketPriceMax}
          </span>
        ) : (
          <span style={{ color: '#80868b' }}>-</span>
        ),
    },
    {
      title: '拍卖最高价(万)',
      dataIndex: 'auctionMaxPrice',
      key: 'auctionMaxPrice',
      width: 130,
      align: 'right',
      render: (price, record) =>
        record.disposalType === 'wholesale' && price ? (
          <span
            style={{
              color: price >= record.currentReservePrice ? '#1e8e3e' : '#f9ab00',
              fontWeight: 500,
            }}
          >
            ¥{(price / 10000).toFixed(2)}
          </span>
        ) : (
          <span style={{ color: '#80868b' }}>-</span>
        ),
    },
    {
      title: '零售价格(万)',
      dataIndex: 'retailPrice',
      key: 'retailPrice',
      width: 120,
      align: 'right',
      render: (price, record) =>
        record.disposalType === 'retail' && price ? (
          <span style={{ fontWeight: 500 }}>¥{(price / 10000).toFixed(2)}</span>
        ) : (
          <span style={{ color: '#80868b' }}>-</span>
        ),
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
    },
    {
      title: '车辆状态',
      dataIndex: 'vehicleStatus',
      key: 'vehicleStatus',
      width: 100,
      align: 'center',
      render: (status) => (
        <Tag
          style={{
            margin: 0,
            color: vehicleStatusConfig[status]?.color || '#5f6368',
            borderColor: vehicleStatusConfig[status]?.color || '#5f6368',
            background: `${vehicleStatusConfig[status]?.color || '#5f6368'}10`,
          }}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: '办证费(元)',
      dataIndex: 'certificateFee',
      key: 'certificateFee',
      width: 120,
      align: 'right',
      render: (fee, record) =>
        record.disposalType === 'wholesale' && fee !== undefined ? (
          <span style={{ fontWeight: 500 }}>¥{fee.toLocaleString()}</span>
        ) : (
          <span style={{ color: '#80868b' }}>-</span>
        ),
    },
    {
      title: '交付服务费(元)',
      dataIndex: 'deliveryServiceFee',
      key: 'deliveryServiceFee',
      width: 130,
      align: 'right',
      render: (fee, record) =>
        record.disposalType === 'wholesale' && fee !== undefined ? (
          <span style={{ fontWeight: 500 }}>¥{fee.toLocaleString()}</span>
        ) : (
          <span style={{ color: '#80868b' }}>-</span>
        ),
    },
    {
      title: '处置次数',
      dataIndex: 'disposalCount',
      key: 'disposalCount',
      width: 100,
      align: 'center',
      render: (count) => (
        <span
          style={{
            color: count >= 3 ? '#d93025' : '#202124',
            fontWeight: count >= 3 ? 600 : 400,
          }}
        >
          {count}
        </span>
      ),
    },
    {
      title: '创建人',
      dataIndex: 'creator',
      key: 'creator',
      width: 100,
      align: 'center',
    },
    {
      title: '更新时间',
      dataIndex: 'updatedTime',
      key: 'updatedTime',
      width: 150,
      render: (text) => <span style={{ color: '#5f6368', fontSize: 12 }}>{text}</span>,
      sorter: (a, b) => new Date(a.updatedTime).getTime() - new Date(b.updatedTime).getTime(),
    },
    {
      title: '操作',
      key: 'action',
      width: 280,
      fixed: 'right',
      align: 'center',
      render: (_, record) => {
        const isWholesale = record.disposalType === 'wholesale';
        const isRetail = record.disposalType === 'retail';
        const isInternal = record.platform === 'youjia';

        return (
          <div style={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* 待处置状态的操作 (批发/零售) */}
            {record.status === 'pending_disposal' && (
              <>
                <Button
                  key="pending-create"
                  type="link"
                  size="small"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    setCurrentStrategy(record);
                    setCreateStrategyModalVisible(true);
                  }}
                  style={{ padding: '0 8px' }}
                >
                  新增策略
                </Button>
                <Button
                  key="pending-view-file"
                  type="link"
                  size="small"
                  icon={<FolderOpenOutlined />}
                  onClick={() => window.open(`/vehicle/file/${record.vin}`, '_blank')}
                  style={{ padding: '0 8px' }}
                >
                  查看车辆档案
                </Button>
              </>
            )}

            {/* 执行中状态的操作 - 批发(内部) */}
            {record.status === 'executing' && isWholesale && isInternal && (
              <>
                <Button
                  key="exec-wholesale-internal-view"
                  type="link"
                  size="small"
                  icon={<EyeOutlined />}
                  onClick={() => navigate(`/disposal/strategy/${record.id}`)}
                  style={{ padding: '0 8px' }}
                >
                  查看详情
                </Button>
                <Button
                  key="exec-wholesale-internal-edit"
                  type="link"
                  size="small"
                  icon={<EditOutlined />}
                  onClick={() => message.info('编辑处置策略功能开发中')}
                  style={{ padding: '0 8px' }}
                >
                  编辑处置策略
                </Button>
                <Tooltip key="exec-wholesale-internal-update-disabled" title="内部平台自动流转">
                  <span>
                    <Button
                      type="link"
                      size="small"
                      icon={<SyncOutlined />}
                      disabled
                      style={{ padding: '0 8px' }}
                    >
                      更新拍卖进度
                    </Button>
                  </span>
                </Tooltip>
                <Button
                  key="exec-wholesale-internal-cancel"
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
                  取消策略
                </Button>
              </>
            )}

            {/* 执行中状态的操作 - 批发(外部) */}
            {record.status === 'executing' && isWholesale && !isInternal && (
              <>
                <Button
                  key="exec-wholesale-external-view"
                  type="link"
                  size="small"
                  icon={<EyeOutlined />}
                  onClick={() => navigate(`/disposal/strategy/${record.id}`)}
                  style={{ padding: '0 8px' }}
                >
                  查看详情
                </Button>
                <Button
                  key="exec-wholesale-external-edit"
                  type="link"
                  size="small"
                  icon={<EditOutlined />}
                  onClick={() => message.info('编辑处置策略功能开发中')}
                  style={{ padding: '0 8px' }}
                >
                  编辑处置策略
                </Button>
                <Button
                  key="exec-wholesale-external-update"
                  type="link"
                  size="small"
                  icon={<SyncOutlined />}
                  onClick={() => {
                    setCurrentStrategy(record);
                    setUpdateWholesaleModalVisible(true);
                  }}
                  style={{ padding: '0 8px' }}
                >
                  更新拍卖进度
                </Button>
                <Button
                  key="exec-wholesale-external-cancel"
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
                  取消策略
                </Button>
              </>
            )}

            {/* 执行中状态的操作 - 零售 */}
            {record.status === 'executing' && isRetail && (
              <>
                <Button
                  key="exec-retail-edit"
                  type="link"
                  size="small"
                  icon={<EditOutlined />}
                  onClick={() => message.info('编辑处置策略功能开发中')}
                  style={{ padding: '0 8px' }}
                >
                  编辑处置策略
                </Button>
                <Button
                  key="exec-retail-view"
                  type="link"
                  size="small"
                  icon={<EyeOutlined />}
                  onClick={() => navigate(`/disposal/strategy/${record.id}`)}
                  style={{ padding: '0 8px' }}
                >
                  查看详情
                </Button>
                <Button
                  key="exec-retail-update"
                  type="link"
                  size="small"
                  icon={<SyncOutlined />}
                  onClick={() => {
                    setCurrentStrategy(record);
                    setUpdateRetailModalVisible(true);
                  }}
                  style={{ padding: '0 8px' }}
                >
                  更新零售进度
                </Button>
              </>
            )}

            {/* 已完成状态的操作 - 批发 */}
            {record.status === 'completed' && isWholesale && (
              <>
                <Button
                  key="completed-wholesale-view"
                  type="link"
                  size="small"
                  icon={<EyeOutlined />}
                  onClick={() => navigate(`/disposal/strategy/${record.id}`)}
                  style={{ padding: '0 8px' }}
                >
                  查看详情
                </Button>
                <Button
                  key="completed-wholesale-order"
                  type="link"
                  size="small"
                  icon={<FileTextOutlined />}
                  onClick={() => message.info('跳转到拍卖订单详情页')}
                  style={{ padding: '0 8px' }}
                >
                  查看拍卖订单
                </Button>
              </>
            )}

            {/* 已完成状态的操作 - 零售 */}
            {record.status === 'completed' && isRetail && (
              <>
                <Button
                  key="completed-retail-view"
                  type="link"
                  size="small"
                  icon={<EyeOutlined />}
                  onClick={() => navigate(`/disposal/strategy/${record.id}`)}
                  style={{ padding: '0 8px' }}
                >
                  查看详情
                </Button>
                <Button
                  key="completed-retail-order"
                  type="link"
                  size="small"
                  icon={<FileTextOutlined />}
                  onClick={() => message.info('跳转到零售订单详情页')}
                  style={{ padding: '0 8px' }}
                >
                  查看零售订单
                </Button>
              </>
            )}

            {/* 已取消状态的操作 */}
            {record.status === 'cancelled' && (
              <>
                <Button
                  key="cancelled-view"
                  type="link"
                  size="small"
                  icon={<EyeOutlined />}
                  onClick={() => navigate(`/disposal/strategy/${record.id}`)}
                  style={{ padding: '0 8px' }}
                >
                  查看详情
                </Button>
                <Tooltip key="cancelled-reason" title={record.cancelReason || '暂无取消原因'}>
                  <span>
                    <Button
                      type="link"
                      size="small"
                      icon={<InfoCircleOutlined />}
                      style={{ padding: '0 8px' }}
                    >
                      查看取消原因
                    </Button>
                  </span>
                </Tooltip>
              </>
            )}
          </div>
        );
      },
    },
  ];

  // 计算统计数量
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
    if (filters.disposalType) {
      filtered = filtered.filter(item => item.disposalType === filters.disposalType);
    }
    if (filters.retailVehicleType) {
      filtered = filtered.filter(item => item.retailVehicleType?.includes(filters.retailVehicleType));
    }
    if (filters.vehicleCategory) {
      filtered = filtered.filter(item => item.vehicleCategory === filters.vehicleCategory);
    }

    return filtered;
  };

  const statsData = getFilteredDataForStats();
  const tabStats = {
    all: statsData.length,
    pending_disposal: statsData.filter(s => s.status === 'pending_disposal').length,
    executing: statsData.filter(s => s.status === 'executing').length,
    completed: statsData.filter(s => s.status === 'completed').length,
    cancelled: statsData.filter(s => s.status === 'cancelled').length,
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    setFilters({ ...filters, status: key === 'all' ? '' : key });
  };

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
      if (filters.disposalType) {
        filtered = filtered.filter(item => item.disposalType === filters.disposalType);
      }
      if (filters.retailVehicleType) {
        filtered = filtered.filter(item => item.retailVehicleType?.includes(filters.retailVehicleType));
      }
      if (filters.vehicleCategory) {
        filtered = filtered.filter(item => item.vehicleCategory === filters.vehicleCategory);
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
      disposalType: '',
      retailVehicleType: '',
      vehicleCategory: '',
    });
    setActiveTab('all');
    setDataSource(mockStrategies);
    setPagination({ ...pagination, total: mockStrategies.length, current: 1 });
  };

  const handleExport = () => {
    const exportData = selectedRowKeys.length > 0
      ? dataSource.filter(item => selectedRowKeys.includes(item.id))
      : dataSource;

    console.log('导出数据:', exportData);
    message.success(`成功导出 ${exportData.length} 条数据`);
  };

  const handleCancelStrategy = async () => {
    const cancelReason = form.getFieldValue('cancelReason');
    if (!cancelReason) {
      message.error('请填写取消原因');
      return;
    }
    console.log('取消策略原因:', cancelReason);
    message.success('策略已取消');
    setCancelModalVisible(false);
    form.resetFields();
    handleSearch();
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys: React.Key[]) => {
      setSelectedRowKeys(selectedKeys);
    },
  };

  const tabItems = [
    { key: 'all', label: `全部(${tabStats.all})` },
    { key: 'pending_disposal', label: `待处置(${tabStats.pending_disposal})` },
    { key: 'executing', label: `执行中(${tabStats.executing})` },
    { key: 'completed', label: `已完成(${tabStats.completed})` },
    { key: 'cancelled', label: `已取消(${tabStats.cancelled})` },
  ];

  return (
    <div style={{ padding: '0 24px', maxWidth: '1920px', margin: '0 auto' }}>
      {/* 页面标题 */}
      <div className="page-header" style={{ marginBottom: '24px' }}>
        <h1 className="page-title">处置策略</h1>
        <p className="page-subtitle">追踪车辆跨平台处置状态，管理处置策略与记录</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Tab筛选器 */}
        <div style={{ background: '#fff', borderRadius: '8px', padding: '16px 20px', boxShadow: '0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)', border: '1px solid #dadce0' }}>
          <Tabs
            activeKey={activeTab}
            onChange={handleTabChange}
            items={tabItems}
          />
        </div>

        {/* 筛选栏 */}
        <div className="filter-section">
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
                      VIN码
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
                      <Option value="youjia">优加车拍</Option>
                      <Option value="zhuandian">专电优拍</Option>
                      <Option value="youliang">有辆</Option>
                      <Option value="qichejie">汽车街</Option>
                      <Option value="youxinpai">优信拍</Option>
                    </Select>
                  </div>
                </Col>
                <Col span={6} key="filter-type">
                  <div>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>
                      处置方式
                    </div>
                    <Select
                      placeholder="请选择"
                      style={{ width: '100%' }}
                      value={filters.disposalType || undefined}
                      onChange={(value) => setFilters({ ...filters, disposalType: value })}
                      allowClear
                    >
                      <Option value="wholesale">批发</Option>
                      <Option value="retail">零售</Option>
                    </Select>
                  </div>
                </Col>
                <Col span={6} key="filter-status">
                  <div>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>
                      策略状态
                    </div>
                    <Select
                      placeholder="请选择"
                      style={{ width: '100%' }}
                      value={filters.status || undefined}
                      onChange={(value) => {
                        setFilters({ ...filters, status: value });
                        setActiveTab(value || 'all');
                      }}
                      allowClear
                    >
                      <Option value="pending_disposal">待处置</Option>
                      <Option value="executing">执行中</Option>
                      <Option value="completed">已完成</Option>
                      <Option value="cancelled">已取消</Option>
                    </Select>
                  </div>
                </Col>
                <Col span={6} key="filter-retail-type">
                  <div>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>
                      零售车辆类型
                    </div>
                    <Input
                      placeholder="支持模糊搜索"
                      value={filters.retailVehicleType}
                      onChange={(e) => setFilters({ ...filters, retailVehicleType: e.target.value })}
                    />
                  </div>
                </Col>
                <Col span={6} key="filter-wholesale-category">
                  <div>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>
                      批发车辆类别
                    </div>
                    <Select
                      placeholder="请选择"
                      style={{ width: '100%' }}
                      value={filters.vehicleCategory || undefined}
                      onChange={(value) => setFilters({ ...filters, vehicleCategory: value })}
                      allowClear
                    >
                      <Option value="置换车">置换车</Option>
                      <Option value="报废车">报废车</Option>
                      <Option value="试驾车">试驾车</Option>
                      <Option value="厂家资源车">厂家资源车</Option>
                    </Select>
                  </div>
                </Col>
              </Row>

              <div style={{ marginTop: '16px', textAlign: 'right' }}>
                <AntSpace>
                  <Button onClick={handleReset}>重置</Button>
                  <Button type="primary" onClick={handleSearch}>
                    筛选
                  </Button>
                </AntSpace>
              </div>
            </>
          )}
        </div>

        {/* 操作栏 */}
        <div className="action-bar">
          <AntSpace>
            <Button icon={<DownloadOutlined />} onClick={handleExport}>
              导出数据
            </Button>
          </AntSpace>
          <span style={{ color: '#5f6368', fontSize: '14px' }}>
            {selectedRowKeys.length > 0
              ? `已选择 ${selectedRowKeys.length} 条 / 共 ${pagination.total} 条记录`
              : `共 ${pagination.total} 条记录`}
          </span>
        </div>

        {/* 列表 */}
        <div className="table-wrapper">
          <Table
            rowKey="id"
            columns={columns}
            dataSource={dataSource}
            loading={loading}
            rowSelection={rowSelection}
            pagination={pagination}
            scroll={{ x: 3100 }}
            onChange={(newPagination) => setPagination(newPagination)}
            size="middle"
          />
        </div>
      </div>

      {/* 新增策略弹窗 */}
      <CreateStrategyModal
        visible={createStrategyModalVisible}
        vehicle={currentStrategy}
        onClose={() => {
          setCreateStrategyModalVisible(false);
          setCurrentStrategy(null);
        }}
        onSuccess={() => {
          setCreateStrategyModalVisible(false);
          setCurrentStrategy(null);
          message.success('策略创建成功，车辆已进入\'执行中\'状态，您可以前往处置策略列表查看或者修改。');
          handleSearch();
        }}
      />

      {/* 更新批发进度弹窗 */}
      <UpdateWholesaleProgressModal
        visible={updateWholesaleModalVisible}
        strategy={currentStrategy}
        onClose={() => {
          setUpdateWholesaleModalVisible(false);
          setCurrentStrategy(null);
        }}
        onSuccess={() => {
          setUpdateWholesaleModalVisible(false);
          setCurrentStrategy(null);
          handleSearch();
        }}
      />

      {/* 更新零售进度弹窗 */}
      <UpdateRetailProgressModal
        visible={updateRetailModalVisible}
        strategy={currentStrategy}
        onClose={() => {
          setUpdateRetailModalVisible(false);
          setCurrentStrategy(null);
        }}
        onSuccess={() => {
          setUpdateRetailModalVisible(false);
          setCurrentStrategy(null);
          handleSearch();
        }}
      />

      {/* 取消策略弹窗 */}
      <Modal
        title="取消策略"
        open={cancelModalVisible}
        onOk={handleCancelStrategy}
        onCancel={() => {
          setCancelModalVisible(false);
          form.resetFields();
        }}
        okText="确认取消"
        cancelText="返回"
        okButtonProps={{ danger: true }}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="取消原因"
            name="cancelReason"
            rules={[{ required: true, message: '请填写取消原因' }]}
          >
            <Input.TextArea
              rows={4}
              placeholder="请详细说明取消该处置策略的原因"
              maxLength={200}
              showCount
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default StrategyList;
