import React from 'react';

interface VariantSelectorProps {
  currentVariant: 'A' | 'B' | 'C';
  onVariantChange: (variant: 'A' | 'B' | 'C') => void;
}

const VariantSelector: React.FC<VariantSelectorProps> = ({ currentVariant, onVariantChange }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-slate-200">
      <span className="text-xs font-bold text-slate-500 ml-2 mr-1">디자인 시안</span>
      {(['A', 'B', 'C'] as const).map((variant) => (
        <button
          key={variant}
          onClick={() => onVariantChange(variant)}
          className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all text-sm ${
            currentVariant === variant
              ? 'bg-slate-900 text-white shadow-md scale-105'
              : 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          {variant}
        </button>
      ))}
    </div>
  );
};

export default VariantSelector;
