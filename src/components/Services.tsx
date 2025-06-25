import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Flame",
    title: "Русская баня",
    description: "Настоящая баня на дровах с вениками и травяными чаями",
  },
  {
    icon: "ChefHat",
    title: "Мангальная зона",
    description: "Оборудованное место для барбекю с посудой и принадлежностями",
  },
  {
    icon: "Fish",
    title: "Рыбалка",
    description: "Доступ к водоемам, снасти и лицензии на рыбную ловлю",
  },
  {
    icon: "Bike",
    title: "Активный отдых",
    description: "Велосипеды, лыжи, снегоходы и другой спортивный инвентарь",
  },
  {
    icon: "Car",
    title: "Трансфер",
    description: "Организуем доставку от ж/д станций и аэропортов",
  },
  {
    icon: "ShoppingCart",
    title: "Доставка продуктов",
    description: "Привезем свежие продукты прямо к вашему приезду",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Дополнительные услуги
          </h2>
          <p className="text-xl text-gray-600">
            Все для вашего комфорта и удовольствия
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Icon
                  name={service.icon}
                  className="h-8 w-8 text-primary group-hover:text-white"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
