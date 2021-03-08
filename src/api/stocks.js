import axios from "axios"

export default axios.create({
  baseURL:`https://api.polygon.io/v1/open-close/AAPL/2020-10-14?unadjusted=true&apiKey=${apiKey}`,
  params: {
    'apiKey': `${process.env.REACT_APP_API_KEY}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
}
})
