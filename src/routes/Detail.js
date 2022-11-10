import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

function Detail(){
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [mvInfo, setMvInfo] = useState([]);
  const getMv = useCallback(async () => {
    const json = await ( 
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMvInfo(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMv();
  }, [getMv]);

  return (
    <div>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <h1>Detail</h1>
          <h2>{mvInfo.title}</h2>
          <img src={mvInfo.medium_cover_image} alt="" />
          <div>
            <p>Year : {mvInfo.year}</p>
            <p>Rating : {mvInfo.rating}</p>
            <p>Runtime : {mvInfo.runtime} minutes</p>
            <p>Genres : {mvInfo.genres}</p>
            <p>{mvInfo.description_full}</p>
            <p>{mvInfo.summary}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Detail;