class Grub {
  // 1) `age` 속성은 `0`이어야 합니다
  // 2) `color` 속성은 `pink`이어야 합니다
  // 3) `food` 속성은 `jelly`이어야 합니다
  // 4) `eat` 메서드가 존재해야 합니다
  // 5) `eat` 메서드는 `Mmmmmmmmm jelly`를 리턴합니다.
  constructor(age, color, food) {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }

  eat() {
    return 'Mmmmmmmmm jelly'
  }
}

module.exports = Grub;
