"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fakeAdsCompanies } from "@/constants";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";

export function Advertising() {
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current || undefined);
    setNav2(sliderRef2.current || undefined);
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    className: "mt-12"
  }

  return (
    <div className="slider-container">
      <Slider
        asNavFor={nav2}
        ref={sliderRef1}
      >
        {
          fakeAdsCompanies.map(({ title, image, description }) => (
            <div key={title} className="!flex !gap-12">
              <Image
                src={image}
                width={500}
                height={325}
                alt="Empresa"
                className="flex-1 rounded-3xl aspect-video object-cover w-full"
              />
              <div className="flex flex-col flex-1 gap-4">
                <h3 className="text-2xl text-zinc-800 font-bold">{title}</h3>
                <p className="text-medium text-zinc-600 leading-loose">{description}</p>
              </div>
            </div>
          ))
        }
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider => {
          if (sliderRef2.current) {
            sliderRef2.current = slider;
            return;
          }
          slider = null;
        }}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settings}
      >
        {
          fakeAdsCompanies.map(({ image }) => (
            <div key={image} className="">
              <Image
                src={image}
                alt=""
                width={270}
                height={162.5}
                className="rounded-3xl aspect-video object-cover w-full scale-90 shadow"
              />
            </div>
          ))
        }
      </Slider>
    </div>
  );
}