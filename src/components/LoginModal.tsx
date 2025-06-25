import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика входа через email
    console.log("Вход через email:", { email, password });
    onClose();
  };

  const handleGoogleLogin = () => {
    // Здесь будет логика входа через Google
    console.log("Вход через Google");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Вход в КоттеджРент</DialogTitle>
          <DialogDescription>
            Войдите в свой аккаунт, чтобы получить доступ к избранному и
            бронированию
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Электронная почта
            </label>
            <Input
              id="email"
              type="email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Пароль
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            <Icon name="LogIn" className="h-4 w-4 mr-2" />
            Войти
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              или
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={handleGoogleLogin}
        >
          <Icon name="Chrome" className="h-4 w-4 mr-2" />
          Войти через Google
        </Button>

        <div className="text-center text-sm text-muted-foreground">
          Нет аккаунта?{" "}
          <button
            type="button"
            className="text-primary hover:underline"
            onClick={() => console.log("Регистрация")}
          >
            Зарегистрироваться
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
