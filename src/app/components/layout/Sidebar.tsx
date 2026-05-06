import { Home, Car, FileText, Settings, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: 'home',
    label: '首页',
    icon: <Home className="size-[18px]" />,
  },
  {
    id: 'inventory',
    label: '库存管理',
    icon: <Car className="size-[18px]" />,
    children: [
      { id: 'inventory-list', label: '库存车辆管理', icon: null },
    ],
  },
  {
    id: 'disposal',
    label: '处置中心',
    icon: <FileText className="size-[18px]" />,
    children: [
      { id: 'disposal-strategy', label: '处置策略', icon: null },
      { id: 'disposal-record', label: '处置记录', icon: null },
    ],
  },
  {
    id: 'inspection',
    label: '检测管理',
    icon: <Settings className="size-[18px]" />,
  },
];

interface SidebarProps {
  activeMenu?: string;
  onMenuClick?: (menuId: string) => void;
}

export function Sidebar({ activeMenu = 'disposal-strategy', onMenuClick }: SidebarProps) {
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['disposal']);

  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev =>
      prev.includes(menuId) ? prev.filter(id => id !== menuId) : [...prev, menuId]
    );
  };

  const handleMenuClick = (menuId: string, hasChildren: boolean) => {
    if (hasChildren) {
      toggleMenu(menuId);
    } else {
      onMenuClick?.(menuId);
    }
  };

  return (
    <div className="flex h-full w-[199px] flex-col border-r border-[#f2f4f7] bg-white">
      {menuItems.map(item => (
        <div key={item.id}>
          <button
            onClick={() => handleMenuClick(item.id, !!item.children)}
            className={`flex w-full items-center gap-[10px] px-[24px] pr-[16px] h-[40px] rounded-[8px] mx-[4px] my-[4px] transition-colors ${
              !item.children && activeMenu === item.id
                ? 'bg-[#e8f0ff]'
                : 'hover:bg-[rgba(0,0,0,0.02)]'
            }`}
          >
            {item.icon}
            <span
              className={`flex-1 text-left text-[14px] ${
                !item.children && activeMenu === item.id
                  ? 'text-[#1956fe]'
                  : item.children
                  ? 'text-[rgba(0,0,0,0.88)]'
                  : 'text-[rgba(0,0,0,0.88)]'
              }`}
            >
              {item.label}
            </span>
            {item.children && (
              expandedMenus.includes(item.id) ? (
                <ChevronDown className="size-[14px]" />
              ) : (
                <ChevronRight className="size-[14px]" />
              )
            )}
          </button>

          {item.children && expandedMenus.includes(item.id) && (
            <div className="bg-[rgba(0,0,0,0.02)] mx-[4px]">
              {item.children.map(child => (
                <button
                  key={child.id}
                  onClick={() => handleMenuClick(child.id, false)}
                  className={`flex w-full items-center h-[40px] pl-[48px] pr-[16px] rounded-[8px] transition-colors ${
                    activeMenu === child.id
                      ? 'bg-[#e8f0ff] text-[#1956fe]'
                      : 'text-[rgba(0,0,0,0.88)] hover:bg-white'
                  }`}
                >
                  <span className="text-[14px]">{child.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
