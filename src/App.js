import React, { useState, useEffect } from "react";
import "./styles.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Loading from "./Loading";
import Image from "./Image";
import Video from "./Video";
import Nav from "./Nav";
import Footer from "./Footer";
import ImageFS from "./ImageFS";
import NoImage from "./NoImage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [nasaJson, setNasaJson] = useState();
  const [fs, setFs] = useState(false);

  const todaysDate = new Date();
  const [date, setDate] = useState(todaysDate);
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

  const fullScreen = () => {
    setFs(true);
  };

  const closeFs = () => {
    setFs(false);
  };

  if (loading && fs === false) {
    return (
      <>
        <Nav date={date} dateDec={dateDec} dateInc={dateInc} />
        <main>
          <Loading />
        </main>
      </>
    );
  } else if (nasaJson.media_type === "image" && fs === false) {
    return (
      <>
        <Nav {...nasaJson} date={date} dateDec={dateDec} dateInc={dateInc} />
        <main>
          <Image {...nasaJson} fullScreen={fullScreen} />
        </main>
        <Footer />
      </>
    );
  } else if (nasaJson.media_type === "video" && fs === false) {
    return (
      <>
        <Nav {...nasaJson} date={date} dateDec={dateDec} dateInc={dateInc} />
        <main>
          <Video {...nasaJson} />
        </main>
        <Footer />
      </>
    );
  } else if (
    !loading &&
    nasaJson.media_type != "image" &&
    nasaJson.media_type != "video" &&
    fs === false
  ) {
    return (
      <>
        <Nav {...nasaJson} date={date} dateDec={dateDec} dateInc={dateInc} />
        <main>
          <NoImage />
        </main>
      </>
    );
  } else if (fs === true) {
    return (
      <>
        <ImageFS {...nasaJson} closeFs={closeFs} />
      </>
    );
  }
}
