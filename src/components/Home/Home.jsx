import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Container from "../Container/Container";

const API_KEY = "pjcAWyAdnmYc1Le8js0Z6UyesqoPDX3x";
const POPULAR_URL =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=";

const Home = () => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${POPULAR_URL}${API_KEY}`);
        const json = await res.json();
        setNewsData(json.results);
        // console.log(json);
      } catch (error) {
        setError(error.message || "Error, could not fetch the data!");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <Container>
        <h1>Data Loading...</h1>
      </Container>
    );
  }

  // console.log(newsData, "<NewsData");

  if (error) {
    return (
      <Container>
        <h1>{error}</h1>
      </Container>
    );
  }

  return (
    <Container>
      {newsData?.map((news) => (
        <Card key={news.id} news={news} />
      ))}
    </Container>
  );
};

export default Home;
