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
} from 'antd';
import {
  DownloadOutlined,
  SearchOutlined,
  EyeOutlined,
  FileTextOutlined,
  UpOutlined,
  DownOutlined,
} from '@ant-design/icons';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { mockStrategies, Strategy } from '../../data/mockData';
import dayjs from 'dayjs';

const { Option } = Select;
const { RangePicker } = DatePicker;

interface RetailRecord {
  id: string;
  recordNo: string;
  purchaseDate: string;
  strategyNo: string;
  strategyId: string;
  vin: string;
  licensePlate: string;
  brandModel: string;
  color: string;
  mileage: number;
  plateDate: string;
  vehicleCondition: string;
  vehicleType: string;
  previousLocation: string;
  currentLocation: string;
  purchasePrice: number;
  channel: string;
  position: string;
  consignmentPrice: number;
  retailPrice: number;
  status: string;
  profitLoss: number;
  standardReservePrice: number;
  orderTime: string;
  transferStatus: string;
  isDeal: boolean;
}

const RetailRecordList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [filterExpanded, setFilterExpanded] = useState(true);

  // 生成Mock零售记录数据
  const generateRetailRecords = (): RetailRecord[] => {
    return mockStrategies
      .filter(s => s.disposalType === 'retail')
      .map((strategy, index) => ({
        id: strategy.id,
        recordNo: `LS${strategy.strategyNo.slice(-10)}`,
        purchaseDate: strategy.purchaseTime,
        strategyNo: strategy.strategyNo,
        strategyId: strategy.id,
        vin: strategy.vin,
        licensePlate: strategy.licensePlate,
        brandModel: strategy.brandModel,
        color: strategy.color,
        mileage: strategy.mileage,
        plateDate: strategy.purchaseTime,
        vehicleCondition: strategy.vehicleConditionDesc || '车况良好，无重大事故',
        vehicleType: strategy.retailVehicleType || '精品车',
        previousLocation: strategy.location,
        currentLocation: strategy.location,
        purchasePrice: strategy.purchasePrice,
        channel: strategy.channelName,
        position: `A区${String(index + 1).padStart(2, '0')}号位`,
        consignmentPrice: strategy.currentReservePrice,
        retailPrice: strategy.retailPrice || strategy.currentReservePrice + 3000,
        status: strategy.status === 'completed' ? '已成交' : strategy.status === 'executing' ? '寄售中' : '待处置',
        profitLoss: strategy.status === 'completed'
          ? (strategy.retailPrice || strategy.currentReservePrice + 3000) - strategy.purchasePrice
          : 0,
        standardReservePrice: strategy.standardReservePrice,
        orderTime: strategy.status === 'completed' ? strategy.updatedTime : '-',
        transferStatus: strategy.status === 'completed' ? (Math.random() > 0.5 ? '已回传' : '未回传') : '-',
        isDeal: strategy.status === 'completed',
      }));
  };

  const [dataSource, setDataSource] = useState<RetailRecord[]>(generateRetailRecords());

  // 筛选条件
  const [filters, setFilters] = useState({
    // 基础项
    recordNo: '',
    vin: '',
    licensePlate: '',
    channel: '',
    strategyNo: '',

    // 分类项
    vehicleType: '',
    useType: '',
    store: '',

    // 日期项
    inboundDateRange: null as any,
    plateDateRange: null as any,
    orderTimeRange: null as any,

    // 财务项
    profitStatus: '', // 盈利/亏损
    retailPriceMin: undefined as number | undefined,
    retailPriceMax: undefined as number | undefined,
    consignmentPriceMin: undefined as number | undefined,
    consignmentPriceMax: undefined as number | undefined,

    // 摆放位置
    position: '',
  });

  // 分页
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 20,
    total: generateRetailRecords().length,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total) => `共 ${total} 条记录`,
    pageSizeOptions: ['10', '20', '50', '100'],
  });

  const statusConfig = {
    待处置: { color: '#d93025', text: '待处置' },
    寄售中: { color: '#1a73e8', text: '寄售中' },
    已成交: { color: '#1e8e3e', text: '已成交' },
    已取消: { color: '#5f6368', text: '已取消' },
  };

  const columns: ColumnsType<RetailRecord> = [
    {
      title: '记录流水号',
      dataIndex: 'recordNo',
      key: 'recordNo',
      width: 180,
      fixed: 'left',
      render: (text) => (
        <span style={{ fontWeight: 500 }}>{text}</span>
      ),
    },
    {
      title: '收车日期',
      dataIndex: 'purchaseDate',
      key: 'purchaseDate',
      width: 120,
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
      title: '车架号',
      dataIndex: 'vin',
      key: 'vin',
      width: 170,
      align: 'center',
    },
    {
      title: '车牌号',
      dataIndex: 'licensePlate',
      key: 'licensePlate',
      width: 100,
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
      title: '车身颜色',
      dataIndex: 'color',
      key: 'color',
      width: 100,
      align: 'center',
    },
    {
      title: '里程(km)',
      dataIndex: 'mileage',
      key: 'mileage',
      width: 100,
      align: 'right',
      render: (mileage) => mileage.toLocaleString(),
    },
    {
      title: '上牌时间',
      dataIndex: 'plateDate',
      key: 'plateDate',
      width: 120,
    },
    {
      title: '车况说明',
      dataIndex: 'vehicleCondition',
      key: 'vehicleCondition',
      width: 200,
      ellipsis: true,
    },
    {
      title: '车辆类型',
      dataIndex: 'vehicleType',
      key: 'vehicleType',
      width: 120,
      align: 'center',
    },
    {
      title: '原来所在',
      dataIndex: 'previousLocation',
      key: 'previousLocation',
      width: 120,
      align: 'center',
    },
    {
      title: '当前所在',
      dataIndex: 'currentLocation',
      key: 'currentLocation',
      width: 120,
      align: 'center',
    },
    {
      title: '收购价(万)',
      dataIndex: 'purchasePrice',
      key: 'purchasePrice',
      width: 120,
      align: 'right',
      render: (price) => `¥${(price / 10000).toFixed(2)}`,
    },
    {
      title: '处置渠道',
      dataIndex: 'channel',
      key: 'channel',
      width: 140,
      align: 'center',
    },
    {
      title: '摆放位置',
      dataIndex: 'position',
      key: 'position',
      width: 120,
      align: 'center',
    },
    {
      title: '寄售底价(万)',
      dataIndex: 'consignmentPrice',
      key: 'consignmentPrice',
      width: 120,
      align: 'right',
      render: (price) => `¥${(price / 10000).toFixed(2)}`,
    },
    {
      title: '零售价格(万)',
      dataIndex: 'retailPrice',
      key: 'retailPrice',
      width: 120,
      align: 'right',
      render: (price) => `¥${(price / 10000).toFixed(2)}`,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      align: 'center',
      render: (status) => (
        <Tag style={{
          color: statusConfig[status]?.color || '#5f6368',
          borderColor: statusConfig[status]?.color || '#5f6368',
          background: `${statusConfig[status]?.color || '#5f6368'}10`,
          fontWeight: 500
        }}>
          {status}
        </Tag>
      ),
    },
    {
      title: '盈亏情况(万)',
      dataIndex: 'profitLoss',
      key: 'profitLoss',
      width: 120,
      align: 'right',
      render: (profitLoss, record) => {
        if (!record.isDeal) return '-';
        return (
          <span style={{ color: profitLoss >= 0 ? '#1e8e3e' : '#d93025', fontWeight: 500 }}>
            {profitLoss >= 0 ? '+' : ''}{(profitLoss / 10000).toFixed(2)}
          </span>
        );
      },
    },
    {
      title: '公司标准保留价(万)',
      dataIndex: 'standardReservePrice',
      key: 'standardReservePrice',
      width: 150,
      align: 'right',
      render: (price) => `¥${(price / 10000).toFixed(2)}`,
    },
    {
      title: '订单时间',
      dataIndex: 'orderTime',
      key: 'orderTime',
      width: 150,
    },
    {
      title: '过户资料回传进度',
      dataIndex: 'transferStatus',
      key: 'transferStatus',
      width: 140,
      align: 'center',
      render: (status) => {
        if (status === '-') return '-';
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
      width: 180,
      fixed: 'right',
      align: 'center',
      render: (_, record) => (
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
          <Button
            type="link"
            size="small"
            icon={<EyeOutlined />}
            onClick={() => navigate(`/disposal/strategy/${record.strategyId}`)}
          >
            详情
          </Button>
          {record.isDeal && (
            <Button
              type="link"
              size="small"
              icon={<FileTextOutlined />}
              onClick={() => message.info('跳转到零售订单详情页')}
            >
              查看订单
            </Button>
          )}
        </div>
      ),
    },
  ];

  useEffect(() => {
    handleSearch();
  }, [filters]);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      let filtered = generateRetailRecords();

      // 应用筛选逻辑
      if (filters.recordNo) {
        filtered = filtered.filter(item => item.recordNo.includes(filters.recordNo));
      }
      if (filters.vin) {
        filtered = filtered.filter(item => item.vin.toLowerCase().includes(filters.vin.toLowerCase()));
      }
      if (filters.licensePlate) {
        filtered = filtered.filter(item => item.licensePlate.includes(filters.licensePlate));
      }
      if (filters.channel) {
        filtered = filtered.filter(item => item.channel.includes(filters.channel));
      }
      if (filters.strategyNo) {
        filtered = filtered.filter(item => item.strategyNo.includes(filters.strategyNo));
      }
      if (filters.vehicleType) {
        filtered = filtered.filter(item => item.vehicleType.includes(filters.vehicleType));
      }
      if (filters.position) {
        filtered = filtered.filter(item => item.position.includes(filters.position));
      }
      if (filters.profitStatus) {
        if (filters.profitStatus === '盈利') {
          filtered = filtered.filter(item => item.isDeal && item.profitLoss >= 0);
        } else if (filters.profitStatus === '亏损') {
          filtered = filtered.filter(item => item.isDeal && item.profitLoss < 0);
        }
      }

      setDataSource(filtered);
      setPagination({ ...pagination, total: filtered.length, current: 1 });
      setLoading(false);
    }, 300);
  };

  const handleReset = () => {
    setFilters({
      recordNo: '',
      vin: '',
      licensePlate: '',
      channel: '',
      strategyNo: '',
      vehicleType: '',
      useType: '',
      store: '',
      inboundDateRange: null,
      plateDateRange: null,
      orderTimeRange: null,
      profitStatus: '',
      retailPriceMin: undefined,
      retailPriceMax: undefined,
      consignmentPriceMin: undefined,
      consignmentPriceMax: undefined,
      position: '',
    });
    const allRecords = generateRetailRecords();
    setDataSource(allRecords);
    setPagination({ ...pagination, total: allRecords.length, current: 1 });
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
        <h1 className="page-title">零售处置记录</h1>
        <p className="page-subtitle">追踪零售渠道的完整销售记录</p>
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
              {/* 基础项 */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#202124', marginBottom: 12 }}>基础项</div>
                <Row gutter={[16, 16]}>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>记录流水号</div>
                    <Input
                      placeholder="请输入记录流水号"
                      value={filters.recordNo}
                      onChange={(e) => setFilters({ ...filters, recordNo: e.target.value })}
                      maxLength={30}
                    />
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>车架号</div>
                    <Input
                      placeholder="17位VIN码或后6位"
                      value={filters.vin}
                      onChange={(e) => setFilters({ ...filters, vin: e.target.value })}
                    />
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>车牌号</div>
                    <Input
                      placeholder="支持模糊查询"
                      value={filters.licensePlate}
                      onChange={(e) => setFilters({ ...filters, licensePlate: e.target.value })}
                      maxLength={10}
                    />
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>处置渠道</div>
                    <Input
                      placeholder="支持模糊查询"
                      value={filters.channel}
                      onChange={(e) => setFilters({ ...filters, channel: e.target.value })}
                      maxLength={50}
                    />
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>策略编号</div>
                    <Input
                      placeholder="请输入策略编号"
                      value={filters.strategyNo}
                      onChange={(e) => setFilters({ ...filters, strategyNo: e.target.value })}
                      maxLength={30}
                    />
                  </Col>
                </Row>
              </div>

              {/* 分类项 */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#202124', marginBottom: 12 }}>分类项</div>
                <Row gutter={[16, 16]}>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>车辆类型</div>
                    <Input
                      placeholder="文本模糊搜索"
                      value={filters.vehicleType}
                      onChange={(e) => setFilters({ ...filters, vehicleType: e.target.value })}
                    />
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>营运性质</div>
                    <Select
                      placeholder="请选择"
                      style={{ width: '100%' }}
                      value={filters.useType || undefined}
                      onChange={(value) => setFilters({ ...filters, useType: value })}
                      allowClear
                    >
                      <Option value="营运">营运</Option>
                      <Option value="非营运">非营运</Option>
                    </Select>
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>所属门店</div>
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
                    </Select>
                  </Col>
                </Row>
              </div>

              {/* 财务项 */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#202124', marginBottom: 12 }}>财务项</div>
                <Row gutter={[16, 16]}>
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
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>零售价格区间(万)</div>
                    <div style={{ display: 'flex', width: '100%' }}>
                      <InputNumber
                        min={0}
                        max={999.99}
                        precision={2}
                        placeholder="最小值"
                        style={{ width: '50%' }}
                        value={filters.retailPriceMin}
                        onChange={(value) => setFilters({ ...filters, retailPriceMin: value || undefined })}
                      />
                      <InputNumber
                        min={0}
                        max={999.99}
                        precision={2}
                        placeholder="最大值"
                        style={{ width: '50%' }}
                        value={filters.retailPriceMax}
                        onChange={(value) => setFilters({ ...filters, retailPriceMax: value || undefined })}
                      />
                    </div>
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>寄售底价区间(万)</div>
                    <div style={{ display: 'flex', width: '100%' }}>
                      <InputNumber
                        min={0}
                        max={999.99}
                        precision={2}
                        placeholder="最小值"
                        style={{ width: '50%' }}
                        value={filters.consignmentPriceMin}
                        onChange={(value) => setFilters({ ...filters, consignmentPriceMin: value || undefined })}
                      />
                      <InputNumber
                        min={0}
                        max={999.99}
                        precision={2}
                        placeholder="最大值"
                        style={{ width: '50%' }}
                        value={filters.consignmentPriceMax}
                        onChange={(value) => setFilters({ ...filters, consignmentPriceMax: value || undefined })}
                      />
                    </div>
                  </Col>
                  <Col span={6}>
                    <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 500, color: '#80868b' }}>摆放位置</div>
                    <Input
                      placeholder="文本模糊搜索"
                      value={filters.position}
                      onChange={(e) => setFilters({ ...filters, position: e.target.value })}
                      maxLength={50}
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
            scroll={{ x: 3600 }}
            onChange={(newPagination) => setPagination(newPagination)}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default RetailRecordList;
