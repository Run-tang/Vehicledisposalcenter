import { Modal, Form, Input, InputNumber, Radio, Card, Descriptions, Space, Button, message } from 'antd';
import { Strategy } from '../../../data/mockData';
import { useState } from 'react';
import AssessmentDrawer from './AssessmentDrawer';

const { TextArea } = Input;

interface CreateStrategyModalProps {
  visible: boolean;
  vehicle: Strategy | null;
  onClose: () => void;
  onSuccess: () => void;
}

const CreateStrategyModal = ({ visible, vehicle, onClose, onSuccess }: CreateStrategyModalProps) => {
  const [form] = Form.useForm();
  const [disposalType, setDisposalType] = useState<'wholesale' | 'retail'>('wholesale');
  const [assessmentDrawerVisible, setAssessmentDrawerVisible] = useState(false);

  // 计算库存时长
  const getInventoryDays = () => {
    if (!vehicle?.inboundTime) return 0;
    const inbound = new Date(vehicle.inboundTime);
    const today = new Date();
    const diff = Math.floor((today.getTime() - inbound.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
  };

  // 计算公司标准保留价
  const getStandardReservePrice = () => {
    if (!vehicle?.purchasePrice) return 0;
    const price = vehicle.purchasePrice;
    if (price < 10000) {
      return price + 500;
    } else if (price < 30000) {
      return price + 800;
    } else {
      return price + 1000;
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('策略数据:', values);

      // 发送企微消息（模拟）
      const notification = `
📢 新增处置任务提醒
车源信息：${vehicle?.licensePlate} ${vehicle?.brandModel}
处置方式：${disposalType === 'wholesale' ? '批发（在线拍卖）' : '零售'}
策略重点：建议保留价 ${values.suggestedReservePrice} 万元${disposalType === 'wholesale' ? ` | 过户时效 ${values.transferDays} 天` : ''}
保管位置：${vehicle?.location}-${vehicle?.store}
制定人员：${vehicle?.creator}
创建时间：${new Date().toLocaleString('zh-CN')}
${values.remarks ? `[创建人备注]：${values.remarks}` : ''}
      `.trim();
      console.log('企微通知:', notification);

      onSuccess();
      form.resetFields();
      setDisposalType('wholesale');
    } catch (error) {
      console.error('表单验证失败:', error);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setDisposalType('wholesale');
    onClose();
  };

  return (
    <>
    <Modal
      title="新增处置策略"
      open={visible}
      onCancel={handleCancel}
      width={900}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          取消
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          创建策略
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          disposalType: 'wholesale',
          vehicleType: '置换车',
        }}
      >
        {/* 1. 策略概览 */}
        <Card title="策略概览" size="small" style={{ marginBottom: 16 }}>
          <Descriptions size="small" column={1}>
            <Descriptions.Item label="策略ID">
              <span style={{ color: '#80868b' }}>创建后自动生成</span>
            </Descriptions.Item>
          </Descriptions>
        </Card>

        {/* 2. 车辆简要信息（只读） */}
        {vehicle && (
          <Card
            title="车辆信息"
            size="small"
            style={{ marginBottom: 16 }}
            extra={
              <Button
                type="link"
                size="small"
                onClick={() => setAssessmentDrawerVisible(true)}
              >
                查看评估单详情
              </Button>
            }
          >
            <Descriptions bordered size="small" column={2}>
              <Descriptions.Item label="车架号">{vehicle.vin}</Descriptions.Item>
              <Descriptions.Item label="车牌号">{vehicle.licensePlate}</Descriptions.Item>
              <Descriptions.Item label="品牌">{vehicle.brand || vehicle.brandModel.split(' ')[0]}</Descriptions.Item>
              <Descriptions.Item label="车型名称">{vehicle.model || vehicle.brandModel}</Descriptions.Item>
              <Descriptions.Item label="车身颜色">{vehicle.color}</Descriptions.Item>
              <Descriptions.Item label="收车价">
                {(vehicle.purchasePrice / 10000).toFixed(2)}万元
              </Descriptions.Item>
              <Descriptions.Item label="所属门店">{vehicle.store}</Descriptions.Item>
              <Descriptions.Item label="省市门店全称">
                {vehicle.location}-{vehicle.store}
              </Descriptions.Item>
              <Descriptions.Item label="入库时间">{vehicle.inboundTime}</Descriptions.Item>
              <Descriptions.Item label="库存时长">
                <span style={{ color: getInventoryDays() > 30 ? '#d93025' : '#202124', fontWeight: 500 }}>
                  {getInventoryDays()}天
                </span>
              </Descriptions.Item>
            </Descriptions>

            <div style={{ marginTop: 12 }}>
              {/* 【P0修复】车辆所在地：可编辑输入框，默认映射库存地址 */}
              <Form.Item
                label="车辆所在地"
                name="vehicleLocation"
                initialValue={vehicle?.location}
                rules={[{ required: true, message: '请输入车辆所在地' }]}
              >
                <Input placeholder="请输入车辆所在地" maxLength={50} />
              </Form.Item>
              <Form.Item
                label="车辆保管人姓名"
                name="keeperName"
                initialValue={vehicle.keeper}
              >
                <Input placeholder="请输入车辆保管人姓名" />
              </Form.Item>
              <Form.Item
                label="车辆保管人电话"
                name="keeperPhone"
              >
                <Input placeholder="请输入车辆保管人电话（非必填）" />
              </Form.Item>
            </div>
          </Card>
        )}

        {/* 3. 选择零售或批发 */}
        <Card title="处置类型" size="small" style={{ marginBottom: 16 }}>
          <Form.Item name="disposalType">
            <Radio.Group
              onChange={(e) => setDisposalType(e.target.value)}
              value={disposalType}
            >
              <Radio value="wholesale">批发</Radio>
              <Radio value="retail">零售</Radio>
            </Radio.Group>
          </Form.Item>
        </Card>

        {/* 3.1 批发策略资料 */}
        {disposalType === 'wholesale' && (
          <Card title="批发策略资料" size="small" style={{ marginBottom: 16 }}>
            <Form.Item
              label="选择车辆类型"
              name="vehicleType"
              rules={[{ required: true, message: '请选择车辆类型' }]}
            >
              <Radio.Group>
                <Radio value="置换车">置换车</Radio>
                <Radio value="报废车">报废车</Radio>
                <Radio value="试驾车">试驾车</Radio>
                <Radio value="厂家资源车">厂家资源车</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label={
                <span>
                  市场参考价格区间
                  <span style={{ color: '#80868b', fontSize: 12, marginLeft: 8 }}>
                    (市场价格参考区间：最起价-最高价，单位：万元。闭区间，允许相等)
                  </span>
                </span>
              }
              required
            >
              <div style={{ display: 'flex', gap: 0, width: '100%' }}>
                <Form.Item
                  name="marketPriceMin"
                  noStyle
                  rules={[
                    { required: true, message: '请输入最起价' },
                    {
                      validator: (_, value) => {
                        const max = form.getFieldValue('marketPriceMax');
                        if (max && value > max) {
                          return Promise.reject('开始价格不能大于结束价格');
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <InputNumber
                    min={0}
                    precision={2}
                    placeholder="最起价"
                    style={{ width: '45%' }}
                    addonAfter="万元"
                  />
                </Form.Item>
                <span style={{ width: '10%', textAlign: 'center', lineHeight: '32px' }}>-</span>
                <Form.Item
                  name="marketPriceMax"
                  noStyle
                  rules={[{ required: true, message: '请输入最高价' }]}
                >
                  <InputNumber
                    min={0}
                    precision={2}
                    placeholder="最高价"
                    style={{ width: '45%' }}
                    addonAfter="万元"
                  />
                </Form.Item>
              </div>
            </Form.Item>

            <Form.Item label="公司标准保留价">
              <div style={{ color: '#1a73e8', fontWeight: 500, fontSize: 16 }}>
                {(getStandardReservePrice() / 10000).toFixed(2)} 万元
              </div>
              <div style={{ color: '#80868b', fontSize: 12 }}>
                根据收车价自动计算（1万以下加500、1-3万加800、3万以上1000）
              </div>
            </Form.Item>

            <Form.Item
              label={
                <span>
                  填写过户时效要求
                  <span style={{ color: '#80868b', fontSize: 12, marginLeft: 8 }}>
                    (填写多少天内过户。正整数：单位天，最多填写9999)
                  </span>
                </span>
              }
              required
            >
              <Form.Item
                name="transferDays"
                rules={[
                  { required: true, message: '请输入过户天数' },
                  { type: 'number', min: 1, max: 9999, message: '请输入1-9999之间的整数' },
                ]}
              >
                <InputNumber
                  min={1}
                  max={9999}
                  precision={0}
                  placeholder="过户天数"
                  style={{ width: '200px' }}
                  addonAfter="天"
                />
              </Form.Item>
              <Form.Item
                name="transferNote"
                label="过户时效说明"
                style={{ marginTop: 8 }}
              >
                <TextArea
                  rows={2}
                  maxLength={200}
                  showCount
                  placeholder="例如：节假日顺延、逾期将产生违约金等（非必填，最多200字）"
                />
              </Form.Item>
            </Form.Item>

            <Form.Item
              label={<span>填写建议保留价 <span style={{ color: '#80868b', fontSize: 12 }}>(单位：万元)</span></span>}
              required
            >
              <Form.Item
                name="suggestedReservePrice"
                rules={[
                  { required: true, message: '请输入建议保留价' },
                  {
                    validator: (_, value) => {
                      const standardPrice = getStandardReservePrice() / 10000;
                      if (value < standardPrice) {
                        const reason = form.getFieldValue('reservePriceReason');
                        if (!reason) {
                          return Promise.reject('建议保留价低于公司标准保留价时，需填写说明理由');
                        }
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <InputNumber
                  min={0}
                  precision={2}
                  placeholder="建议保留价"
                  style={{ width: '200px' }}
                  addonAfter="万元"
                />
              </Form.Item>

              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) =>
                  prevValues.suggestedReservePrice !== currentValues.suggestedReservePrice
                }
              >
                {({ getFieldValue }) => {
                  const suggestedPrice = getFieldValue('suggestedReservePrice');
                  const standardPrice = getStandardReservePrice() / 10000;
                  return suggestedPrice < standardPrice ? (
                    <Form.Item
                      name="reservePriceReason"
                      label="保留价异常说明"
                      rules={[{ required: true, message: '请具体说明建议保留价低于公司保留价的理由' }]}
                      style={{ marginTop: 8 }}
                    >
                      <TextArea
                        rows={3}
                        maxLength={200}
                        showCount
                        placeholder="请具体说明建议保留价低于公司保留价的理由（最多200字）"
                      />
                    </Form.Item>
                  ) : null;
                }}
              </Form.Item>
            </Form.Item>

            <Form.Item label="车况信息特别描述">
              <TextArea
                rows={4}
                maxLength={500}
                showCount
                placeholder="对车辆收车评估报告中未提及或有变动的特殊车况进行补充说明（非必填，最多500字）"
              />
            </Form.Item>
          </Card>
        )}

        {/* 3.2 零售策略资料 */}
        {disposalType === 'retail' && (
          <Card title="零售策略资料" size="small" style={{ marginBottom: 16 }}>
            <Form.Item
              label="填写处置渠道名称"
              name="retailChannel"
              rules={[
                { required: true, message: '请输入处置渠道名称' },
                { min: 1, max: 50, message: '请输入1-50个字符' },
              ]}
            >
              <Input placeholder="请输入处置渠道名称（1-50字符）" maxLength={50} />
            </Form.Item>

            <Form.Item
              label="填写车辆类型"
              name="retailVehicleType"
              rules={[
                { required: true, message: '请输入车辆类型' },
                { min: 1, max: 100, message: '请输入1-100个字符' },
              ]}
            >
              <Input placeholder="请输入车辆类型（1-100字符）" maxLength={100} />
            </Form.Item>

            <Form.Item label="公司标准保留价">
              <div style={{ color: '#1a73e8', fontWeight: 500, fontSize: 16 }}>
                {(getStandardReservePrice() / 10000).toFixed(2)} 万元
              </div>
              <div style={{ color: '#80868b', fontSize: 12 }}>
                根据收车价自动计算（1万以下加500、1-3万加800、3万以上1000）
              </div>
            </Form.Item>

            <Form.Item
              label={<span>填写寄售底价 <span style={{ color: '#80868b', fontSize: 12 }}>(单位：万元)</span></span>}
              required
            >
              <Form.Item
                name="consignmentPrice"
                rules={[
                  { required: true, message: '请输入寄售底价' },
                  { type: 'number', max: 9999999, message: '最大值为9,999,999' },
                  {
                    validator: (_, value) => {
                      const standardPrice = getStandardReservePrice() / 10000;
                      if (value < standardPrice) {
                        const reason = form.getFieldValue('consignmentPriceReason');
                        if (!reason) {
                          return Promise.reject('寄售底价低于公司标准保留价时，需填写说明理由');
                        }
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <InputNumber
                  min={0}
                  precision={2}
                  placeholder="寄售底价"
                  style={{ width: '200px' }}
                  addonAfter="万元"
                />
              </Form.Item>

              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) =>
                  prevValues.consignmentPrice !== currentValues.consignmentPrice
                }
              >
                {({ getFieldValue }) => {
                  const consignmentPrice = getFieldValue('consignmentPrice');
                  const standardPrice = getStandardReservePrice() / 10000;
                  return consignmentPrice < standardPrice ? (
                    <Form.Item
                      name="consignmentPriceReason"
                      label="保留价异常说明"
                      rules={[{ required: true, message: '请具体说明寄售底价低于公司保留价的理由' }]}
                      style={{ marginTop: 8 }}
                    >
                      <TextArea
                        rows={3}
                        maxLength={200}
                        showCount
                        placeholder="请具体说明寄售底价低于公司保留价的理由（最多200字）"
                      />
                    </Form.Item>
                  ) : null;
                }}
              </Form.Item>
            </Form.Item>

            {/* 【P0修复】新增零售价格字段（必须≥寄售底价） */}
            <Form.Item
              label={<span>填写零售价格 <span style={{ color: '#80868b', fontSize: 12 }}>(单位：万元，必须≥寄售底价)</span></span>}
              name="retailPrice"
              rules={[
                { required: true, message: '请输入零售价格' },
                { type: 'number', min: 0.01, message: '零售价格必须大于0' },
                {
                  validator: (_, value) => {
                    const consignmentPrice = form.getFieldValue('consignmentPrice');
                    if (consignmentPrice && value < consignmentPrice) {
                      return Promise.reject('零售价格不能低于寄售底价');
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <InputNumber
                min={0.01}
                precision={2}
                placeholder="请输入零售价格"
                style={{ width: '200px' }}
                addonAfter="万元"
              />
            </Form.Item>

            {/* 【P0修复】新增车况信息特别描述字段（零售场景） */}
            <Form.Item label="车况信息特别描述" name="vehicleConditionDesc">
              <TextArea
                rows={4}
                maxLength={500}
                showCount
                placeholder="对车辆收车评估报告中未提及或有变动的特殊车况进行补充说明（非必填，最多500字）"
              />
            </Form.Item>
          </Card>
        )}

        {/* 4. 策略备注 */}
        <Card title="策略备注" size="small">
          <Form.Item name="remarks">
            <TextArea
              rows={4}
              maxLength={500}
              showCount
              placeholder="备注策略的制定说明（非必填，最多500字）"
            />
          </Form.Item>
        </Card>
      </Form>
    </Modal>

    {/* 评估单详情侧边抽屉 */}
    <AssessmentDrawer
      visible={assessmentDrawerVisible}
      vehicle={vehicle}
      onClose={() => setAssessmentDrawerVisible(false)}
    />
    </>
  );
};

export default CreateStrategyModal;
