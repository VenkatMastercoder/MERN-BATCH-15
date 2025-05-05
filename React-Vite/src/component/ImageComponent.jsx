import Image from "../assets/image.webp";
import { carImageLink } from "../assets/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageComponent = () => {
  return (
    <>
      <p>Image Component</p>

      <p>Image Via Local Storage</p>
      <img src={Image} alt="local-image" />

      <p>Image Via CDN Storage</p>
      <LazyLoadImage
        alt={carImageLink}
        effect="blur"
        wrapperProps={{
          // If you need to, you can tweak the effect transition using the wrapper style.
          style: { transitionDelay: "0.5s" },
        }}
        src={carImageLink}
      />
    </>
  );
};

export default ImageComponent;
