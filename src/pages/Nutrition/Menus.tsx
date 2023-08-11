export type Menu = {
  title: string;
  comment?: string;
  breakfast: string;
  midMorningSnack: string;
  lunch: Meal[];
  midAfternoonSnack: string;
  dinner: Meal[];
  drinks?: string;
};

type Meal = {
  meal: string;
  pudding?: string;
};
const menus: Menu[] = [
  {
    title: "Menu: Week 1",
    breakfast: "Toast/Cereals/milk/water to drink",
    midMorningSnack: "Fresh Fruit/savoury/Milk/Water to drink",
    lunch: [
      {
        meal: "Cheesy pasta bake with mixed Vegetables",
        pudding: "Fruit Yoghurt",
      },
      {
        meal: "Cottage Pie & vegetables",
        pudding: "Fruit Jelly",
      },
      {
        meal: "Smoked salmon, boiled rice & vegetables",
        pudding: "Fruit salad",
      },
      {
        meal: "Tuna Pasta bake",
        pudding: "Peach Slices",
      },
      {
        meal: "Beef/vegetable Lasagne",
        pudding: "Sponge Cake & Custard",
      },
    ],
    midAfternoonSnack: "Fresh Fruit/Savoury/Milk/Water to drink",
    dinner: [
      {
        meal: "Cheese toastie & Vegetable sticks",
        pudding: "Melon",
      },
      {
        meal: "Vegetable Soup with Bread",
        pudding: "Pears",
      },
      {
        meal: "Fish Fingers, beans & toast",
        pudding: "Apples",
      },
      {
        meal: "Mini Pizzas & Garlic bread",
        pudding: "Bananas",
      },
      {
        meal: "Sausages, creamy mash & Baked beans",
        pudding: "Fruit Yoghurt",
      },
    ],
    drinks:
      "The children will have water with their meals. Water is available throughout the day for children.",
  },
  {
    title: "Menu: Week 2",
    breakfast: "Toast/Cereals/milk/water to drink",
    midMorningSnack: "Fresh Fruit/savoury/Milk/Water to drink",
    lunch: [
      {
        meal: "Macaroni Cheese & Garlic Bread",
        pudding: "Pear and Ice- Cream",
      },
      {
        meal: "Roast Chicken, Roast Potatoes, Vegetables & Gravy",
        pudding: "Fruit Yoghurt",
      },
      {
        meal: "Fish Pie & Broccoli",
        pudding: "Fruit salad",
      },
      {
        meal: "Caribbean Chicken, Plantain & Rice",
        pudding: "Fruit Scones",
      },
      {
        meal: "Salmon Pasta with Peas",
        pudding: "Fruit Yoghurt",
      },
    ],
    midAfternoonSnack: "Fresh Fruit/Savoury/Milk/Water to drink",
    dinner: [
      {
        meal: "Tomato Soup with Bread & Butter",
        pudding: "Apples",
      },
      {
        meal: "Chicken Nuggets, Potato Wedges & Spaghetti",
        pudding: "Ice-Cream & Jelly",
      },
      {
        meal: "Fish Fingers, beans & toast",
        pudding: "Apples",
      },
      {
        meal: "Baked Beans on Toast",
        pudding: "Pears",
      },
      {
        meal: "Tomato Pasta with Cheese",
        pudding: "Apple pie & custard",
      },
    ],
    drinks:
      "The children will have water with their meals. Water is available throughout the day for children.",
  },
  {
    title: "Menu: Week 3",
    breakfast: "Toast/Cereals/milk/water to drink",
    midMorningSnack: "Fresh Fruit/savoury/Milk/Water to drink",
    lunch: [
      {
        meal: "Jacket Potato, Baked Beans, Tuna & Cheese",
        pudding: "Fruit Yoghurt",
      },
      {
        meal: "Pasta & Meatballs",
        pudding: "Homemade jam tarts",
      },
      {
        meal: "Chicken Noodle Stir Fry",
        pudding: "Homemade Apple Pie & Custard",
      },
      {
        meal: "Chinese Style Sweet & Sour Chicken with Boiled Rice",
        pudding: "Sliced Peach",
      },
      {
        meal: "Fishcakes & Potato Wedgies with Vegetables",
        pudding: "Jelly",
      },
    ],
    midAfternoonSnack: "Fresh Fruit/Savoury/Milk/Water to drink",
    dinner: [
      {
        meal: "Waffles & Spaghetti",
        pudding: "Gingerbread Biscuits",
      },
      {
        meal: "Mexican Tortilla Wraps with Salad",
        pudding: "Ice-Cream & JellyIce Cream & Fruit Salad",
      },
      {
        meal: "Homemade Pitta Pizzas",
        pudding: "Fruit Salad",
      },
      {
        meal: "Sausages and Chips & Baked Beans",
        pudding: "Angel Delight",
      },
      {
        meal: "Tuna & Cheese Pittas with Veg sticks",
        pudding: "Fruit Yogurt",
      },
    ],
    drinks:
      "The children will have water with their meals. Water is available throughout the day for children.",
  },
  {
    title: "Menu: Week 4",
    breakfast: "Toast/Cereals/milk/water to drink",
    midMorningSnack: "Fresh Fruit/savoury/Milk/Water to drink",
    lunch: [
      {
        meal: "Spaghetti Bolognese & Garlic Bread",
        pudding: "Carrot cake ",
      },
      {
        meal: "Sausage, Mash, Vegetables & Gravy",
        pudding: "Fruit Yogurt",
      },
      {
        meal: "Mild Indian Chicken Curry & Rice with Vegetables",
        pudding: "Orange segments",
      },
      {
        meal: "Fishcakes with Potato Wedgies",
        pudding: "Ice cream & Fruit Salad",
      },
      {
        meal: "Chilli Con Carne with Boiled Rice",
        pudding: "Fruit salad",
      },
    ],
    midAfternoonSnack: "Fresh Fruit/Savoury/Milk/Water to drink",
    dinner: [
      {
        meal: "Cheese & Tomato Pizza",
        pudding: "Jelly",
      },
      {
        meal: "Egg Noodles",
        pudding: "Strawberry Cheesecake",
      },
      {
        meal: "Sausage Pasta",
        pudding: "Banana Slices",
      },
      {
        meal: "Seasoned Rice",
        pudding: "Fruit Yoghurt",
      },
      {
        meal: "Potato Waffles and Baked Beans",
        pudding: "Homemade Cupcakes",
      },
    ],
    drinks:
      "The children will have water with their meals. Water is available throughout the day for children.",
  },
  {
    title: "Menu: Baby’s Weaning Stage 1 Semi Purée/Purée",
    comment: "Weaning before 4 months of age is never recommended",
    breakfast: "Porridge/Weetabix/Milk/Water",
    midMorningSnack: "Fresh Fruit/savoury/Milk/Water to drink",
    lunch: [
      {
        meal: "Carrots",
      },
      {
        meal: "Puréed Apple",
      },
      {
        meal: "Butternut squash",
      },
      {
        meal: "Swede",
      },
      {
        meal: "Puréed banana",
      },
    ],
    midAfternoonSnack: "Fresh Fruit/Savoury/Milk/Water to drink",
    dinner: [
      {
        meal: "Puréed Mango",
      },
      {
        meal: "Potato",
      },
      {
        meal: "Puréed Peach",
      },
      {
        meal: "Sweet potato",
      },
      {
        meal: "Butternut Squash",
      },
    ],
  },
  {
    title: "Menu: Baby’s Weaning Stage 2 Semi Purée/Purée",
    comment: "Weaning before 4 months of age is never recommended",
    breakfast: "Porridge/Weetabix/Milk/Water",
    midMorningSnack: "Fresh Fruit/savoury/Milk/Water to drink",
    lunch: [
      {
        meal: "Peas, Cauliflower & Pasta",
        pudding: "Puréed Melon",
      },
      {
        meal: "Rice & Broccoli",
        pudding: "Puréed Pear",
      },
      {
        meal: "Butternut squash & Pasta",
        pudding: "Puréed Apple",
      },
      {
        meal: "Swede, Green Beans & Rice",
        pudding: "Puréed Peach",
      },
      {
        meal: "Rice & Carrots",
        pudding: "Puréed Banana",
      },
    ],
    midAfternoonSnack: "Fresh Fruit/Savoury/Milk/Water to drink",
    dinner: [
      {
        meal: "Sweet Potato & Potato",
        pudding: "Puréed Pear",
      },
      {
        meal: "Potato & peas",
        pudding: "Puréed Melon",
      },
      {
        meal: "Rice & Courgette",
        pudding: "Puréed Peach",
      },
      {
        meal: "Cauliflower & sweet potato",
        pudding: "Puréed Banana",
      },
      {
        meal: "Carrots potato & Peas",
        pudding: "Puréed Apple",
      },
    ],
  },
];

export default menus;
