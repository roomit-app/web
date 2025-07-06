import { useState } from "react";

const PasswordProtection = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const correctPassword = "roomit_app_soon";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  if (isAuthenticated) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white px-4">
      <div className="bg-white/5 p-8 md:p-10 rounded-2xl shadow-xl text-center max-w-md w-full backdrop-blur-sm">
        <img
          src="/public/lovable-uploads/Roomly (500 x 250 px).png" // asegúrate que esté en /public/logo.png
          alt="Roomit logo"
          className="w-40 mx-auto mb-6"
        />

        <h1 className="text-2xl md:text-3xl font-extrabold mb-2">Roomit está llegando...</h1>
        <p className="text-white/90 mb-6">Introduce la contraseña para acceder al contenido privado</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <label htmlFor="password" className="block text-sm font-medium text-white/80">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="roomit_app_soon"
            className={`w-full px-4 py-2 rounded-lg text-black placeholder-gray-400 focus:outline-none ${
              isError ? "border border-red-500" : ""
            }`}
          />
          {isError && <p className="text-sm text-red-300">Contraseña incorrecta</p>}

          <button
            type="submit"
            className="w-full bg-[#00c6ff] hover:bg-[#00a3d6] text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Acceder
          </button>
        </form>

        <p className="text-sm text-white/50 mt-6">Contacta al administrador si no tienes acceso</p>
      </div>
    </div>
  );
};

export default PasswordProtection;
