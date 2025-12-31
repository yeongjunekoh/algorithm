function solution(food) {
  let left = '';
  for (let i = 1; i < food.length; i++) {
    left += String(i).repeat((food[i] / 2) | 0);
  }

  let right = '';
  for (let i = food.length - 1; i >= 1; i--) {
    right += String(i).repeat((food[i] / 2) | 0);
  }

  return left + '0' + right;
}