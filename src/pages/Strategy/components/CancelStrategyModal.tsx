import { Modal, Form, Select, Input, Alert } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Strategy } from '../../../data/mockData';

const { TextArea } = Input;
const { Option } = Select;

interface CancelStrategyModalProps {
  visible: boolean;
  strategy: Strategy;
  onClose: () => void;
  onSuccess: () => void;
}

const CancelStrategyModal = ({ visible, strategy, onClose, onSuccess }: CancelStrategyModalProps) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('取消数据:', values);
      onSuccess();
      form.resetFields();
    } catch (error) {
      console.error('表单验证失败:', error);
    }
  };

  return (
    <Modal
      title={
        <span>
          <ExclamationCircleOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
          取消处置策略
        </span>
      }
      open={visible}
      onOk={handleSubmit}
      onCancel={onClose}
      width={500}
      okText="确认取消"
      cancelText="我再想想"
      okButtonProps={{ danger: true }}
    >
      <Form
        form={form}
        layout="vertical"
      >
        <div style={{ marginBottom: 16 }}>
          <div><strong>策略编号:</strong> {strategy.strategyNo}</div>
          <div><strong>VIN码:</strong> {strategy.vin}</div>
        </div>

        <Alert
          message="操作提醒"
          description={
            <ul style={{ margin: '8px 0 0 0', paddingLeft: 20, fontSize: 12 }}>
              <li>取消后策略状态将变更为"已取消",无法恢复</li>
              <li>如车辆正在竞价中,将立即中止竞价</li>
              <li>取消原因将记录在操作日志中</li>
            </ul>
          }
          type="error"
          showIcon
          style={{ marginBottom: 16 }}
        />

        <Form.Item
          label="取消原因"
          name="cancelReason"
          rules={[{ required: true, message: '请选择取消原因' }]}
        >
          <Select placeholder="请选择取消原因">
            <Option value="vehicle_sold">车辆已通过其他渠道售出</Option>
            <Option value="vehicle_defect">车辆发现新问题,暂停处置</Option>
            <Option value="price_error">定价错误,需重新评估</Option>
            <Option value="business_change">业务策略调整</Option>
            <Option value="customer_request">客户要求撤回</Option>
            <Option value="operation_error">操作失误</Option>
            <Option value="other">其他原因</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="取消说明"
          name="remarks"
        >
          <TextArea
            rows={3}
            maxLength={500}
            showCount
            placeholder="请详细说明取消原因(选填,最多500字)"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CancelStrategyModal;
