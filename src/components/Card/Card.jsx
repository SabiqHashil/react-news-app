const Card = ({ news }) => {
  console.log(news);

  const { updated, title, abstract, media = [] } = news;

  //   console.log(news, "News Data received");
  //   console.log(news?.media[0]?.["media-metadata"][0]);

  const mediaMetaData = media?.[0]?.["media-metadata"] || [];
  const mediaURL = mediaMetaData?.[0]?.url || "";
  const mediaCaption = media?.[0]?.caption || "Media src";

  return (
    <div className="news-card | grid gap-30">
      <div className="news-card-date">{updated}</div>
      <article className="grid gap-40">
        <div className="news-card-content">
          <h3>{title}</h3>
          <p>{abstract}</p>
        </div>
        <div className="news-card-media">
          {mediaURL ? (
            <img src={mediaURL} alt={mediaCaption} />
          ) : (
            "No media found."
          )}
        </div>
      </article>
    </div>
  );
};

export default Card;
