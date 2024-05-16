import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';


import reportWebVitals from './reportWebVitals';

import Login from './LoginPage/Login';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Freelancer from './FreeLancerFile/Freelancer';
import App from './App';
import GraphicDesigner from './FreelancerPages/GraphicDesigners';
import BuissnessConsultance from './FreelancerPages/BuissnessConsultance';
import ContentWriter from './FreelancerPages/ContentWriter';
import DigitalMarketer from './FreelancerPages/DigitalMarketer';
import PublicRealations from './FreelancerPages/PublicRelations'  ;
import SocialMedia from './FreelancerPages/SocialMedia';
import SoftwareDevelopment from './FreelancerPages/SoftwareDevelopment';
import VideoEditor from './FreelancerPages/VideoEditor';
import WebDeveloper from './FreelancerPages/WebDeveloper';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "freelancer",
    element: <Freelancer />,
  },
  {
    path: "BuissnessConsultance",
    element: <BuissnessConsultance/>,
  },
  {
    path: "ContentWriter",
    element: <ContentWriter />,
  },
  {
    path: "DigitalMarketer",
    element: <DigitalMarketer />,
  },
  {
    path: "PublicRelations",
    element: <PublicRealations />,
  },
  {
    path: "Socialmedia",
    element: <SocialMedia/>,
  },
  {
    path: "SoftwareDevelopment",
    element: <SoftwareDevelopment />,
  },
  {
    path: "VideoEditor",
    element: <VideoEditor />,
  },
  {
    path: "WebDeveloper",
    element: <WebDeveloper />,
  },
  {
    path: "graphicdesigner",
    element: <GraphicDesigner />,
  },
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-l48ap2cztbmck83f.us.auth0.com"
    clientId="rHuPbtlKpa0CVQgMA98sBdUyZW8obLup"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    {/* <App /> */}
    <RouterProvider router={router} />
    
    </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
