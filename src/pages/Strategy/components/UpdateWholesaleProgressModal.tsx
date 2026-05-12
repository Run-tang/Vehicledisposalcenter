import { Modal, Form, Select, InputNumber, Input, DatePicker, Radio, Space, Button, message, Tooltip } from 'antd';
import { useState } from 'react';
import { Strategy } from '../../../data/mockData';

const { Option } = Select;
const { TextArea } = Input;

interface UpdateWholesaleProgressModalProps {
  visible: boolean;
  strategy: Strategy | null;
  onClose: () => void;
  onSuccess: () => void;
}

const UpdateWholesaleProgressModal = ({ visible, strategy, onClose, onSuccess }: UpdateWholesaleProgressModalProps) => {
  const [form] = Form.useForm();
  const [auctionStatus, setAuctionStatus] = useState<string>('');
  const [platform, setPlatform] = useState<string>(strategy?.platform || 'youjia');

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('批发更新数据:', values);

      if (values.auctionStatus === '成交') {
        message.success('策略已完成，拍卖订单已生成');
      } else {
        message.success('拍卖进度已更新');
      }

      onSuccess();
      form.resetFields();
      setAuctionStatus('');
      setPlatform(strategy?.platform || 'youjia');
    } catch (error) {
      console.error('表单验证失败:', error);
    }
  };

  const handleComplete = async () => {
    try {
      const values = await form.validateFields();
      console.log('完结批发记录:', values);

      if (values.auctionStatus === '成交') {
        message.success('策略已完成，拍卖订单已生成');
      } else {
        message.success('本次记录已完结，下次更新将创建新记录');
      }

      onSuccess();
      form.resetFields();
      setAuctionStatus('');
      setPlatform(strategy?.platform || 'youjia');
    } catch (error) {
      console.error('表单验证失败:', error);
    }
  };

  const handleSwitchToRetail = () => {
    Modal.confirm({
      title: '确认切换策略类型？',
      content: '确认放弃当前批发策略内容并切换为零售策略？原批发处置记录将保留归档',
      okText: '确认切换',
      cancelText: '取消',
      onOk: () => {
        message.info('已切换到零售策略创建');
        onClose();
      },
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setAuctionStatus('');
    setPlatform(strategy?.platform || 'youjia');
    onClose();
  };

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

  return (
    <Modal
      title="更新拍卖进度"
      open={visible}
      onCancel={handleCancel}
      width={800}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          取消
        </Button>,
        <Button key="switch" onClick={handleSwitchToRetail}>
          切换零售策略
        </Button>,
        auctionStatus === '成交' ? (
          <Tooltip key="update-tooltip" title="成交状态请点击【完结记录】进行结案">
            <Button
              key="update"
              disabled
            >
              更新记录
            </Button>
          </Tooltip>
        ) : (
          <Button
            key="update"
            onClick={handleSubmit}
          >
            更新记录
          </Button>
        ),
        <Button key="complete" type="primary" onClick={handleComplete}>
          完结记录
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          platform: strategy?.platform || 'youjia',
        }}
        onValuesChange={(changedValues) => {
          if (changedValues.auctionStatus) {
            setAuctionStatus(changedValues.auctionStatus);
          }
          if (changedValues.platform) {
            setPlatform(changedValues.platform);
          }
        }}
      >
        {/* 平台选择 */}
        <Form.Item
          label="处置平台"
          name="platform"
          rules={[{ required: true, message: '请选择处置平台' }]}
        >
          <Select placeholder="请选择处置平台">
            <Option value="youjia">优加车拍-内部拍卖平台</Option>
            <Option value="youliang">有辆</Option>
            <Option value="qichejie">汽车街</Option>
            <Option value="youxinpai">优信拍</Option>
          </Select>
        </Form.Item>

        {/* 内部平台提示 */}
        {platform === 'youjia' && (
          <div style={{ marginBottom: 16, padding: 12, background: '#e6f4ff', borderRadius: 4, fontSize: 12, color: '#1890ff' }}>
            <strong>内部平台说明：</strong>优加车拍为内部拍卖平台，更新时不校验策略状态，拍卖数据由平台自动同步
          </div>
        )}

        {/* 价格基准展示 */}
        <div style={{ marginBottom: 24, padding: 16, background: '#f8f9fa', borderRadius: 4 }}>
          <div style={{ marginBottom: 8 }}>
            <span style={{ color: '#80868b', fontSize: 12 }}>建议保留价：</span>
            <span style={{ fontWeight: 500 }}>¥{(strategy?.currentReservePrice || 0) / 10000}万元</span>
          </div>
          <div style={{ marginBottom: 8 }}>
            <span style={{ color: '#80868b', fontSize: 12 }}>公司标准保留价：</span>
            <span style={{ fontWeight: 500 }}>¥{getStandardReservePrice() / 10000}万元</span>
          </div>
          {strategy?.marketPriceMin && strategy?.marketPriceMax && (
            <div>
              <span style={{ color: '#80868b', fontSize: 12 }}>市场参考价格区间：</span>
              <span style={{ fontWeight: 500 }}>¥{strategy.marketPriceMin}-{strategy.marketPriceMax}万元</span>
            </div>
          )}
        </div>

        {/* 拍卖状态 */}
        <Form.Item
          label="拍卖状态"
          name="auctionStatus"
          rules={[{ required: true, message: '请选择拍卖状态' }]}
        >
          <Radio.Group>
            <Radio value="待拍卖">待拍卖</Radio>
            <Radio value="检测待上拍">检测待上拍</Radio>
            <Radio value="流拍">流拍</Radio>
            <Radio value="仲裁">仲裁</Radio>
            <Radio value="成交">成交</Radio>
          </Radio.Group>
        </Form.Item>

        {/* 成交时的字段 */}
        {auctionStatus === '成交' && (
          <>
            <Form.Item
              label="拍卖最高价(万元)"
              name="maxBidPrice"
              rules={[{ required: true, message: '请输入拍卖最高价' }]}
            >
              <InputNumber
                min={0.01}
                max={9999.99}
                precision={2}
                placeholder="请输入拍卖最高价"
                style={{ width: '100%' }}
                addonAfter="万元"
              />
            </Form.Item>

            <Form.Item label="中拍人姓名" name="buyerName">
              <Input placeholder="请输入中拍人姓名" maxLength={20} />
            </Form.Item>

            <Form.Item
              label="中拍人电话"
              name="buyerPhone"
              rules={[
                { pattern: /^1\d{10}$/, message: '请输入正确的11位手机号' }
              ]}
            >
              <Input placeholder="请输入中拍人电话" maxLength={11} />
            </Form.Item>

            <Form.Item label="车辆佣金(元)" name="commission">
              <InputNumber
                min={0}
                max={999999}
                precision={2}
                placeholder="请输入车辆佣金"
                style={{ width: '100%' }}
                addonAfter="元"
              />
            </Form.Item>

            <Form.Item label="办证费(元)" name="certificateFee">
              <InputNumber
                min={0}
                max={999999}
                precision={2}
                placeholder="请输入办证费"
                style={{ width: '100%' }}
                addonAfter="元"
              />
            </Form.Item>
          </>
        )}

        {/* 非成交状态的字段 */}
        {auctionStatus && auctionStatus !== '成交' && (
          <>
            <Form.Item label="拍卖最高价(万元)" name="maxBidPrice">
              <InputNumber
                min={0.01}
                max={9999.99}
                precision={2}
                placeholder="请输入拍卖最高价（选填）"
                style={{ width: '100%' }}
                addonAfter="万元"
              />
            </Form.Item>

            <Form.Item
              label="拍卖日期"
              name="auctionDate"
              rules={[{ required: true, message: '请选择拍卖日期' }]}
            >
              <DatePicker style={{ width: '100%' }} placeholder="请选择拍卖日期" />
            </Form.Item>

            <Form.Item
              label="拍卖保留价(万元)"
              name="reservePrice"
              rules={[
                { required: true, message: '请输入拍卖保留价' },
              ]}
            >
              <InputNumber
                min={0.01}
                max={9999.99}
                precision={2}
                placeholder="请输入拍卖保留价"
                style={{ width: '100%' }}
                addonAfter="万元"
              />
            </Form.Item>

            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.reservePrice !== currentValues.reservePrice
              }
            >
              {({ getFieldValue }) => {
                const reservePrice = getFieldValue('reservePrice');
                const standardPrice = getStandardReservePrice() / 10000;
                return reservePrice && reservePrice < standardPrice ? (
                  <Form.Item
                    label="特殊保留价备注说明"
                    name="specialPriceNote"
                    rules={[{ required: true, message: '拍卖保留价低于公司标准保留价，请说明原因' }]}
                  >
                    <TextArea
                      rows={3}
                      placeholder="请说明拍卖保留价低于公司标准保留价的原因（最多200字）"
                      maxLength={200}
                      showCount
                      status="error"
                    />
                  </Form.Item>
                ) : null;
              }}
            </Form.Item>

            <Form.Item
              label="车辆所在地"
              name="vehicleLocation"
              rules={[{ required: true, message: '请输入车辆所在地' }]}
              initialValue={strategy?.location}
            >
              <Input placeholder="请输入车辆所在地" maxLength={50} />
            </Form.Item>
          </>
        )}
      </Form>

      {/* 底部提示 */}
      <div style={{ marginTop: 16, padding: 12, background: '#f0f5ff', borderRadius: 4, fontSize: 12, color: '#5f6368' }}>
        <div style={{ marginBottom: 4 }}>
          <strong>操作说明：</strong>
        </div>
        <div>• <strong>更新记录：</strong>保存流拍后的发拍计划或平台变更信息，不完结任务（成交状态下不可用）</div>
        <div>• <strong>完结记录：</strong>成交时生成拍卖订单并标记策略完成；其他状态下完结本次记录</div>
        <div>• <strong>切换策略：</strong>切换后原有批发处置记录保留（只读归档），策略处置方式更新为"零售"</div>
      </div>
    </Modal>
  );
};

export default UpdateWholesaleProgressModal;
