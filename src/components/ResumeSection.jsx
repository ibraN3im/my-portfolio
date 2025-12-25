import React from 'react';
import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';
import { resumeData } from '../data/profileData';

function TimelineItem({ item, icon: Icon }) {
    return (
        <div className="relative pl-10 pb-8 last:pb-0">
            <div className="timeline-line last:hidden" />
            <div className="absolute left-0 top-0 w-10 h-10 bg-fb-blue rounded-full flex items-center justify-center z-10">
                <Icon className="w-5 h-5 text-white" />
            </div>
            <div className="fb-card p-4 ml-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h4 className="font-semibold text-fb-lightText">{item.title}</h4>
                    <span className="flex items-center gap-1 text-xs text-fb-secondaryText bg-fb-darkHover px-2 py-1 rounded w-fit">
                        <Calendar className="w-3 h-3" />
                        {item.period || item.year}
                    </span>
                </div>
                <p className="text-fb-blue text-sm font-medium">{item.institution || item.company || item.issuer}</p>
                {item.description && (
                    <p className="text-fb-secondaryText text-sm mt-2">{item.description}</p>
                )}
            </div>
        </div>
    );
}

function ResumeSection() {
    return (
        <section id="portfolio_resume" className="max-w-profile mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <div className="fb-card p-4 mb-6">
                        <h2 className="text-xl font-bold text-fb-lightText mb-6 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-fb-blue" />
                            Work Experience
                        </h2>
                        <div className="relative">
                            {resumeData.experience.map((item) => (
                                <TimelineItem key={item.id} item={item} icon={Briefcase} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="fb-card p-4">
                        <h2 className="text-xl font-bold text-fb-lightText mb-6 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-fb-blue" />
                            Education
                        </h2>
                        <div className="relative">
                            {resumeData.education.map((item) => (
                                <TimelineItem key={item.id} item={item} icon={GraduationCap} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ResumeSection;
