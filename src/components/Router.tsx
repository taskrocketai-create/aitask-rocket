import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import { MemberProtectedRoute } from '@/components/ui/member-protected-route';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import ServicesPage from '@/components/pages/ServicesPage';
import PricingPage from '@/components/pages/PricingPage';
import ContactPage from '@/components/pages/ContactPage';
import PortalDashboard from '@/components/pages/PortalDashboard';
import SubmitTaskPage from '@/components/pages/SubmitTaskPage';
import MyTasksPage from '@/components/pages/MyTasksPage';
import BillingPage from '@/components/pages/BillingPage';
import ProfilePage from '@/components/pages/ProfilePage';

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
        element: (
          <MemberProtectedRoute messageToSignIn="Sign in to access your portal">
            <PortalDashboard />
          </MemberProtectedRoute>
        ),
        routeMetadata: {
          pageIdentifier: 'portal',
        },
      },
      {
        path: "portal/submit",
        element: (
          <MemberProtectedRoute messageToSignIn="Sign in to submit tasks">
            <SubmitTaskPage />
          </MemberProtectedRoute>
        ),
        routeMetadata: {
          pageIdentifier: 'submit-task',
        },
      },
      {
        path: "portal/tasks",
        element: (
          <MemberProtectedRoute messageToSignIn="Sign in to view your tasks">
            <MyTasksPage />
          </MemberProtectedRoute>
        ),
        routeMetadata: {
          pageIdentifier: 'my-tasks',
        },
      },
      {
        path: "portal/billing",
        element: (
          <MemberProtectedRoute messageToSignIn="Sign in to manage billing">
            <BillingPage />
          </MemberProtectedRoute>
        ),
        routeMetadata: {
          pageIdentifier: 'billing',
        },
      },
      {
        path: "profile",
        element: (
          <MemberProtectedRoute messageToSignIn="Sign in to view your profile">
            <ProfilePage />
          </MemberProtectedRoute>
        ),
        routeMetadata: {
          pageIdentifier: 'profile',
        },
      },
      {
        path: "privacy",
        element: <Navigate to="/" replace />,
      },
      {
        path: "terms",
        element: <Navigate to="/" replace />,
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
