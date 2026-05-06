import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { DataCard, DataRow, DataGrid } from '../common/DataCard';
import { StatusBadge, MethodBadge, PlatformBadge } from '../common/StatusBadge';
import { OperationLog } from '../common/OperationLog';
import { X } from 'lucide-react';

interface StrategyDetailDialogProps {
  open: boolean;
  onClose: () => void;
  strategy: {
    strategyNo: string;
    vin: string;
    licensePlate: string;
    brandModel: string;
    method: 'auction_open' | 'auction_sealed' | 'fixed_price';
    platform: 'zhuandian' | 'youliang' | 'qichejie';
    startPrice: number;
    reservePrice: number;
    status: 'pending' | 'executing' | 'completed' | 'cancelled';
    createdTime: string;
    creator: string;
  };
}

export function StrategyDetailDialog({ open, onClose, strategy }: StrategyDetailDialogProps) {
  const methodLabels: Record<string, string> = {
    auction_open: '线上明标',
    auction_sealed: '线上暗标',
    fixed_price: '一口价',
  };

  const platformLabels: Record<string, string> = {
    zhuandian: '专电优拍',
    youliang: '有辆',
    qichejie: '汽车街',
  };

  const statusLabels: Record<string, string> = {
    pending: '待执行',
    executing: '执行中',
    completed: '已完成',
    cancelled: '已取消',
  };

  const mockLogs = [
    {
      id: '1',
      operator: '张三',
      action: '创建了处置策略',
      time: '2026-04-29 14:30:25',
      details: '起拍价: ¥180,000, 保留价: ¥200,000',
    },
    {
      id: '2',
      operator: '系统',
      action: '策略状态变更',
      time: '2026-04-29 16:00:00',
      details: '待执行 → 执行中(车辆已上架至专电优拍平台)',
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-[1200px] overflow-y-auto" aria-describedby={undefined}>
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">处置策略详情</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="size-4" />
            </Button>
          </div>
          <div className="mt-2 flex items-center gap-4 text-sm">
            <span className="text-gray-600">策略编号: {strategy.strategyNo}</span>
            <StatusBadge status={strategy.status} label={statusLabels[strategy.status]} />
          </div>
        </DialogHeader>

        <Tabs defaultValue="basic" className="mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">基础信息</TabsTrigger>
            <TabsTrigger value="vehicle">车辆信息</TabsTrigger>
            <TabsTrigger value="records">处置记录</TabsTrigger>
            <TabsTrigger value="logs">操作日志</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <DataCard title="策略基础信息">
              <DataGrid columns={2}>
                <DataRow label="策略编号" value={strategy.strategyNo} />
                <DataRow label="处置方式" value={<MethodBadge method={strategy.method} label={methodLabels[strategy.method]} />} />
                <DataRow label="处置平台" value={<PlatformBadge platform={strategy.platform} label={platformLabels[strategy.platform]} />} />
                <DataRow label="策略状态" value={<StatusBadge status={strategy.status} label={statusLabels[strategy.status]} />} />
                <DataRow label="起拍价(元)" value={`¥${strategy.startPrice.toLocaleString()}`} />
                <DataRow label="保留价(元)" value={`¥${strategy.reservePrice.toLocaleString()}`} />
                <DataRow label="加价幅度(元)" value="¥500" />
                <DataRow label="策略有效期" value="2026-04-30 00:00 ~ 2026-05-07 23:59" />
                <DataRow label="制定人" value={strategy.creator} />
                <DataRow label="制定时间" value={strategy.createdTime} />
                <DataRow label="策略备注" value="车况良好，原漆，适合快速处置" span={2} />
              </DataGrid>
            </DataCard>

            <DataCard title="定价依据">
              <DataGrid columns={2}>
                <DataRow label="收购价(元)" value="¥165,000" />
                <DataRow label="评估师建议售价(元)" value="¥185,000" />
                <DataRow label="综合车况评级" value={<span className="text-green-600 font-medium">A级优秀</span>} />
                <DataRow label="评估时间" value="2026-04-28 10:30" />
                <DataRow label="漆面修复面数" value="2面" />
                <DataRow label="骨架受损项数" value={<span className="text-green-600">0项(无受损)</span>} />
                <DataRow label="评估师" value="李评估" />
                <DataRow label="评估备注" value="车况良好，仅有轻微划痕" span={2} />
              </DataGrid>
            </DataCard>
          </TabsContent>

          <TabsContent value="vehicle" className="space-y-4">
            <DataCard title="车辆基础信息">
              <DataGrid columns={2}>
                <DataRow label="VIN码" value={strategy.vin} />
                <DataRow label="车牌号" value={strategy.licensePlate} />
                <DataRow label="品牌车型" value={strategy.brandModel} />
                <DataRow label="车辆颜色" value="白色" />
                <DataRow label="车辆所在地" value="河南郑州-中原门店" />
                <DataRow label="车辆状态" value="在库-待处置" />
                <DataRow label="入库时间" value="2026-04-20 09:15" />
                <DataRow label="车辆保管人" value="王保管" />
                <DataRow label="使用性质" value="非营运" />
                <DataRow label="所有人性质" value="个人" />
                <DataRow label="车辆来源" value="平台采买" />
                <DataRow label="收购价(元)" value="¥165,000" />
              </DataGrid>
            </DataCard>

            <DataCard title="车辆描述">
              <p className="text-sm text-gray-700 leading-relaxed">
                2020年宝马3系320Li，白色，里程3.2万公里，原版原漆，无事故，车况优秀。
                内饰整洁，发动机变速箱工作正常，轮胎85%新。全车检测报告已完成。
              </p>
            </DataCard>
          </TabsContent>

          <TabsContent value="records" className="space-y-4">
            <DataCard title="处置记录列表">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded border border-gray-200 p-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">记录流水号: JL20260429154321</span>
                      <StatusBadge status="bidding" label="竞价中" />
                    </div>
                    <div className="text-xs text-gray-500">
                      开拍时间: 2026-04-29 16:00 | 结拍时间: 2026-04-30 16:00
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">当前最高出价</div>
                    <div className="text-lg font-semibold text-green-600">¥195,000</div>
                    <div className="text-xs text-gray-500">出价人数: 8人 | 出价次数: 23次</div>
                  </div>
                </div>
              </div>
            </DataCard>
          </TabsContent>

          <TabsContent value="logs">
            <DataCard title="操作日志">
              <OperationLog logs={mockLogs} />
            </DataCard>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 border-t pt-4">
          <Button variant="outline" onClick={onClose}>
            关闭
          </Button>
          {(strategy.status === 'pending' || strategy.status === 'executing') && (
            <Button className="bg-[#1956fe] hover:bg-[#1547d4]">调整策略</Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
