
const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Elige ciudad y tipo",
      description: "Selecciona tu ciudad preferida y el tipo de habitación que buscas. Filtra por precio, zona y características de los inquilinos o de la habitación.",
      icon: "🏙️"
    },
    {
      step: "02", 
      title: "Chatea y conecta",
      description: "Nuestro algoritmo te muestra los mejores matches. Chatea directamente con propietarios y agenda visitas.",
      icon: "💬"
    },
    {
      step: "03",
      title: "Firma y entra",
      description: "¡Tu nueva habitación te espera!",
      icon: "🔑"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Cómo <span className="gradient-text">funciona</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Encontrar tu habitación perfecta nunca fue tan fácil. Solo tres pasos te separan de tu nuevo hogar.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full text-xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {step.step}
                </div>
                
                {/* Step content */}
                <div className="bg-gray-50 rounded-2xl p-8 group-hover:bg-primary-50 transition-colors duration-300">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-4">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            ¿Listo para empezar tu búsqueda?
          </p>
          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Únete ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
