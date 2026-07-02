import React from 'react';
import type { Winner } from '../data/winners';

interface WinnerCardProps {
  winner: Winner;
}

export const WinnerCard: React.FC<WinnerCardProps> = ({ winner }) => {
  const isWinner = winner.position === 'Winner';
  
  return (
    <div className="group relative bg-slate-900/90 border border-slate-800/80 hover:border-snia-gold/40 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden backdrop-blur-md flex flex-col justify-between">
      {/* Background hover light effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-snia-gold/0 via-snia-gold/5 to-snia-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="space-y-4 relative z-10 flex-grow flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-snia-gold uppercase bg-snia-gold/5 border border-snia-gold/10 px-2.5 py-1 rounded-full">
              {winner.category}
            </span>
            
            <span className={`text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border shadow-sm ${
              isWinner 
                ? 'bg-gradient-to-r from-yellow-500/10 to-snia-gold/10 border-yellow-500/30 text-yellow-400' 
                : 'bg-slate-800/80 border-slate-700 text-slate-300'
            }`}>
              {isWinner ? '🏆 Winner' : '🥈 1st Runner-Up'}
            </span>
          </div>
          
          <h3 className="text-base sm:text-lg font-heading font-semibold text-white group-hover:text-snia-gold-light transition-colors duration-200 leading-snug">
            {winner.projectTitle}
          </h3>
        </div>
        
        <div className="border-t border-slate-800/80 pt-4 mt-4 flex justify-between items-center text-xs sm:text-sm">
          <span className="text-slate-400 font-medium truncate max-w-[80%]" title={winner.organization}>
            {winner.organization}
          </span>
          <span className="text-slate-500 font-mono font-bold">
            {winner.year}
          </span>
        </div>
      </div>
    </div>
  );
};
