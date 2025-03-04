import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    original: "https://img.zumpercdn.com/803925258/1280x960?w=680&fit=crop&dpr=2&q=39&h=383",
    thumbnail: "https://img.zumpercdn.com/803925258/1280x960?w=680&fit=crop&dpr=2&q=39&h=383",
    thumbnailWidth: 320,
    thumbnailHeight: 240,
    caption: "Image 1"
  },
  {
    original: "https://img.zumpercdn.com/803925261/1280x960?w=680&fit=crop&dpr=2&q=39&h=383",
    thumbnail: "https://img.zumpercdn.com/803925261/1280x960?w=680&fit=crop&dpr=2&q=39&h=383",
    thumbnailWidth: 320,
    thumbnailHeight: 240,
    caption: "Image 2"
  },
  {
    original: "https://img.zumpercdn.com/803925263/1280x960?w=680&fit=crop&dpr=2&q=39&h=383",
    thumbnail: "https://img.zumpercdn.com/803925263/1280x960?w=680&fit=crop&dpr=2&q=39&h=383",
    thumbnailWidth: 320,
    thumbnailHeight: 240,
    caption: "Image 3"
  }
];

export default function About() {
  const [index, setIndex] = useState(-1);

  const handleClick = (index) => setIndex(index);

  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={images.map(({ original, width, height }) => ({
          src: original,
          width: 1280, // Or use the image dimensions here
          height: 960,
        }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}