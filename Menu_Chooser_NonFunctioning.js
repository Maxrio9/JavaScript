menu = {
  _courses: {
    appetizers: ['Appetizer Test'],
    mains: ['Mains Test'],
    desserts: ['Desserts Test'],
    set appetizers (appetizerIn) {
      this._courses.appetizers.push(appetizerIn);
      console.log(`${appetizerIn} has been added to the appetizers menu`);
    },
    get appetizers () {
      return this._courses.appetizers;
    },
    set mains (mainsIn) {

    },
    get mains () {
      return this._courses.mains;
    },
    set desserts (dessertsIn) {
      
    },
    get desserts () {
      return this._courses.desserts;
    }
  },
  get courses () {
    {
      
    };
    return ;
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    var dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
  },
  generateRandomMeal () {
    appetizer = this.getRandomDishFromCourse(appetizers);
    main = this.getRandomDishFromCourse(mains);
    dessert = this.getRandomDishFromCourse(desserts);
    return `Youre Meals are ${appetizer}, ${main}, ${dessert} for a total price of: ${appetizer.price + main.price + dessert.price}`;
  }
};
menu.addDishToCourse('appetizers', 'Test', 5);
menu.addDishToCourse('desserts', 'Grouton', 12.99);
console.log(menu.courses);