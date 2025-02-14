import { useEffect, useState } from "react";
import Loading from "./Loading";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  return <h2>Tours Starter</h2>;
};
export default App;
