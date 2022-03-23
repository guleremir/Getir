import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from 'api/banners.json'
import Title from "./ui/Title";

export default function Campaigns() {

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // eslint-disable-next-line no-dupe-keys
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings:{
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
        <Slider {...settings} className="-mx-2">
          {banners.length && banners.map((banner, index) => (
            <div key={index}>
              <div className="block px-2">
              <img alt="banner" src={banner.image} className="rounded-lg"/>
              </div>
            </div>
          ))}
       </Slider>
    </div>
  )
}
