import React from 'react';
import ReactDOM from 'react-dom/client';

// -----------------------------------------------------------------------------
// COMPONENTS: Typography
// -----------------------------------------------------------------------------

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const MainTitle: React.FC<TextProps> = ({ children, className = '' }) => (
  <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-8 leading-tight ${className}`}>
    {children}
  </h1>
);

const SectionIntro: React.FC<TextProps> = ({ children, className = '' }) => (
  <p className={`text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed ${className}`}>
    {children}
  </p>
);

const Subtitle: React.FC<TextProps> = ({ children, className = '' }) => (
  <h2 className={`text-3xl md:text-4xl font-semibold text-gray-900 mt-16 mb-8 tracking-tight ${className}`}>
    {children}
  </h2>
);

const SubSubtitle: React.FC<TextProps> = ({ children, className = '' }) => (
  <h3 className={`text-xl md:text-2xl font-medium text-gray-800 mt-10 mb-4 ${className}`}>
    {children}
  </h3>
);

const BodyText: React.FC<TextProps> = ({ children, className = '' }) => (
  <p className={`text-base md:text-lg text-gray-600 font-light leading-8 max-w-prose mx-auto ${className}`}>
    {children}
  </p>
);

// -----------------------------------------------------------------------------
// COMPONENTS: Section
// -----------------------------------------------------------------------------

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`w-full max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center space-y-8 ${className}`}>
      {children}
    </section>
  );
};

// -----------------------------------------------------------------------------
// COMPONENTS: PlaceholderImage
// -----------------------------------------------------------------------------

interface PlaceholderImageProps {
  label: string;
  height?: string;
  seed?: number;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ label, height = "h-64 md:h-96", seed = 1 }) => {
  const imageUrl = `https://picsum.photos/seed/${seed}/800/600?grayscale`;

  return (
    <div className={`w-full ${height} bg-gray-100 relative overflow-hidden rounded-sm shadow-sm group my-8`}>
      <img 
        src={imageUrl} 
        alt={label}
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 ease-in-out mix-blend-multiply"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-transparent transition-colors duration-500">
        <span className="bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-mono uppercase tracking-widest text-black border border-gray-200 shadow-sm">
          {label}
        </span>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// APP COMPONENT
// -----------------------------------------------------------------------------

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-gray-200 selection:text-black font-sans">
      
      {/* ---------------- PART 1: HEADER ---------------- */}
      <Section className="pt-32 pb-16 min-h-[70vh] justify-center">
        <MainTitle>
          HBr Phase Transformer
        </MainTitle>
        <SectionIntro>
          Investigating the Mechanism of HBr lead Phase Transformation via Its Effect in Photoelectric Properties of Perovskite WLEDs. A breakthrough in stability and efficiency.
        </SectionIntro>
      </Section>

      <div className="w-px h-24 bg-gradient-to-b from-gray-200 to-transparent mx-auto mb-12"></div>

      {/* ---------------- PART 2: BODY ---------------- */}
      
      {/* Team Section */}
      <Section>
        <Subtitle>Our Team</Subtitle>
        <BodyText>
          We are a dedicated group of chemists and engineers pushing the boundaries of material science. Focusing on the subtle interactions within Perovskite structures to unlock next-generation lighting solutions.
        </BodyText>

        <div className="grid md:grid-cols-2 gap-12 mt-12 w-full text-left">
          <div className="p-8 bg-gray-50 rounded-xl">
            <SubSubtitle className="mt-0">Vision</SubSubtitle>
            <BodyText className="mx-0">
              To create stable, highly efficient WLEDs that revolutionize the lighting industry through precise chemical phase control.
            </BodyText>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl">
            <SubSubtitle className="mt-0">Values</SubSubtitle>
            <BodyText className="mx-0">
              Precision, Innovation, Sustainability, and rigorous Scientific Integrity in every experiment we conduct.
            </BodyText>
          </div>
        </div>
      </Section>

      {/* Methodology Section */}
      <Section className="w-full max-w-none bg-gray-900 text-white my-24 py-32">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 tracking-wide">Methodology</h2>
            <p className="text-base md:text-lg text-gray-400 font-light leading-8 max-w-prose mx-auto mb-12">
              Our process involves precursor synthesis, HBr doping, Phase monitoring via XRD, and Photoelectric property evaluation.
            </p>
            <PlaceholderImage label="[Process Flowchart Diagram]" seed={100} height="h-64" />
        </div>
      </Section>

      {/* Product Section */}
      <Section>
        <Subtitle>Our Product</Subtitle>
        
        {/* Model 1 */}
        <div className="w-full mb-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <SubSubtitle>Model 1: The Stabilizer</SubSubtitle>
            <BodyText className="mx-0">
              This variation focuses on maximum phase stability under thermal stress, ensuring longevity in high-power applications. By precisely controlling the HBr stoichiometry, we achieve a lattice structure that resists degradation.
            </BodyText>
          </div>
          <PlaceholderImage label="[Product Model 1 Visualization]" seed={201} />
        </div>

        {/* Model 2 */}
        <div className="w-full mb-24 grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1">
             <PlaceholderImage label="[Product Model 2 Visualization]" seed={202} />
          </div>
          <div className="text-left order-1 md:order-2">
            <SubSubtitle>Model 2: The Emitter</SubSubtitle>
            <BodyText className="mx-0">
              Optimized for maximum lumen output, this model utilizes a specific HBr concentration to enhance radiative recombination, resulting in brighter, more efficient light emission for commercial use.
            </BodyText>
          </div>
        </div>

        {/* Comparison */}
        <div className="w-full p-12 border border-gray-100 rounded-2xl bg-white shadow-lg mt-12">
          <SubSubtitle>Performance Comparison</SubSubtitle>
          <BodyText>
            Demonstrating superior stability and PLQY retention compared to standard iodine-based Perovskites over 1000 hours of continuous operation.
          </BodyText>
          <div className="mt-8">
            <PlaceholderImage label="[Comparison Chart/Graph]" seed={300} height="h-80" />
          </div>
        </div>

        {/* Value */}
        <div className="mt-24 max-w-2xl">
            <SubSubtitle>Core Value</SubSubtitle>
            <BodyText className="text-xl md:text-2xl leading-normal">
              Unlocking the true potential of Perovskite technology by solving the phase instability bottleneck.
            </BodyText>
        </div>
      </Section>

      {/* ---------------- PART 3: FOOTER ---------------- */}
      <footer className="w-full bg-black text-white py-24 flex flex-col items-center justify-center text-center mt-24">
        <h2 className="text-4xl font-bold tracking-tight mb-6">
          ChemTech Lab
        </h2>
        <div className="w-12 h-1 bg-white/20 mb-6 rounded-full"></div>
        <SectionIntro className="text-gray-400 italic">
          Transforming Chemistry into Light.
        </SectionIntro>
        <div className="mt-12 text-xs text-gray-700 font-mono">
          © 2024 Research Group. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);