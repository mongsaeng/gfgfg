import { useState, useEffect } from "react";
import Movie from "../components/Movie.js"

function Home(){
  const [loading, setLoading] = useState(true);
  const [mv, setMv] = useState([]);
  const getMv = async () => {
    /*
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    */
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
    ).json();
    setMv(json.data.movies);
    setLoading(false); // 로딩이 완료되었기 때문에 false
  }
  useEffect(() => {
    getMv();
  }, []);
  return (
    <div>
      {loading ? (
      <h1>Loading...</h1>
      ) : ( 
        <div>
          {mv.map((mvs) => (
            <Movie
              key={mvs.id}
              id={mvs.id}
              coverImg={mvs.medium_cover_image} 
              title={mvs.title} 
              summary={mvs.summary} 
              genres={mvs.genres} 
            />
          ))}
        </div>
      )}

    </div>
  )
}

export default Home;