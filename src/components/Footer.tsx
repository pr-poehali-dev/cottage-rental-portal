import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Home" className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">КоттеджРент</span>
            </div>
            <p className="text-gray-400 mb-4">
              Лучшие коттеджи для незабываемого отдыха на природе
            </p>
            <div className="flex space-x-3">
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white p-2"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white p-2"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white p-2"
              >
                <Icon name="MessageCircle" className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Каталог</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Московская область
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ленинградская область
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Тверская область
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ярославская область
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Баня и сауна
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Мангальная зона
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Рыбалка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Трансфер
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="h-4 w-4 mr-2" />
                info@cottagerent.ru
              </li>
              <li className="flex items-center">
                <Icon name="MapPin" className="h-4 w-4 mr-2" />
                Москва, ул. Примерная, 123
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 КоттеджРент. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
