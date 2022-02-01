menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: ['Test'],
    set appetizers (appetizerIn) {
      this.appetizers.push(appetizerIn);
    },
    get appetizers () {
      return this._courses.appetizer;
    },
    set mains (mainsIn) {
      this.mains.push(mainsIn);
    },
    get mains () {
      return this._courses.mains;
    },
    set desserts (dessertsIn) {
      console.log('Dessert adding: ' + dessertsIn);
      this.desserts.push(dessertsIn);
    },
    get desserts () {
      console.log('Returning Desserts')
      return this.courses.desserts;
    }
  },
  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    var dish = {
      name: dishName,
      price: dishPrice
    }
    console.log(dish, courseName);
    this.courses[courseName] = dish;
    console.log(this.courses['desserts']);
  },
  getRandomDishFromCourse (courseName) {
    dishes = this.courses[courseName];
    index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal () {
    appetizer = this.getRandomDishFromCourse(appetizers);
    main = this.getRandomDishFromCourse(mains);
    dessert = this.getRandomDishFromCourse(desserts);
    return `Youre Meals are ${appetizer}, ${main}, ${dessert} for a total price of: ${appetizer.price + main.price + dessert.price}`
  }
};
menu.addDishToCourse('desserts', 'Grouton', 12.99);
console.log(menu.courses);