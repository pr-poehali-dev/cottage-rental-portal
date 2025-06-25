import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const testimonials = [
  {
    id: 1,
    name: "Анна Петрова",
    location: "Москва",
    rating: 5,
    text: "Невероятно уютный коттедж! Провели выходные с семьей, дети в восторге от бани и мангала. Обязательно вернемся еще!",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b1d7?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Михаил Сидоров",
    location: "Санкт-Петербург",
    rating: 5,
    text: "Отличное место для корпоратива! Большой дом, все удобства, красивая природа. Коллеги были в восторге от рыбалки.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Елена Козлова",
    location: "Тверь",
    rating: 5,
    text: "Романтический уикенд удался на славу! Камин, джакузи, потрясающий вид на озеро. Сервис на высшем уровне!",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 cottage-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Отзывы наших гостей
          </h2>
          <p className="text-xl text-white/90">
            Более 10 000 довольных клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white/95 backdrop-blur-sm border-0 shadow-xl"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="h-4 w-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm flex items-center">
                      <Icon name="MapPin" className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
