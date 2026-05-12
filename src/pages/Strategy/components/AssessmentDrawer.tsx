import { Drawer, Descriptions, Image, Tag, Divider, Timeline } from 'antd';
import { Strategy } from '../../../data/mockData';

interface AssessmentDrawerProps {
  visible: boolean;
  vehicle: Strategy | null;
  onClose: () => void;
}

const AssessmentDrawer = ({ visible, vehicle, onClose }: AssessmentDrawerProps) => {
  if (!vehicle) return null;

  // Mock车辆图片
  const vehicleImages = [
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&h=150&fit=crop',
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=200&h=150&fit=crop',
    'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=200&h=150&fit=crop',
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=200&h=150&fit=crop',
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=200&h=150&fit=crop',
    'https://images.unsplash.com/photo-1583267746897-fc8d38bb3a47?w=200&h=150&fit=crop',
  ];

  return (
    <Drawer
      title="收车-评估单详情"
      placement="right"
      size="large"
      onClose={onClose}
      open={visible}
      styles={{
        body: {
          paddingBottom: 80,
        },
      }}
    >
      {/* 车辆基础信息 */}
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#202124' }}>车辆基础信息</h3>
        <Descriptions bordered column={2} size="small">
          <Descriptions.Item label="收车编号">{vehicle.strategyNo}</Descriptions.Item>
          <Descriptions.Item label="车源">{vehicle.source}</Descriptions.Item>
          <Descriptions.Item label="车主">李先生</Descriptions.Item>
          <Descriptions.Item label="车主联系电话">138****1234</Descriptions.Item>
          <Descriptions.Item label="品牌/车型">{vehicle.brandModel}</Descriptions.Item>
          <Descriptions.Item label="上牌时间">{vehicle.purchaseTime}</Descriptions.Item>
          <Descriptions.Item label="VIN码">{vehicle.vin}</Descriptions.Item>
          <Descriptions.Item label="车牌号">{vehicle.licensePlate}</Descriptions.Item>
          <Descriptions.Item label="车身颜色">{vehicle.color}</Descriptions.Item>
          <Descriptions.Item label="行驶里程">{(vehicle.mileage / 10000).toFixed(1)}万公里</Descriptions.Item>
          <Descriptions.Item label="车辆年份">{vehicle.year}年</Descriptions.Item>
          <Descriptions.Item label="使用性质">{vehicle.useType}</Descriptions.Item>
          <Descriptions.Item label="所有人性质">{vehicle.ownerType}</Descriptions.Item>
          <Descriptions.Item label="所属门店">{vehicle.store}</Descriptions.Item>
          <Descriptions.Item label="车辆所在地">{vehicle.location}</Descriptions.Item>
          <Descriptions.Item label="车辆保管人">{vehicle.keeper}</Descriptions.Item>
          <Descriptions.Item label="收购日期" span={2}>{vehicle.purchaseTime}</Descriptions.Item>
          <Descriptions.Item label="车辆图片" span={2}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
              <Image.PreviewGroup>
                {vehicleImages.map((img, index) => (
                  <Image
                    key={index}
                    width={100}
                    height={75}
                    src={img}
                    style={{ objectFit: 'cover', borderRadius: 4 }}
                  />
                ))}
              </Image.PreviewGroup>
            </div>
          </Descriptions.Item>
        </Descriptions>
      </div>

      {/* 车辆配置信息 */}
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#202124' }}>车辆配置信息</h3>
        <Descriptions bordered column={2} size="small">
          <Descriptions.Item label="发动机号">LFB479Q1234567</Descriptions.Item>
          <Descriptions.Item label="排量">2.0L</Descriptions.Item>
          <Descriptions.Item label="变速箱类型">自动</Descriptions.Item>
          <Descriptions.Item label="燃料类型">汽油</Descriptions.Item>
          <Descriptions.Item label="驱动方式">前驱</Descriptions.Item>
          <Descriptions.Item label="座位数">5座</Descriptions.Item>
          <Descriptions.Item label="车门数">4门</Descriptions.Item>
          <Descriptions.Item label="环保标准">国VI</Descriptions.Item>
        </Descriptions>
      </div>

      {/* 检测评估信息 */}
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#202124' }}>检测评估信息</h3>
        <Descriptions bordered column={2} size="small">
          <Descriptions.Item label="评估师">{vehicle.assessor}</Descriptions.Item>
          <Descriptions.Item label="评估时间">{vehicle.assessTime}</Descriptions.Item>
          <Descriptions.Item label="综合车况评级">
            <Tag color={
              vehicle.grade === 'S' ? '#f9ab00' :
              vehicle.grade === 'A' ? '#1e8e3e' :
              vehicle.grade === 'B' ? '#1a73e8' :
              vehicle.grade === 'C' ? '#f9ab00' : '#d93025'
            }>
              {vehicle.grade}级
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label="漆面修复面数">{vehicle.paintRepair}面</Descriptions.Item>
          <Descriptions.Item label="骨架受损项数">
            <span style={{ color: vehicle.frameRepair > 0 ? '#d93025' : '#1e8e3e', fontWeight: 500 }}>
              {vehicle.frameRepair}项
            </span>
          </Descriptions.Item>
          <Descriptions.Item label="重大损伤项">{vehicle.majorDamage}</Descriptions.Item>
          <Descriptions.Item label="评估备注" span={2}>
            {vehicle.assessorNote}
          </Descriptions.Item>
        </Descriptions>
      </div>

      <Divider />

      {/* 定价建议 */}
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#202124' }}>定价建议</h3>
        <Descriptions bordered column={2} size="small">
          <Descriptions.Item label="收购价">
            <span style={{ fontSize: 18, fontWeight: 600, color: '#1a73e8' }}>
              ¥{(vehicle.purchasePrice / 10000).toFixed(2)}万元
            </span>
          </Descriptions.Item>
          <Descriptions.Item label="公司标准保留价">
            <span style={{ fontSize: 16, fontWeight: 500, color: '#202124' }}>
              ¥{(vehicle.standardReservePrice / 10000).toFixed(2)}万元
            </span>
          </Descriptions.Item>
          <Descriptions.Item label="定价师建议" span={2}>
            根据车况评级{vehicle.grade}级，{vehicle.assessorNote}
          </Descriptions.Item>
        </Descriptions>
      </div>

      {/* 审批记录 */}
      <div>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#202124' }}>审批记录</h3>
        <Timeline
          items={[
            {
              color: 'green',
              children: (
                <div>
                  <div style={{ fontWeight: 500 }}>评估师：{vehicle.assessor}</div>
                  <div style={{ fontSize: 12, color: '#80868b', marginTop: 4 }}>
                    提交评估报告 - {vehicle.assessTime}
                  </div>
                  <div style={{ marginTop: 8, padding: 8, background: '#f8f9fa', borderRadius: 4, fontSize: 12 }}>
                    评估意见：{vehicle.assessorNote}
                  </div>
                </div>
              ),
            },
            {
              color: 'blue',
              children: (
                <div>
                  <div style={{ fontWeight: 500 }}>审批人：张经理</div>
                  <div style={{ fontSize: 12, color: '#80868b', marginTop: 4 }}>
                    审批通过 - {vehicle.purchaseTime} 14:30
                  </div>
                  <div style={{ marginTop: 8, padding: 8, background: '#f8f9fa', borderRadius: 4, fontSize: 12 }}>
                    审批意见：同意收购，按评估价执行
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </Drawer>
  );
};

export default AssessmentDrawer;
