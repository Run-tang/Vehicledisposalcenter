import { useParams, useNavigate } from 'react-router';
import { Card, Descriptions, Tag, Button, Space, Tabs, Table, Timeline, Empty, Statistic, Row, Col, Alert } from 'antd';
import {
  ArrowLeftOutlined,
  EditOutlined,
  CloseOutlined,
  WarningOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import {
  getStrategyById,
  getRecordsByStrategyId,
  getOperationLogsByRelatedId,
  DisposalRecord,
  OperationLog,
} from '../../data/mockData';
import { useState } from 'react';
import AdjustStrategyModal from './components/AdjustStrategyModal';
import CancelStrategyModal from './components/CancelStrategyModal';

const StrategyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [adjustModalVisible, setAdjustModalVisible] = useState(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);

  const strategy = getStrategyById(id!);
  const records = getRecordsByStrategyId(id!);
  const logs = getOperationLogsByRelatedId(id!, 'strategy');

  if (!strategy) {
    return (
      <Card>
        <Empty description="策略不存在" />
      </Card>
    );
  }

  const statusConfig = {
    pending: { color: '#f9ab00', text: '待执行' },
    executing: { color: '#1a73e8', text: '执行中' },
    completed: { color: '#1e8e3e', text: '已完成' },
    cancelled: { color: '#5f6368', text: '已取消' },
  };

  const methodConfig = {
    auction_open: { color: '#1a73e8', text: '线上明标' },
    auction_sealed: { color: '#8e24aa', text: '线上暗标' },
    fixed_price: { color: '#1e8e3e', text: '一口价' },
    wholesale: { color: '#f9ab00', text: '线下批发' },
    resale: { color: '#00acc1', text: '转售' },
    scrap: { color: '#5f6368', text: '报废' },
    other: { color: '#f9ab00', text: '其他' },
  };

  const platformConfig = {
    zhuandian: { color: '#8e24aa', text: '专电优拍' },
    youliang: { color: '#00acc1', text: '有辆' },
    qichejie: { color: '#d81b60', text: '汽车街' },
    youxinpai: { color: '#f9ab00', text: '优信拍' },
    offline: { color: '#5f6368', text: '线下门店' },
  };

  const gradeConfig = {
    S: { color: '#f9ab00', text: 'S级精品', icon: '⭐⭐⭐⭐⭐' },
    A: { color: '#1e8e3e', text: 'A级优秀', icon: '⭐⭐⭐⭐' },
    B: { color: '#1a73e8', text: 'B级良好', icon: '⭐⭐⭐' },
    C: { color: '#f9ab00', text: 'C级一般', icon: '⭐⭐' },
    D: { color: '#d93025', text: 'D级事故', icon: '⭐' },
  };

  const recordResultConfig = {
    sold: { color: '#1e8e3e', text: '成交' },
    unsold: { color: '#d93025', text: '流拍' },
    bidding: { color: '#1a73e8', text: '竞价中' },
    suspended: { color: '#5f6368', text: '中止' },
  };

  const recordColumns: ColumnsType<DisposalRecord> = [
    {
      title: '记录流水号',
      dataIndex: 'recordNo',
      key: 'recordNo',
      width: 180,
      render: (text, record) => (
        <a onClick={() => navigate(`/disposal/record/${record.id}`)}>{text}</a>
      ),
    },
    {
      title: '开拍时间',
      dataIndex: 'startTime',
      key: 'startTime',
      width: 150,
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
    },
    {
      title: '出价人',
      dataIndex: 'bidderCount',
      key: 'bidderCount',
      width: 100,
      align: 'center',
    },
    {
      title: '出价次',
      dataIndex: 'bidCount',
      key: 'bidCount',
      width: 100,
      align: 'center',
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
    },
    {
      title: '处置结果',
      dataIndex: 'result',
      key: 'result',
      width: 100,
      render: (result) => (
        <Tag style={{
          color: recordResultConfig[result].color,
          borderColor: recordResultConfig[result].color,
          background: `${recordResultConfig[result].color}10`
        }}>
          {recordResultConfig[result].text}
        </Tag>
      ),
    },
  ];

  const tabItems = [
    {
      key: 'basic',
      label: '基础信息',
      children: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card title="策略基础信息" bordered={false}>
            <Descriptions bordered column={2}>
              <Descriptions.Item label="策略编号">{strategy.strategyNo}</Descriptions.Item>
              <Descriptions.Item label="处置方式">
                <Tag style={{
                  color: methodConfig[strategy.method].color,
                  borderColor: methodConfig[strategy.method].color,
                  background: `${methodConfig[strategy.method].color}10`
                }}>
                  {methodConfig[strategy.method].text}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="处置平台">
                <Tag style={{
                  color: platformConfig[strategy.platform].color,
                  borderColor: platformConfig[strategy.platform].color,
                  background: `${platformConfig[strategy.platform].color}10`
                }}>
                  {platformConfig[strategy.platform].text}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="策略状态">
                <Tag style={{
                  color: statusConfig[strategy.status].color,
                  borderColor: statusConfig[strategy.status].color,
                  background: `${statusConfig[strategy.status].color}10`
                }}>
                  {statusConfig[strategy.status].text}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="起拍价">
                ¥{strategy.startPrice.toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label="保留价">
                ¥{strategy.reservePrice.toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label="加价幅度">
                ¥{strategy.increment.toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label="策略有效期">
                {strategy.validFrom} ~ {strategy.validTo}
              </Descriptions.Item>
              <Descriptions.Item label="制定人">{strategy.creator}</Descriptions.Item>
              <Descriptions.Item label="制定时间">{strategy.createdTime}</Descriptions.Item>
              {strategy.remarks && (
                <Descriptions.Item label="策略备注" span={2}>
                  {strategy.remarks}
                </Descriptions.Item>
              )}
            </Descriptions>
          </Card>

          <Card title="定价依据" bordered={false}>
            <Descriptions bordered column={2}>
              <Descriptions.Item label="收购价">
                ¥{strategy.purchasePrice.toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label="评估师建议售价">
                ¥{strategy.suggestedPrice.toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label="综合车况评级">
                <Space>
                  <Tag style={{
                    color: gradeConfig[strategy.grade].color,
                    borderColor: gradeConfig[strategy.grade].color,
                    background: `${gradeConfig[strategy.grade].color}10`
                  }}>
                    {gradeConfig[strategy.grade].text}
                  </Tag>
                  <span>{gradeConfig[strategy.grade].icon}</span>
                </Space>
              </Descriptions.Item>
              <Descriptions.Item label="评估时间">{strategy.assessTime}</Descriptions.Item>
              <Descriptions.Item label="漆面修复面数">
                {strategy.paintRepair}面
              </Descriptions.Item>
              <Descriptions.Item label="骨架受损项数">
                {strategy.frameRepair > 0 ? (
                  <span style={{ color: '#d93025', fontWeight: 500 }}>
                    <WarningOutlined /> {strategy.frameRepair}项
                  </span>
                ) : (
                  <span style={{ color: '#1e8e3e' }}>
                    <CheckCircleOutlined /> 0项(无受损)
                  </span>
                )}
              </Descriptions.Item>
              <Descriptions.Item label="评估师">{strategy.assessor}</Descriptions.Item>
              <Descriptions.Item label="重大损伤项">{strategy.majorDamage}</Descriptions.Item>
              <Descriptions.Item label="评估备注" span={2}>
                {strategy.assessorNote}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      ),
    },
    {
      key: 'vehicle',
      label: '车辆信息',
      children: (
        <Card title="车辆基础信息" bordered={false}>
          <Descriptions bordered column={2}>
            <Descriptions.Item label="VIN码">{strategy.vin}</Descriptions.Item>
            <Descriptions.Item label="车牌号">{strategy.licensePlate}</Descriptions.Item>
            <Descriptions.Item label="品牌车型">{strategy.brandModel}</Descriptions.Item>
            <Descriptions.Item label="车辆颜色">{strategy.color}</Descriptions.Item>
            <Descriptions.Item label="车辆年份">{strategy.year}年</Descriptions.Item>
            <Descriptions.Item label="行驶里程">
              {(strategy.mileage / 10000).toFixed(1)}万公里
            </Descriptions.Item>
            <Descriptions.Item label="车辆所在地">
              {strategy.location}-{strategy.store}
            </Descriptions.Item>
            <Descriptions.Item label="车辆状态">{strategy.vehicleStatus}</Descriptions.Item>
            <Descriptions.Item label="入库时间">{strategy.inboundTime}</Descriptions.Item>
            <Descriptions.Item label="车辆保管人">{strategy.keeper}</Descriptions.Item>
            <Descriptions.Item label="使用性质">{strategy.useType}</Descriptions.Item>
            <Descriptions.Item label="所有人性质">{strategy.ownerType}</Descriptions.Item>
            <Descriptions.Item label="车辆来源">{strategy.source}</Descriptions.Item>
            <Descriptions.Item label="收购价">
              ¥{strategy.purchasePrice.toLocaleString()}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      ),
    },
    {
      key: 'records',
      label: `处置记录(${records.length})`,
      children: (
        <Card title="处置记录列表" bordered={false}>
          {records.length > 0 ? (
            <>
              <Row gutter={16} style={{ marginBottom: 16 }}>
                <Col span={8} key="record-total">
                  <Card className="stats-card">
                    <Statistic
                      title="总上拍次数"
                      value={records.length}
                      suffix="次"
                      valueStyle={{ color: '#1a73e8' }}
                    />
                  </Card>
                </Col>
                <Col span={8} key="record-sold">
                  <Card className="stats-card">
                    <Statistic
                      title="成交次数"
                      value={records.filter(r => r.result === 'sold').length}
                      suffix="次"
                      valueStyle={{ color: '#1e8e3e' }}
                    />
                  </Card>
                </Col>
                <Col span={8} key="record-unsold">
                  <Card className="stats-card">
                    <Statistic
                      title="流拍次数"
                      value={records.filter(r => r.result === 'unsold').length}
                      suffix="次"
                      valueStyle={{ color: '#d93025' }}
                    />
                  </Card>
                </Col>
              </Row>
              <Table
                rowKey="id"
                columns={recordColumns}
                dataSource={records}
                pagination={false}
              />
            </>
          ) : (
            <Empty description="暂无处置记录" />
          )}
        </Card>
      ),
    },
    {
      key: 'logs',
      label: `操作日志(${logs.length})`,
      children: (
        <Card title="操作日志" bordered={false}>
          <Timeline
            items={logs.map(log => ({
              color: log.operator === '系统' ? '#1a73e8' : '#1e8e3e',
              children: (
                <div>
                  <div style={{ marginBottom: 4 }}>
                    <strong>{log.operator}</strong> {log.action}
                  </div>
                  <div style={{ fontSize: 12, color: '#80868b', marginBottom: 8 }}>
                    {log.time}
                  </div>
                  {log.details && (
                    <Alert
                      message={log.details}
                      type="info"
                      showIcon
                      style={{ fontSize: 12 }}
                    />
                  )}
                </div>
              ),
            }))}
          />
        </Card>
      ),
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
              <h1 className="page-title" style={{ display: 'inline-block', margin: 0 }}>处置策略详情</h1>
              <Tag
                style={{
                  marginLeft: 16,
                  color: statusConfig[strategy.status].color,
                  borderColor: statusConfig[strategy.status].color,
                  background: `${statusConfig[strategy.status].color}10`
                }}
              >
                {statusConfig[strategy.status].text}
              </Tag>
            </div>
          </Space>

          <Space>
            {(strategy.status === 'pending' || strategy.status === 'executing') && (
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => setAdjustModalVisible(true)}
              >
                调整策略
              </Button>
            )}
            {strategy.status === 'pending' && (
              <Button
                danger
                icon={<CloseOutlined />}
                onClick={() => setCancelModalVisible(true)}
              >
                取消策略
              </Button>
            )}
          </Space>
        </div>
      </div>

      {/* 详情内容 */}
      <Card>
        <Tabs items={tabItems} defaultActiveKey="basic" />
      </Card>

      {/* 弹窗 */}
      <AdjustStrategyModal
        visible={adjustModalVisible}
        strategy={strategy}
        onClose={() => setAdjustModalVisible(false)}
        onSuccess={() => setAdjustModalVisible(false)}
      />

      <CancelStrategyModal
        visible={cancelModalVisible}
        strategy={strategy}
        onClose={() => setCancelModalVisible(false)}
        onSuccess={() => setCancelModalVisible(false)}
      />
    </div>
  );
};

export default StrategyDetail;
