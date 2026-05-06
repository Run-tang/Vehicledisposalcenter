import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Checkbox } from '../components/ui/checkbox';
import { StatusBadge, PlatformBadge } from '../components/common/StatusBadge';
import { Search, Download, Eye, TrendingUp } from 'lucide-react';

interface Record {
  id: string;
  recordNo: string;
  strategyNo: string;
  vin: string;
  licensePlate: string;
  brandModel: string;
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
}

const mockData: Record[] = [
  {
    id: '1',
    recordNo: 'JL20260429154321',
    strategyNo: 'CL20260430001234',
    vin: 'LHGBM5G35EK012345',
    licensePlate: '豫B8****Y',
    brandModel: '宝马/3系 320Li',
    platform: 'zhuandian',
    startTime: '2026-04-29 16:00',
    endTime: '2026-04-30 16:00',
    startPrice: 180000,
    reservePrice: 200000,
    viewCount: 256,
    bidderCount: 12,
    bidCount: 35,
    maxBid: 195000,
    result: 'bidding',
    buyer: null,
  },
  {
    id: '2',
    recordNo: 'JL20260428103245',
    strategyNo: 'CL20260430001236',
    vin: 'LHGBM5G35EK012347',
    licensePlate: '豫B2****M',
    brandModel: '奔驰/E级 E300L',
    platform: 'qichejie',
    startTime: '2026-04-28 10:00',
    endTime: '2026-04-28 18:00',
    startPrice: 350000,
    reservePrice: 380000,
    viewCount: 189,
    bidderCount: 8,
    bidCount: 18,
    maxBid: 375000,
    result: 'unsold',
    buyer: null,
  },
  {
    id: '3',
    recordNo: 'JL20260427165432',
    strategyNo: 'CL20260430001236',
    vin: 'LHGBM5G35EK012347',
    licensePlate: '豫B2****M',
    brandModel: '奔驰/E级 E300L',
    platform: 'qichejie',
    startTime: '2026-04-27 16:00',
    endTime: '2026-04-28 00:00',
    startPrice: 330000,
    reservePrice: 360000,
    viewCount: 312,
    bidderCount: 15,
    bidCount: 42,
    maxBid: 385000,
    result: 'sold',
    buyer: '李老板(车商)',
  },
];

interface RecordListProps {
  onViewDetails: (record: Record) => void;
}

export function RecordList({ onViewDetails }: RecordListProps) {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [searchVin, setSearchVin] = useState('');

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
              <SelectValue placeholder="处置结果" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部</SelectItem>
              <SelectItem value="sold">成交</SelectItem>
              <SelectItem value="unsold">流拍</SelectItem>
              <SelectItem value="bidding">竞价中</SelectItem>
              <SelectItem value="suspended">中止</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-2">
            <Input type="date" className="w-[150px]" placeholder="开拍时间" />
            <span className="text-gray-400">至</span>
            <Input type="date" className="w-[150px]" />
          </div>
          <div className="flex-1" />
          <Button variant="outline" onClick={() => {}}>
            重置
          </Button>
          <Button onClick={() => {}}>筛选</Button>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 size-4" />
              导出数据
            </Button>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">成交率:</span>
              <span className="text-lg font-semibold text-green-600">33.3%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">平均出价人数:</span>
              <span className="text-lg font-semibold text-blue-600">11.7人</span>
            </div>
            <div className="text-sm text-gray-500">共 {mockData.length} 条</div>
          </div>
        </div>

        <div className="rounded-lg bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#fafafa]">
                <TableHead className="w-[50px]">
                  <Checkbox />
                </TableHead>
                <TableHead className="w-[60px]">序号</TableHead>
                <TableHead className="w-[150px]">记录流水号</TableHead>
                <TableHead className="w-[150px]">关联策略编号</TableHead>
                <TableHead className="w-[180px]">VIN码</TableHead>
                <TableHead className="w-[200px]">品牌车型</TableHead>
                <TableHead className="w-[120px]">处置平台</TableHead>
                <TableHead className="w-[150px]">开拍时间</TableHead>
                <TableHead className="w-[150px]">结拍时间</TableHead>
                <TableHead className="w-[120px]">起拍价(元)</TableHead>
                <TableHead className="w-[120px]">保留价(元)</TableHead>
                <TableHead className="w-[80px]">围观(PV)</TableHead>
                <TableHead className="w-[80px]">出价人</TableHead>
                <TableHead className="w-[80px]">出价次</TableHead>
                <TableHead className="w-[120px]">最高出价(元)</TableHead>
                <TableHead className="w-[100px]">处置结果</TableHead>
                <TableHead className="w-[150px]">最终买方</TableHead>
                <TableHead className="w-[100px]">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((record, index) => (
                <TableRow key={record.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(record.id)}
                      onCheckedChange={checked => {
                        if (checked) {
                          setSelectedRows([...selectedRows, record.id]);
                        } else {
                          setSelectedRows(selectedRows.filter(id => id !== record.id));
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <button
                      onClick={() => onViewDetails(record)}
                      className="text-[#1956fe] hover:underline"
                    >
                      {record.recordNo}
                    </button>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{record.strategyNo}</TableCell>
                  <TableCell className="font-mono text-sm">{record.vin}</TableCell>
                  <TableCell>{record.brandModel}</TableCell>
                  <TableCell>
                    <PlatformBadge platform={record.platform} label={platformLabels[record.platform]} />
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{record.startTime}</TableCell>
                  <TableCell className="text-sm text-gray-600">{record.endTime}</TableCell>
                  <TableCell className="text-right">¥{record.startPrice.toLocaleString()}</TableCell>
                  <TableCell className="text-right">¥{record.reservePrice.toLocaleString()}</TableCell>
                  <TableCell className="text-center">{record.viewCount}</TableCell>
                  <TableCell className="text-center">{record.bidderCount}</TableCell>
                  <TableCell className="text-center">{record.bidCount}</TableCell>
                  <TableCell className="text-right">
                    {record.maxBid ? (
                      <span className={record.maxBid >= record.reservePrice ? 'text-green-600 font-medium' : 'text-orange-600'}>
                        ¥{record.maxBid.toLocaleString()}
                      </span>
                    ) : (
                      '-'
                    )}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={record.result} label={resultLabels[record.result]} />
                  </TableCell>
                  <TableCell className="text-sm">{record.buyer || '-'}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onViewDetails(record)}
                      className="h-7 px-2"
                    >
                      <Eye className="mr-1 size-3" />
                      查看
                    </Button>
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
              下一页
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
