import { Clock } from 'lucide-react';

interface LogEntry {
  id: string;
  operator: string;
  action: string;
  time: string;
  details?: string;
}

interface OperationLogProps {
  logs: LogEntry[];
}

export function OperationLog({ logs }: OperationLogProps) {
  return (
    <div className="space-y-3">
      {logs.map((log, index) => (
        <div key={log.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="flex size-[32px] items-center justify-center rounded-full bg-[#e8f0ff]">
              <Clock className="size-[16px] text-[#1956fe]" />
            </div>
            {index < logs.length - 1 && <div className="w-[2px] flex-1 bg-[#e5e7eb] mt-2" />}
          </div>
          <div className="flex-1 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-medium text-[rgba(0,0,0,0.88)]">{log.operator}</span>
              <span className="text-[14px] text-[rgba(0,0,0,0.65)]">{log.action}</span>
            </div>
            <div className="mt-1 text-[12px] text-[rgba(0,0,0,0.45)]">{log.time}</div>
            {log.details && (
              <div className="mt-2 rounded bg-[#fafafa] p-2 text-[12px] text-[rgba(0,0,0,0.65)]">
                {log.details}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
