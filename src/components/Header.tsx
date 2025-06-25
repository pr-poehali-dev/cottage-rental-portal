import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Home" className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-gray-800">КоттеджРент</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Каталог
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Услуги
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            О нас
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            <Icon name="Heart" className="h-4 w-4 mr-2" />
            Избранное
          </Button>
          <Button size="sm">
            <Icon name="User" className="h-4 w-4 mr-2" />
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
