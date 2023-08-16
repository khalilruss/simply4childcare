import { Image } from "react-bootstrap";
import { CaretRightFill, CaretLeftFill } from "react-bootstrap-icons";

import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/pagination";
import "./MediaCarousel.css";

import { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useCallback } from "react";
import { Pagination } from "swiper/modules";
import { useScreenSize } from "../../screenSizeContext/ScreenSizeContext";

type MediaCarouselProps = {
  media: string[];
  imageClassNames?: string;
};

const MediaCarousel = ({
  media,
  imageClassNames,
}: MediaCarouselProps): JSX.Element => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  const { isXXs, isXs, isSm, isMd, isLg } = useScreenSize();

  return (
    <>
      <div className="d-flex flex-row">
        {!(isXXs || isXs || isSm || isMd || isLg) ? (
          <div className={"align-self-center"}>
            <CaretLeftFill onClick={handlePrevious} size={"100%"} />
          </div>
        ) : (
          <></>
        )}
        <Swiper
          slidesPerView={!(isXXs || isXs || isSm || isMd || isLg) ? 1 : 1.1}
          centeredSlides={true}
          spaceBetween={!(isXXs || isXs || isSm || isMd || isLg) ? 0 : 5}
          pagination={true}
          onSwiper={setSwiperRef}
          modules={[Pagination]}
        >
          {media.map((item: string, index: number) => {
            return (
              <SwiperSlide key={index} className={``}>
                {item.includes(".mp4") ? (
                  <div className="carousel-video-wrapper">
                    <ReactPlayer
                      url={item}
                      // pip={true}
                      controls={true}
                      playing={false}
                      width="100%"
                      height="100%"
                      style={{ margin: "auto" }}
                      muted
                    />
                  </div>
                ) : (
                  <Image
                    className={`d-block w-100 h-100 ${imageClassNames}`}
                    src={item}
                  />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        {!(isXXs || isXs || isSm || isMd || isLg) ? (
          <div className={"align-self-center"}>
            <CaretRightFill onClick={handleNext} size={"100%"} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default MediaCarousel;
