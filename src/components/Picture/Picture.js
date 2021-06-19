import React from "react";

const types = ["avif", "jpg"];

const Picture = ({
  pictureClassName,
  className,
  sources,
  alt,
  src,
  ...rest
}) => {
  return (
    <picture className={pictureClassName}>
      {types.map((type) => (
        <source
          key={type}
          type={`image/${type}`}
          srcset={[`.${type} 1x`, `@2x.${type} 2x`, `@3x.${type} 3x`]
            .map((suffix) => src.replace(".jpg", suffix))
            .join(", ")}
        ></source>
      ))}
      <img className={className} alt={alt} src={src} {...rest} />
    </picture>
  );
};

export default Picture;
