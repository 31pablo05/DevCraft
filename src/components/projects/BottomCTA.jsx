import { Button } from "../ui/Button";
import { ArrowRight, Github } from "lucide-react";

const BottomCTA = () => (
  <div className="text-center z-20">
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto hover:border-cyan-400/50 transition-all duration-300">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-4">
        ¿Tienes un proyecto en mente?
      </h3>
      <p className="text-slate-300 mb-6 text-sm sm:text-base px-2 sm:px-0">
        Me especializo en crear soluciones web personalizadas que impulsan tu negocio.
        Desde el concepto hasta la producción, te acompaño en cada paso del desarrollo.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/542804389134?text=Hola%20Pablo,%20quiero%20consultar%20por%20un%20proyecto%20web"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white px-8 py-3 rounded-full font-medium transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
          >
            <span className="truncate">Hablemos de tu proyecto</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </a>
        <Button
          size="lg"
          variant="outline"
          className="w-full bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-cyan-400 px-8 py-3 rounded-full font-medium transition-all duration-300"
        >
          <Github className="w-5 h-5 mr-2" />
          <span className="truncate">Ver más en GitHub</span>
        </Button>
      </div>
    </div>
  </div>
);

export default BottomCTA;
