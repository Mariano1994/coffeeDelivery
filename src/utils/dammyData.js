import coffeeTradicionalImage from "../assets/products/1.png";
import coffeeAmericanolImage from "../assets/products/10.png";
import coffeeCremosoImage from "../assets/products/2.png";
import coffeeGeladoImage from "../assets/products/5.png";
import coffeeLeiteImage from "../assets/products/8.png";
import coffeeLatteImage from "../assets/products/1.png";
import coffeeCapuccinoImage from "../assets/products/3.png";
import coffeeMacchiatoImage from "../assets/products/13.png";
import coffeeMocaccinoImage from "../assets/products/9.png";
import coffeeChocolateImage from "../assets/products/11.png";
import coffeeCubanoImage from "../assets/products/4.png";
import coffeeHavaianoImage from "../assets/products/6.png";
import coffeeArabeImage from "../assets/products/7.png";
import coffeeIrlandesImage from "../assets/products/12.png";

export const DELIVERY_TAX = 300;

export const dammyData = [
  {
    id: crypto.randomUUID(),
    coffee: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    categories: ["Tradicional"],
    price: 600,
    quantity: 1,
    image: coffeeTradicionalImage,
  },

  {
    id: crypto.randomUUID(),
    coffee: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    categories: ["Tradicional"],
    price: 1200,
    quantity: 1,
    image: coffeeAmericanolImage,
  },

  {
    id: crypto.randomUUID(),
    coffee: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    categories: ["Tradicional"],
    price: 1000,
    quantity: 1,
    image: coffeeCremosoImage,
  },

  {
    id: crypto.randomUUID(),
    coffee: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    categories: ["Tradicional", "Gelado"],
    price: 800,
    quantity: 1,
    image: coffeeGeladoImage,
  },
  {
    id: crypto.randomUUID(),
    coffee: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    categories: ["Tradicional", "Com Leite"],
    price: 900,
    quantity: 1,
    image: coffeeLeiteImage,
  },

  {
    id: crypto.randomUUID(),
    coffee: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    categories: ["Tradicional", "Com Leite"],
    price: 1200,
    quantity: 1,
    image: coffeeLatteImage,
  },

  {
    id: crypto.randomUUID(),
    coffee: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    categories: ["Tradicional", "Com Leite"],
    price: 1400,
    quantity: 1,
    image: coffeeCapuccinoImage,
  },

  {
    id: crypto.randomUUID(),
    coffee: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    categories: ["Tradicional", "Com Leite"],
    price: 1300,
    quantity: 1,
    image: coffeeMacchiatoImage,
  },

  {
    id: crypto.randomUUID(),
    coffee: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    categories: ["Especial", "Com Leite"],
    quantity: 1,
    price: 2000,
    image: coffeeChocolateImage,
  },

  {
    id: crypto.randomUUID(),
    coffee: "Cubano",
    description:
      "Bebida gelada de café expresso com rum, creme de leite e hortelã",
    categories: ["Especial", "alcoólico", "Com Leite"],
    price: 2100,
    quantity: 1,
    image: coffeeCubanoImage,
  },

  {
    id: crypto.randomUUID(),
    coffee: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    categories: ["Especial"],
    price: 2300,
    quantity: 1,
    image: coffeeHavaianoImage,
  },

  {
    id: crypto.randomUUID(),
    coffee: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    categories: ["Especial", "alcoólico"],
    price: 2150,
    quantity: 1,
    image: coffeeIrlandesImage,
  },

  {
    id: crypto.randomUUID(),
    coffee: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    categories: ["Especial"],
    price: 2000,
    quantity: 1,
    image: coffeeArabeImage,
  },
  {
    id: crypto.randomUUID(),
    coffee: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    categories: ["Tradiconal", "Com leite"],
    price: 1000,
    quantity: 1,
    image: coffeeMocaccinoImage,
  },
];
