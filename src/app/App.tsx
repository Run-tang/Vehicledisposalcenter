import { RouterProvider } from 'react-router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { router } from '../router';
import '../styles/custom-theme.css';

export default function App() {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#1a73e8',
          colorLink: '#1a73e8',
          colorSuccess: '#1e8e3e',
          colorWarning: '#f9ab00',
          colorError: '#d93025',
          colorInfo: '#1a73e8',
          colorTextBase: '#202124',
          colorBorder: '#dadce0',
          borderRadius: 6,
          fontSize: 14,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
        },
        components: {
          Table: {
            headerBg: '#f8f9fa',
            headerColor: '#5f6368',
            rowHoverBg: '#f1f3f4',
            borderColor: '#dadce0',
          },
          Button: {
            primaryShadow: '0 1px 2px 0 rgba(60, 64, 67, 0.3)',
          },
          Input: {
            activeBorderColor: '#1a73e8',
            hoverBorderColor: '#bdc1c6',
          },
          Card: {
            boxShadowTertiary: '0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)',
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}