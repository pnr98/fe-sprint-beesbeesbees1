const Bee = require('./2-Bee');
// 1) `age` 속성은 `10`이어야 합니다
// 2) `job` 속성은 `find pollen`이어야 합니다
// 3) `color` 속성은 `Bee`로부터 상속받습니다
// 4) `food` 속성은 `Grub`으로부터 상속받습니다 ??
// 5) `eat` 메서드는 `Grub`으로부터 상속받습니다 ??
// 6) `canFly` 속성은 `true`이어야 합니다
// 7) `treasureChest` 속성은 빈 배열 `[]`이어야 합니다
// 8) `forage` 메서드를 통해 `treasureChest` 속성에 보물을 추가할 수 있어야 합니다

class ForagerBee extends Bee { // Bee 상속
  constructor (age, job, color, food, canFly, treasureChest) {
    super(age, job, color, food) // 부모클래스 생성자 함수 상속
    this.age = 10
    this.job = 'find pollen'
    this.canFly = true;
    this.treasureChest = [];
}

  eat() {
    return super.eat()
  }
  forage(treasure) {
    this.treasureChest.push(treasure); // treasureChest 속성에 보물을 추가
  }
}
module.exports = ForagerBee;
