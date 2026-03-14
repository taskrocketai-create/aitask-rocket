import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import PricingPage from '@/components/pages/PricingPage';
import HelpPage from '@/components/pages/HelpPage';
import WhatIsATaskPage from '@/components/pages/WhatIsATaskPage';
import ContractorPage from '@/components/pages/ContractorPage';
import RealtorPage from '@/components/pages/RealtorPage';
import RestaurantPage from '@/components/pages/RestaurantPage';
import RetailPage from '@/components/pages/RetailPage';
import BarPage from '@/components/pages/BarPage';
import SubmitTaskPage from '@/components/pages/SubmitTaskPage';
import RehabScopeLandingPage from '@/components/pages/RehabScopeLandingPage';
import MyTasksPage from '@/components/pages/MyTasksPage';
import PortalDashboard from '@/components/pages/PortalDashboard';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "pricing",
        element: <PricingPage />,
        routeMetadata: {
          pageIdentifier: 'pricing',
        },
      },
      {
        path: "help",
        element: <HelpPage />,
        routeMetadata: {
          pageIdentifier: 'help',
        },
      },
      {
        path: "what-is-a-task",
        element: <WhatIsATaskPage />,
        routeMetadata: {
          pageIdentifier: 'what-is-a-task',
        },
      },
      {
        path: "contractor",
        element: <ContractorPage />,
        routeMetadata: {
          pageIdentifier: 'contractor',
        },
      },
      {
        path: "realtor",
        element: <RealtorPage />,
        routeMetadata: {
          pageIdentifier: 'realtor',
        },
      },
      {
        path: "restaurant",
        element: <RestaurantPage />,
        routeMetadata: {
          pageIdentifier: 'restaurant',
        },
      },
      {
        path: "retail",
        element: <RetailPage />,
        routeMetadata: {
          pageIdentifier: 'retail',
        },
      },
      {
        path: "bar",
        element: <BarPage />,
        routeMetadata: {
          pageIdentifier: 'bar',
        },
      },
      {
        path: "submit-task",
        element: <SubmitTaskPage />,
        routeMetadata: {
          pageIdentifier: 'submit-task',
        },
      },
      {
        path: "rehabscope-landing",
        element: <RehabScopeLandingPage />,
        routeMetadata: {
          pageIdentifier: 'rehabscope-landing',
        },
      },
      {
        path: "my-tasks",
        element: <MyTasksPage />,
        routeMetadata: {
          pageIdentifier: 'my-tasks',
        },
      },
      {
        path: "portal-dashboard",
        element: <PortalDashboard />,
        routeMetadata: {
          pageIdentifier: 'portal-dashboard',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
