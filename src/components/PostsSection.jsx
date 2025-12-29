
import React from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';
import { profileData } from '../data/profileData';

function PostsSection() {
    const posts = [
        {
            id: 1,
            content: "Passionate Full-Stack Developer with expertise in React, .NET, and modern web technologies. Always learning and building amazing projects!",
            postImage: "https://img-c.udemycdn.com/course/750x422/6305371_d565_7.jpg",
        },
        {
            id: 2,
            content: "Full‑Stack Developer driven by curiosity and innovation. Skilled in React, .NET, and cloud technologies. Building digital experiences that make a real impact.",
            postImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
        },
        {
            id: 3,
            content: "Developer with a love for solving real‑world challenges through technology. Currently exploring smarter systems for education and healthcare to improve accessibility and efficiency.",
            postImage: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&h=400&fit=crop",
        },
        {
            id: 4,
            content: "Turning ideas into scalable, user‑friendly applications. Always learning, always building, always pushing the boundaries of what's possible with modern web development.",
            postImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
        },
        {
            id: 5,
            content: "Focused on delivering elegant solutions through React, .NET, and cloud‑native development. Believer in continuous improvement and the power of great design to transform experiences.",
            postImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        }

    ];

    return (
        <section id="portfolio_posts" className="max-w-profile mx-auto px-4 py-6 space-y-4">
            {posts.map((post) => (
                <div key={post.id} className="fb-card p-4">
                    <div className="post-info flex items-start gap-3">
                        <div className="flex items-center gap-2 row">
                            <div className="w-10 h-10 bg-fb-blue rounded-full flex items-center justify-center flex-shrink-0">
                                <img
                                    src={profileData.avatar}
                                    alt="post photo "
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold text-fb-lightText">{profileData.name}</h3>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="mt-2 text-fb-lightText">{post.content}</p>
                            {post.postImage && (
                                <img src={post.postImage} alt="post image" className="post-image mt-2 h-52 object-cover rounded-lg" />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default PostsSection;
