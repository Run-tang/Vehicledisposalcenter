import { Badge } from '../ui/badge';

type StatusType = 'pending' | 'executing' | 'completed' | 'cancelled' | 'sold' | 'unsold' | 'bidding' | 'suspended';

interface StatusBadgeProps {
  status: StatusType;
  label: string;
}

const statusColors: Record<StatusType, string> = {
  pending: 'bg-orange-100 text-orange-700 border-orange-200',
  executing: 'bg-blue-100 text-blue-700 border-blue-200',
  completed: 'bg-green-100 text-green-700 border-green-200',
  cancelled: 'bg-gray-100 text-gray-700 border-gray-200',
  sold: 'bg-green-100 text-green-700 border-green-200',
  unsold: 'bg-red-100 text-red-700 border-red-200',
  bidding: 'bg-blue-100 text-blue-700 border-blue-200 animate-pulse',
  suspended: 'bg-gray-100 text-gray-700 border-gray-200',
};

export function StatusBadge({ status, label }: StatusBadgeProps) {
  return (
    <Badge className={`${statusColors[status]} border px-2 py-0.5 text-xs`} variant="outline">
      {label}
    </Badge>
  );
}

type MethodType = 'auction_open' | 'auction_sealed' | 'fixed_price' | 'wholesale' | 'resale' | 'scrap' | 'other';

interface MethodBadgeProps {
  method: MethodType;
  label: string;
}

const methodColors: Record<MethodType, string> = {
  auction_open: 'bg-blue-100 text-blue-700 border-blue-200',
  auction_sealed: 'bg-purple-100 text-purple-700 border-purple-200',
  fixed_price: 'bg-green-100 text-green-700 border-green-200',
  wholesale: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  resale: 'bg-cyan-100 text-cyan-700 border-cyan-200',
  scrap: 'bg-gray-100 text-gray-700 border-gray-200',
  other: 'bg-orange-100 text-orange-700 border-orange-200',
};

export function MethodBadge({ method, label }: MethodBadgeProps) {
  return (
    <Badge className={`${methodColors[method]} border px-2 py-0.5 text-xs`} variant="outline">
      {label}
    </Badge>
  );
}

type PlatformType = 'zhuandian' | 'youliang' | 'qichejie' | 'youxinpai' | 'offline';

interface PlatformBadgeProps {
  platform: PlatformType;
  label: string;
}

const platformColors: Record<PlatformType, string> = {
  zhuandian: 'bg-purple-100 text-purple-700 border-purple-200',
  youliang: 'bg-cyan-100 text-cyan-700 border-cyan-200',
  qichejie: 'bg-pink-100 text-pink-700 border-pink-200',
  youxinpai: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  offline: 'bg-gray-100 text-gray-700 border-gray-200',
};

export function PlatformBadge({ platform, label }: PlatformBadgeProps) {
  return (
    <Badge className={`${platformColors[platform]} border px-2 py-0.5 text-xs`} variant="outline">
      {label}
    </Badge>
  );
}
