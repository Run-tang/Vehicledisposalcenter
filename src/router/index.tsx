import { createBrowserRouter, Navigate } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import StrategyList from '../pages/Strategy/StrategyList';
import StrategyDetail from '../pages/Strategy/StrategyDetail';
import RecordList from '../pages/Record/RecordList';
import RecordDetail from '../pages/Record/RecordDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/disposal/strategy" replace />,
      },
      {
        path: 'disposal',
        children: [
          {
            path: 'strategy',
            element: <StrategyList />,
          },
          {
            path: 'strategy/:id',
            element: <StrategyDetail />,
          },
          {
            path: 'record',
            element: <RecordList />,
          },
          {
            path: 'record/:id',
            element: <RecordDetail />,
          },
        ],
      },
    ],
  },
]);
