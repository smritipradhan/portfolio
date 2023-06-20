import React from "react";
import styles from "./SocialMedia.module.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const SocialMedia = ({ socialMediaLink }) => {
  const { theme } = useContext(UserContext);

  const handleSocialMediaCLick = (socialMediaLink) => {
    window.open(socialMediaLink, "_blank");
  };
  return (
    <div className={styles.socialMediaContainer}>
      {socialMediaLink.map((socialMediaElement) => {
        return (
          <div className={styles.githubLinks}>
            <img
              src={socialMediaElement.socialMedia}
              alt="github"
              onClick={() =>
                handleSocialMediaCLick(socialMediaElement.socialMediaLink)
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
