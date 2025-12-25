
import React from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';
import { profileData } from '../data/profileData';

function PostsSection() {
    const posts = [
        {
            id: 1,
            content: "Passionate Full-Stack Developer with expertise in React, .NET, and modern web technologies. Always learning and building amazing projects!"
        },
        {
            id: 2,
            content: "Currently working on innovative solutions for education and healthcare sectors. Love turning complex problems into simple, beautiful designs."
        },
        {
            id: 3,
            content: "Full‑Stack Developer driven by curiosity and innovation. Skilled in React, .NET, and cloud technologies. Building digital experiences that make a real impact."
        },
        {
            id: 4,
            content: "Crafting modern web solutions with clean architecture and thoughtful design. Passionate about creating tools that empower users and simplify their daily lives."
        },
        {
            id: 5,
            content: "Developer with a love for solving real‑world challenges through technology. Currently exploring smarter systems for education and healthcare to improve accessibility and efficiency."
        },
        {
            id: 6,
            content: "Turning ideas into scalable, user‑friendly applications. Always learning, always building, always pushing the boundaries of what’s possible with modern web development."
        },
        {
            id: 7,
            content: "Focused on delivering elegant solutions through React, .NET, and cloud‑native development. Believer in continuous improvement and the power of great design to transform experiences."
        }

    ];

    return (
        <section id="portfolio_posts" className="max-w-profile mx-auto px-4 py-6 space-y-4">
            {posts.map((post) => (
                <div key={post.id} className="fb-card p-4">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-fb-blue rounded-full flex items-center justify-center flex-shrink-0">
                            <img
                                src={profileData.avatar}
                                alt="post photo "
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-fb-lightText">{profileData.name}</h3>
                                </div>
                            </div>
                            <p className="mt-3 text-fb-lightText">{post.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default PostsSection;
