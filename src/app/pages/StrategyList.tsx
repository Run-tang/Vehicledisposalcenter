import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Checkbox } from '../components/ui/checkbox';
import { StatusBadge, MethodBadge, PlatformBadge } from '../components/common/StatusBadge';
import { Search, Download, Plus, Eye, Edit, X } from 'lucide-react';

interface Strategy {
  id: string;
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
  location: string;
  vehicleStatus: string;
  auctionCount: number;
}

const mockData: Strategy[] = [
  {
    id: '1',
    strategyNo: 'CL20260430001234',
    vin: 'LHGBM5G35EK012345',
    licensePlate: '豫B8****Y',
    brandModel: '宝马/3系 320Li',
    method: 'auction_open',
    platform: 'zhuandian',
    startPrice: 180000,
    reservePrice: 200000,
    status: 'executing',
    createdTime: '2026-04-29 14:30',
    creator: '张三',
    location: '河南郑州-中原门店',
    vehicleStatus: '在库-待处置',
    auctionCount: 1,
  },
  {
    id: '2',
    strategyNo: 'CL20260430001235',
    vin: 'LHGBM5G35EK012346',
    licensePlate: '豫A1****8',
    brandModel: '五菱/宏光MINIEV 2022款',
    method: 'fixed_price',
    platform: 'youliang',
    startPrice: 28000,
    reservePrice: 30000,
    status: 'pending',
    createdTime: '2026-04-28 10:15',
    creator: '李四',
    location: '河南郑州-金水门店',
    vehicleStatus: '在库-待处置',
    auctionCount: 0,
  },
  {
    id: '3',
    strategyNo: 'CL20260430001236',
    vin: 'LHGBM5G35EK012347',
    licensePlate: '豫B2****M',
    brandModel: '奔驰/E级 E300L',
    method: 'auction_sealed',
    platform: 'qichejie',
    startPrice: 350000,
    reservePrice: 380000,
    status: 'completed',
    createdTime: '2026-04-27 16:45',
    creator: '王五',
    location: '河南郑州-二七门店',
    vehicleStatus: '已售出',
    auctionCount: 2,
  },
];

interface StrategyListProps {
  onViewDetails: (strategy: Strategy) => void;
  onCreateStrategy: () => void;
  onAdjustStrategy: (strategy: Strategy) => void;
  onCancelStrategy: (strategy: Strategy) => void;
}

