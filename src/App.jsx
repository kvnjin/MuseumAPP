import './App.css';
import ImageContainer from './components/ImageContainer.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (searchTerm) => {
    setIsLoading(true);
    try {
      const query = searchTerm ? `&q=${searchTerm}` : '';
      const apiUrl = '/.netlify/functions/get-collection';
      const params = new URLSearchParams({ ps: 100 });
      const response = await fetch(
        `${apiUrl}?${params.toString()}&${query}`
      );
      const result = await response.json();
      setData(result.artObjects || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ImageContainer data={data} onSearch={fetchData} />
      )}
    </>
  );
}

export default App;
