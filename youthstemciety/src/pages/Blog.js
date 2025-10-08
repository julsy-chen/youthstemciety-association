import './Blog.css';
import blogData from './blogs.json';

import commentIcon from '../images/speech-bubble.png';
import streaks from '../images/streaks.png'

import { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeSanitize from "rehype-sanitize";
import { useNavigate } from 'react-router-dom';

export default function Blog() {
    const [currentTopic, setCurrentTopic] = useState("Science");
    const [currentBlog, setCurrentBlog] = useState(blogData.Science[0]); // Initialize with the first science blog

    const handleTopicClick = (topic) => {
        setCurrentTopic(topic);
        // Reset the current blog to the first one of the newly selected topic
        setCurrentBlog(blogData[topic] ? blogData[topic][0] : null);
    };

    const handleBlogClick = (blog) => {
        setCurrentBlog(blog);
    };

    const navigate = useNavigate();

    useEffect(() => {
    const lastPath = localStorage.getItem('lastPath');
    if (lastPath) {
        navigate(lastPath);
    }
    }, [navigate]);

    return(
        <div className="Blog">
            <div className="blog-banner">
                <img className="backdrop" src={streaks} alt="" />
                <h1>OUR BLOGS</h1>
            </div>
            <div className="blog-description">
                <p>
                    Our student researched and written blogs present an opportunity for learning on both their and our audience’s end! Read them to stay informed, learn new concepts, and explore the world of science, tech, engineering, and math!
                </p>
                <hr className="solid"/>
            </div>
            <div className="blog-page-body">
                <div className="topic-all-blogs">
                    <h2>Our {currentTopic} Blogs</h2>
                    <div>
                        {/* Use the currentTopic state to access the correct array from blogData */}
                        {blogData[currentTopic] && blogData[currentTopic].map((blog, index) => (
                            <li 
                                key={index}
                                // Add an onClick handler to update the current blog when a list item is clicked
                                onClick={() => handleBlogClick(blog)}
                                className={currentBlog && currentBlog.title === blog.title ? "active-blog-item" : ""}
                            >
                                <p>{blog.title}</p>
                            </li>
                        ))}
                    </div>
                </div>
                <div className="blog-content">
                    <div className="blog-title">
                        <h1>
                            {currentBlog?.title}
                        </h1>
                    </div>
                    <div className="blog-numbers">
                        <p>{currentBlog?.date} — {currentBlog?.author}</p>
                    </div>
                    <hr className="solid"/>
                    <div className="blog-text">
                        {currentBlog && (
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm, remarkBreaks]}   // GFM + single \n as <br>
                                rehypePlugins={[rehypeSanitize]}           // XSS safety
                            >
                                {currentBlog.content}
                            </ReactMarkdown>
                        )}
                    </div>

                </div>
                <div className="topics-and-comments">
                    <div className="topic-selection">
                        <h2>Topics</h2>
                        <ul className ="topic-list">
                            <li onClick={() => handleTopicClick("Science")}>
                                <p className={(currentTopic == "Science" ? "current-topic" : "other-topic")}>
                                    Science
                                </p>
                            </li>
                            <li onClick={() => handleTopicClick("Technology")}>
                                <p className={(currentTopic == "Technology" ? "current-topic" : "other-topic")}>
                                    Technology
                                </p>
                            </li>
                            <li onClick={() => handleTopicClick("Engineering")}>
                                <p className={(currentTopic == "Engineering" ? "current-topic" : "other-topic")}>
                                    Engineering
                                </p>
                            </li>
                            <li onClick={() => handleTopicClick("Mathematics")}>
                                <p className={(currentTopic == "Mathematics" ? "current-topic" : "other-topic")}>
                                    Mathematics
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}