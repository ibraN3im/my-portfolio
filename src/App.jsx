import React, { useState } from 'react';
// import Header from './components/Header';
import ProfileHero from './components/ProfileHero';
import PostsSection from './components/PostsSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function AppContent() {
    const { isDark } = useTheme();
    const [activeTab, setActiveTab] = useState('posts');

    const renderSection = () => {
        switch (activeTab) {
            case 'posts':
                return <PostsSection />;
            case 'about':
                return <AboutSection />;
            case 'projects':
                return <ProjectSection />;
            case 'resume':
                return <ResumeSection />;
            case 'contact':
                return <ContactSection />;
            default:
                return <PostsSection />;
        }
    };

    return (
        <div id="portfolio_app" className={`min-h-screen ${isDark ? 'bg-fb-dark' : 'bg-fb-lightBg'}`}>
            {/* <Header /> */}
            <main>
                <ProfileHero activeTab={activeTab} setActiveTab={setActiveTab} />
                {renderSection()}
            </main>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
