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

  DatePicker,
  InputNumber,
  Space as AntSpace,
  Cascader,
} from 'antd';
import {
  DownloadOutlined,
  SearchOutlined,
  EyeOutlined,
  FileTextOutlined,
  UploadOutlined,
  UpOutlined,
  DownOutlined,
} from '@ant-design/icons';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { mockRecords, DisposalRecord, Platform } from '../../data/mockData';
import dayjs from 'dayjs';

const { Option } = Select;
const { RangePicker } = DatePicker;

const WholesaleRecordList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<DisposalRecord[]>(mockRecords);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [filterExpanded, setFilterExpanded] = useState(true);

  // 筛选条件
  const [filters, setFilters] = useState({
    // 基础信息搜索
    searchId: '', // 综合标识搜索
    searchVehicle: '', // 车辆硬件搜索
    brand: '',
    model: '',
    store: '',

    // 业务状态筛选
    vehicleStatus: [] as string[],
    channel: [] as string[],
    location: '',
    auctionCountMin: undefined as number | undefined,
    auctionCountMax: undefined as number | undefined,

    // 财务与金额筛选
    purchasePriceMin: undefined as number | undefined,
    purchasePriceMax: undefined as number | undefined,
    reservePriceMin: undefined as number | undefined,
    reservePriceMax: undefined as number | undefined,
    maxBidMin: undefined as number | undefined,
    maxBidMax: undefined as number | undefined,
    profitStatus: '', // 盈利/亏损
    profitMin: undefined as number | undefined,
    profitMax: undefined as number | undefined,
    certificateFeeMin: undefined as number | undefined,
    certificateFeeMax: undefined as number | undefined,

    // 人员与时间维度
    buyer: '', // 中拍人信息
    buyerCity: '',
    operator: '',
    auctionDateRange: null as any,
    dealTimeRange: null as any,
    updateTimeRange: null as any,
  });

  // 分页
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 20,
    total: mockRecords.length,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total) => `共 ${total} 条记录`,
    pageSizeOptions: ['10', '20', '50', '100'],
  });

  const vehicleStatusOptions = ['待拍卖', '检测待上拍', '流拍', '仲裁', '成交'];
  const channelOptions = ['优加车拍', '专电优拍', '有辆', '汽车街', '优信拍', '线下', '其他'];
  const transferStatusOptions = ['未回传', '已回传'];

  const statusConfig = {
    sold: { color: '#1e8e3e', text: '成交' },
    unsold: { color: '#d93025', text: '流拍' },
    bidding: { color: '#1a73e8', text: '竞价中' },
    suspended: { color: '#5f6368', text: '中止' },
  };

  const platformConfig = {
    youjia: { color: '#8e24aa', text: '优加车拍' },
    zhuandian: { color: '#8e24aa', text: '专电优拍' },
    youliang: { color: '#00acc1', text: '有辆' },
    qichejie: { color: '#d81b60', text: '汽车街' },
    youxinpai: { color: '#f9ab00', text: '优信拍' },
  };

  const columns: ColumnsType<DisposalRecord> = [
    {
      title: '记录流水号',
      dataIndex: 'recordNo',
      key: 'recordNo',
      width: 180,
      fixed: 'left',
      render: (text, record) => (
        <a onClick={() => navigate(`/disposal/record/${record.id}`)}>{text}</a>
      ),
    },
    {
      title: '关联策略编号',
      dataIndex: 'strategyNo',
      key: 'strategyNo',
      width: 180,
      render: (text, record) => (
        <a onClick={() => navigate(`/disposal/strategy/${record.strategyId}`)}>{text}</a>
      ),
    },
    {
      title: '车牌号码',
      dataIndex: 'licensePlate',
      key: 'licensePlate',
      width: 100,
      align: 'center',
    },
    {
      title: '车架号',
      dataIndex: 'vin',
      key: 'vin',
      width: 170,
      align: 'center',
    },
    {
      title: '品牌/车型',
      dataIndex: 'brandModel',
      key: 'brandModel',
      width: 180,
      ellipsis: true,
    },
    {
      title: '所属门店',
      key: 'store',
      width: 120,
      align: 'center',
      render: () => '中原门店',
    },
    {
      title: '收购价(万)',
      key: 'purchasePrice',
      width: 120,
      align: 'right',
      render: () => '¥8.50',
    },
    {
      title: '公司标准保留价(万)',
      key: 'standardReservePrice',
      width: 150,
      align: 'right',
      render: () => '¥9.30',
    },
    {
      title: '市场价格区间(万)',
      key: 'marketPriceRange',
      width: 150,
      align: 'center',
      render: () => '¥8.00-10.00',
    },
    {
      title: '拍卖保留价(万)',
      dataIndex: 'reservePrice',
      key: 'reservePrice',
      width: 130,
      align: 'right',
      render: (price) => `¥${(price / 10000).toFixed(2)}`,
    },
    {
      title: '拍卖最高价(万)',
      dataIndex: 'maxBid',
      key: 'maxBid',
      width: 130,
      align: 'right',
      render: (price, record) =>
        price ? (
          <span
            style={{
              color: price >= record.reservePrice ? '#1e8e3e' : '#f9ab00',
              fontWeight: 500,
            }}
          >
            ¥{(price / 10000).toFixed(2)}
          </span>
        ) : (
          '-'
        ),
    },
    {
      title: '进销价差(万)',
      key: 'profitLoss',
      width: 120,
      align: 'right',
      render: (_, record) => {
        const profit = record.maxBid ? (record.maxBid - 85000) / 10000 : null;
        return profit !== null ? (
          <span style={{ color: profit >= 0 ? '#1e8e3e' : '#d93025', fontWeight: 500 }}>
            {profit >= 0 ? '+' : ''}{profit.toFixed(2)}
          </span>
        ) : '-';
      },
    },
    {
      title: '办证费(元)',
      key: 'certificateFee',
      width: 110,
      align: 'right',
      render: () => '¥500',
    },
    {
      title: '交付服务费(元)',
      key: 'deliveryServiceFee',
      width: 120,
      align: 'right',
      render: () => '¥300',
    },
    {
      title: '拍卖总次数',
      key: 'auctionCount',
      width: 110,
      align: 'center',
      render: () => <a>3</a>,
    },
    {
      title: '拍卖日期',
      dataIndex: 'startTime',
      key: 'auctionDate',
      width: 120,
      render: (time) => time.split(' ')[0],
    },
    {
      title: '处置渠道',
      dataIndex: 'platform',
      key: 'platform',
      width: 120,
      align: 'center',
      render: (platform: Platform) => (
        <Tag style={{
          color: platformConfig[platform].color,
          borderColor: platformConfig[platform].color,
          background: `${platformConfig[platform].color}10`
        }}>
          {platformConfig[platform].text}
        </Tag>
      ),
    },
    {
      title: '车辆状态',
      dataIndex: 'result',
      key: 'vehicleStatus',
      width: 100,
      align: 'center',
      render: (result) => (
        <Tag style={{
          color: statusConfig[result].color,
          borderColor: statusConfig[result].color,
          background: `${statusConfig[result].color}10`
        }}>
          {statusConfig[result].text}
        </Tag>
      ),
    },
    {
      title: '车辆所在地',
      key: 'location',
      width: 120,
      align: 'center',
      render: () => '河南-郑州',
    },
    {
      title: '操作人姓名',
      key: 'operator',
      width: 100,
      align: 'center',
      render: () => '张三',
    },
    {
      title: '更新时间',
      dataIndex: 'endTime',
      key: 'updateTime',
      width: 150,
    },
    {
      title: '成交时间',
      dataIndex: 'endTime',
      key: 'dealTime',
      width: 150,
      render: (time, record) => record.result === 'sold' ? time : '-',
    },
    {
      title: '拍卖备注说明',
      key: 'remarks',
      width: 150,
      ellipsis: true,
      render: () => '-',
    },
    {
      title: '中拍人姓名',
      dataIndex: 'buyer',
      key: 'buyerName',
      width: 120,
      align: 'center',
      render: (buyer) => buyer || '-',
    },
    {
      title: '中拍人电话',
      dataIndex: 'buyerPhone',
      key: 'buyerPhone',
      width: 130,
      align: 'center',
      render: (phone) => phone || '-',
    },
    {
      title: '中拍人注册地',
      key: 'buyerCity',
      width: 120,
      align: 'center',
      render: (_, record) => record.buyer ? '河南-郑州' : '-',
    },
    {
      title: '过户资料回传进度',
      key: 'transferStatus',
      width: 140,
      align: 'center',
      render: (_, record) => {
        if (record.result !== 'sold') return '-';
        const status = Math.random() > 0.5 ? '已回传' : '未回传';
        return (
          <Tag color={status === '已回传' ? '#1e8e3e' : '#f9ab00'}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      fixed: 'right',
      align: 'center',
      render: (_, record) => {
        const isInternal = record.platform === 'youjia';
        const isSold = record.result === 'sold';

        return (
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              type="link"
              size="small"
              icon={<EyeOutlined />}
              onClick={() => message.info('查看出价详情')}
            >
              查看出价详情
            </Button>
            {isSold && (
              <>
                <Button
                  type="link"
                  size="small"
                  icon={<FileTextOutlined />}
                  onClick={() => message.info('跳转到拍卖订单详情页')}
                >
                  查看拍卖订单
                </Button>
                {!isInternal && (
                  <Button
                    type="link"
                    size="small"
                    icon={<UploadOutlined />}
                    onClick={() => message.info('回传拍卖资料')}
                  >
                    回传拍卖资料
                  </Button>
                )}
              </>
            )}
          </div>
        );
      },
    },
  ];


  useEffect(() => {
    handleSearch();
  }, [filters]);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...mockRecords];
      // 这里添加筛选逻辑
      setDataSource(filtered);
      setPagination({ ...pagination, total: filtered.length, current: 1 });
      setLoading(false);
    }, 300);
  };

  const handleReset = () => {
    setFilters({
      searchId: '',
      searchVehicle: '',
      brand: '',
      model: '',
      store: '',
      vehicleStatus: [],
      channel: [],
      location: '',
      auctionCountMin: undefined,
      auctionCountMax: undefined,
      purchasePriceMin: undefined,
      purchasePriceMax: undefined,
      reservePriceMin: undefined,
      reservePriceMax: undefined,
      maxBidMin: undefined,
      maxBidMax: undefined,
      profitStatus: '',
      profitMin: undefined,
      profitMax: undefined,
      certificateFeeMin: undefined,
      certificateFeeMax: undefined,
      buyer: '',
      buyerCity: '',
      operator: '',
      auctionDateRange: null,
      dealTimeRange: null,
      updateTimeRange: null,
    });
    setDataSource(mockRecords);
    setPagination({ ...pagination, total: mockRecords.length, current: 1 });
  };

  const handleExport = () => {
    const exportData = selectedRowKeys.length > 0
      ? dataSource.filter(item => selectedRowKeys.includes(item.id))
      : dataSource;

    console.log('导出数据:', exportData);
    message.success(`成功导出 ${exportData.length} 条数据`);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys: React.Key[]) => {
      setSelectedRowKeys(selectedKeys);
    },
  };



  return (
    <div style={{ padding: '0 24px', maxWidth: '1920px', margin: '0 auto' }}>
      {/* 页面标题 */}
      <div className="page-header" style={{ marginBottom: '24px' }}>
        <h1 className="page-title">批发处置记录</h1>
        <p className="page-subtitle">追踪批发拍卖的完整流转记录</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

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
              {/* 基础信息搜索 */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#202124', marginBottom: 12 }}>基础信息搜索</div>
                <Row gutter={[16, 16]}>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>综合标识搜索</div>
                    <Input
                      placeholder="策略ID/记录流水号/策略编号"
                      value={filters.searchId}
                      onChange={(e) => setFilters({ ...filters, searchId: e.target.value })}
                      prefix={<SearchOutlined style={{ color: '#80868b' }} />}
                      maxLength={50}
                    />
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>车辆硬件搜索</div>
                    <Input
                      placeholder="车牌号/车架号后6位"
                      value={filters.searchVehicle}
                      onChange={(e) => setFilters({ ...filters, searchVehicle: e.target.value })}
                    />
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>所属门店</div>
                    <Select
                      mode="multiple"
                      placeholder="请选择"
                      style={{ width: '100%' }}
                      value={filters.store ? [filters.store] : []}
                      onChange={(value) => setFilters({ ...filters, store: value[0] || '' })}
                      allowClear
                    >
                      <Option value="中原门店">中原门店</Option>
                      <Option value="金水门店">金水门店</Option>
                      <Option value="二七门店">二七门店</Option>
                    </Select>
                  </Col>
                </Row>
              </div>

              {/* 业务状态筛选 */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#202124', marginBottom: 12 }}>业务状态筛选</div>
                <Row gutter={[16, 16]}>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>车辆状态</div>
                    <Select
                      mode="multiple"
                      placeholder="请选择"
                      style={{ width: '100%' }}
                      value={filters.vehicleStatus}
                      onChange={(value) => setFilters({ ...filters, vehicleStatus: value })}
                      allowClear
                    >
                      {vehicleStatusOptions.map(opt => (
                        <Option key={opt} value={opt}>{opt}</Option>
                      ))}
                    </Select>
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>处置渠道</div>
                    <Select
                      mode="multiple"
                      placeholder="请选择"
                      style={{ width: '100%' }}
                      value={filters.channel}
                      onChange={(value) => setFilters({ ...filters, channel: value })}
                      allowClear
                      showSearch
                    >
                      {channelOptions.map(opt => (
                        <Option key={opt} value={opt}>{opt}</Option>
                      ))}
                    </Select>
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>车辆所在地</div>
                    <Input
                      placeholder="请输入"
                      value={filters.location}
                      onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    />
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>拍卖次数范围</div>
                    <div style={{ display: 'flex', width: '100%' }}>
                      <InputNumber
                        min={0}
                        max={99}
                        placeholder="最小值"
                        style={{ width: '50%' }}
                        value={filters.auctionCountMin}
                        onChange={(value) => setFilters({ ...filters, auctionCountMin: value || undefined })}
                      />
                      <InputNumber
                        min={0}
                        max={99}
                        placeholder="最大值"
                        style={{ width: '50%' }}
                        value={filters.auctionCountMax}
                        onChange={(value) => setFilters({ ...filters, auctionCountMax: value || undefined })}
                      />
                    </div>
                  </Col>
                </Row>
              </div>

              {/* 【P1修复】财务与金额筛选区 */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#202124', marginBottom: 12 }}>财务与金额筛选</div>
                <Row gutter={[16, 16]}>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>收购价范围(万)</div>
                    <div style={{ display: 'flex', width: '100%' }}>
                      <InputNumber
                        min={0}
                        precision={2}
                        placeholder="最小值"
                        style={{ width: '50%' }}
                        value={filters.purchasePriceMin}
                        onChange={(value) => setFilters({ ...filters, purchasePriceMin: value || undefined })}
                      />
                      <InputNumber
                        min={0}
                        precision={2}
                        placeholder="最大值"
                        style={{ width: '50%' }}
                        value={filters.purchasePriceMax}
                        onChange={(value) => setFilters({ ...filters, purchasePriceMax: value || undefined })}
                      />
                    </div>
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>拍卖保留价范围(万)</div>
                    <div style={{ display: 'flex', width: '100%' }}>
                      <InputNumber
                        min={0}
                        precision={2}
                        placeholder="最小值"
                        style={{ width: '50%' }}
                        value={filters.reservePriceMin}
                        onChange={(value) => setFilters({ ...filters, reservePriceMin: value || undefined })}
                      />
                      <InputNumber
                        min={0}
                        precision={2}
                        placeholder="最大值"
                        style={{ width: '50%' }}
                        value={filters.reservePriceMax}
                        onChange={(value) => setFilters({ ...filters, reservePriceMax: value || undefined })}
                      />
                    </div>
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>拍卖最高价范围(万)</div>
                    <div style={{ display: 'flex', width: '100%' }}>
                      <InputNumber
                        min={0}
                        precision={2}
                        placeholder="最小值"
                        style={{ width: '50%' }}
                        value={filters.maxBidMin}
                        onChange={(value) => setFilters({ ...filters, maxBidMin: value || undefined })}
                      />
                      <InputNumber
                        min={0}
                        precision={2}
                        placeholder="最大值"
                        style={{ width: '50%' }}
                        value={filters.maxBidMax}
                        onChange={(value) => setFilters({ ...filters, maxBidMax: value || undefined })}
                      />
                    </div>
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>盈亏状态</div>
                    <Select
                      placeholder="请选择"
                      style={{ width: '100%' }}
                      value={filters.profitStatus || undefined}
                      onChange={(value) => setFilters({ ...filters, profitStatus: value })}
                      allowClear
                    >
                      <Option value="盈利">盈利</Option>
                      <Option value="亏损">亏损</Option>
                    </Select>
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>盈亏金额范围(万)</div>
                    <div style={{ display: 'flex', width: '100%' }}>
                      <InputNumber
                        precision={2}
                        placeholder="最小值"
                        style={{ width: '50%' }}
                        value={filters.profitMin}
                        onChange={(value) => setFilters({ ...filters, profitMin: value || undefined })}
                      />
                      <InputNumber
                        precision={2}
                        placeholder="最大值"
                        style={{ width: '50%' }}
                        value={filters.profitMax}
                        onChange={(value) => setFilters({ ...filters, profitMax: value || undefined })}
                      />
                    </div>
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>办证费范围(元)</div>
                    <div style={{ display: 'flex', width: '100%' }}>
                      <InputNumber
                        min={0}
                        precision={2}
                        placeholder="最小值"
                        style={{ width: '50%' }}
                        value={filters.certificateFeeMin}
                        onChange={(value) => setFilters({ ...filters, certificateFeeMin: value || undefined })}
                      />
                      <InputNumber
                        min={0}
                        precision={2}
                        placeholder="最大值"
                        style={{ width: '50%' }}
                        value={filters.certificateFeeMax}
                        onChange={(value) => setFilters({ ...filters, certificateFeeMax: value || undefined })}
                      />
                    </div>
                  </Col>
                </Row>
              </div>

              {/* 【P1修复】人员与时间维度筛选区 */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#202124', marginBottom: 12 }}>人员与时间维度筛选</div>
                <Row gutter={[16, 16]}>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>中拍人姓名</div>
                    <Input
                      placeholder="请输入中拍人姓名"
                      value={filters.buyer}
                      onChange={(e) => setFilters({ ...filters, buyer: e.target.value })}
                      maxLength={20}
                    />
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>中拍人注册地</div>
                    <Input
                      placeholder="请输入中拍人注册地"
                      value={filters.buyerCity}
                      onChange={(e) => setFilters({ ...filters, buyerCity: e.target.value })}
                      maxLength={50}
                    />
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>操作人</div>
                    <Input
                      placeholder="请输入操作人姓名"
                      value={filters.operator}
                      onChange={(e) => setFilters({ ...filters, operator: e.target.value })}
                      maxLength={20}
                    />
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>拍卖日期范围</div>
                    <RangePicker
                      style={{ width: '100%' }}
                      value={filters.auctionDateRange}
                      onChange={(dates) => setFilters({ ...filters, auctionDateRange: dates })}
                      placeholder={['开始日期', '结束日期']}
                    />
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>成交时间范围</div>
                    <RangePicker
                      style={{ width: '100%' }}
                      value={filters.dealTimeRange}
                      onChange={(dates) => setFilters({ ...filters, dealTimeRange: dates })}
                      placeholder={['开始日期', '结束日期']}
                    />
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>更新时间范围</div>
                    <RangePicker
                      style={{ width: '100%' }}
                      value={filters.updateTimeRange}
                      onChange={(dates) => setFilters({ ...filters, updateTimeRange: dates })}
                      placeholder={['开始日期', '结束日期']}
                    />
                  </Col>
                </Row>
              </div>

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
        <div key="section-actions" className="action-bar">
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
        <div key="section-table" className="table-wrapper">
          <Table
            rowKey="id"
            columns={columns}
            dataSource={dataSource}
            loading={loading}
            rowSelection={rowSelection}
            pagination={pagination}
            scroll={{ x: 4200 }}
            onChange={(newPagination) => setPagination(newPagination)}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default WholesaleRecordList;
