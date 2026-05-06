import { Card, Timeline, Tag, Descriptions, Empty } from 'antd';
import { ClockCircleOutlined, UserOutlined } from '@ant-design/icons';
import { TransferHistory, FieldChange } from '../../../data/mockData';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';

dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

interface TransferHistoryTimelineProps {
  history: TransferHistory[];
}

const TransferHistoryTimeline = ({ history }: TransferHistoryTimelineProps) => {
  if (!history || history.length === 0) {
    return <Empty description="暂无流转历史" />;
  }

  const actionTypeColors = {
    '创建': '#1a73e8',
    '修改': '#f9ab00',
    '状态变更': '#1a73e8',
    '价格调整': '#f9ab00',
    '平台切换': '#8e24aa',
    '取消': '#5f6368',
    '完成': '#1e8e3e',
  };

  const formatValue = (value: string | number | null): string => {
    if (value === null) return '-';
    if (typeof value === 'number') {
      return `¥${value.toLocaleString()}`;
    }
    return String(value);
  };

  const renderFieldChanges = (changes: FieldChange[]) => {
    if (changes.length === 0) return null;

    return (
      <div style={{ marginTop: 12 }}>
        <Descriptions
          bordered
          size="small"
          column={2}
          labelStyle={{
            background: '#f8f9fa',
            color: '#5f6368',
            fontWeight: 500,
            fontSize: 12,
            padding: '8px 12px',
          }}
          contentStyle={{
            fontSize: 13,
            padding: '8px 12px',
          }}
        >
          {changes.map((change, idx) => (
            <Descriptions.Item label={change.fieldLabel} span={2} key={idx}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {change.oldValue !== null && (
                  <>
                    <span style={{ color: '#80868b', textDecoration: 'line-through' }}>
                      {formatValue(change.oldValue)}
                    </span>
                    <span style={{ color: '#5f6368' }}>→</span>
                  </>
                )}
                <span style={{ color: '#202124', fontWeight: 500 }}>
                  {formatValue(change.newValue)}
                </span>
              </div>
            </Descriptions.Item>
          ))}
        </Descriptions>
      </div>
    );
  };

  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
        <ClockCircleOutlined style={{ fontSize: 18, color: '#1a73e8' }} />
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 500, color: '#202124' }}>
          流转历史
        </h3>
        <Tag style={{ marginLeft: 'auto', color: '#5f6368', borderColor: '#dadce0', background: '#f8f9fa' }}>
          共{history.length}条记录
        </Tag>
      </div>

      <Timeline
        items={history.map((item) => {
          const timeObj = dayjs(item.time);
          const isSystem = item.operator === '系统';

          return {
            color: actionTypeColors[item.actionType] || '#1a73e8',
            dot: isSystem ? (
              <ClockCircleOutlined style={{ fontSize: 16, color: actionTypeColors[item.actionType] }} />
            ) : (
              <UserOutlined style={{ fontSize: 16, color: actionTypeColors[item.actionType] }} />
            ),
            children: (
              <div style={{ paddingBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <Tag
                    style={{
                      color: actionTypeColors[item.actionType],
                      borderColor: actionTypeColors[item.actionType],
                      background: `${actionTypeColors[item.actionType]}10`,
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {item.actionType}
                  </Tag>
                  <span style={{ fontSize: 15, fontWeight: 500, color: '#202124' }}>
                    {item.action}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <UserOutlined style={{ fontSize: 12, color: '#80868b' }} />
                    <span style={{ fontSize: 13, color: '#5f6368' }}>
                      {item.operator}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <ClockCircleOutlined style={{ fontSize: 12, color: '#80868b' }} />
                    <span style={{ fontSize: 13, color: '#5f6368' }}>
                      {timeObj.format('YYYY-MM-DD HH:mm:ss')}
                    </span>
                    <span style={{ fontSize: 12, color: '#80868b', marginLeft: 4 }}>
                      ({timeObj.fromNow()})
                    </span>
                  </div>
                </div>

                {item.description && (
                  <div
                    style={{
                      background: '#f8f9fa',
                      padding: '8px 12px',
                      borderRadius: 4,
                      fontSize: 13,
                      color: '#5f6368',
                      marginBottom: 12,
                      borderLeft: `3px solid ${actionTypeColors[item.actionType]}`,
                    }}
                  >
                    {item.description}
                  </div>
                )}

                {renderFieldChanges(item.changes)}
              </div>
            ),
          };
        })}
      />
    </Card>
  );
};

export default TransferHistoryTimeline;
