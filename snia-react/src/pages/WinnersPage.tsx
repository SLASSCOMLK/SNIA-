import React, { useState, useMemo } from 'react';
import { winnersData } from '../data/winners';
import { WinnerCard } from '../components/WinnerCard';

export const WinnersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState<string>('All');
  const [selectedCategoryGroup, setSelectedCategoryGroup] = useState<string>('All');

  // Helper to categorize items based on their category names
  const getCategoryGroup = (category: string): string => {
    const catLower = category.toLowerCase();
    if (catLower.includes('corporate')) return 'Corporate';
    if (catLower.includes('startup') || catLower.includes('technopreneur')) return 'Startup';
    if (catLower.includes('university')) return 'University';
    if (catLower.includes('school')) return 'School';
    return 'Corporate'; // Default mapping matching corporate tiers
  };

  const filteredWinners = useMemo(() => {
    return winnersData.filter((winner) => {
      const matchesSearch =
        winner.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        winner.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        winner.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPosition =
        selectedPosition === 'All' ||
        (selectedPosition === 'Winners' && winner.position === 'Winner') ||
        (selectedPosition === 'Runners' && winner.position === '1st Runner-Up');

      const matchesGroup =
        selectedCategoryGroup === 'All' ||
        getCategoryGroup(winner.category) === selectedCategoryGroup;

      return matchesSearch && matchesPosition && matchesGroup;
    });
  }, [searchTerm, selectedPosition, selectedCategoryGroup]);

  const sortedWinners = useMemo(() => {
    return [...filteredWinners].sort((a, b) => {
      if (a.category === b.category) {
        if (a.position === 'Winner' && b.position !== 'Winner') return -1;
        if (a.position !== 'Winner' && b.position === 'Winner') return 1;
        return 0;
      }
      const indexA = winnersData.findIndex(w => w.category === a.category);
      const indexB = winnersData.findIndex(w => w.category === b.category);
      return indexA - indexB;
    });
  }, [filteredWinners]);

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-12 px-4 sm:px-6 lg:px-8 font-body relative overflow-hidden">
      {/* Background dynamic blur objects */}
      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-snia-gold/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-snia-blue/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* Header Title Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white mt-2">
            National Level <span className="text-transparent bg-clip-text bg-gradient-to-r from-snia-gold-light via-snia-gold to-snia-gold-dark">Winners Showcase</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-xs sm:text-base leading-relaxed">
            Celebrating bold ideas, scalable innovations, and transformative solutions recognized at the SLASSCOM National Ingenuity Awards.
          </p>
        </div>

        {/* Interactive Search and Filter Options */}
        <div className="bg-slate-900/40 border border-slate-800 p-4 sm:p-6 rounded-3xl backdrop-blur-md space-y-4 shadow-xl">
          <div className="flex flex-col gap-4">

            {/* Search Input bar (Full Width) */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search category, project, organization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-snia-gold/60 focus:ring-1 focus:ring-snia-gold/60 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
              />
            </div>

            {/* Filter Buttons Groups (2 columns on lg+ screens) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Position filter buttons */}
              <div className="flex gap-2">
                {['All', 'Winners', 'Runners'].map((pos) => (
                  <button
                    key={pos}
                    onClick={() => setSelectedPosition(pos)}
                    className={`flex-1 text-[11px] sm:text-xs font-bold py-3 px-4 rounded-xl border transition-all duration-300 ${selectedPosition === pos
                        ? 'bg-snia-gold text-white border-snia-gold shadow-lg shadow-snia-gold/20'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                  >
                    {pos === 'Runners' ? '1st Runners-Up' : pos}
                  </button>
                ))}
              </div>

              {/* Sector filters */}
              <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
                {['All', 'Corporate', 'Startup', 'University', 'School'].map((group) => (
                  <button
                    key={group}
                    onClick={() => setSelectedCategoryGroup(group)}
                    className={`flex-1 min-w-[75px] sm:min-w-0 whitespace-nowrap text-[11px] sm:text-xs font-bold py-3 px-4 rounded-xl border transition-all duration-300 ${selectedCategoryGroup === group
                        ? 'bg-snia-gold text-white border-snia-gold shadow-lg shadow-snia-gold/20'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                  >
                    {group}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Cards mapping */}
        {sortedWinners.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedWinners.map((winner) => (
              <WinnerCard key={winner.id} winner={winner} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/10 border border-dashed border-slate-850 rounded-3xl space-y-4">
            <div className="text-4xl">🔍</div>
            <h3 className="text-lg font-semibold text-slate-350">No Results Match Your Criteria</h3>
            <p className="text-slate-500 text-sm max-w-sm mx-auto">
              Try adjusting your query or resetting filters to view all winners.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedPosition('All');
                setSelectedCategoryGroup('All');
              }}
              className="bg-slate-800 hover:bg-slate-750 text-slate-200 font-semibold py-2.5 px-6 rounded-xl border border-slate-700 text-xs transition-all duration-200"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
