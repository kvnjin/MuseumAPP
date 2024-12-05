export const handler = async (event, context) => {
    try {
        const params = event.queryStringParameters;
        const apiKey = process.env.VITE_API_KEY;
        const response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&ps=${params.ps}`);
        const result = await response.json();
        // console.log(result);
        return {
            statusCode: 200,
            body: JSON.stringify(result)
        }
    }
    catch (error) {
        console.error("Erreur:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed fetching data' })
        }
    }       
        
}