class Person {
    constructor(name, age, gender, ...argList) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.interests = argList;
    }
    hello() {
      let interestStr = "";
      let outPutStr = "";
      let controlPlural = "";
      const item = this.interests[0];
      const itemLength = item.length;
      outPutStr = `Hello, my name is ${this.name}, my gender is ${this.gender} and I am ${this.age} years old. `;
  
      if (itemLength > 0) {
        if (itemLength > 1) {
          controlPlural = "interests are ";
        }
        if (itemLength === 1) {
          controlPlural = "interest is ";
        }
        interestStr = item.join();
        if (itemLength > 1) {
          const lastString = item.pop();
          interestStr = item.join(", ");
          interestStr += ` and ${lastString}`;
        }
        interestStr = `My ${controlPlural}${interestStr}.`;
  
        return outPutStr + interestStr;
      } else {
        interestStr = `I have no interests.`;
        return `${outPutStr}${interestStr}`;
      }
    }
  }
  module.exports = { Person }