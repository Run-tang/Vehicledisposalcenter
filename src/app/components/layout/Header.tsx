import imgLogo from "../../../imports/专电优拍/5d9a8c8637ea165fdc1f57808dec85e631fbffcf.png";
import { Home, ChevronDown } from 'lucide-react';

interface HeaderProps {
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export function Header({ breadcrumbs = [{ label: '处置中心' }, { label: '处置策略' }] }: HeaderProps) {
  return (
    <div className="flex h-[56px] w-full items-center justify-between border-b border-[#f2f4f7] bg-white px-[24px]">
      <div className="flex items-center gap-[120px]">
        <div className="flex items-center gap-[16px]">
          <img src={imgLogo} alt="" className="h-[24px] w-[48px] object-cover" />
          <h1 className="text-[20px] text-[#0d162a] font-['Heiti_SC']">广联二手车</h1>
        </div>

        <nav className="flex items-center gap-[4px] text-[14px]">
          <button className="flex size-[22px] items-center justify-center rounded-[4px] hover:bg-[rgba(0,0,0,0.02)]">
            <Home className="size-[14px] text-[rgba(0,0,0,0.45)]" />
          </button>
          <span className="text-[rgba(0,0,0,0.45)]">/</span>
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-[4px]">
              <span className={index === breadcrumbs.length - 1 ? 'text-[rgba(0,0,0,0.88)]' : 'text-[rgba(0,0,0,0.45)]'}>
                {crumb.label}
              </span>
              {index < breadcrumbs.length - 1 && <span className="text-[rgba(0,0,0,0.45)]">/</span>}
            </span>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-[8px]">
        <div className="size-[30px] rounded-full bg-[#f0f0f0]" />
        <span className="text-[14px] text-black">超级管理员</span>
        <ChevronDown className="size-[14px] text-[rgba(0,0,0,0.88)]" />
      </div>
    </div>
  );
}
