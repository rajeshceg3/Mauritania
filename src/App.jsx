import React from 'react';
import { sections } from './data';
import { Layout } from './components/Layout';
import { Section } from './components/Section';

function App() {
  return (
    <Layout>
      <div className="flex flex-col">
        {sections.map((section, index) => (
          <Section key={section.id} section={section} index={index} />
        ))}
      </div>
    </Layout>
  );
}

export default App;
