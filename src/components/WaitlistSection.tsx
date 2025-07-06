
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Por favor, introduce tu email",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Enviando email a lista de espera:", email);

    try {
      // Aquí iría la integración con n8n webhook
      // Para este ejemplo, simularemos el envío
      const webhookUrl = "https://tu-webhook-n8n.com/webhook/waitlist";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: "roomit-landing",
        }),
      });

      // Como es una demo, mostraremos siempre éxito
      toast({
        title: "¡Genial!",
        description: "Te has unido a la lista de espera. Te avisaremos cuando estemos listos.",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error al enviar email:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu solicitud. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Sé el primero en <span className="gradient-text">probarlo</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Únete a nuestra lista de espera y te avisaremos cuando Roomit esté disponible. 
            Los primeros usuarios tendrán acceso exclusivo y beneficios especiales.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-primary-500"
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                {isLoading ? "Enviando..." : "Unirme"}
              </Button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-6">
            Al unirte aceptas recibir comunicaciones de Roomit. 
            <a href="#privacy" className="text-primary-600 hover:underline ml-1">
              Política de privacidad
            </a>
          </p>

          {/* Social proof */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-600 mb-4">Ya se han unido más de</p>
            <div className="text-3xl font-bold text-primary-600 mb-2">1,200+</div>
            <p className="text-gray-500">futuros usuarios</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
