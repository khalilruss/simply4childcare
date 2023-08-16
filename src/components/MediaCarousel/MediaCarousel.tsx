import { Image } from "react-bootstrap";
import { CaretRightFill, CaretLeftFill, XCircle } from "react-bootstrap-icons";

import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/pagination";
import "./MediaCarousel.css";
import cn from "classnames";

import { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useCallback, useEffect } from "react";
import { Pagination } from "swiper/modules";
import { useScreenSize } from "../../screenSizeContext/ScreenSizeContext";

type MediaCarouselProps = {
  media: string[];
  imageClassNames?: string;
  carouselClassNames?: string;
  itemWidth: number;
  id: number;
};

const MediaCarousel = ({
  media,
  imageClassNames,
  carouselClassNames,
  itemWidth,
  id,
}: MediaCarouselProps): JSX.Element => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [isFullscreen, setIsFullscreen] = useState<Boolean>(false);
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      const carouselContainer = document.querySelector(
        `.carousel-container-${id}`
      ) as HTMLElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      };
      if (carouselContainer) {
        if (carouselContainer.requestFullscreen) {
          carouselContainer.requestFullscreen();
        } else if (carouselContainer.mozRequestFullScreen) {
          carouselContainer.mozRequestFullScreen(); // Firefox
        } else if (carouselContainer.webkitRequestFullscreen) {
          carouselContainer.webkitRequestFullscreen(); // Safari
        } else if (carouselContainer.msRequestFullscreen) {
          carouselContainer.msRequestFullscreen(); // IE/Edge
        }
      }
    } else {
      const docWithBrowsersExitFunctions = document as Document & {
        mozCancelFullScreen(): Promise<void>;
        webkitExitFullscreen(): Promise<void>;
        msExitFullscreen(): Promise<void>;
      };
      if (docWithBrowsersExitFunctions.exitFullscreen) {
        docWithBrowsersExitFunctions.exitFullscreen();
      } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) {
        docWithBrowsersExitFunctions.mozCancelFullScreen();
      } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) {
        docWithBrowsersExitFunctions.webkitExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };
    document.addEventListener("fullscreenchange", fullscreenChangeHandler);

    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
    };
  }, []);

  const { isXXs, isXs, isSm, isMd, isLg } = useScreenSize();

  return (
    <div
      className={cn(`carousel-container-${id}`, {
        fullscreen: isFullscreen,
      })}
    >
      <div className="d-flex flex-row">
        {!(isXXs || isXs || isSm || isMd || isLg) ? (
          <div
            className={cn("align-self-center", { "text-base": isFullscreen })}
          >
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
                    className={cn(`d-block ${imageClassNames}`, {
                      "w-100 h-100": !isFullscreen,
                      "w-80 h-60": isFullscreen,
                    })}
                    onClick={toggleFullscreen}
                    src={item}
                  />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        {!(isXXs || isXs || isSm || isMd || isLg) ? (
          <div
            className={cn("align-self-center", { "text-base": isFullscreen })}
          >
            <CaretRightFill onClick={handleNext} size={"100%"} />
          </div>
        ) : (
          <></>
        )}

        {isFullscreen && (
          <XCircle className="fullscreen-button" onClick={toggleFullscreen} />
        )}
      </div>
    </div>
  );
};

export default MediaCarousel;
