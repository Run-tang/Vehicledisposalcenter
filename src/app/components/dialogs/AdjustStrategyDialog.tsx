import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { AlertCircle, X } from 'lucide-react';

interface AdjustStrategyDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  strategy: {
    strategyNo: string;
    startPrice: number;
    reservePrice: number;
    platform: string;
  };
}

export function AdjustStrategyDialog({ open, onClose, onSubmit, strategy }: AdjustStrategyDialogProps) {
  const [formData, setFormData] = useState({
    adjustReason: '',
    newStartPrice: strategy.startPrice.toString(),
    newReservePrice: strategy.reservePrice.toString(),
    newPlatform: strategy.platform,
    remarks: '',
  });

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[600px]" aria-describedby={undefined}>
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">调整处置策略</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="size-4" />
            </Button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            策略编号: {strategy.strategyNo}
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <div className="flex gap-2">
              <AlertCircle className="size-5 text-yellow-600 shrink-0 mt-0.5" />
              <div className="text-sm text-yellow-800">
                <p className="font-medium mb-1">调整须知</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>策略调整将记录在操作日志中,可追溯历史变更</li>
                  <li>调整后如车辆正在竞价中,需等待当前场次结束后生效</li>
                  <li>调整原因为必填项,用于后续数据分析</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="adjustReason">调整原因 <span className="text-red-500">*</span></Label>
            <Select
              value={formData.adjustReason}
              onValueChange={value => setFormData({ ...formData, adjustReason: value })}
            >
              <SelectTrigger id="adjustReason">
                <SelectValue placeholder="请选择调整原因" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price_too_high">流拍-起拍价过高</SelectItem>
                <SelectItem value="market_change">市场行情变化</SelectItem>
                <SelectItem value="platform_switch">更换处置平台</SelectItem>
                <SelectItem value="vehicle_condition">车况重新评估</SelectItem>
                <SelectItem value="urgent_sale">急需出售,降价促成</SelectItem>
                <SelectItem value="other">其他原因</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">价格调整</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="oldStartPrice">原起拍价(元)</Label>
                <Input
                  id="oldStartPrice"
                  value={`¥${strategy.startPrice.toLocaleString()}`}
                  disabled
                  className="bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newStartPrice">新起拍价(元)</Label>
                <Input
                  id="newStartPrice"
                  type="number"
                  value={formData.newStartPrice}
                  onChange={e => setFormData({ ...formData, newStartPrice: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="oldReservePrice">原保留价(元)</Label>
                <Input
                  id="oldReservePrice"
                  value={`¥${strategy.reservePrice.toLocaleString()}`}
                  disabled
                  className="bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newReservePrice">新保留价(元)</Label>
                <Input
                  id="newReservePrice"
                  type="number"
                  value={formData.newReservePrice}
                  onChange={e => setFormData({ ...formData, newReservePrice: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="newPlatform">处置平台</Label>
            <Select
              value={formData.newPlatform}
              onValueChange={value => setFormData({ ...formData, newPlatform: value })}
            >
              <SelectTrigger id="newPlatform">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="zhuandian">专电优拍</SelectItem>
                <SelectItem value="youliang">有辆</SelectItem>
                <SelectItem value="qichejie">汽车街</SelectItem>
                <SelectItem value="youxinpai">优信拍</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="remarks">调整说明</Label>
            <Textarea
              id="remarks"
              placeholder="请详细说明调整原因(选填,最多500字)"
              rows={4}
              maxLength={500}
              value={formData.remarks}
              onChange={e => setFormData({ ...formData, remarks: e.target.value })}
            />
            <p className="text-xs text-gray-500 text-right">
              {formData.remarks.length}/500
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t pt-4">
          <Button variant="outline" onClick={onClose}>
            取消
          </Button>
          <Button onClick={handleSubmit} className="bg-[#1956fe] hover:bg-[#1547d4]">
            确定调整
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
