import React from 'react';

export const GlassmorphismPanel: React.FC = () => {
    return (
        <div className="glass-panel w-[600px] h-[450px] rounded-[60px] p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="flex justify-between items-end mb-16">
                <div>
                    <span className="text-orange-accent text-[8px] font-bold tracking-[0.5em] uppercase mb-3 block">Comando Global</span>
                    <h3 className="text-white font-oswald text-4xl font-bold tracking-tight uppercase leading-none">Inteligencia</h3>
                </div>
                <div className="text-right">
                    <p className="text-white/20 text-[9px] font-bold tracking-widest uppercase mb-1">Carga del Sistema</p>
                    <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className={`w-3 h-1 rounded-full ${i < 3 ? 'bg-orange-500' : 'bg-white/10'}`} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/5 p-8 rounded-[40px] border border-white/5 hover:border-orange-500/20 transition-all duration-700">
                    <p className="text-white/30 text-[9px] font-bold tracking-[0.3em] uppercase mb-4">Rendimiento Diario</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-white tracking-tighter">$2,840</span>
                        <span className="text-green-500 text-[10px] font-bold">+12%</span>
                    </div>
                </div>
                <div className="bg-white/5 p-8 rounded-[40px] border border-white/5 hover:border-orange-500/20 transition-all duration-700">
                    <p className="text-white/30 text-[9px] font-bold tracking-[0.3em] uppercase mb-4">Personal Activo</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-white tracking-tighter">14/15</span>
                        <span className="text-white/20 text-[10px] font-bold">LIVE</span>
                    </div>
                </div>
            </div>
            <div className="mt-10 pt-10 border-t border-white/5 flex justify-between items-center">
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500/40 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-orange-500/40 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 rounded-full bg-orange-500/40 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <span className="text-white/10 text-[8px] font-bold tracking-[0.8em] uppercase">STLR_OPERATIONS_HUB</span>
            </div>
        </div>
    );
};
