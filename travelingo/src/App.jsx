import React from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
export function App() {
  return <div className="flex w-full min-h-screen bg-slate-50 p-5">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg flex">
        <Sidebar />
        <MainContent />
      </div> {/* App created */}
    </div>;
}