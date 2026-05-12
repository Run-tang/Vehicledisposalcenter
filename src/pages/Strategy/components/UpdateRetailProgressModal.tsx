import { Modal, Form, InputNumber, Input, Radio, Button, message } from 'antd';
import { useState } from 'react';
import { Strategy } from '../../../data/mockData';

const { TextArea } = Input;

interface UpdateRetailProgressModalProps {
  visible: boolean;
  strategy: Strategy | null;
  onClose: () => void;
  onSuccess: () => void;
}

const UpdateRetailProgressModal = ({ visible, strategy, onClose, onSuccess }: UpdateRetailProgressModalProps) => {
  const [form] = Form.useForm();
  const [isDeal, setIsDeal] = useState<boolean>(false);

  const getStandardReservePrice = () => {
    if (!strategy?.purchasePrice) return 0;
    const price = strategy.purchasePrice;
    if (price < 10000) {
      return price + 500;
    } else if (price < 30000) {
      return price + 800;
    } else {
      return price + 1000;
    }
  };

  const handleUpdate = async () => {
    try {
      const values = await form.validateFields();
      console.log('零售进度更新:', values);

      if (values.isDeal) {
        message.success('零售订单已生成，策略已完成');
      } else {
        message.success('零售进度已更新');
      }

      onSuccess();
      form.resetFields();
      setIsDeal(false);
    } catch (error) {
      console.error('表单验证失败:', error);
    }
  };

  const handleComplete = async () => {
    try {
      const values = await form.validateFields();
      console.log('完结零售记录:', values);

      if (values.isDeal) {
        message.success('零售订单已生成，策略已完成');
      } else {
        message.info('零售策略已无果终结，车辆状态流转回"待处置"');
      }

      onSuccess();
      form.resetFields();
      setIsDeal(false);
    } catch (error) {
      console.error('表单验证失败:', error);
    }
  };

  const handleSwitchToWholesale = () => {
    Modal.confirm({
      title: '确认切换策略类型？',
      content: '确认放弃当前零售策略内容并切换为批发策略？原零售处置记录将保留归档',
      okText: '确认切换',
      cancelText: '取消',
      onOk: () => {
        message.info('已切换到批发策略创建');
        onClose();
      },
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsDeal(false);
    onClose();
  };

  const originalConsignmentPrice = strategy?.currentReservePrice || 0;
  const originalRetailPrice = strategy?.retailPrice || 0;

  return (
    <Modal
      title="更新零售进度"
      open={visible}
      onCancel={handleCancel}
      width={800}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          取消
        </Button>,
        <Button key="switch" onClick={handleSwitchToWholesale}>
          切换批发策略
        </Button>,
        <Button key="update" onClick={handleUpdate}>
          更新记录
        </Button>,
        <Button key="complete" type="primary" onClick={handleComplete}>
          完结记录
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          consignmentPrice: originalConsignmentPrice / 10000,
          retailPrice: originalRetailPrice / 10000,
          channel: strategy?.channelName,
          location: strategy?.location,
          isDeal: false,
        }}
        onValuesChange={(changedValues) => {
          if (changedValues.isDeal !== undefined) {
            setIsDeal(changedValues.isDeal);
          }
        }}
      >
        {/* 寄售底价 */}
        <Form.Item
          label={
            <div>
              <div>寄售底价(万元)</div>
              <div style={{ fontSize: 12, color: '#80868b', fontWeight: 400 }}>
                原设底价：{(originalConsignmentPrice / 10000).toFixed(2)}万，
                公司标准保留价：{(getStandardReservePrice() / 10000).toFixed(2)}万
              </div>
            </div>
          }
          name="consignmentPrice"
          rules={[
            { required: true, message: '请输入寄售底价' },
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
            min={0.01}
            max={999.99}
            precision={2}
            placeholder="请输入寄售底价"
            style={{ width: '100%' }}
            addonAfter="万元"
          />
        </Form.Item>

        {/* 保留价异常说明 */}
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.consignmentPrice !== currentValues.consignmentPrice
          }
        >
          {({ getFieldValue }) => {
            const consignmentPrice = getFieldValue('consignmentPrice');
            const standardPrice = getStandardReservePrice() / 10000;
            return consignmentPrice && consignmentPrice < standardPrice ? (
              <Form.Item
                label="保留价异常说明"
                name="consignmentPriceReason"
                rules={[{ required: true, message: '请具体说明寄售底价低于公司保留价的理由' }]}
              >
                <TextArea
                  rows={3}
                  maxLength={200}
                  showCount
                  placeholder="请具体说明寄售底价低于公司保留价的理由（最多200字）"
                  status="error"
                />
              </Form.Item>
            ) : null;
          }}
        </Form.Item>

        {/* 零售价格 */}
        <Form.Item
          label={
            <div>
              <div>零售价格(万元)</div>
              <div style={{ fontSize: 12, color: '#80868b', fontWeight: 400 }}>
                原零售价格：{(originalRetailPrice / 10000).toFixed(2)}万
              </div>
            </div>
          }
          name="retailPrice"
          rules={[
            { required: true, message: '请输入零售价格' },
            {
              validator: (_, value) => {
                const consignmentPrice = form.getFieldValue('consignmentPrice');
                if (value < consignmentPrice) {
                  return Promise.reject(`零售价格不能低于寄售底价${consignmentPrice}万`);
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <InputNumber
            min={0.01}
            max={999.99}
            precision={2}
            placeholder="请输入零售价格"
            style={{ width: '100%' }}
            addonAfter="万元"
          />
        </Form.Item>

        {/* 摆放位置 */}
        <Form.Item
          label="摆放位置"
          name="position"
          rules={[{ required: true, message: '请输入摆放位置' }]}
        >
          <Input placeholder="请输入车辆在展厅的物理位置（如：A区01号位）" maxLength={50} />
        </Form.Item>

        {/* 处置渠道 */}
        <Form.Item
          label="处置渠道"
          name="channel"
          rules={[{ required: true, message: '请输入处置渠道' }]}
        >
          <Input placeholder="请输入处置渠道名称" maxLength={50} />
        </Form.Item>

        {/* 车辆现在所在 */}
        <Form.Item
          label="车辆现在所在"
          name="location"
          rules={[{ required: true, message: '请输入车辆所在地' }]}
        >
          <Input placeholder="请输入车辆所在地" maxLength={50} />
        </Form.Item>

        {/* 是否成交 */}
        <Form.Item
          label="是否成交"
          name="isDeal"
          rules={[{ required: true, message: '请选择是否成交' }]}
        >
          <Radio.Group>
            <Radio value={false}>否</Radio>
            <Radio value={true}>是</Radio>
          </Radio.Group>
        </Form.Item>

        {/* 成交价格 */}
        {isDeal && (
          <Form.Item
            label="成交价格(万元)"
            name="dealPrice"
            rules={[
              { required: true, message: '请输入成交价格' },
              {
                validator: (_, value) => {
                  const consignmentPrice = form.getFieldValue('consignmentPrice');
                  if (value < consignmentPrice) {
                    return Promise.reject(`成交价格不能低于寄售底价${consignmentPrice}万`);
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <InputNumber
              min={0.01}
              max={999.99}
              precision={2}
              placeholder="请输入成交价格"
              style={{ width: '100%' }}
              addonAfter="万元"
            />
          </Form.Item>
        )}
      </Form>

      {/* 底部提示 */}
      <div style={{ marginTop: 16, padding: 12, background: '#f0f5ff', borderRadius: 4, fontSize: 12, color: '#5f6368' }}>
        <div style={{ marginBottom: 4 }}>
          <strong>完结说明：</strong>
        </div>
        <div>• 成交完结：生成零售订单（状态：待过户），策略标记为"已完成"</div>
        <div>• 无果终结：车辆状态流转回"待处置"，策略变为"已取消"</div>
        <div style={{ marginTop: 8 }}>
          <strong>切换策略：</strong>切换后原有零售处置记录保留（只读归档），策略处置方式字段更新为"批发"
        </div>
      </div>
    </Modal>
  );
};

export default UpdateRetailProgressModal;
