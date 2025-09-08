
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faLemon } from "@fortawesome/free-regular-svg-icons";
import { faCarrot, faLeaf, faPepperHot, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPepperHot, faLeaf, faSeedling, faCarrot, faLemon, faCircle);

const foods = [
  { name: "Habanero Pepper", icon: <FontAwesomeIcon icon={faPepperHot} className="w-12 h-12" />, highlight: true },
  { name: "Kale", icon: <FontAwesomeIcon icon={faLeaf} className="w-12 h-12" />, highlight: false },
  { name: "Tomatoes", icon: <FontAwesomeIcon icon={faLemon} className="w-12 h-12" />, highlight: false },
  { name: "Broccoli & Cauliflower", icon: <FontAwesomeIcon icon={faSeedling} className="w-12 h-12" />, highlight: false },
  { name: "Lettuce", icon: <FontAwesomeIcon icon={faLeaf} className="w-12 h-12" />, highlight: false },
  { name: "Cassava", icon: <FontAwesomeIcon icon={faCarrot} className="w-12 h-12" />, highlight: false },
];

export const PopularFoods = () => {
  return (
    <section id="products" className="py-24 bg-secondary">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm uppercase tracking-widest text-gray-400">POPULAR FOODS</p>
        <h3 className="text-4xl font-bold my-4 text-white">Quality Fruits & Vegetables</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
          {foods.map((food) => (
            <div
              key={food.name}
              className={`p-8 rounded-lg flex flex-col items-center justify-center transition-colors ${
                food.highlight
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-primary/80"
              }`}
            >
              {food.icon}
              <p className="mt-4 font-semibold">{food.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};