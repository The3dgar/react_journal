import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://haciendofotos.com/wp-content/uploads/las-mejores-fotos-de-paisajes-2020.jpg)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title"> El karma bueno</p>
        <p className="journal__entry-content">
          loremadsadsadsadada adsoia adsadmiaod askdnmaods
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
