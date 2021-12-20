import { useState, useEffect } from "react";
import { getTodayDate } from './getTodayDate';

function App() {
  const [loading, setLoading] = useState(true);
  const [boxoffice, setBoxOffice] = useState([]);

  // 일별 박스오피스 API 추출
  const apikey = "dd0315aa8755bd29d2fae374027a0297";
  const targetDt = getTodayDate();
  const getMovies = async () => {
    const movies = await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=20211220`);
    const movies_json = await movies.json();
    setBoxOffice(movies_json.boxOfficeResult.dailyBoxOfficeList);
    getGenres();
  }
  const getGenres = async () => {
    for (let i=0; i<boxoffice.length; i++) {
      const movieCd = boxoffice[i].movieCd;
      const getGenre = await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${apikey}&movieCd=${movieCd}`)
      const getGenre_json = await getGenre.json();
      const genres = await getGenre_json.movieInfoResult.movieInfo.genres;
      setBoxOffice(current => {
        const newCurrent = [...current];
        newCurrent[i]['genreNm'] = genres;
        return newCurrent;
      })
    }
    setLoading(false);
  }

  useEffect(() => {
    getMovies()
  }, []);

  console.log('boxoffice는',boxoffice);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
          boxoffice.map((item) => {
            return (
              <div key={item.movieCd}>
                <h3>{item.movieNm}</h3>
                <p>개봉일 : {item.openDt}</p>
                <p>장르 : {item.genreNm.map((g, index) => {
                  return (
                    <span key={index}>
                      {g}, 
                    </span>
                  )
                })}</p>
                <p>누적 관객수 : {Number(item.audiAcc).toLocaleString('ko-KR')}명</p>
              </div>
            )
          })}
    </div>
  );
}

export default App;
