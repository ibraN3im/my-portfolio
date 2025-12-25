
import React from 'react';
import { profileData } from '../data/profileData';


function Footer() {
    return (
        <footer id="portfolio_footer" className="bg-fb-darkCard flex flex-row items-center justify-center border-t border-fb-darkBorder mt-8">
            <div className="bg-fb-dark/50 py-3 w-full flex items-center justify-center">
                <p className="text-center flex items-center gap-2 text-xs text-fb-secondaryText">
                    Created 2025 by <span className="w-8 h-8 bg-fb-blue rounded-full flex items-center justify-center">
                        <img
                            src={profileData.avatar}
                            alt="post photo "
                            className="w-full h-full object-cover rounded-full"
                        />
                    </span> Ibrahim Elnaeem
                </p>
            </div>
        </footer>
    );
}

export default Footer;





