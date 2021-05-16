import React from 'react';
import Emoji from './Emoji';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="ProductHunt wrapper block fixed">
                <p>Liked this? Upvote it on Product Hunt!</p>
                <a rel="noopener noreferrer" href="https://www.producthunt.com/posts/own-the-2020s?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-own-the-2020s" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=179562&theme=dark&period=daily" alt="Own the 2020s - This decade, give up time to gain time | Product Hunt Embed" width="250px" height="54px" /></a>
                <p>Have an awesome 2020 and the decade ahead!</p>
            </div>
            <br />
            <br />
            <div className="signature">
                <p>Made with <Emoji symbol="❤️" value="love"/> by Shawn Pereira <a href="https://twitter.com/Incept_shawn">@Incept_shawn</a>
                    <br /><a target="_blank" rel="noopener noreferrer" href="https://ko-fi.com/recurshawn"><Emoji symbol="🚀" value="rocket"/> Support this project!</a></p>
                <a href="https://shawnpereira.me">shawnpereira.me</a>
                <br />2020-2021 © Shawn Pereira | MIT License
        </div>
        </div>
    );
}

export default Footer;
