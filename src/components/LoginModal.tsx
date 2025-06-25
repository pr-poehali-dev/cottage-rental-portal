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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Icon from "@/components/ui/icon";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type VerificationStep = "login" | "verification" | "success";

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<VerificationStep>("login");
  const [otpCode, setOtpCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Симуляция отправки кода
    setTimeout(() => {
      console.log("Отправка OTP кода на:", email);
      setIsLoading(false);
      setStep("verification");
    }, 1500);
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Симуляция проверки кода
    setTimeout(() => {
      console.log("Проверка кода:", otpCode);
      setIsLoading(false);
      setStep("success");
      setTimeout(() => {
        onClose();
        resetForm();
      }, 1500);
    }, 1000);
  };

  const handleResendCode = async () => {
    setIsResending(true);
    setTimeout(() => {
      console.log("Повторная отправка кода на:", email);
      setIsResending(false);
    }, 1000);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setOtpCode("");
    setStep("login");
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  const handleGoogleLogin = () => {
    // Здесь будет логика входа через Google
    console.log("Вход через Google");
    onClose();
  };

  const renderLoginStep = () => (
    <>
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

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Icon name="Loader2" className="h-4 w-4 mr-2 animate-spin" />
              Отправка кода...
            </>
          ) : (
            <>
              <Icon name="LogIn" className="h-4 w-4 mr-2" />
              Войти
            </>
          )}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">или</span>
        </div>
      </div>

      <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
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
    </>
  );

  const renderVerificationStep = () => (
    <>
      <DialogHeader>
        <DialogTitle>Подтверждение email</DialogTitle>
        <DialogDescription>
          Мы отправили код подтверждения на {email}
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleVerifyCode} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Введите 6-значный код</label>
          <div className="flex justify-center">
            <InputOTP maxLength={6} value={otpCode} onChange={setOtpCode}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading || otpCode.length !== 6}
        >
          {isLoading ? (
            <>
              <Icon name="Loader2" className="h-4 w-4 mr-2 animate-spin" />
              Проверка...
            </>
          ) : (
            <>
              <Icon name="CheckCircle" className="h-4 w-4 mr-2" />
              Подтвердить
            </>
          )}
        </Button>
      </form>

      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">Не получили код?</p>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleResendCode}
          disabled={isResending}
        >
          {isResending ? (
            <>
              <Icon name="Loader2" className="h-4 w-4 mr-2 animate-spin" />
              Отправка...
            </>
          ) : (
            <>
              <Icon name="RefreshCw" className="h-4 w-4 mr-2" />
              Отправить еще раз
            </>
          )}
        </Button>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => setStep("login")}
      >
        <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
        Назад
      </Button>
    </>
  );

  const renderSuccessStep = () => (
    <>
      <DialogHeader>
        <DialogTitle>Добро пожаловать!</DialogTitle>
        <DialogDescription>Email успешно подтвержден</DialogDescription>
      </DialogHeader>

      <div className="text-center py-6">
        <Icon
          name="CheckCircle"
          className="h-16 w-16 text-green-500 mx-auto mb-4"
        />
        <p className="text-sm text-muted-foreground">
          Вы успешно вошли в систему
        </p>
      </div>
    </>
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {step === "login" && renderLoginStep()}
        {step === "verification" && renderVerificationStep()}
        {step === "success" && renderSuccessStep()}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
