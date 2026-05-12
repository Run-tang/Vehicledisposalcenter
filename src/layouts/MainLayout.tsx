import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router';
import { Layout, Menu, Breadcrumb, Avatar, Dropdown } from 'antd';
import {
  HomeOutlined,
  CarOutlined,
  FileTextOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  DownOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import imgLogo from '../imports/专电优拍/5d9a8c8637ea165fdc1f57808dec85e631fbffcf.png';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems: MenuProps['items'] = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: '首页',
      onClick: () => navigate('/'),
    },
    {
      key: 'inventory',
      icon: <CarOutlined />,
      label: '库存管理',
      children: [
        {
          key: 'inventory-list',
          label: '库存车辆管理',
        },
      ],
    },
    {
      key: 'disposal',
      icon: <FileTextOutlined />,
      label: '处置中心',
      children: [
        {
          key: '/disposal/strategy',
          label: '处置策略',
          onClick: () => navigate('/disposal/strategy'),
        },
        {
          key: '/disposal/wholesale-record',
          label: '批发处置记录',
          onClick: () => navigate('/disposal/wholesale-record'),
        },
        {
          key: '/disposal/retail-record',
          label: '零售处置记录',
          onClick: () => navigate('/disposal/retail-record'),
        },
      ],
    },
    {
      key: 'inspection',
      icon: <SettingOutlined />,
      label: '检测管理',
    },
  ];

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人中心',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      danger: true,
    },
  ];

  const getBreadcrumbs = () => {
    const path = location.pathname;
    const breadcrumbs = [{ title: <HomeOutlined /> }];

    if (path.includes('/disposal/strategy')) {
      breadcrumbs.push({ title: '处置中心' });
      if (path.match(/\/disposal\/strategy\/\d+/)) {
        breadcrumbs.push({
          title: <a onClick={() => navigate('/disposal/strategy')}>处置策略</a>,
        });
        breadcrumbs.push({ title: '策略详情' });
      } else {
        breadcrumbs.push({ title: '处置策略' });
      }
    } else if (path.includes('/disposal/wholesale-record')) {
      breadcrumbs.push({ title: '处置中心' });
      breadcrumbs.push({ title: '批发处置记录' });
    } else if (path.includes('/disposal/retail-record')) {
      breadcrumbs.push({ title: '处置中心' });
      breadcrumbs.push({ title: '零售处置记录' });
    } else if (path.includes('/disposal/record')) {
      breadcrumbs.push({ title: '处置中心' });
      if (path.match(/\/disposal\/record\/\d+/)) {
        breadcrumbs.push({
          title: <a onClick={() => navigate('/disposal/record')}>处置记录</a>,
        });
        breadcrumbs.push({ title: '记录详情' });
      } else {
        breadcrumbs.push({ title: '处置记录' });
      }
    }

    return breadcrumbs;
  };

  const getSelectedKeys = () => {
    const path = location.pathname;
    if (path.includes('/disposal/strategy')) return ['/disposal/strategy'];
    if (path.includes('/disposal/wholesale-record')) return ['/disposal/wholesale-record'];
    if (path.includes('/disposal/retail-record')) return ['/disposal/retail-record'];
    if (path.includes('/disposal/record')) return ['/disposal/record'];
    return [path];
  };

  const getOpenKeys = () => {
    const path = location.pathname;
    if (path.includes('/disposal')) return ['disposal'];
    if (path.includes('/inventory')) return ['inventory'];
    return [];
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#ffffff',
          padding: '0 24px',
          borderBottom: '1px solid #dadce0',
          boxShadow: '0 1px 2px 0 rgba(60, 64, 67, 0.15)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '120px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img src={imgLogo} alt="Logo" style={{ height: '24px', width: '48px' }} />
            <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 500, color: '#202124' }}>广联二手车</h1>
          </div>

          <Breadcrumb items={getBreadcrumbs()} />
        </div>

        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <Avatar size={30} style={{ backgroundColor: '#f8f9fa', color: '#5f6368' }}>
              <UserOutlined />
            </Avatar>
            <span style={{ color: '#202124' }}>超级管理员</span>
            <DownOutlined style={{ fontSize: '12px', color: '#5f6368' }} />
          </div>
        </Dropdown>
      </Header>

      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          width={199}
          style={{
            background: '#ffffff',
            borderRight: '1px solid #dadce0',
          }}
        >
          <Menu
            mode="inline"
            selectedKeys={getSelectedKeys()}
            defaultOpenKeys={getOpenKeys()}
            items={menuItems}
            style={{ height: '100%', borderRight: 0 }}
          />
        </Sider>

        <Layout style={{ padding: '0', background: '#f8f9fa' }}>
          <Content
            style={{
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
