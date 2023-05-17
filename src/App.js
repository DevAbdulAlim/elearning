import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import ClientLayout from "./layouts/client/ClientLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Gallery from "./pages/about/Gallery";
import TeamManagement from "./pages/about/TeamManagement";
import Testomonials from "./pages/about/Testimonials";
import JobPlacements from "./pages/career/JobPlacements";
import PolyJobPlacements from "./pages/career/PolyJobPlacements";
import NotFound from "./pages/NotFound";
import SuccessStudents from "./pages/career/SuccessStudents";
import Contact from "./pages/contact/Contact";
import Branch from "./pages/Branch";
import Admission from "./pages/Admission";
import CourseByCategory from "./pages/courses/CourseByCategory";
import CourseDetails from "./pages/courses/CourseDetails";
import Menu from "./others/Menu";
import Menu2 from "./others/Menu2";

//Dashboard

import Dashboard from "./pages/dashboard/Dashboard";
import Student from "./pages/dashboard/student/Student";
import New from "./pages/dashboard/student/New";
import Edit from "./pages/dashboard/student/Edit";
import NavigationScroll from "./layouts/NavigationScroll";
import Certificate from "./pages/career/Certificate";
import ProtectedRoute from "./ProtectedRoute";
import AllCourses from "./pages/courses/AllCourses";
import AllService from "./pages/services/AllService";
import ImageList from "./pages/about/ImageList";

function App() {
  return (
    <Fragment>
      <NavigationScroll>
        <Routes>
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="about/gallery/:category" element={<ImageList />} />
            <Route path="/services" element={<AllService />} />
            <Route path="courses" element={<AllCourses />} />

            <Route
              path="/course-cat/:category"
              element={<CourseByCategory />}
            />
            <Route
              path="/course-cat/:category/:name"
              element={<CourseDetails />}
            />
            <Route path="certificate" element={<Certificate />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/branch" element={<Branch />} />

            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="dashboard" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />

            <Route path="student" element={<Student />} />
            <Route path="student/new" element={<New />} />
            <Route path="student/edit/:id" element={<Edit />} />
          </Route>
        </Routes>
      </NavigationScroll>
    </Fragment>
  );
}

export default App;
