import React from "react";

const MainApp = () => {
  return (
    <>
      <p>
        BrowserRouter: Wraps your application and enables routing. Routes:
        Contains the individual Route elements that map URLs to components.
        Route: Defines which component should render when the URL matches a
        certain path. path: The URL path that matches the route. element: The
        component to render when the path is matched. Link: Used for navigating
        between different routes (internal links) without causing a full page
        reload, which is the benefit of single-page applications (SPAs).
      </p>
    </>
  );
};

export default MainApp;
