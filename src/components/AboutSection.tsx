const AboutSection = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Qué es <span className="gradient-text">Roomit</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Somos la plataforma que revoluciona el alquiler de habitaciones, conectando de forma inteligente a universitarios que buscan compañero de piso</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Espacios verificados</h3>
                  <p className="text-gray-600">
                    Cada habitación pasa por nuestro proceso de verificación para garantizar 
                    que todo esté en orden antes de tu llegada.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Usuarios Verificados</h3>
                  <p className="text-gray-600">
                    Usuarios verificados para garantizar la seguridad y confianza en cada conexión.
                    Tu tranquilidad es nuestra prioridad.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Comunicación directa</h3>
                  <p className="text-gray-600">
                    Chat integrado para hablar directamente con propietarios. 
                    Sin intermediarios, sin complicaciones y completamente privado
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">R</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Roomit App</h4>
                    <p className="text-sm text-gray-500">Tu nueva forma de encontrar habitación</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Santiago de Compostela</span>
                      <span className="text-sm text-primary-600 font-semibold">250€</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-16 h-12 bg-gray-200 rounded"></div>
                      <div className="w-16 h-12 bg-gray-200 rounded"></div>
                      <div className="w-16 h-12 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Coruña</span>
                      <span className="text-sm text-primary-600 font-semibold">200€</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-16 h-12 bg-gray-200 rounded"></div>
                      <div className="w-16 h-12 bg-gray-200 rounded"></div>
                      <div className="w-16 h-12 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;