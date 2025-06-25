import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const cottages = [
  {
    id: 1,
    name: "Лесной уют",
    location: "Московская область",
    price: "8 500",
    rating: 4.9,
    reviews: 127,
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    features: ["Баня", "Мангал", "WiFi", "6 гостей"],
  },
  {
    id: 2,
    name: "Дом у озера",
    location: "Тверская область",
    price: "12 000",
    rating: 4.8,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    features: ["Пирс", "Лодка", "Баня", "8 гостей"],
  },
  {
    id: 3,
    name: "Альпийский стиль",
    location: "Ярославская область",
    price: "15 000",
    rating: 4.9,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    features: ["Камин", "Джакузи", "Терраса", "10 гостей"],
  },
  {
    id: 4,
    name: "Русская усадьба",
    location: "Ленинградская область",
    price: "9 800",
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    features: ["Русская баня", "Пруд", "Беседка", "12 гостей"],
  },
];

const FeaturedCottages = () => {
  return (
    <section className="py-16 bg-cottage-brown">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Популярные коттеджи
          </h2>
          <p className="text-xl text-gray-600">Выбор тысяч довольных гостей</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cottages.map((cottage) => (
            <Card
              key={cottage.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <img
                  src={cottage.image}
                  alt={cottage.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700"
                >
                  <Icon name="Heart" className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full">
                  <div className="flex items-center space-x-1 text-sm">
                    <Icon
                      name="Star"
                      className="h-3 w-3 text-yellow-500 fill-current"
                    />
                    <span className="font-medium">{cottage.rating}</span>
                    <span className="text-gray-500">({cottage.reviews})</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{cottage.name}</h3>
                <p className="text-gray-600 text-sm mb-3 flex items-center">
                  <Icon name="MapPin" className="h-3 w-3 mr-1" />
                  {cottage.location}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {cottage.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      {cottage.price} ₽
                    </span>
                    <span className="text-gray-500 text-sm"> / сутки</span>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Показать все коттеджи
            <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCottages;
