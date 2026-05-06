import { Modal, Form, Input, Select, InputNumber, Switch, DatePicker, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

interface CreateStrategyModalProps {
  visible: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const CreateStrategyModal = ({ visible, onClose, onSuccess }: CreateStrategyModalProps) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('表单数据:', values);
      onSuccess();
      form.resetFields();
    } catch (error) {
      console.error('表单验证失败:', error);
    }
  };

  return (
    <Modal
      title="新增处置策略"
      open={visible}
      onOk={handleSubmit}
      onCancel={onClose}
      width={800}
      okText="确定创建"
      cancelText="取消"
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          increment: 500,
          autoDispatch: false,
        }}
      >
        <Form.Item
          label="选择车辆"
          name="vin"
          rules={[{ required: true, message: '请选择车辆' }]}
        >
          <Input
            placeholder="输入VIN码或车牌号"
            suffix={<SearchOutlined />}
          />
        </Form.Item>

        <Form.Item
          label="处置方式"
          name="method"
          rules={[{ required: true, message: '请选择处置方式' }]}
        >
          <Select placeholder="请选择处置方式">
            <Option value="auction_open">线上明标</Option>
            <Option value="auction_sealed">线上暗标</Option>
            <Option value="fixed_price">一口价</Option>
            <Option value="wholesale">线下批发</Option>
            <Option value="resale">转售</Option>
            <Option value="scrap">报废</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="处置平台"
          name="platform"
          rules={[{ required: true, message: '请选择处置平台' }]}
        >
          <Select placeholder="请选择处置平台">
            <Option value="zhuandian">专电优拍</Option>
            <Option value="youliang">有辆</Option>
            <Option value="qichejie">汽车街</Option>
            <Option value="youxinpai">优信拍</Option>
            <Option value="offline">线下门店</Option>
          </Select>
        </Form.Item>

        <Form.Item dependencies={['method']} noStyle>
          {({ getFieldValue }) => {
            const method = getFieldValue('method');
            return (method === 'auction_open' || method === 'auction_sealed') ? (
              <>
                <Form.Item
                  label="起拍价(元)"
                  name="startPrice"
                  rules={[{ required: true, message: '请输入起拍价' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                    placeholder="请输入起拍价"
                  />
                </Form.Item>

                <Form.Item
                  label="保留价(元)"
                  name="reservePrice"
                  rules={[{ required: true, message: '请输入保留价' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                    placeholder="请输入保留价"
                  />
                </Form.Item>

                <Form.Item
                  label="加价幅度(元)"
                  name="increment"
                  rules={[{ required: true, message: '请输入加价幅度' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    min={100}
                    placeholder="请输入加价幅度"
                  />
                </Form.Item>
              </>
            ) : method === 'fixed_price' ? (
              <Form.Item
                label="一口价金额(元)"
                name="fixedPrice"
                rules={[{ required: true, message: '请输入一口价金额' }]}
              >
                <InputNumber
                  style={{ width: '100%' }}
                  min={0}
                  placeholder="请输入一口价金额"
                />
              </Form.Item>
            ) : null;
          }}
        </Form.Item>

        <Form.Item
          label="策略有效期"
          name="validPeriod"
          rules={[{ required: true, message: '请选择策略有效期' }]}
        >
          <RangePicker
            showTime
            style={{ width: '100%' }}
            placeholder={['开始时间', '结束时间']}
          />
        </Form.Item>

        <Form.Item
          label="自动派发检测单"
          name="autoDispatch"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="策略备注"
          name="remarks"
        >
          <TextArea
            rows={4}
            maxLength={500}
            showCount
            placeholder="请输入策略备注(最多500字)"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateStrategyModal;
