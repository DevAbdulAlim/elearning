import React, { Fragment, useState, useEffect } from "react";
import SwipeableTextMobileStepper from "../../components/Crasual";
import Training from "../../components/Training";
import Services from "../../components/Services";
import Clients from "../../components/Clients";
import Partnership from "../../components/Partnership";
import Facts from "../../components/Facts";

import { getAllCourses } from "../../hooks/getAllCourse";


export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await getAllCourses();
      setData(responseData)
    }

    fetchData();
  }, [])

  console.log(data);
  return (
    <Fragment>
      <SwipeableTextMobileStepper />
      <Facts />
      <Services />
      <Training />
      <Clients />
      <Partnership />
    </Fragment>
  );
}