export function StrategyList({
  onViewDetails,
  onCreateStrategy,
  onAdjustStrategy,
  onCancelStrategy,
}: StrategyListProps) {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [searchVin, setSearchVin] = useState('');
  const [searchPlate, setSearchPlate] = useState('');

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

  return (
    <div className="flex h-full flex-col bg-[#fafafa]">
      <div className="space-y-4 p-6">
        <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
          <div className="relative max-w-[200px]">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="VIN码搜索"
              value={searchVin}
              onChange={e => setSearchVin(e.target.value)}
              className="pl-9"
            />
          </div>
          <Input
            placeholder="车牌号"
            value={searchPlate}
            onChange={e => setSearchPlate(e.target.value)}
            className="max-w-[150px]"
          />
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="所属门店" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部</SelectItem>
              <SelectItem value="zhongyuan">中原门店</SelectItem>
              <SelectItem value="jinshui">金水门店</SelectItem>
              <SelectItem value="erqi">二七门店</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="处置平台" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部</SelectItem>
              <SelectItem value="zhuandian">专电优拍</SelectItem>
              <SelectItem value="youliang">有辆</SelectItem>
              <SelectItem value="qichejie">汽车街</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="策略状态" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部</SelectItem>
              <SelectItem value="pending">待执行</SelectItem>
              <SelectItem value="executing">执行中</SelectItem>
              <SelectItem value="completed">已完成</SelectItem>
              <SelectItem value="cancelled">已取消</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex-1" />
          <Button variant="outline" onClick={() => {}}>
            重置
          </Button>
          <Button onClick={() => {}}>筛选</Button>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
          <div className="flex gap-2">
            <Button onClick={onCreateStrategy} className="bg-[#1956fe] hover:bg-[#1547d4]">
              <Plus className="mr-2 size-4" />
              新增策略
            </Button>
            <Button variant="outline">
              <Download className="mr-2 size-4" />
              导出数据
            </Button>
          </div>
          <div className="text-sm text-gray-500">共 {mockData.length} 条</div>
        </div>

        <div className="rounded-lg bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#fafafa]">
                <TableHead className="w-[50px]">
                  <Checkbox />
                </TableHead>
                <TableHead className="w-[60px]">序号</TableHead>
                <TableHead className="w-[150px]">策略编号</TableHead>
                <TableHead className="w-[180px]">VIN码</TableHead>
                <TableHead className="w-[100px]">车牌号</TableHead>
                <TableHead className="w-[200px]">品牌车型</TableHead>
                <TableHead className="w-[100px]">处置方式</TableHead>
                <TableHead className="w-[120px]">处置平台</TableHead>
                <TableHead className="w-[120px]">起拍价(元)</TableHead>
                <TableHead className="w-[120px]">保留价(元)</TableHead>
                <TableHead className="w-[100px]">策略状态</TableHead>
                <TableHead className="w-[150px]">制定时间</TableHead>
                <TableHead className="w-[100px]">制定人</TableHead>
                <TableHead className="w-[80px]">拍卖次数</TableHead>
                <TableHead className="w-[180px]">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((strategy, index) => (
                <TableRow key={strategy.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(strategy.id)}
                      onCheckedChange={checked => {
                        if (checked) {
                          setSelectedRows([...selectedRows, strategy.id]);
                        } else {
                          setSelectedRows(selectedRows.filter(id => id !== strategy.id));
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <button
                      onClick={() => onViewDetails(strategy)}
                      className="text-[#1956fe] hover:underline"
                    >
                      {strategy.strategyNo}
                    </button>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{strategy.vin}</TableCell>
                  <TableCell>{strategy.licensePlate}</TableCell>
                  <TableCell>{strategy.brandModel}</TableCell>
                  <TableCell>
                    <MethodBadge method={strategy.method} label={methodLabels[strategy.method]} />
                  </TableCell>
                  <TableCell>
                    <PlatformBadge platform={strategy.platform} label={platformLabels[strategy.platform]} />
                  </TableCell>
                  <TableCell className="text-right">¥{strategy.startPrice.toLocaleString()}</TableCell>
                  <TableCell className="text-right">¥{strategy.reservePrice.toLocaleString()}</TableCell>
                  <TableCell>
                    <StatusBadge status={strategy.status} label={statusLabels[strategy.status]} />
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{strategy.createdTime}</TableCell>
                  <TableCell>{strategy.creator}</TableCell>
                  <TableCell>
                    <span className={strategy.auctionCount >= 2 ? 'text-orange-600 font-medium' : ''}>
                      {strategy.auctionCount}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onViewDetails(strategy)}
                        className="h-7 px-2"
                      >
                        <Eye className="mr-1 size-3" />
                        查看
                      </Button>
                      {(strategy.status === 'pending' || strategy.status === 'executing') && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onAdjustStrategy(strategy)}
                          className="h-7 px-2"
                        >
                          <Edit className="mr-1 size-3" />
                          调整
                        </Button>
                      )}
                      {strategy.status === 'pending' && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onCancelStrategy(strategy)}
                          className="h-7 px-2 text-red-600 hover:bg-red-50 hover:text-red-700"
                        >
                          <X className="mr-1 size-3" />
                          取消
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">每页显示</span>
            <Select defaultValue="20">
              <SelectTrigger className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 条</SelectItem>
                <SelectItem value="20">20 条</SelectItem>
                <SelectItem value="50">50 条</SelectItem>
                <SelectItem value="100">100 条</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              上一页
            </Button>
            <Button variant="outline" size="sm" className="bg-[#1956fe] text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              下一页
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
