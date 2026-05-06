import { Modal, Form, InputNumber, Select, Input, Alert } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Strategy } from '../../../data/mockData';

const { TextArea } = Input;
const { Option } = Select;

interface AdjustStrategyModalProps {
  visible: boolean;
  strategy: Strategy;
  onClose: () => void;
  onSuccess: () => void;
}

const AdjustStrategyModal = ({ visible, strategy, onClose, onSuccess }: AdjustStrategyModalProps) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('调整数据:', values);
      onSuccess();
      form.resetFields();
    } catch (error) {
      console.error('表单验证失败:', error);
    }
  };

  return (
    <Modal
      title="调整处置策略"
      open={visible}
      onOk={handleSubmit}
      onCancel={onClose}
      width={600}
      okText="确定调整"
      cancelText="取消"
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          newStartPrice: strategy.startPrice,
          newReservePrice: strategy.reservePrice,
          newPlatform: strategy.platform,
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <div><strong>策略编号:</strong> {strategy.strategyNo}</div>
          <div><strong>VIN码:</strong> {strategy.vin}</div>
        </div>

        <Alert
          message="调整须知"
          description={
            <ul style={{ margin: '8px 0 0 0', paddingLeft: 20, fontSize: 12 }}>
              <li>策略调整将记录在操作日志中,可追溯历史变更</li>
              <li>调整后如车辆正在竞价中,需等待当前场次结束后生效</li>
              <li>调整原因为必填项,用于后续数据分析</li>
            </ul>
          }
          type="warning"
          showIcon
          icon={<InfoCircleOutlined />}
          style={{ marginBottom: 16 }}
        />

        <Form.Item
          label="调整原因"
          name="adjustReason"
          rules={[{ required: true, message: '请选择调整原因' }]}
        >
          <Select placeholder="请选择调整原因">
            <Option value="price_too_high">流拍-起拍价过高</Option>
            <Option value="market_change">市场行情变化</Option>
            <Option value="platform_switch">更换处置平台</Option>
            <Option value="vehicle_condition">车况重新评估</Option>
            <Option value="urgent_sale">急需出售,降价促成</Option>
            <Option value="other">其他原因</Option>
          </Select>
        </Form.Item>

        <Form.Item label="价格调整">
          <Input.Group compact>
            <Form.Item noStyle>
              <Input
                style={{ width: '50%' }}
                value={`原起拍价: ¥${strategy.startPrice.toLocaleString()}`}
                disabled
              />
            </Form.Item>
            <Form.Item
              name="newStartPrice"
              noStyle
              rules={[{ required: true, message: '请输入新起拍价' }]}
            >
              <InputNumber
                style={{ width: '50%' }}
                min={0}
                placeholder="新起拍价"
                formatter={value => `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              />
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item>
          <Input.Group compact>
            <Form.Item noStyle>
              <Input
                style={{ width: '50%' }}
                value={`原保留价: ¥${strategy.reservePrice.toLocaleString()}`}
                disabled
              />
            </Form.Item>
            <Form.Item
              name="newReservePrice"
              noStyle
              rules={[{ required: true, message: '请输入新保留价' }]}
            >
              <InputNumber
                style={{ width: '50%' }}
                min={0}
                placeholder="新保留价"
                formatter={value => `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              />
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item
          label="处置平台"
          name="newPlatform"
        >
          <Select>
            <Option value="zhuandian">专电优拍</Option>
            <Option value="youliang">有辆</Option>
            <Option value="qichejie">汽车街</Option>
            <Option value="youxinpai">优信拍</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="调整说明"
          name="remarks"
        >
          <TextArea
            rows={3}
            maxLength={500}
            showCount
            placeholder="请详细说明调整原因(选填,最多500字)"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AdjustStrategyModal;
