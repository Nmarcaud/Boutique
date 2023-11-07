import axios from 'axios';
import data from './product';

export async function seed(collectionName: string) {
  await axios.post(`https://restapi.fr/api/${collectionName}`, data)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
}