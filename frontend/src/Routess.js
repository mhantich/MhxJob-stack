import { createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import HomelayOut from "./HomelayOut";
import PrivateRoute from "./components/Private/PrivateRoute";
import Lottie from "lottie-react";
import { loadingpage } from "./components/animation";
import NotFound from "./Notfound";

// Lazy loading components
const Services = lazy(() => import("./components/pages/Services/Services"));
const About = lazy(() => import("./components/pages/About.jsx/About"));
const Dashlayput = lazy(() => import("./components/adminDash/DashLayout"));
const JobPage = lazy(() => import("./components/pages/JobPage/JobPage"));
const Contact = lazy(() => import("./components/pages/Contact.jsx/Contact"));
const SignIn = lazy(() => import("./components/pages/SignIn/SignIn"));
const SignUp = lazy(() => import("./components/pages/SignUp/SignUp"));
const Main = lazy(() => import("./components/Main/Main"));
const EditProfilePage = lazy(() => import("./components/adminDash/profile/EditProfilePage"));
const Offerce = lazy(() => import("./components/pages/Offerce/Offerce"));
const JobDietlie = lazy(() => import("./components/pages/JobPage/JobDietlie"));
const JobsDataGrid = lazy(() => import("./components/pages/JobPage/JobsDataGrid"));

const Loading = () => <div style={{position:'fixed',backgroundColor:'white',left:'0%',right:'0%',top:'0%',bottom:'0%',zIndex:'1000000000',display:'flex',justifyContent:'center',alignItems:'center',height:'100%',width:'100%'}}>
<Lottie
  style={{ width: "14rem", height: "16rem" }}
  animationData={loadingpage}
  loop={true}
/>
</div>;
export const Rts = createBrowserRouter([
  {
    path: "/",
    element: <HomelayOut />,
    children: [
      {
        path: "/Services",
        element: (
          <Suspense fallback={<Loading />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "/offers",
        element: (
          <Suspense fallback={<Loading />}>
            <Offerce />
          </Suspense>
        ),
      },
      {
        path: "/*",
        element: (
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        ),
      },
      {
        path: "/offers/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <JobDietlie />
          </Suspense>
        ),
      },
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/jobs",
        element: (
          <Suspense fallback={<Loading />}>
            <JobPage />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/Login",
        element: (
          <Suspense fallback={<Loading />}>
            <SignIn />
          </Suspense>
        ),
      },
      {
        path: "/Regester",
        element: (
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dash",
    element: (
      <PrivateRoute element={
        <Suspense fallback={<Loading />}>
          <Dashlayput />
        </Suspense>
      } />
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <EditProfilePage />
          </Suspense>
        ),
      },
      {
        path: "Profile",
        element: (
          <Suspense fallback={<Loading />}>
            <EditProfilePage />
          </Suspense>
        ),
      },
      {
        path: "applecations",
        element: (
          <Suspense fallback={<Loading />}>
            <JobsDataGrid />
          </Suspense>
        ),
      },
    ],
  },
]);
