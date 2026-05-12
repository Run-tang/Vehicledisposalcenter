import { useParams, useNavigate } from 'react-router';
import { Card, Descriptions, Tag, Button, Tabs, Table, Timeline, Empty, Tooltip, Breadcrumb, message } from 'antd';
import {
  ArrowLeftOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  FileTextOutlined,
  HomeOutlined,
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
import AssessmentDrawer from './components/AssessmentDrawer';

const StrategyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [assessmentDrawerVisible, setAssessmentDrawerVisible] = useState(false);

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

  const isWholesale = strategy.disposalType === 'wholesale';
  const isRetail = strategy.disposalType === 'retail';

  const statusConfig = {
    pending_disposal: { color: '#d93025', text: '待处置', bgColor: '#fce8e6' },
    executing: { color: '#1a73e8', text: '执行中', bgColor: '#e8f0fe' },
    completed: { color: '#1e8e3e', text: '已完成', bgColor: '#e6f4ea' },
    cancelled: { color: '#5f6368', text: '已取消', bgColor: '#f1f3f4' },
  };

  const vehicleStatusConfig = {
    待拍卖: { color: '#f9ab00', text: '待拍卖' },
    检测待上拍: { color: '#1a73e8', text: '检测待上拍' },
    流拍: { color: '#d93025', text: '流拍' },
    仲裁: { color: '#f9ab00', text: '仲裁' },
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

  const recordResultConfig = {
    sold: { color: '#1e8e3e', text: '成交' },
    unsold: { color: '#d93025', text: '流拍' },
    bidding: { color: '#1a73e8', text: '竞价中' },
    suspended: { color: '#5f6368', text: '中止' },
  };

  // 拍卖处置记录列（批发）
  const wholesaleRecordColumns: ColumnsType<DisposalRecord> = [
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
      title: '拍卖日期',
      dataIndex: 'startTime',
      key: 'startTime',
      width: 120,
      render: (time) => time.split(' ')[0],
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
      title: '建议保留价(万)',
      key: 'suggestedPrice',
      width: 130,
      align: 'right',
      render: () => `¥${(strategy.currentReservePrice / 10000).toFixed(2)}`,
    },
    {
      title: '拍卖结果',
      dataIndex: 'result',
      key: 'result',
      width: 100,
      align: 'center',
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
    {
      title: '中拍人姓名',
      dataIndex: 'buyer',
      key: 'buyer',
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
      title: '车辆状态',
      key: 'vehicleStatus',
      width: 110,
      align: 'center',
      render: (_, record) => {
        const status = record.result === 'sold' ? '成交' :
                      record.result === 'unsold' ? '流拍' :
                      record.result === 'bidding' ? '待拍卖' : '已取消';
        return (
          <Tag style={{
            color: vehicleStatusConfig[status]?.color || '#5f6368',
            borderColor: vehicleStatusConfig[status]?.color || '#5f6368',
            background: `${vehicleStatusConfig[status]?.color || '#5f6368'}10`,
          }}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: '处置渠道',
      dataIndex: 'platform',
      key: 'platform',
      width: 120,
      align: 'center',
      render: (platform) => (
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
      title: '车辆所在地',
      key: 'location',
      width: 120,
      align: 'center',
      render: () => strategy.location,
    },
    {
      title: '操作人姓名',
      key: 'operator',
      width: 100,
      align: 'center',
      render: () => strategy.creator,
    },
    {
      title: '更新时间',
      dataIndex: 'endTime',
      key: 'updateTime',
      width: 150,
      render: (time) => time,
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
            onClick={() => message.info('查看出价详情功能开发中')}
          >
            查看出价详情
          </Button>
          {record.result === 'sold' && (
            <Button
              type="link"
              size="small"
              icon={<FileTextOutlined />}
              onClick={() => message.info('跳转到拍卖订单详情页')}
            >
              查看拍卖订单
            </Button>
          )}
        </div>
      ),
    },
  ];

  // 零售处置记录列（零售）
  const retailRecordColumns: ColumnsType<any> = [
    {
      title: '记录流水号',
      dataIndex: 'recordNo',
      key: 'recordNo',
      width: 180,
      fixed: 'left',
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      width: 150,
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
      title: '是否成交',
      dataIndex: 'isDeal',
      key: 'isDeal',
      width: 100,
      align: 'center',
      render: (isDeal) => (
        <Tag color={isDeal ? '#1e8e3e' : '#5f6368'}>
          {isDeal ? '是' : '否'}
        </Tag>
      ),
    },
    {
      title: '车辆原来所在',
      dataIndex: 'previousLocation',
      key: 'previousLocation',
      width: 130,
      align: 'center',
    },
    {
      title: '车辆当前所在',
      dataIndex: 'currentLocation',
      key: 'currentLocation',
      width: 130,
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
      title: '收购价(万)',
      key: 'purchasePrice',
      width: 120,
      align: 'right',
      render: () => `¥${(strategy.purchasePrice / 10000).toFixed(2)}`,
    },
    {
      title: '盈亏(万)',
      dataIndex: 'profitLoss',
      key: 'profitLoss',
      width: 120,
      align: 'right',
      render: (profitLoss) => (
        <span style={{ color: profitLoss >= 0 ? '#1e8e3e' : '#d93025', fontWeight: 500 }}>
          {profitLoss >= 0 ? '+' : ''}{(profitLoss / 10000).toFixed(2)}
        </span>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      align: 'center',
      render: (status) => (
        <Tag style={{
          color: vehicleStatusConfig[status]?.color || '#5f6368',
          borderColor: vehicleStatusConfig[status]?.color || '#5f6368',
          background: `${vehicleStatusConfig[status]?.color || '#5f6368'}10`,
        }}>
          {status}
        </Tag>
      ),
    },
    {
      title: '处置渠道',
      dataIndex: 'channel',
      key: 'channel',
      width: 120,
      align: 'center',
    },
    {
      title: '操作人姓名',
      dataIndex: 'operator',
      key: 'operator',
      width: 100,
      align: 'center',
    },
    {
      title: '车辆类型',
      dataIndex: 'vehicleType',
      key: 'vehicleType',
      width: 120,
      align: 'center',
    },
    {
      title: '营运',
      key: 'useType',
      width: 100,
      align: 'center',
      render: () => strategy.useType,
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      fixed: 'right',
      align: 'center',
      render: (_, record) => (
        record.isDeal ? (
          <Button
            type="link"
            size="small"
            icon={<FileTextOutlined />}
            onClick={() => message.info('跳转到零售订单详情页')}
          >
            查看零售订单
          </Button>
        ) : null
      ),
    },
  ];

  // Mock零售处置记录数据
  const retailRecords = isRetail ? [
    {
      id: '1',
      recordNo: `LS${strategy.strategyNo.slice(-10)}`,
      updateTime: strategy.updatedTime,
      consignmentPrice: strategy.currentReservePrice,
      retailPrice: strategy.retailPrice || strategy.currentReservePrice + 3000,
      isDeal: strategy.status === 'completed',
      previousLocation: strategy.location,
      currentLocation: strategy.location,
      position: 'A区01号位',
      profitLoss: strategy.status === 'completed'
        ? (strategy.retailPrice || strategy.currentReservePrice + 3000) - strategy.purchasePrice
        : 0,
      status: strategy.vehicleStatus,
      channel: strategy.channelName,
      operator: strategy.creator,
      vehicleType: strategy.retailVehicleType || '精品车',
    }
  ] : [];

  const tabItems = [
    {
      key: 'vehicle',
      label: '车辆信息',
      children: (
        <Card title="车辆档案" bordered={false} extra={
          <Button type="primary" onClick={() => setAssessmentDrawerVisible(true)}>
            查看评估单详情
          </Button>
        }>
          <Descriptions bordered column={2} size="small">
            <Descriptions.Item label="车辆所在地">{strategy.location}</Descriptions.Item>
            <Descriptions.Item label="车辆保管人姓名">{strategy.keeper}</Descriptions.Item>
            <Descriptions.Item label="车辆保管人电话">{strategy.keeperPhone || '-'}</Descriptions.Item>
            <Descriptions.Item label="车架号(VIN)">{strategy.vin}</Descriptions.Item>
            <Descriptions.Item label="品牌">{strategy.brand}</Descriptions.Item>
            <Descriptions.Item label="车型名称">{strategy.model}</Descriptions.Item>
            <Descriptions.Item label="收购价">¥{(strategy.purchasePrice / 10000).toFixed(2)}万元</Descriptions.Item>
            <Descriptions.Item label="车牌号">{strategy.licensePlate || '未上牌'}</Descriptions.Item>
            <Descriptions.Item label="车身颜色">{strategy.color}</Descriptions.Item>
            <Descriptions.Item label="所属门店">{strategy.store}</Descriptions.Item>
            <Descriptions.Item label="收车时间">{strategy.purchaseTime}</Descriptions.Item>
            <Descriptions.Item label="车辆类型">
              {isWholesale ? strategy.vehicleCategory : strategy.retailVehicleType || '-'}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      ),
    },
  ];

  // 批发：添加拍卖处置记录Tab
  if (isWholesale) {
    tabItems.push({
      key: 'wholesale-records',
      label: `拍卖处置记录(${records.length})`,
      children: (
        <Card
          title="拍卖处置记录"
          bordered={false}
          extra={
            <Button type="primary" onClick={() => message.info('更新拍卖进度功能开发中')}>
              更新拍卖进度
            </Button>
          }
        >
          {records.length > 0 ? (
            <Table
              rowKey="id"
              columns={wholesaleRecordColumns}
              dataSource={records}
              pagination={false}
              scroll={{ x: 1800 }}
              size="small"
            />
          ) : (
            <Empty description="暂无拍卖处置记录" />
          )}
        </Card>
      ),
    });
  }

  // 零售：添加零售处置记录Tab
  if (isRetail) {
    tabItems.push({
      key: 'retail-records',
      label: `零售处置记录(${retailRecords.length})`,
      children: (
        <Card
          title="零售处置记录"
          bordered={false}
          extra={
            <Button type="primary" onClick={() => message.info('更新零售进度功能开发中')}>
              更新零售进度
            </Button>
          }
        >
          {retailRecords.length > 0 ? (
            <Table
              rowKey="id"
              columns={retailRecordColumns}
              dataSource={retailRecords}
              pagination={false}
              scroll={{ x: 1800 }}
              size="small"
            />
          ) : (
            <Empty description="暂无零售处置记录" />
          )}
        </Card>
      ),
    });
  }

  // 操作日志Tab
  tabItems.push({
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
                  <div style={{
                    fontSize: 12,
                    color: '#202124',
                    padding: '8px 12px',
                    background: '#f8f9fa',
                    borderRadius: 4,
                    borderLeft: '3px solid #1a73e8'
                  }}>
                    {log.details}
                  </div>
                )}
              </div>
            ),
          }))}
        />
      </Card>
    ),
  });

  // 检查保留价是否低于标准保留价
  const isPriceBelowStandard = strategy.currentReservePrice < strategy.standardReservePrice;

  return (
    <div style={{ padding: '24px', maxWidth: '1920px', margin: '0 auto' }}>
      {/* 面包屑导航 */}
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a onClick={() => navigate('/disposal')}>处置中心</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a onClick={() => navigate('/disposal/strategy')}>处置策略</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>策略详情</Breadcrumb.Item>
      </Breadcrumb>

      {/* 页头 */}
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
            返回
          </Button>
          <h1 className="page-title" style={{ margin: 0 }}>处置策略详情</h1>
        </div>
      </div>

      {/* 头部：策略核心信息模块 */}
      <Card style={{ marginBottom: 24 }}>
        {/* 策略基础信息 */}
        <Card
          title="策略基础信息"
          type="inner"
          style={{ marginBottom: 16 }}
        >
          <Descriptions bordered column={3} size="small">
            <Descriptions.Item label="策略ID">{strategy.strategyNo}</Descriptions.Item>
            <Descriptions.Item label="创建时间">{strategy.createdTime}</Descriptions.Item>
            <Descriptions.Item label="更新时间">{strategy.updatedTime}</Descriptions.Item>
            <Descriptions.Item label="当前处置方式">
              <Tag color={isWholesale ? '#1a73e8' : '#8e24aa'}>
                {isWholesale ? '批发' : '零售'}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="创建策略人员">{strategy.creator}</Descriptions.Item>
            <Descriptions.Item label="库存时长">
              <span style={{
                color: strategy.inventoryDays > 60 ? '#d93025' : strategy.inventoryDays > 30 ? '#f9ab00' : '#1e8e3e',
                fontWeight: strategy.inventoryDays > 60 ? 600 : 500
              }}>
                {strategy.inventoryDays}天
              </span>
            </Descriptions.Item>
            <Descriptions.Item label="公司标准保留价">
              ¥{(strategy.standardReservePrice / 10000).toFixed(2)}万元
            </Descriptions.Item>
            <Descriptions.Item label="策略备注" span={2}>
              <Tooltip title={strategy.remarks}>
                <div style={{
                  maxHeight: '60px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {strategy.remarks || '-'}
                </div>
              </Tooltip>
            </Descriptions.Item>
          </Descriptions>
        </Card>

        {/* 流程进度展示 */}
        <Card title="流程进度展示" type="inner" style={{ marginBottom: 16 }}>
          <Descriptions bordered column={2} size="small">
            <Descriptions.Item label="策略状态">
              <Tag style={{
                color: statusConfig[strategy.status].color,
                borderColor: statusConfig[strategy.status].color,
                background: statusConfig[strategy.status].bgColor,
                fontWeight: 500
              }}>
                {statusConfig[strategy.status].text}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="车辆现状">
              <Tag style={{
                color: vehicleStatusConfig[strategy.vehicleStatus]?.color || '#5f6368',
                borderColor: vehicleStatusConfig[strategy.vehicleStatus]?.color || '#5f6368',
                background: `${vehicleStatusConfig[strategy.vehicleStatus]?.color || '#5f6368'}10`,
                fontWeight: 500
              }}>
                {strategy.vehicleStatus}
              </Tag>
            </Descriptions.Item>
          </Descriptions>
        </Card>

        {/* 批发策略详情（仅批发显示） */}
        {isWholesale && (
          <Card title="批发策略详情" type="inner">
            <Descriptions bordered column={2} size="small">
              <Descriptions.Item label="市场参考价区间">
                {strategy.marketPriceMin && strategy.marketPriceMax
                  ? `¥${strategy.marketPriceMin}-${strategy.marketPriceMax}万元`
                  : '-'}
              </Descriptions.Item>
              <Descriptions.Item label="过户时效要求">
                {strategy.transferDays ? `${strategy.transferDays}天` : '-'}
              </Descriptions.Item>
              <Descriptions.Item label="过户时效说明" span={2}>
                {strategy.transferNote || '-'}
              </Descriptions.Item>
              <Descriptions.Item label="建议保留价">
                <span style={{ fontWeight: 500 }}>
                  ¥{(strategy.currentReservePrice / 10000).toFixed(2)}万元
                </span>
                {isPriceBelowStandard && (
                  <Tooltip title="建议保留价低于公司标准保留价">
                    <Tag color="error" style={{ marginLeft: 8 }} icon={<ExclamationCircleOutlined />}>
                      低
                    </Tag>
                  </Tooltip>
                )}
              </Descriptions.Item>
              <Descriptions.Item label="批发-保留价异常说明">
                {strategy.reservePriceReason || '-'}
              </Descriptions.Item>
              <Descriptions.Item label="车况特别描述" span={2}>
                {strategy.vehicleConditionDesc || '-'}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        )}

        {/* 零售策略详情（仅零售显示） */}
        {isRetail && (
          <Card title="零售策略详情" type="inner">
            <Descriptions bordered column={2} size="small">
              <Descriptions.Item label="处置渠道">{strategy.channelName}</Descriptions.Item>
              <Descriptions.Item label="寄售底价">
                <span style={{ fontWeight: 500 }}>
                  ¥{(strategy.currentReservePrice / 10000).toFixed(2)}万元
                </span>
                {isPriceBelowStandard && (
                  <Tooltip title="寄售底价低于公司标准保留价">
                    <Tag color="error" style={{ marginLeft: 8 }} icon={<ExclamationCircleOutlined />}>
                      低
                    </Tag>
                  </Tooltip>
                )}
              </Descriptions.Item>
              <Descriptions.Item label="车辆类型">{strategy.retailVehicleType || '-'}</Descriptions.Item>
              <Descriptions.Item label="零售-保留价异常说明">
                {strategy.reservePriceReason || '-'}
              </Descriptions.Item>
              <Descriptions.Item label="车况信息特别描述" span={2}>
                {strategy.vehicleConditionDesc || '-'}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        )}
      </Card>

      {/* Tab内容 */}
      <Card>
        <Tabs items={tabItems} defaultActiveKey="vehicle" />
      </Card>

      {/* 评估单详情侧边抽屉 */}
      <AssessmentDrawer
        visible={assessmentDrawerVisible}
        vehicle={strategy}
        onClose={() => setAssessmentDrawerVisible(false)}
      />
    </div>
  );
};

export default StrategyDetail;
