import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import PrivacyPolicyPage from '@/components/pages/PrivacyPolicyPage';
import ServicesPage from '@/components/pages/ServicesPage';
import PricingPage from '@/components/pages/PricingPage';
import ContactPage from '@/components/pages/ContactPage';
import PortalDashboard from '@/components/pages/PortalDashboard';
import SubmitTaskPage from '@/components/pages/SubmitTaskPage';
import MyTasksPage from '@/components/pages/MyTasksPage';
import BillingPage from '@/components/pages/BillingPage';
import ProfilePage from '@/components/pages/ProfilePage';
import WhatIsATaskPage from '@/components/pages/WhatIsATaskPage';
import HelpPage from '@/components/pages/HelpPage';
import BarPage from '@/components/pages/BarPage';
import RestaurantPage from '@/components/pages/RestaurantPage';
import RetailPage from '@/components/pages/RetailPage';
import RealtorPage from '@/components/pages/RealtorPage';
import ContractorPage from '@/components/pages/ContractorPage';
import RehabScopeLandingPage from '@/components/pages/RehabScopeLandingPage';
import RehabScopeSubmitPage from '@/components/pages/RehabScopeSubmitPage';
import TermsAndConditionsPage from '@/components/pages/TermsAndConditionsPage';

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
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
        routeMetadata: {
          pageIdentifier: 'privacy-policy',
        },
      },
      {
        path: "services",
        element: <ServicesPage />,
        routeMetadata: {
          pageIdentifier: 'services',
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
        path: "contact",
        element: <ContactPage />,
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "portal",
        element: <PortalDashboard />,
        routeMetadata: {
          pageIdentifier: 'portal',
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
        path: "my-tasks",
        element: <MyTasksPage />,
        routeMetadata: {
          pageIdentifier: 'my-tasks',
        },
      },
      {
        path: "billing",
        element: <BillingPage />,
        routeMetadata: {
          pageIdentifier: 'billing',
        },
      },
      {
        path: "profile",
        element: <ProfilePage />,
        routeMetadata: {
          pageIdentifier: 'profile',
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
        path: "help",
        element: <HelpPage />,
        routeMetadata: {
          pageIdentifier: 'help',
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
        path: "realtor",
        element: <RealtorPage />,
        routeMetadata: {
          pageIdentifier: 'realtor',
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
        path: "rehab-scope",
        element: <RehabScopeLandingPage />,
        routeMetadata: {
          pageIdentifier: 'rehab-scope',
        },
      },
      {
        path: "rehab-scope-submit",
        element: <RehabScopeSubmitPage />,
        routeMetadata: {
          pageIdentifier: 'rehab-scope-submit',
        },
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditionsPage />,
        routeMetadata: {
          pageIdentifier: 'terms-and-conditions',
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
