const Grub = require('./1-Grub');
// 1) `age` 속성은 `5`이어야 합니다
// 2) `color` 속성은 `yellow`이어야 합니다
// 3) `food` 속성은 Grub으로부터 상속받습니다
// 4) `eat` 메서드는 Grub으로부터 상속받습니다
// 5) `job` 속성은 `Keep on growing`이어야 합니다

class Bee extends Grub {   // Grub 상속
  constructor(age, color) {
    super(age, color, Grub.prototype.food) // 부모 클래스의 생성자 호출
      this.age = 5  // 속성값 변경
      this.color = 'yellow' 
    this.job = `Keep on growing` // 새로운 속성 생성
  }

  eat() {
    return super.eat(); // 부모 클래스 메서드 상속
  }
}

module.exports = Bee;
