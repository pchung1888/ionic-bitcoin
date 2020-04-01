export const getBitcoinPrice = () => { 
  try {
    return fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`).then(res => res.json())
  }
  catch (e) {
    console.error(e)
  }
}