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

type MediaCarouselProps = {
  media: string[];
  imageClassNames?: string;
  carouselClassNames?: string;
  itemWidth: number;
};

const MediaCarousel = ({
  media,
  imageClassNames,
  carouselClassNames,
  itemWidth,
}: MediaCarouselProps): JSX.Element => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <>
      <div className="d-flex flex-row">
        <div className="align-self-center">
          <CaretLeftFill onClick={handlePrevious} size={"100%"} />
        </div>
        <Swiper
          pagination={true}
          onSwiper={setSwiperRef}
          modules={[Pagination]}
        >
          {media.map((item: string) => {
            return (
              <SwiperSlide>
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
        <div className="align-self-center">
          <CaretRightFill onClick={handleNext} size={"100%"} />
        </div>
      </div>
    </>
  );
};

export default MediaCarousel;
