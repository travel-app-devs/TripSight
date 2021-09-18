import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_POSTTWO } from "../../utils/queries";
import style from "./style.module.css";

const ViewPost = () => {
  const code = useParams().postId;

  console.log(useParams());
  const { data } = useQuery(QUERY_POSTTWO, { variables: { _id: code } });
  console.log(QUERY_POSTTWO);

  console.log("query data", data);

  const userData = data?.post || [];
  console.log(userData);

  return (
    <div>
      <div className={style.viewPostContainer}>
        <div className={style.viewPostTextSection}>
          <h2>{userData.title}</h2>
          <p>{userData.textBody}</p>
        </div>
        <div className={style.viewPostImageContainer}>
        <img src={userData.titleImageLink} />
      </div>
      </div>
      <div className={style.viewPostVideoContainer}>
        <iframe
          id={style.videoPlayer}
          src={userData.postVid}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ViewPost;
