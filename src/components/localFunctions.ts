export function getBasketFlowersCount(){
  const tempFlowers = JSON.parse(localStorage.getItem('basketFlowers') ?? '[]')
  return tempFlowers ? tempFlowers.length : 0;
}

