import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { X, Search } from 'lucide-react';

interface CreateStrategyDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function CreateStrategyDialog({ open, onClose, onSubmit }: CreateStrategyDialogProps) {
  const [formData, setFormData] = useState({
    vin: '',
    method: '',
    platform: '',
    startPrice: '',
    reservePrice: '',
    increment: '500',
    fixedPrice: '',
    validFrom: '',
    validTo: '',
    autoDispatch: false,
    remarks: '',
  });

  const [showVehicleSelector, setShowVehicleSelector] = useState(false);

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-[800px] overflow-y-auto" aria-describedby={undefined}>
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">新增处置策略</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="size-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">选择车辆</h3>
            <div className="flex gap-2">
              <Input
                placeholder="输入VIN码或车牌号"
                value={formData.vin}
                onChange={e => setFormData({ ...formData, vin: e.target.value })}
                className="flex-1"
              />
              <Button
                variant="outline"
                onClick={() => setShowVehicleSelector(true)}
                className="shrink-0"
              >
                <Search className="mr-2 size-4" />
                选择车辆
              </Button>
            </div>
            {formData.vin && (
              <div className="rounded border border-blue-200 bg-blue-50 p-3 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <div><span className="text-gray-600">VIN码:</span> LHGBM5G35EK012345</div>
                  <div><span className="text-gray-600">车牌号:</span> 豫B88888Y</div>
                  <div><span className="text-gray-600">品牌车型:</span> 宝马/3系 320Li</div>
                  <div><span className="text-gray-600">收购价:</span> ¥165,000</div>
                  <div><span className="text-gray-600">建议售价:</span> ¥185,000</div>
                  <div><span className="text-gray-600">车况评级:</span> <span className="text-green-600 font-medium">A级优秀</span></div>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="method">处置方式 <span className="text-red-500">*</span></Label>
              <Select value={formData.method} onValueChange={value => setFormData({ ...formData, method: value })}>
                <SelectTrigger id="method">
                  <SelectValue placeholder="请选择处置方式" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auction_open">线上明标</SelectItem>
                  <SelectItem value="auction_sealed">线上暗标</SelectItem>
                  <SelectItem value="fixed_price">一口价</SelectItem>
                  <SelectItem value="wholesale">线下批发</SelectItem>
                  <SelectItem value="resale">转售</SelectItem>
                  <SelectItem value="scrap">报废</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="platform">处置平台 <span className="text-red-500">*</span></Label>
              <Select value={formData.platform} onValueChange={value => setFormData({ ...formData, platform: value })}>
                <SelectTrigger id="platform">
                  <SelectValue placeholder="请选择处置平台" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zhuandian">专电优拍</SelectItem>
                  <SelectItem value="youliang">有辆</SelectItem>
                  <SelectItem value="qichejie">汽车街</SelectItem>
                  <SelectItem value="youxinpai">优信拍</SelectItem>
                  <SelectItem value="offline">线下门店</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {(formData.method === 'auction_open' || formData.method === 'auction_sealed') && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startPrice">起拍价(元) <span className="text-red-500">*</span></Label>
                  <Input
                    id="startPrice"
                    type="number"
                    placeholder="请输入起拍价"
                    value={formData.startPrice}
                    onChange={e => setFormData({ ...formData, startPrice: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reservePrice">保留价(元) <span className="text-red-500">*</span></Label>
                  <Input
                    id="reservePrice"
                    type="number"
                    placeholder="请输入保留价"
                    value={formData.reservePrice}
                    onChange={e => setFormData({ ...formData, reservePrice: e.target.value })}
                  />
                  <p className="text-xs text-gray-500">保留价必须 ≥ 起拍价</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="increment">加价幅度(元) <span className="text-red-500">*</span></Label>
                <Input
                  id="increment"
                  type="number"
                  placeholder="请输入加价幅度"
                  value={formData.increment}
                  onChange={e => setFormData({ ...formData, increment: e.target.value })}
                />
                <p className="text-xs text-gray-500">最小加价幅度 ≥ 100元</p>
              </div>
            </>
          )}

          {formData.method === 'fixed_price' && (
            <div className="space-y-2">
              <Label htmlFor="fixedPrice">一口价金额(元) <span className="text-red-500">*</span></Label>
              <Input
                id="fixedPrice"
                type="number"
                placeholder="请输入一口价金额"
                value={formData.fixedPrice}
                onChange={e => setFormData({ ...formData, fixedPrice: e.target.value })}
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="validFrom">策略开始时间 <span className="text-red-500">*</span></Label>
              <Input
                id="validFrom"
                type="datetime-local"
                value={formData.validFrom}
                onChange={e => setFormData({ ...formData, validFrom: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="validTo">策略结束时间 <span className="text-red-500">*</span></Label>
              <Input
                id="validTo"
                type="datetime-local"
                value={formData.validTo}
                onChange={e => setFormData({ ...formData, validTo: e.target.value })}
              />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="autoDispatch" className="text-base">
                自动派发检测单
              </Label>
              <p className="text-sm text-gray-500">
                开启后,车辆上架前将自动派发检测任务
              </p>
            </div>
            <Switch
              id="autoDispatch"
              checked={formData.autoDispatch}
              onCheckedChange={checked => setFormData({ ...formData, autoDispatch: checked })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="remarks">策略备注</Label>
            <Textarea
              id="remarks"
              placeholder="请输入策略备注(最多500字)"
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
            确定创建
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
