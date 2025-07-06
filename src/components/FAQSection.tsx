
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cómo funciona el proceso de verificación?",
      answer: "Verificamos cada habitación y propietario antes de que aparezcan en la plataforma. Esto incluye documentación, fotos reales y visitas cuando es necesario para garantizar la calidad y seguridad."
    },
    {
      question: "¿Qué fees cobra Roomit?",
      answer: "Roomit cobra una pequeña comisión solo cuando se completa una reserva exitosa. No hay costes ocultos ni suscripciones mensuales para los usuarios."
    },
    {
      question: "¿Puedo cancelar mi reserva?",
      answer: "Sí, ofrecemos políticas de cancelación flexibles. Las condiciones específicas dependen del propietario y el tipo de estancia, pero siempre protegemos a nuestros usuarios con políticas justas."
    },
    {
      question: "¿En qué ciudades está disponible Roomit?",
      answer: "Actualmente estamos enfocados en Madrid y Barcelona, con planes de expansión a Valencia, Sevilla y otras ciudades universitarias españolas durante 2024."
    },
    {
      question: "¿Cómo se realizan los pagos?",
      answer: "Los pagos se procesan de forma segura a través de nuestra plataforma. Mantenemos el depósito en garantía hasta que confirmes que todo está correcto con tu habitación."
    },
    {
      question: "¿Qué pasa si tengo problemas con mi habitación?",
      answer: "Nuestro equipo de soporte está disponible 24/7 para ayudarte. Tenemos protocolos específicos para resolver cualquier incidencia de forma rápida y efectiva."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Resolvemos las dudas más comunes sobre Roomit
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a
            href="mailto:hola@roomit.app"
            className="inline-flex items-center px-6 py-3 border border-primary-300 text-primary-700 rounded-xl hover:bg-primary-50 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
