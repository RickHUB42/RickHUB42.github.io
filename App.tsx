import React from 'react';
import { Section } from './components/Section';
import { MainTitle, SectionIntro, Subtitle, SubSubtitle, BodyText } from './components/Typography';
import { PlaceholderImage } from './components/PlaceholderImage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-gray-200">
      
      {/* ---------------- PART 1: HEADER ---------------- */}
      <Section className="pt-32 pb-16 min-h-[60vh] justify-center">
        <MainTitle>
          [Product Title: HBr Phase Transformer]
        </MainTitle>
        <SectionIntro>
          [Brief Introduction: Investigating the Mechanism of HBr lead Phase Transformation via Its Effect in Photoelectric Properties of Perovskite WLEDs. A breakthrough in stability and efficiency.]
        </SectionIntro>
      </Section>

      <div className="w-px h-24 bg-gradient-to-b from-gray-200 to-transparent mx-auto mb-12"></div>

      {/* ---------------- PART 2: BODY ---------------- */}
      
      {/* Team Section */}
      <Section>
        <Subtitle>[Our Team]</Subtitle>
        <BodyText>
          [Team Introduction: We are a dedicated group of chemists and engineers pushing the boundaries of material science. Focusing on the subtle interactions within Perovskite structures to unlock next-generation lighting solutions.]
        </BodyText>

        <div className="grid md:grid-cols-2 gap-12 mt-12 w-full">
          <div>
            <SubSubtitle>[Vision]</SubSubtitle>
            <BodyText>
              [Vision Text: To create stable, highly efficient WLEDs that revolutionize the lighting industry through precise chemical phase control.]
            </BodyText>
          </div>
          <div>
            <SubSubtitle>[Values]</SubSubtitle>
            <BodyText>
              [Values Text: Precision, Innovation, Sustainability, and rigorous Scientific Integrity in every experiment we conduct.]
            </BodyText>
          </div>
        </div>
      </Section>

      {/* Methodology Section */}
      <Section className="bg-gray-50 w-full max-w-none">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <Subtitle>[Methodology]</Subtitle>
            <BodyText>
              [Flowchart Text: Our process involves precursor synthesis, HBr doping, Phase monitoring via XRD, and Photoelectric property evaluation.]
            </BodyText>
            <PlaceholderImage label="[Process Flowchart Diagram]" seed={100} height="h-64" />
        </div>
      </Section>

      {/* Product Section */}
      <Section>
        <Subtitle>[Our Product]</Subtitle>
        
        {/* Model 1 */}
        <div className="w-full mb-16">
          <SubSubtitle>[Product Model 1: The Stabilizer]</SubSubtitle>
          <BodyText>
            [Model 1 Text: This variation focuses on maximum phase stability under thermal stress, ensuring longevity in high-power applications.]
          </BodyText>
          <PlaceholderImage label="[Product Model 1 Visualization]" seed={201} />
        </div>

        {/* Model 2 */}
        <div className="w-full mb-16">
          <SubSubtitle>[Product Model 2: The Emitter]</SubSubtitle>
          <BodyText>
            [Model 2 Text: Optimized for maximum lumen output, this model utilizes a specific HBr concentration to enhance radiative recombination.]
          </BodyText>
          <PlaceholderImage label="[Product Model 2 Visualization]" seed={202} />
        </div>

        {/* Comparison */}
        <div className="w-full p-8 border border-gray-100 rounded-xl bg-white shadow-sm mt-12">
          <SubSubtitle>[Performance Comparison]</SubSubtitle>
          <BodyText>
            [Comparison Text: Demonstrating superior stability and PLQY retention compared to standard iodine-based Perovskites over 1000 hours of operation.]
          </BodyText>
          <PlaceholderImage label="[Comparison Chart/Graph]" seed={300} height="h-80" />
        </div>

        {/* Value */}
        <div className="mt-16">
            <SubSubtitle>[Core Value]</SubSubtitle>
            <BodyText className="text-xl">
              [Value Text: Unlocking the true potential of Perovskite technology by solving the phase instability bottleneck.]
            </BodyText>
        </div>
      </Section>

      {/* ---------------- PART 3: FOOTER ---------------- */}
      <footer className="w-full bg-black text-white py-24 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-6">
          [Team Name: ChemTech Lab]
        </h2>
        <div className="w-12 h-1 bg-white/20 mb-6"></div>
        <SectionIntro className="text-gray-400 italic">
          [Mission Slogan: Transforming Chemistry into Light.]
        </SectionIntro>
        <div className="mt-12 text-xs text-gray-700 font-mono">
          © 2024 Research Group. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
};

export default App;