
import React from 'react';
import { MapPin, Mail, Phone, Globe, Briefcase, GraduationCap, Languages } from 'lucide-react';
import { profileData } from '../data/profileData';
const { aboutData } = profileData;

function AboutSection() {
    return (
        <section id="portfolio_about" className="max-w-profile mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-1 space-y-4">
                    <div className="fb-card p-4">
                        <h2 className="text-xl font-bold text-fb-lightText mb-4">Introduction</h2>
                        <p className="text-fb-secondaryText text-sm leading-relaxed">{aboutData.summary}</p>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-3 text-fb-secondaryText">
                                <Briefcase className="w-5 h-5 text-fb-secondaryText" />
                                <span className="text-sm">{profileData.about.experience[0].title} at <strong className="text-fb-lightText">{profileData.about.experience[0].company}</strong></span>
                            </div>
                            <div className="flex items-center gap-3 text-fb-secondaryText">
                                <GraduationCap className="w-5 h-5 text-fb-secondaryText" />
                                <span className="text-sm">Studied at <strong className="text-fb-lightText">{profileData.about.education[0].school}</strong></span>
                            </div>
                            <div className="flex items-center gap-3 text-fb-secondaryText">
                                <MapPin className="w-5 h-5 text-fb-secondaryText" />
                                <span className="text-sm">Lives in <strong className="text-fb-lightText">{profileData.location}</strong></span>
                            </div>
                            <div className="flex items-center gap-3 text-fb-secondaryText">
                                <Mail className="w-5 h-5 text-fb-secondaryText" />
                                <span className="text-sm">{profileData.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-fb-secondaryText">
                                <Phone className="w-5 h-5 text-fb-secondaryText" />
                                <span className="text-sm">{profileData.phone}</span>
                            </div>
                        </div>
                    </div>
                    <div className="fb-card p-4">
                        <h2 className="text-xl font-bold text-fb-lightText mb-4 flex items-center gap-2">
                            <Languages className="w-5 h-5" />
                            Languages
                        </h2>
                        <div className="space-y-2">
                            {aboutData.languages.map((lang, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <span className="text-fb-lightText text-sm">{lang.name}</span>
                                    <span className="text-fb-secondaryText text-xs bg-fb-darkHover px-2 py-1 rounded">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <div className="fb-card p-4">
                        <h2 className="text-xl font-bold text-fb-lightText mb-4">Skills & Expertise</h2>
                        <div className="flex flex-wrap gap-2">
                            {aboutData.skills.map((skill, index) => (
                                <span key={index} className="skill-badge hover:bg-fb-blue hover:text-white transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-fb-darkBorder">
                            <h3 className="text-lg font-semibold text-fb-lightText mb-3">Professional Summary</h3>
                            <p className="text-fb-secondaryText text-sm leading-relaxed">
                                {aboutData.summary}
                            </p>
                            <p className="text-fb-secondaryText text-sm leading-relaxed mt-3">
                                I believe in writing clean, maintainable code and creating intuitive user experiences.
                                My expertise spans the full development lifecycle, from initial concept through deployment
                                and ongoing maintenance. I thrive in collaborative environments and am passionate about
                                mentoring junior developers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
