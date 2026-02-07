import React, { useState } from 'react';
import { sections } from './data';
import { Layout } from './components/Layout';
import { Section } from './components/Section';

function App() {
  const [bgColor, setBgColor] = useState(sections[0].color);

  return (
    <Layout backgroundColor={bgColor}>
      <div className="flex flex-col w-full">
        {sections.map((section, index) => (
          <Section
            key={section.id}
            section={section}
            index={index}
            onInView={() => setBgColor(section.color)}
          />
        ))}
      </div>
    </Layout>
  );
}

export default App;
