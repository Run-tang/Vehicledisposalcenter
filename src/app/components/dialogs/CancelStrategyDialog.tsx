import { useState } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '../ui/alert-dialog';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { AlertTriangle } from 'lucide-react';

interface CancelStrategyDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (data: any) => void;
  strategy: {
    strategyNo: string;
    vin: string;
  };
}

export function CancelStrategyDialog({ open, onClose, onConfirm, strategy }: CancelStrategyDialogProps) {
  const [formData, setFormData] = useState({
    cancelReason: '',
    remarks: '',
  });

  const handleConfirm = () => {
    onConfirm(formData);
    onClose();
  };

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-[500px]" aria-describedby="cancel-dialog-description">
        <AlertDialogHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="size-5 text-red-600" />
            <AlertDialogTitle>取消处置策略</AlertDialogTitle>
          </div>
          <AlertDialogDescription id="cancel-dialog-description" className="text-left">
            <div className="mt-2 space-y-1">
              <p className="text-sm text-gray-600">策略编号: {strategy.strategyNo}</p>
              <p className="text-sm text-gray-600">VIN码: {strategy.vin}</p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4 py-4">
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            <p className="font-medium mb-1">操作提醒</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>取消后策略状态将变更为"已取消",无法恢复</li>
              <li>如车辆正在竞价中,将立即中止竞价</li>
              <li>取消原因将记录在操作日志中</li>
            </ul>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cancelReason">取消原因 <span className="text-red-500">*</span></Label>
            <Select
              value={formData.cancelReason}
              onValueChange={value => setFormData({ ...formData, cancelReason: value })}
            >
              <SelectTrigger id="cancelReason">
                <SelectValue placeholder="请选择取消原因" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vehicle_sold">车辆已通过其他渠道售出</SelectItem>
                <SelectItem value="vehicle_defect">车辆发现新问题,暂停处置</SelectItem>
                <SelectItem value="price_error">定价错误,需重新评估</SelectItem>
                <SelectItem value="business_change">业务策略调整</SelectItem>
                <SelectItem value="customer_request">客户要求撤回</SelectItem>
                <SelectItem value="operation_error">操作失误</SelectItem>
                <SelectItem value="other">其他原因</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="remarks">取消说明</Label>
            <Textarea
              id="remarks"
              placeholder="请详细说明取消原因(选填,最多500字)"
              rows={3}
              maxLength={500}
              value={formData.remarks}
              onChange={e => setFormData({ ...formData, remarks: e.target.value })}
            />
            <p className="text-xs text-gray-500 text-right">
              {formData.remarks.length}/500
            </p>
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>
            我再想想
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className="bg-red-600 hover:bg-red-700"
            disabled={!formData.cancelReason}
          >
            确认取消
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
