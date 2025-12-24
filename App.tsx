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
          [Product Title]
        </MainTitle>
        <SectionIntro>
          [Brief Introduction]
        </SectionIntro>
      </Section>

      <div className="w-px h-24 bg-gradient-to-b from-gray-200 to-transparent mx-auto mb-12"></div>

      {/* ---------------- PART 2: BODY ---------------- */}
      
      {/* Team Section */}
      <Section>
        <Subtitle>[Our Team]</Subtitle>
        <BodyText>
          [Team Introduction]
        </BodyText>

        <div className="grid md:grid-cols-2 gap-12 mt-12 w-full">
          <div>
            <SubSubtitle>[Vision]</SubSubtitle>
            <BodyText>
              [Vision Text]
            </BodyText>
          </div>
          <div>
            <SubSubtitle>[Values]</SubSubtitle>
            <BodyText>
              [Values Text]
            </BodyText>
          </div>
        </div>
      </Section>

      {/* Methodology Section */}
      <Section className="bg-gray-50 w-full max-w-none">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <Subtitle>[Methodology]</Subtitle>
            <BodyText>
              [Flowchart Text]
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
            [Model 1 Text]
          </BodyText>
          <PlaceholderImage label="[Product Model 1 Visualization]" seed={201} />
        </div>

        {/* Model 2 */}
        <div className="w-full mb-16">
          <SubSubtitle>[Product Model 2: The Emitter]</SubSubtitle>
          <BodyText>
            [Model 2 Text]
          </BodyText>
          <PlaceholderImage label="[Product Model 2 Visualization]" seed={202} />
        </div>

        {/* Comparison */}
        <div className="w-full p-8 border border-gray-100 rounded-xl bg-white shadow-sm mt-12">
          <SubSubtitle>[Performance Comparison]</SubSubtitle>
          <BodyText>
            [Comparison Text]
          </BodyText>
          <PlaceholderImage label="[Comparison Chart/Graph]" seed={300} height="h-80" />
        </div>

        {/* Value */}
        <div className="mt-16">
            <SubSubtitle>[Core Value]</SubSubtitle>
            <BodyText className="text-xl">
              [Value Text]
            </BodyText>
        </div>
      </Section>

      {/* ---------------- PART 3: FOOTER ---------------- */}
      <footer className="w-full bg-black text-white py-24 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-6">
          [Team Name]
        </h2>
        <div className="w-12 h-1 bg-white/20 mb-6"></div>
        <SectionIntro className="text-gray-400 italic">
          [Mission Slogan]
        </SectionIntro>
        <div className="mt-12 text-xs text-gray-700 font-mono">
          © 2025 Machine Not Learning Group. 0 Right Reserved.
        </div>
      </footer>

    </div>
  );
};

export default App;