
const BenefitsSection = () => {
  const benefits = [
    {
      icon: "⚡️",
      title: "Match rápido",
      description: "Nuestro algoritmo conecta inquilinos y propietarios basándose en preferencias y compatibilidad real."
    },
    {
      icon: "🔒",
      title: "Pagos seguros",
      description: "Contratos digitales y sistema de pagos integrado. Tu dinero está protegido hasta confirmar tu estancia."
    },
    {
      icon: "📱",
      title: "Gestión completa",
      description: "Desde la búsqueda hasta el final del contrato, gestiona todo desde una sola app de forma sencilla."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Por qué elegir <span className="gradient-text">Roomit</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hemos diseñado cada detalle pensando en ti. Aquí están las ventajas que nos diferencian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-center">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional stats section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
              <p className="text-gray-600">Satisfacción de usuarios</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">48h</div>
              <p className="text-gray-600">Tiempo medio de match</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <p className="text-gray-600">Soporte disponible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
