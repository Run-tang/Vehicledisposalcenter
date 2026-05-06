import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Table, Card, Space, Button, Input, Select, Tag, DatePicker, Row, Col, Statistic, Tabs } from 'antd';
import { DownloadOutlined, SearchOutlined, EyeOutlined, RiseOutlined, TeamOutlined, FileTextOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { mockRecords, DisposalRecord, RecordResult, Platform } from '../../data/mockData';

const { Option } = Select;
const { RangePicker } = DatePicker;

const RecordList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<DisposalRecord[]>(mockRecords);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [filterExpanded, setFilterExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('all');

  // 筛选条件
  const [filters, setFilters] = useState({
    vin: '',
    platform: '',
    result: '',
    dateRange: null as any,
  });

  // 分页
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 20,
    total: mockRecords.length,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total) => `共 ${total} 条`,
    pageSizeOptions: ['10', '20', '50', '100'],
  });

  const platformConfig = {
    zhuandian: { color: '#8e24aa', text: '专电优拍' },
    youliang: { color: '#00acc1', text: '有辆' },
    qichejie: { color: '#d81b60', text: '汽车街' },
    youxinpai: { color: '#f9ab00', text: '优信拍' },
    offline: { color: '#5f6368', text: '线下门店' },
  };

  const resultConfig = {
    sold: { color: '#1e8e3e', text: '成交' },
    unsold: { color: '#d93025', text: '流拍' },
    bidding: { color: '#1a73e8', text: '竞价中' },
    suspended: { color: '#5f6368', text: '中止' },
  };

  // 计算统计数据
  const stats = {
    total: dataSource.length,
    sold: dataSource.filter(r => r.result === 'sold').length,
    unsold: dataSource.filter(r => r.result === 'unsold').length,
    successRate: dataSource.length > 0
      ? ((dataSource.filter(r => r.result === 'sold').length / dataSource.length) * 100).toFixed(1)
      : '0.0',
    avgBidders: dataSource.length > 0
      ? (dataSource.reduce((sum, r) => sum + r.bidderCount, 0) / dataSource.length).toFixed(1)
      : '0.0',
  };

  const columns: ColumnsType<DisposalRecord> = [
    {
      title: '序号',
      width: 60,
      fixed: 'left',
      render: (_, __, index) => (pagination.current! - 1) * pagination.pageSize! + index + 1,
    },
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
      title: 'VIN码',
      dataIndex: 'vin',
      key: 'vin',
      width: 180,
      ellipsis: true,
    },
    {
      title: '品牌车型',
      dataIndex: 'brandModel',
      key: 'brandModel',
      width: 200,
    },
    {
      title: '处置平台',
      dataIndex: 'platform',
      key: 'platform',
      width: 120,
      render: (platform: Platform) => (
        <Tag style={{ color: platformConfig[platform].color, borderColor: platformConfig[platform].color, background: `${platformConfig[platform].color}10` }}>
          {platformConfig[platform].text}
        </Tag>
      ),
    },
    {
      title: '开拍时间',
      dataIndex: 'startTime',
      key: 'startTime',
      width: 150,
      sorter: (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
    },
    {
      title: '结拍时间',
      dataIndex: 'endTime',
      key: 'endTime',
      width: 150,
    },
    {
      title: '起拍价(元)',
      dataIndex: 'startPrice',
      key: 'startPrice',
      width: 120,
      align: 'right',
      render: (price) => `¥${price.toLocaleString()}`,
    },
    {
      title: '保留价(元)',
      dataIndex: 'reservePrice',
      key: 'reservePrice',
      width: 120,
      align: 'right',
      render: (price) => `¥${price.toLocaleString()}`,
    },
    {
      title: '围观(PV)',
      dataIndex: 'viewCount',
      key: 'viewCount',
      width: 100,
      align: 'center',
      sorter: (a, b) => a.viewCount - b.viewCount,
    },
    {
      title: '出价人',
      dataIndex: 'bidderCount',
      key: 'bidderCount',
      width: 100,
      align: 'center',
      sorter: (a, b) => a.bidderCount - b.bidderCount,
    },
    {
      title: '出价次',
      dataIndex: 'bidCount',
      key: 'bidCount',
      width: 100,
      align: 'center',
      sorter: (a, b) => a.bidCount - b.bidCount,
    },
    {
      title: '最高出价(元)',
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
            ¥{price.toLocaleString()}
          </span>
        ) : (
          '-'
        ),
      sorter: (a, b) => (a.maxBid || 0) - (b.maxBid || 0),
    },
    {
      title: '处置结果',
      dataIndex: 'result',
      key: 'result',
      width: 100,
      render: (result: RecordResult) => (
        <Tag style={{ color: resultConfig[result].color, borderColor: resultConfig[result].color, background: `${resultConfig[result].color}10` }}>
          {resultConfig[result].text}
        </Tag>
      ),
    },
    {
      title: '最终买方',
      dataIndex: 'buyer',
      key: 'buyer',
      width: 150,
      render: (buyer) => buyer || '-',
    },
    {
      title: '操作',
      key: 'action',
      width: 100,
      fixed: 'right',
      render: (_, record) => (
        <Button
          type="link"
          size="small"
          icon={<EyeOutlined />}
          onClick={() => navigate(`/disposal/record/${record.id}`)}
        >
          查看
        </Button>
      ),
    },
  ];

  // 计算统计数量（基于筛选条件，但不包括结果筛选）
  const getFilteredDataForStats = () => {
    let filtered = [...mockRecords];

    if (filters.vin) {
      filtered = filtered.filter(item => item.vin.toLowerCase().includes(filters.vin.toLowerCase()));
    }
    if (filters.platform) {
      filtered = filtered.filter(item => item.platform === filters.platform);
    }
    if (filters.dateRange && filters.dateRange.length === 2) {
      const [start, end] = filters.dateRange;
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.startTime);
        return itemDate >= start.toDate() && itemDate <= end.toDate();
      });
    }

    return filtered;
  };

  const statsForTab = getFilteredDataForStats();
  const tabStats = {
    all: statsForTab.length,
    sold: statsForTab.filter(r => r.result === 'sold').length,
    unsold: statsForTab.filter(r => r.result === 'unsold').length,
    bidding: statsForTab.filter(r => r.result === 'bidding').length,
    suspended: statsForTab.filter(r => r.result === 'suspended').length,
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    setFilters({ ...filters, result: key === 'all' ? '' : key });
  };

  // 当Tab或筛选条件变化时，自动搜索
  useEffect(() => {
    handleSearch();
  }, [filters]);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...mockRecords];

      if (filters.vin) {
        filtered = filtered.filter(item => item.vin.toLowerCase().includes(filters.vin.toLowerCase()));
      }
      if (filters.platform) {
        filtered = filtered.filter(item => item.platform === filters.platform);
      }
      if (filters.result) {
        filtered = filtered.filter(item => item.result === filters.result);
      }
      if (filters.dateRange && filters.dateRange.length === 2) {
        const [start, end] = filters.dateRange;
        filtered = filtered.filter(item => {
          const itemDate = new Date(item.startTime);
          return itemDate >= start.toDate() && itemDate <= end.toDate();
        });
      }

      setDataSource(filtered);
      setPagination({ ...pagination, total: filtered.length, current: 1 });
      setLoading(false);
    }, 300);
  };

  const handleReset = () => {
    setFilters({
      vin: '',
      platform: '',
      result: '',
      dateRange: null,
    });
    setDataSource(mockRecords);
    setPagination({ ...pagination, total: mockRecords.length, current: 1 });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys: React.Key[]) => {
      setSelectedRowKeys(selectedKeys);
    },
  };

  const tabItems = [
    { key: 'all', label: `全部(${tabStats.all})` },
    { key: 'sold', label: `成交(${tabStats.sold})` },
    { key: 'unsold', label: `流拍(${tabStats.unsold})` },
    { key: 'bidding', label: `竞价中(${tabStats.bidding})` },
    { key: 'suspended', label: `中止(${tabStats.suspended})` },
  ];

  return (
    <div style={{ maxWidth: 1600, margin: '0 auto', padding: '24px' }}>
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">处置记录管理</h1>
        <p className="page-subtitle">查看和分析所有车辆处置记录，跟踪竞拍过程与结果</p>
      </div>

      {/* Tab筛选器 */}
      <div style={{ marginBottom: 16, background: '#fff', borderRadius: '8px', padding: '16px 20px', boxShadow: '0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)', border: '1px solid #dadce0' }}>
        <Tabs
          activeKey={activeTab}
          onChange={handleTabChange}
          items={tabItems}
        />
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-title">
          <span>筛选条件</span>
          <span className="filter-toggle" onClick={() => setFilterExpanded(!filterExpanded)}>
            {filterExpanded ? <><UpOutlined style={{ fontSize: 12, marginRight: 4 }} />收起</> : <><DownOutlined style={{ fontSize: 12, marginRight: 4 }} />展开</>}
          </span>
        </div>
        {filterExpanded && (
          <>
            <Row gutter={[16, 16]}>
              <Col span={6} key="filter-vin">
                <div style={{ marginBottom: 8, fontSize: 12, fontWeight: 500, color: '#80868b' }}>VIN码搜索</div>
                <Input
                  placeholder="输入VIN码"
                  value={filters.vin}
                  onChange={(e) => setFilters({ ...filters, vin: e.target.value })}
                  prefix={<SearchOutlined style={{ color: '#80868b' }} />}
                />
              </Col>
              <Col span={6} key="filter-platform">
                <div style={{ marginBottom: 8, fontSize: 12, fontWeight: 500, color: '#80868b' }}>处置平台</div>
                <Select
                  placeholder="选择平台"
                  style={{ width: '100%' }}
                  value={filters.platform || undefined}
                  onChange={(value) => setFilters({ ...filters, platform: value })}
                  allowClear
                >
                  <Option value="zhuandian">专电优拍</Option>
                  <Option value="youliang">有辆</Option>
                  <Option value="qichejie">汽车街</Option>
                  <Option value="youxinpai">优信拍</Option>
                  <Option value="offline">线下门店</Option>
                </Select>
              </Col>
              <Col span={6} key="filter-result">
                <div style={{ marginBottom: 8, fontSize: 12, fontWeight: 500, color: '#80868b' }}>处置结果</div>
                <Select
                  placeholder="选择结果"
                  style={{ width: '100%' }}
                  value={filters.result || undefined}
                  onChange={(value) => setFilters({ ...filters, result: value })}
                  allowClear
                >
                  <Option value="sold">成交</Option>
                  <Option value="unsold">流拍</Option>
                  <Option value="bidding">竞价中</Option>
                  <Option value="suspended">中止</Option>
                </Select>
              </Col>
              <Col span={6} key="filter-daterange">
                <div style={{ marginBottom: 8, fontSize: 12, fontWeight: 500, color: '#80868b' }}>开拍时间</div>
                <RangePicker
                  placeholder={['开始时间', '结束时间']}
                  value={filters.dateRange}
                  onChange={(dates) => setFilters({ ...filters, dateRange: dates })}
                  style={{ width: '100%' }}
                />
              </Col>
            </Row>
            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <Button onClick={handleReset}>重置</Button>
              <Button type="primary" onClick={handleSearch}>筛选</Button>
            </div>
          </>
        )}
      </div>

      {/* Statistics Section */}
      <div className="filter-section">
        <Row gutter={16}>
          <Col span={6} key="stats-total">
            <Statistic
              title="总记录数"
              value={stats.total}
              suffix="条"
              prefix={<FileTextOutlined style={{ color: '#1a73e8' }} />}
            />
          </Col>
          <Col span={6} key="stats-rate">
            <Statistic
              title="成交率"
              value={stats.successRate}
              suffix="%"
              valueStyle={{ color: '#1e8e3e' }}
              prefix={<RiseOutlined />}
            />
          </Col>
          <Col span={6} key="stats-bidders">
            <Statistic
              title="平均出价人数"
              value={stats.avgBidders}
              suffix="人"
              prefix={<TeamOutlined style={{ color: '#1a73e8' }} />}
            />
          </Col>
          <Col span={6} key="stats-export">
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%' }}>
              <Button icon={<DownloadOutlined />}>导出数据</Button>
            </div>
          </Col>
        </Row>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <Table
          rowKey="id"
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowSelection={rowSelection}
          pagination={pagination}
          scroll={{ x: 2200 }}
          onChange={(newPagination) => setPagination(newPagination)}
        />
      </div>
    </div>
  );
};

export default RecordList;
