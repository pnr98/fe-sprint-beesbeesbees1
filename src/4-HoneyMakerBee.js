const Bee = require('./2-Bee');
// `age` 속성은 `10`이어야 합니다
// `job` 속성은 `make honey`이어야 합니다
// `color` 속성은 `Bee`로부터 상속받습니다 
// `food` 속성은 `Grub`으로부터 상속받습니다 ??
// `eat` 메서드는 `Grub`으로부터 상속받습니다 ??
// `honeyPot` 속성은 `0`이어야 합니다
// `makeHoney` 메서드는 `honeyPot`에 1씩 추가합니다
// `giveHoney` 메서드는 `honeyPot`에 1씩 뺍니다

class HoneyMakerBee extends Bee {
  constructor(age, job, color, food, honeyPot) {
    super(age, job, color, food) // 부모 클래스 생성자 호출
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  eat() { //`Grub`으로부터 상속
    return super.eat
  }

  makeHoney() {
    return this.honeyPot ++
  }

  giveHoney() {
    return this.honeyPot --
  }
}

module.exports = HoneyMakerBee;
