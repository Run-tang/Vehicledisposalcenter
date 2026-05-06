import { Card } from '../ui/card';

interface DataCardProps {
  title: string;
  children: React.ReactNode;
  extra?: React.ReactNode;
}

export function DataCard({ title, children, extra }: DataCardProps) {
  return (
    <Card className="mb-4 border border-[#e5e7eb]">
      <div className="flex items-center justify-between border-b border-[#e5e7eb] bg-[#fafafa] px-4 py-3">
        <h3 className="text-[14px] font-medium text-[#0d162a]">{title}</h3>
        {extra}
      </div>
      <div className="p-4">{children}</div>
    </Card>
  );
}

interface DataRowProps {
  label: string;
  value: React.ReactNode;
  span?: number;
}

export function DataRow({ label, value, span = 1 }: DataRowProps) {
  return (
    <div className={`${span === 2 ? 'col-span-2' : ''} flex gap-2`}>
      <span className="text-[14px] text-[rgba(0,0,0,0.45)] whitespace-nowrap">{label}:</span>
      <span className="text-[14px] text-[rgba(0,0,0,0.88)] break-all">{value || '-'}</span>
    </div>
  );
}

interface DataGridProps {
  children: React.ReactNode;
  columns?: number;
}

export function DataGrid({ children, columns = 2 }: DataGridProps) {
  const gridClasses = columns === 1 ? 'grid-cols-1' : columns === 3 ? 'grid-cols-3' : 'grid-cols-2';
  return <div className={`grid ${gridClasses} gap-x-8 gap-y-3`}>{children}</div>;
}
