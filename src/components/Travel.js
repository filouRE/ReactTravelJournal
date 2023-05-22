import React from "react";

export default function Travel({
  imageUrl,
  title,
  location,
  googleMapsUrl,
  startDate,
  description,
  endDate
}) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={imageUrl} alt={title} width={206.25} height={277.2} />
      </div>
      <div className="card__text">
        <div className="card__header_infos">
          <div className="card__header_infos__location">
            <img src="/location.svg" alt="location icon" />
            <p className="card__location">{location.toUpperCase()}</p>
          </div>

          <a href={googleMapsUrl} className="card__googlemap">
            View on Google Maps
          </a>
        </div>
        <h1 className="card__title">{title}</h1>
        <p className="card__date">{`${startDate} - ${endDate}`}</p>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}
