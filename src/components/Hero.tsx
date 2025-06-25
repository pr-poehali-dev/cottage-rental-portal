import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative h-screen hero-bg flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Аренда коттеджей
          <span className="block text-primary">для незабываемого отдыха</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
          Уютные дома на природе с баней, мангалом и всеми удобствами
        </p>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Регион
              </label>
              <Select>
                <SelectTrigger>
                  <Icon name="MapPin" className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Выберите регион" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="moscow">Московская область</SelectItem>
                  <SelectItem value="spb">Ленинградская область</SelectItem>
                  <SelectItem value="tver">Тверская область</SelectItem>
                  <SelectItem value="yaroslavl">Ярославская область</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Заезд</label>
              <Input type="date" className="w-full" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Выезд</label>
              <Input type="date" className="w-full" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Гости</label>
              <Select>
                <SelectTrigger>
                  <Icon name="Users" className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Кол-во" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 гостя</SelectItem>
                  <SelectItem value="4">4 гостя</SelectItem>
                  <SelectItem value="6">6 гостей</SelectItem>
                  <SelectItem value="8">8+ гостей</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white py-3 text-lg font-semibold">
            <Icon name="Search" className="h-5 w-5 mr-2" />
            Найти коттедж
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
