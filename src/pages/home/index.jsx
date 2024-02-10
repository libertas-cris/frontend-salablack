import {  Header  } from '../../components/header';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import {ServiceData} from './constants';

export function Home(){
  return(
    <div className="app">
      <Header />
      <div className="w-full h-screen bg-neutral-900 " />
    </div>
  )
}