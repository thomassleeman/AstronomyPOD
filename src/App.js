import React, { useState, useEffect } from "react";
import "./styles.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Loading from "./Loading";
import Image from "./Image";
import Video from "./Video";
import Nav from "./Nav";
import Footer from "./Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [nasaJson, setNasaJson] = useState();

  const todaysDate = new Date();
  const [date, setDate] = useState(todaysDate);
  console.log(typeof date, date.getTime(), date, date.getDate());
  // let brokenDate = date.setDate(date.getDate() - 1);
  // console.log("brokenDate: ", brokenDate, new Date(brokenDate));
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let dateString = `${year}-${month}-${day}`;
  const key = "ZEZ4I4hQYCtF6BHz08fIwEBF8N2n5FDnceij1VM2";
  let url = `https://api.nasa.gov/planetary/apod?date=${dateString}&api_key=${key}`;

  const fetchImage = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      setNasaJson(responseJson);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImage();
  }, [date]);

  const dateDec = () => {
    const yesterday = date.setDate(date.getDate() - 1);
    const yesterdayObj = new Date(yesterday);
    setDate(yesterdayObj);
  };
  const dateInc = () => {
    const tomorrow = date.setDate(date.getDate() + 1);
    const tomorrowObj = new Date(tomorrow);
    setDate(tomorrowObj);
  };

  if (loading) {
    return (
      <>
        <Nav date={date} dateDec={dateDec} dateInc={dateInc} />
        <main>
          <Loading />
        </main>
      </>
    );
  } else if (nasaJson.media_type === "image") {
    return (
      <>
        <Nav {...nasaJson} date={date} dateDec={dateDec} dateInc={dateInc} />
        <main>
          <Image {...nasaJson} />
        </main>
        <Footer />
      </>
    );
  } else if (nasaJson.media_type === "video") {
    return (
      <>
        <Nav {...nasaJson} date={date} dateDec={dateDec} dateInc={dateInc} />
        <main>
          <Video {...nasaJson} />
        </main>
        <Footer />
      </>
    );
  }
}
