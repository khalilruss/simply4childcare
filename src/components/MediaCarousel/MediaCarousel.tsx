import { Image, Carousel, CarouselItem } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./MediaCarousel.css";

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
  return (
    <Carousel
      interval={null}
      slide={false}
      // slide
      className={carouselClassNames}
      data-bs-theme="dark"
    >
      {media.map((item: string) => {
        return (
          <CarouselItem style={{ width: `${itemWidth}px`, height: "640px" }}>
            {item.includes(".mp4") ? (
              <div className="carousel-video-wrapper">
                <ReactPlayer
                  url={item}
                  // pip={true}
                  controls={true}
                  playing={false}
                  width="100%"
                  height="100%"
                  muted
                />
              </div>
            ) : (
              // <div className="carousel-image-wrapper">
              <Image
                className={imageClassNames}
                src={item}
                height={"100%"}
                width={"100%"}
                style={{ objectFit: "cover" }}
              />
              // {/* </div> */}
            )}
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};

export default MediaCarousel;
