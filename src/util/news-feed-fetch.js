import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = (sport, league) => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const {data: response} = await axios.get(`https://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/news?limit=10`);
        setNews(response);
        console.log(response)
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, [sport, league]);

  return {
    news,
    loading,
  };
};

export default useFetchData;