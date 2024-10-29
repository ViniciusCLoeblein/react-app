import axios from 'axios'

export const getDog = async () => {
  const response = await axios.get('https://picsum.photos/id/237/400/600', {
    responseType: 'blob',
  });
  
  return URL.createObjectURL(response.data);
}
