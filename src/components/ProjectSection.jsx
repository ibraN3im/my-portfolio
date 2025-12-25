import React from 'react';
import { ExternalLink, Github, ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { projectsData, profileData } from '../data/profileData';
import Swal from 'sweetalert2';


function ProjectSection() {
    return (
        <section id="portfolio_projects" className="max-w-profile mx-auto px-4 py-6">
            <div className="space-y-4">
                {projectsData.map((project) => (
                    <article key={project.id} className="fb-card overflow-hidden">


                        <div className="p-4 flex items-start gap-3">
                            <img
                                src={profileData.avatar}
                                alt={profileData.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold text-fb-lightText">{profileData.name}</h3>
                                    </div>
                                </div>
                                <br />
                                <div className="font-semibold text-fb-lightText">
                                    <h5 className="font-bold">{project.title}</h5>

                                </div>
                                <p className="mt-2 text-fb-lightText">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="text-xs bg-fb-blue/20 text-fb-blue px-2 py-0.5 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>



                        <div className="px-4 pb-4 flex gap-2">
                            <a
                                href={project.liveUrl}
                                className="flex-1 fb-button bg-fb-blue text-white text-center hover:bg-fb-blueHover flex items-center justify-center gap-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="w-4 h-4" />
                                View Project
                            </a>

                            <button href={project.githubUrl} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center text-fb-lightText rounded-lg px-4 py-2 bg-fb-darkHover bg-fb-darkBorder hover:bg-fb-darkBorder'
                                onClick={() => Swal.fire('Private!', 'This feature is not available for public.', 'info')}
                            ><Github className="w-4 h-4" />
                                GitHub
                            </button>

                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ProjectSection;
