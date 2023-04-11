import React from "react";
import Img from "../../../../images/IMG_9937.JPG";

const ProfileOrganisasi = () => {
  return (
    <div className="mt-3 m-1" style={{ height: "400px" }}>
      <figure className="image is-4by5">
        <img src={Img} alt="image" style={{ height: "400px" }} />
      </figure>
    </div>
  );
};

export default ProfileOrganisasi;
