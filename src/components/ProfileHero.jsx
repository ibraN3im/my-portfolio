import React from 'react';
import { Sun, Moon, Mail, Download } from 'lucide-react';
import { profileData } from '../data/profileData';
import { useTheme } from '../contexts/ThemeContext';

function ProfileHero({ activeTab, setActiveTab }) {
    const { isDark, toggleTheme } = useTheme();

    const tabs = [
        { id: 'posts', label: 'Posts' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'resume', label: 'Resume' }
    ];

    return (
        <section id="portfolio_hero">

            <div className="relative">

                <div className={`mode ${isDark ? 'bg-fb-darkCard border-fb-darkBorder' : 'bg-fb-lightCard border-fb-lightBorder'
                    }`}>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-fb-blue rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">IE</span>
                        </div>

                    </div>
                    <div className="flex items-center">
                        <button
                            onClick={toggleTheme}
                            id='mode'
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
                        <small >{isDark ? ' Dark' : ' Light'}</small>
                    </div>
                </div>
                <div className="h-[200px] md:h-[350px] overflow-hidden hero-borders">
                    <img
                        src={profileData.cover}
                        alt="Cover photo showing programming code"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t" />
                </div>
            </div>

            <div className="max-w-profile mx-auto px-4">
                <div className="relative flex flex-col md:flex-row md:items-end gap-2 -mt-20 md:-mt-20 pb-4">
                    <div className="relative mx-auto md:mx-0">
                        <div className="w-[168px] h-[168px] rounded-full border-4 border-fb-dark overflow-hidden bg-fb-darkCard ml-[-110px]">
                            <img
                                src={profileData.avatar}
                                alt={`Profile photo of ${profileData.name}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left md:pb-4">
                        <h3 className="text-3xl font-bold text-fb-lightText">{profileData.name}</h3>
                        <p className="text-fb-secondaryText mt-1">{profileData.bio}</p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end gap-2 md:pb-4">
                        <button
                            onClick={() => setActiveTab('contact')}
                            className="fb-button bg-fb-blue text-white hover:bg-fb-blueHover flex items-center gap-2"
                        >
                            <Mail className="w-4 h-4" />
                            Contact me
                        </button>
                        <a
                            href="/Full-Stack.pdf"
                            className="fb-button  text-fb-lightText hover:bg-fb-darkBorder flex items-center gap-2"
                            aria-label="Download CV"
                            download="Ibrahim_Elnaeem_CV.pdf"
                        >
                            <Download className="w-4 h-4" />
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="tabs-border">
                    <nav className="flex overflow-x-auto" aria-label="Profile sections">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`fb-tab whitespace-nowrap  ${activeTab === tab.id ? 'active' : ''}`}
                                aria-current={activeTab === tab.id ? 'page' : undefined}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default ProfileHero;

