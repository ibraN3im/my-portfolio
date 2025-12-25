
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

function Header() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <header id="portfolio_header" className={`fixed top-0 left-0 right-0 ${isDark ? 'bg-fb-darkCard border-fb-darkBorder' : 'bg-fb-lightCard border-fb-lightBorder'
            }`}>
            <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-fb-blue rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">IE</span>
                    </div>

                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isDark ? 'hover:bg-fb-darkHover' : 'hover:bg-fb-lightHover'
                            }`}
                        aria-label="Toggle theme"
                    >
                        {isDark ? (
                            <Sun className="w-5 h-5 text-fb-lightText" />
                        ) : (
                            <Moon className="w-5 h-5 text-fb-darkText" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
