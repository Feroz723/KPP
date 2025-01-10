import React, { useState } from 'react';
import { TextTransition } from './components/TextTransition';
import { PhotoBook } from './components/PhotoBook';
import { Celebration } from './components/Celebration';

function App({ onStart }: { onStart: () => void }) {
  const [stage, setStage] = useState<'text' | 'book' | 'celebration'>('text');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-8">
      {stage === 'text' && (
        <TextTransition onComplete={() => setStage('book')} />
      )}
      {stage === 'book' && (
        <PhotoBook onComplete={() => setStage('celebration')} />
      )}
      {stage === 'celebration' && <Celebration />}
    </div>
  );
}

export default App;
