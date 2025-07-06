
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection = ({ children }: PasswordProtectionProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  // Contraseña predeterminada - puedes cambiarla aquí
  const correctPassword = "roomit2024";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Acceso Restringido</h2>
          <p className="mt-2 text-gray-600">Introduce la contraseña para continuar</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduce la contraseña"
              className={isError ? "border-red-500" : ""}
            />
            {isError && (
              <p className="mt-1 text-sm text-red-600">Contraseña incorrecta</p>
            )}
          </div>
          
          <Button type="submit" className="w-full">
            Acceder
          </Button>
        </form>
        
        <div className="text-center text-sm text-gray-500">
          <p>Contacta al administrador si no tienes acceso</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtection;
