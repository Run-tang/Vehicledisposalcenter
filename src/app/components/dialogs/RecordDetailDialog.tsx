import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { DataCard, DataRow, DataGrid } from '../common/DataCard';
import { StatusBadge, PlatformBadge } from '../common/StatusBadge';
import { X, TrendingUp, Users, Eye } from 'lucide-react';

interface RecordDetailDialogProps {
  open: boolean;
  onClose: () => void;
  record: {
    recordNo: string;
    strategyNo: string;
    vin: string;
    platform: 'zhuandian' | 'youliang' | 'qichejie';
    startTime: string;
    endTime: string;
    startPrice: number;
    reservePrice: number;
    viewCount: number;
    bidderCount: number;
    bidCount: number;
    maxBid: number | null;
    result: 'sold' | 'unsold' | 'bidding' | 'suspended';
    buyer: string | null;
  };
}

export function RecordDetailDialog({ open, onClose, record }: RecordDetailDialogProps) {
  const platformLabels: Record<string, string> = {
    zhuandian: '专电优拍',
    youliang: '有辆',
    qichejie: '汽车街',
  };

  const resultLabels: Record<string, string> = {
    sold: '成交',
    unsold: '流拍',
    bidding: '竞价中',
    suspended: '中止',
  };

  const mockBidHistory = [
    { id: '1', bidder: '车商A', amount: 195000, time: '2026-04-29 20:35:12' },
    { id: '2', bidder: '车商B', amount: 194500, time: '2026-04-29 20:30:08' },
    { id: '3', bidder: '车商C', amount: 194000, time: '2026-04-29 20:15:23' },
    { id: '4', bidder: '车商A', amount: 193500, time: '2026-04-29 19:45:56' },
    { id: '5', bidder: '车商D', amount: 193000, time: '2026-04-29 19:20:11' },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-[1200px] overflow-y-auto" aria-describedby={undefined}>
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">处置记录详情</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="size-4" />
            </Button>
          </div>
          <div className="mt-2 flex items-center gap-4 text-sm">
            <span className="text-gray-600">记录流水号: {record.recordNo}</span>
            <StatusBadge status={record.result} label={resultLabels[record.result]} />
          </div>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Eye className="size-4" />
              <span className="text-sm">围观人数</span>
            </div>
            <div className="text-2xl font-bold text-blue-700">{record.viewCount}</div>
            <div className="text-xs text-blue-600 mt-1">页面浏览次数(PV)</div>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <Users className="size-4" />
              <span className="text-sm">出价人数</span>
            </div>
            <div className="text-2xl font-bold text-green-700">{record.bidderCount}</div>
            <div className="text-xs text-green-600 mt-1">独立出价车商数(UV)</div>
          </div>

          <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
            <div className="flex items-center gap-2 text-purple-600 mb-2">
              <TrendingUp className="size-4" />
              <span className="text-sm">出价次数</span>
            </div>
            <div className="text-2xl font-bold text-purple-700">{record.bidCount}</div>
            <div className="text-xs text-purple-600 mt-1">总出价次数(PV)</div>
          </div>
        </div>

        <Tabs defaultValue="basic" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">基础信息</TabsTrigger>
            <TabsTrigger value="bidding">竞价详情</TabsTrigger>
            <TabsTrigger value="transaction">成交信息</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <DataCard title="记录基础信息">
              <DataGrid columns={2}>
                <DataRow label="记录流水号" value={record.recordNo} />
                <DataRow label="关联策略编号" value={record.strategyNo} />
                <DataRow label="VIN码" value={record.vin} />
                <DataRow label="处置平台" value={<PlatformBadge platform={record.platform} label={platformLabels[record.platform]} />} />
                <DataRow label="开拍时间" value={record.startTime} />
                <DataRow label="结拍时间" value={record.endTime} />
                <DataRow label="当次起拍价(元)" value={`¥${record.startPrice.toLocaleString()}`} />
                <DataRow label="当次保留价(元)" value={`¥${record.reservePrice.toLocaleString()}`} />
                <DataRow label="加价幅度(元)" value="¥500" />
                <DataRow label="处置结果" value={<StatusBadge status={record.result} label={resultLabels[record.result]} />} />
              </DataGrid>
            </DataCard>

            <DataCard title="数据统计">
              <DataGrid columns={2}>
                <DataRow label="围观人数(PV)" value={`${record.viewCount}人次`} />
                <DataRow label="出价人数(UV)" value={`${record.bidderCount}人`} />
                <DataRow label="出价次数(PV)" value={`${record.bidCount}次`} />
                <DataRow label="最高出价(元)" value={record.maxBid ? `¥${record.maxBid.toLocaleString()}` : '-'} />
                <DataRow
                  label="价格达成率"
                  value={record.maxBid ? `${((record.maxBid / record.reservePrice) * 100).toFixed(1)}%` : '-'}
                />
                <DataRow label="竞价活跃度" value={`${(record.bidCount / record.bidderCount).toFixed(1)}次/人`} />
              </DataGrid>
            </DataCard>
          </TabsContent>

          <TabsContent value="bidding" className="space-y-4">
            <DataCard title="出价历史记录">
              <div className="space-y-2">
                {mockBidHistory.map((bid, index) => (
                  <div key={bid.id} className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="flex size-6 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-700">
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium">{bid.bidder}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600">{bid.time}</span>
                      <span className={`text-lg font-semibold ${index === 0 ? 'text-green-600' : 'text-gray-700'}`}>
                        ¥{bid.amount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </DataCard>

            <DataCard title="竞价趋势图">
              <div className="h-[200px] flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <TrendingUp className="size-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">价格走势图</p>
                </div>
              </div>
            </DataCard>
          </TabsContent>

          <TabsContent value="transaction" className="space-y-4">
            {record.result === 'sold' ? (
              <>
                <DataCard title="成交信息">
                  <DataGrid columns={2}>
                    <DataRow label="成交价(元)" value={record.maxBid ? `¥${record.maxBid.toLocaleString()}` : '-'} />
                    <DataRow label="最终买方" value={record.buyer} />
                    <DataRow label="买方联系方式" value="138****8888" />
                    <DataRow label="成交时间" value={record.endTime} />
                    <DataRow label="订单编号" value="DD20260430123456" />
                    <DataRow label="订单状态" value={<span className="text-green-600">待交付</span>} />
                  </DataGrid>
                </DataCard>

                <DataCard title="收益分析">
                  <DataGrid columns={2}>
                    <DataRow label="收购价(元)" value="¥165,000" />
                    <DataRow label="成交价(元)" value={record.maxBid ? `¥${record.maxBid.toLocaleString()}` : '-'} />
                    <DataRow
                      label="毛利润(元)"
                      value={record.maxBid ? (
                        <span className="text-green-600 font-medium">
                          ¥{(record.maxBid - 165000).toLocaleString()}
                        </span>
                      ) : '-'}
                    />
                    <DataRow
                      label="利润率"
                      value={record.maxBid ? (
                        <span className="text-green-600 font-medium">
                          {(((record.maxBid - 165000) / 165000) * 100).toFixed(2)}%
                        </span>
                      ) : '-'}
                    />
                  </DataGrid>
                </DataCard>
              </>
            ) : record.result === 'unsold' ? (
              <DataCard title="流拍分析">
                <DataGrid columns={2}>
                  <DataRow label="流拍原因" value="最高出价未达保留价" />
                  <DataRow label="最高出价(元)" value={record.maxBid ? `¥${record.maxBid.toLocaleString()}` : '-'} />
                  <DataRow label="保留价(元)" value={`¥${record.reservePrice.toLocaleString()}`} />
                  <DataRow
                    label="差价(元)"
                    value={record.maxBid ? `¥${(record.reservePrice - record.maxBid).toLocaleString()}` : '-'}
                  />
                  <DataRow label="建议调整" value="建议降低保留价至 ¥190,000" span={2} />
                </DataGrid>
              </DataCard>
            ) : (
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
                <p className="text-blue-700">竞价进行中,暂无成交信息</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 border-t pt-4">
          <Button variant="outline" onClick={onClose}>
            关闭
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
