import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-purple/10 to-accent-emerald/20" />

      <div className="glass-effect relative z-10 max-w-md rounded-2xl p-10 text-center space-y-6">
        <h1 className="font-bagel text-7xl md:text-8xl text-shadow-strong">404</h1>
        <p className="text-xl text-muted-foreground">
          Página no encontrada
        </p>
        <Link
          to="/"
          className="inline-block rounded-lg px-6 py-3 text-foreground glass-effect gentle-animation"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
