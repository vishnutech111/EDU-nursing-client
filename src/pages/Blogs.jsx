import React, { useEffect, useState } from "react";
import "./Blogs.css";
import axios from "axios";
import { motion } from "framer-motion";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="blogs-container">

      {/* HERO */}
      <div className="blogs-hero">
        <div className="overlay"></div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          EduNursing Blogs
        </motion.h1>
      </div>

      {/* BLOG GRID */}
      <div className="blogs-grid">
        {blogs.length === 0 ? (
          <p className="no-data">No Blogs Available</p>
        ) : (
          blogs.map((blog) => (
            <motion.div
              className="blog-card"
              key={blog._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={blog.image} alt="blog" />
              
              <div className="blog-content">
                <h3>{blog.title}</h3>
                
                <p className="date">
                  {new Date(blog.createdAt).toDateString()}
                </p>

                <p>
                  {blog.content.substring(0, 120)}...
                </p>

                <button className="read-more">Read More</button>
              </div>
            </motion.div>
          ))
        )}
      </div>

    </div>
  );
};

export default Blogs;