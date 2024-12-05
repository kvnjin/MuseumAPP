import './App.css'
import ImageContainer from './components/ImageContainer.jsx'
import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const apiUrl = "/.netlify/functions/get-collection";
        const params = new URLSearchParams({
          ps: 100,
        });
        
        const response = await fetch(
          `${apiUrl}?${params.toString()}`
        );
        const result = await response.json();
        setData(result.artObjects || []); 
        setSearchData(result.artObjects || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); 
      }
    };
    fetchData();
  }, []);

  return (
    <>
    {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ImageContainer data={data} />
      )}
    </>
  )
}

export default App
