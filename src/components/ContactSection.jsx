
import React, { useState } from 'react';
import { Circle, Mail, Linkedin, Github as GithubIcon, MessageCircleIcon } from 'lucide-react';
import { profileData } from '../data/profileData';
import Swal from 'sweetalert2';


function ContactSection() {
    const [messages, setMessages] = useState([]);

    return (
        <section id="portfolio_contact" className="max-w-profile mx-auto px-4 py-6">
            <div className="fb-card overflow-hidden max-w-2xl mx-auto bg-fb-dark rounded-lg">
                <div className="bg-fb-darkHover px-4 py-3 flex items-center justify-between border-b border-fb-darkBorder">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <img
                                src={profileData.avatar}
                                alt={profileData.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <Circle className="w-3 h-3 text-green-500 fill-green-500 absolute -bottom-0.5 -right-0.5 border-2 border-fb-darkHover rounded-full" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-fb-lightText">{profileData.name}</h4>
                            <p className="text-xs text-green-500">Active now</p>
                        </div>
                    </div>

                </div>
                <div className="overflow-y-auto p-3 space-y-4">
                    <div className="flex flex-col items-center py-4">
                        <p className="text-xs text-fb-secondaryText">{profileData.bio}</p>
                    </div>

                    <div>
                        <div>

                            <div className="flex items-end gap-2">
                                <img
                                    src={profileData.avatar}
                                    alt={profileData.name}
                                    className="w-7 h-7 rounded-full object-cover"
                                />
                                <div className="bg-fb-darkHover rounded-2xl px-4 py-2 text-fb-lightText flex items-center gap-2 whitespace-pre-wrap">
                                    <p className="text-fb-lightText text-sm">Welcome to my portfolio! I’m glad you’re here — feel free to message me anytime if you’d like to connect or have any questions.</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-fb-secondaryText m-3">You can message me here</p>
                            </div>


                            <div className="px-4 pb-4 flex flex-wrap items-center gap-2">
                                <a href={'mailto:' + profileData.email} target="_blank" className='text-fb-lightText rounded-lg px-6 py-1 bg-fb-blue'
                                ><Mail className="w-5 h-5" /></a>
                                <a href={'https://wa.me/' + profileData.phone} target="_blank" rel="noopener noreferrer" className='text-fb-lightText rounded-lg px-6 py-1 bg-fb-blue'
                                ><MessageCircleIcon className="w-5 h-5" /></a>
                                <a href={'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' + profileData.linkedin} target="_blank" rel="noopener noreferrer" className='text-fb-lightText rounded-lg px-6 py-1 bg-fb-blue'
                                ><Linkedin className="w-5 h-5" /></a>
                                <button href="#" target="_blank" rel="noopener noreferrer" className='text-fb-lightText rounded-lg px-6 py-1 bg-fb-blue'
                                    onClick={() => Swal.fire('Private!', 'This feature is not available for public.', 'info')}
                                ><GithubIcon className="w-5 h-5" /></button>
                            </div>

                        </div>
                    </div>
                </div>

            </div >
        </section >
    )
};


export default ContactSection;

