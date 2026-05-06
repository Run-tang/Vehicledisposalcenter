import { useParams, useNavigate } from 'react-router';
import { Card, Descriptions, Tag, Button, Space, Empty, Row, Col, Statistic, Table, Tabs } from 'antd';
import { ArrowLeftOutlined, EyeOutlined, TeamOutlined, RiseOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { mockRecords, getBidHistoryByRecordId, BidHistory, getStrategyById, getTransferHistoryByRelatedId } from '../../data/mockData';
import TransferHistoryTimeline from './components/TransferHistoryTimeline';

const RecordDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const record = mockRecords.find(r => r.id === id);
  const bidHistory = getBidHistoryByRecordId(id!);
  const strategy = record ? getStrategyById(record.strategyId) : null;
  const transferHistory = getTransferHistoryByRelatedId(id!, 'record');

  if (!record) {
    return (
      <Card>
        <Empty description="记录不存在" />
      </Card>
    );
  }

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

  const bidColumns: ColumnsType<BidHistory> = [
    {
      title: '排名',
      dataIndex: 'rank',
      key: 'rank',
      width: 80,
      render: (rank) => (
        <span style={{
          display: 'inline-block',
          width: 28,
          height: 28,
          lineHeight: '28px',
          textAlign: 'center',
          borderRadius: '50%',
          backgroundColor: rank === 1 ? '#1e8e3e' : rank <= 3 ? '#1a73e8' : '#f1f3f4',
          color: rank <= 3 ? '#fff' : '#5f6368',
          fontWeight: 500,
        }}>
          {rank}
        </span>
      ),
    },
    {
      title: '出价车商',
      dataIndex: 'bidder',
      key: 'bidder',
      width: 150,
    },
    {
      title: '出价金额',
      dataIndex: 'amount',
      key: 'amount',
      width: 150,
      align: 'right',
      render: (amount, _, index) => (
        <span style={{
          fontSize: index === 0 ? 18 : 14,
          fontWeight: index === 0 ? 600 : 400,
          color: index === 0 ? '#1e8e3e' : '#202124',
        }}>
          ¥{amount.toLocaleString()}
        </span>
      ),
    },
    {
      title: '出价时间',
      dataIndex: 'time',
      key: 'time',
      width: 180,
    },
  ];

  const profit = record.maxBid && strategy ? record.maxBid - strategy.purchasePrice : 0;
  const profitRate = profit && strategy ? ((profit / strategy.purchasePrice) * 100).toFixed(2) : '0.00';

  const tabItems = [
    {
      key: 'basic',
      label: '基础信息',
      children: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card title="记录基础信息" bordered={false}>
            <Descriptions bordered column={2}>
              <Descriptions.Item label="记录流水号">{record.recordNo}</Descriptions.Item>
              <Descriptions.Item label="关联策略编号">
                <a onClick={() => navigate(`/disposal/strategy/${record.strategyId}`)}>
                  {record.strategyNo}
                </a>
              </Descriptions.Item>
              <Descriptions.Item label="VIN码">{record.vin}</Descriptions.Item>
              <Descriptions.Item label="车牌号">{record.licensePlate}</Descriptions.Item>
              <Descriptions.Item label="品牌车型">{record.brandModel}</Descriptions.Item>
              <Descriptions.Item label="处置平台">
                <Tag style={{
                  color: platformConfig[record.platform].color,
                  borderColor: platformConfig[record.platform].color,
                  background: `${platformConfig[record.platform].color}10`
                }}>
                  {platformConfig[record.platform].text}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="开拍时间">{record.startTime}</Descriptions.Item>
              <Descriptions.Item label="结拍时间">{record.endTime}</Descriptions.Item>
              <Descriptions.Item label="当次起拍价">
                ¥{record.startPrice.toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label="当次保留价">
                ¥{record.reservePrice.toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label="加价幅度">
                ¥{record.increment.toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label="处置结果">
                <Tag style={{
                  color: resultConfig[record.result].color,
                  borderColor: resultConfig[record.result].color,
                  background: `${resultConfig[record.result].color}10`
                }}>
                  {resultConfig[record.result].text}
                </Tag>
              </Descriptions.Item>
            </Descriptions>
          </Card>

          <Card title="数据统计" bordered={false}>
            <Descriptions bordered column={2}>
              <Descriptions.Item label="围观人数(PV)">
                {record.viewCount}人次
              </Descriptions.Item>
              <Descriptions.Item label="出价人数(UV)">
                {record.bidderCount}人
              </Descriptions.Item>
              <Descriptions.Item label="出价次数(PV)">
                {record.bidCount}次
              </Descriptions.Item>
              <Descriptions.Item label="最高出价">
                {record.maxBid ? `¥${record.maxBid.toLocaleString()}` : '-'}
              </Descriptions.Item>
              <Descriptions.Item label="价格达成率">
                {record.maxBid
                  ? `${((record.maxBid / record.reservePrice) * 100).toFixed(1)}%`
                  : '-'}
              </Descriptions.Item>
              <Descriptions.Item label="竞价活跃度">
                {record.bidderCount > 0
                  ? `${(record.bidCount / record.bidderCount).toFixed(1)}次/人`
                  : '-'}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      ),
    },
    {
      key: 'bid',
      label: `出价历史(${bidHistory.length})`,
      children: bidHistory.length > 0 ? (
        <Card title="出价历史记录" bordered={false}>
          <Table
            rowKey="id"
            columns={bidColumns}
            dataSource={bidHistory}
            pagination={false}
          />
        </Card>
      ) : (
        <Empty description="暂无出价记录" />
      ),
    },
    {
      key: 'result',
      label: '处置结果',
      children: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {record.result === 'sold' ? (
            <>
              <Card title="成交信息" bordered={false}>
                <Descriptions bordered column={2}>
                  <Descriptions.Item label="成交价">
                    <span style={{ fontSize: 18, fontWeight: 600, color: '#1e8e3e' }}>
                      ¥{record.maxBid?.toLocaleString()}
                    </span>
                  </Descriptions.Item>
                  <Descriptions.Item label="最终买方">{record.buyer}</Descriptions.Item>
                  <Descriptions.Item label="买方联系方式">{record.buyerPhone}</Descriptions.Item>
                  <Descriptions.Item label="成交时间">{record.endTime}</Descriptions.Item>
                  <Descriptions.Item label="订单编号">
                    {record.orderNo || '-'}
                  </Descriptions.Item>
                  <Descriptions.Item label="订单状态">
                    <Tag style={{ color: '#1e8e3e', borderColor: '#1e8e3e', background: '#1e8e3e10' }}>
                      待交付
                    </Tag>
                  </Descriptions.Item>
                </Descriptions>
              </Card>

              {strategy && (
                <Card title="收益分析" bordered={false}>
                  <Descriptions bordered column={2}>
                    <Descriptions.Item label="收购价">
                      ¥{strategy.purchasePrice.toLocaleString()}
                    </Descriptions.Item>
                    <Descriptions.Item label="成交价">
                      ¥{record.maxBid?.toLocaleString()}
                    </Descriptions.Item>
                    <Descriptions.Item label="毛利润">
                      <span style={{ fontSize: 18, fontWeight: 600, color: profit > 0 ? '#1e8e3e' : '#d93025' }}>
                        ¥{profit.toLocaleString()}
                      </span>
                    </Descriptions.Item>
                    <Descriptions.Item label="利润率">
                      <span style={{ fontSize: 16, fontWeight: 600, color: Number(profitRate) > 0 ? '#1e8e3e' : '#d93025' }}>
                        {profitRate}%
                      </span>
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
              )}
            </>
          ) : record.result === 'unsold' ? (
            <Card title="流拍分析" bordered={false}>
              <Descriptions bordered column={2}>
                <Descriptions.Item label="流拍原因">
                  {record.maxBid && record.maxBid < record.reservePrice
                    ? '最高出价未达保留价'
                    : '无人出价'}
                </Descriptions.Item>
                <Descriptions.Item label="最高出价">
                  {record.maxBid ? `¥${record.maxBid.toLocaleString()}` : '-'}
                </Descriptions.Item>
                <Descriptions.Item label="保留价">
                  ¥{record.reservePrice.toLocaleString()}
                </Descriptions.Item>
                <Descriptions.Item label="差价">
                  {record.maxBid
                    ? `¥${(record.reservePrice - record.maxBid).toLocaleString()}`
                    : '-'}
                </Descriptions.Item>
                <Descriptions.Item label="建议调整" span={2}>
                  {record.maxBid
                    ? `建议降低保留价至 ¥${(record.maxBid + 5000).toLocaleString()}`
                    : '建议降低起拍价并增加推广力度'}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          ) : record.result === 'bidding' ? (
            <Card title="竞价进行中" bordered={false}>
              <p style={{ textAlign: 'center', color: '#1a73e8', fontSize: 16, margin: '16px 0' }}>
                竞价进行中,当前最高出价: ¥{record.maxBid?.toLocaleString() || '暂无出价'}
              </p>
            </Card>
          ) : (
            <Empty description="暂无处置结果" />
          )}
        </div>
      ),
    },
    {
      key: 'history',
      label: `流转历史(${transferHistory.length})`,
      children: <TransferHistoryTimeline history={transferHistory} />,
    },
  ];

  return (
    <div style={{ maxWidth: 1600, margin: '0 auto', padding: '24px' }}>
      {/* 页头 */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Space>
            <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
              返回
            </Button>
            <div>
              <h1 className="page-title" style={{ display: 'inline-block', margin: 0 }}>处置记录详情</h1>
              <Tag
                style={{
                  marginLeft: 16,
                  color: resultConfig[record.result].color,
                  borderColor: resultConfig[record.result].color,
                  background: `${resultConfig[record.result].color}10`
                }}
              >
                {resultConfig[record.result].text}
              </Tag>
            </div>
          </Space>
        </div>
      </div>

      {/* 数据统计卡片 */}
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={8} key="stats-view">
          <Card className="stats-card">
            <Statistic
              title="围观人数(PV)"
              value={record.viewCount}
              suffix="人次"
              prefix={<EyeOutlined style={{ color: '#1a73e8' }} />}
              valueStyle={{ color: '#1a73e8' }}
            />
          </Card>
        </Col>
        <Col span={8} key="stats-bidder">
          <Card className="stats-card">
            <Statistic
              title="出价人数(UV)"
              value={record.bidderCount}
              suffix="人"
              prefix={<TeamOutlined style={{ color: '#1e8e3e' }} />}
              valueStyle={{ color: '#1e8e3e' }}
            />
          </Card>
        </Col>
        <Col span={8} key="stats-bid">
          <Card className="stats-card">
            <Statistic
              title="出价次数(PV)"
              value={record.bidCount}
              suffix="次"
              prefix={<RiseOutlined style={{ color: '#8e24aa' }} />}
              valueStyle={{ color: '#8e24aa' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Tab内容 */}
      <Card>
        <Tabs items={tabItems} defaultActiveKey="basic" />
      </Card>
    </div>
  );
};

export default RecordDetail;
