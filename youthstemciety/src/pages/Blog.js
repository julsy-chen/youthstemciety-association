import './Blog.css';

import commentIcon from '../images/speech-bubble.png';

import { useState } from 'react';

export default function Blog() {
const [currentTopic, setCurrentTopic] = useState("Science");

    return(
        <div className="Blog">
            <div className="blog-introduction">
                <h1>OUR BLOGS</h1>
                <p>This is an introduction to the blogs page that will be put right here yup mhm</p>
                <button className="blog-introduction-button">
                    READ MORE
                </button>
            </div>
            <div className="blog-topic-banner">
                    {currentTopic}
            </div>
            <div className="blog-page-body">
                
                <div className="topic-all-blogs">
                    <h2>Our {currentTopic} Blogs</h2>

                </div>
                <div className="blog-content">
                    <div className="blog-title">
                        <h2>
                            Inside the Criminal Mind: A Deep Dive into Forensic Psychology and Its Role in the Justice System
                        </h2>
                    </div>
                    <div className="blog-numbers">
                        <p>XX/XX/XXXX</p>
                        <div className="blog-comments">
                            <p>XX</p>
                            <img className="comment-icon" src={commentIcon} alt="comment icon"/>
                        </div>
                    </div>
                    <div className="blog-text">
                        <p>This is where the blog text will go. It will be a short summary of the blog post, enticing readers to click and read more.</p>
                    </div>
                </div>
                <div className="topics-and-comments">
                    <div className="topic-selection">
                        <h2>Topics</h2>
                        <ul className ="topic-list">
                            <li onClick={() => setCurrentTopic("Science")}>Science</li>
                            <li onClick={() => setCurrentTopic("Technology")}>Technology</li>
                            <li onClick={() => setCurrentTopic("Engineering")}>Engineering</li>
                            <li onClick={() => setCurrentTopic("Mathematics")}>Mathematics</li>
                        </ul>
                    </div>

                </div>
            </div>
            
        </div>
    )
}