import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';


const Blogs = () => {

    const banner = {

        backgroundColor: '#2095fc07',
        backgroundBlendMode: 'darken',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://home-service24.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <>

            <Header />

            <div>
                <Box style={banner} sx={{ flexGrow: 1, paddingTop: 5, paddingBottom: 5 }}>
                    <Container>
                        <Grid container spacing={2}>

                            <Grid item xs={12} md={7} sx={{ display: "flex", justifyContent: "center" }}>
                                <img style={{ width: '70%', padding: 15, }} src='https://i.ibb.co/ZKLS40f/slide1.png' alt="" />
                            </Grid>

                            <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "flex-start", alignItems: 'center', textAlign: "left", paddingY: 4 }}>
                                <Box>
                                    <Typography className='text-primary' variant="h5">
                                        We are proving all type of cleaning solutions for every small and big businesses.    </Typography>

                                    <Typography paragraph className='text-main' sx={{ marginTop: 2 }} >
                                        Booking professional picture hangers through Handy gives you complete control over when and where they turn up. It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its
                                    </Typography>


                                    <Link to='/services' uppercase='true'>
                                        <button className=" btn-main py-1 px-3 mt-5">Get Our Service</button>
                                    </Link>
                                </Box>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>
            </div>

            <div className="mb-15 max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <Typography sx={{ color: "#2097fc", mb: 2, mt: 10, textAlign: 'center' }} variant="h6" component="div">
                    Blogs
                </Typography>
                <Typography sx={{ textAlign: 'center' }} variant="h4" component="div">
                    Lets Learn More
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-5">

                    {
                        blogs.map(blog => {
                            return (
                                <div key={blog._id} className="rounded overflow-hidden shadow-lg">
                                    <div className="relative">
                                        <img className="w-full h-64" src={blog.blogMainImage} alt="home service" />
                                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

                                        <div className="absolute bottom-0 left-0 bg-blue-500 px-4 py-2 text-white text-sm  hover:text-blue-500 transition duration-500 ease-in-out">
                                            {blog.itemTag}
                                        </div>
                                        <a href="!#"><div className="text-sm absolute top-0 right-0 bg-blue-500 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3hover:text-blue-500 transition duration-500 ease-in-out">
                                            <span className="font-bold">{blog.tags}</span>

                                        </div></a>
                                    </div>
                                    <div className="px-6 py-4">
                                        <p className="font-semibold text-lg inline-block hover:text-blue-500 transition duration-500 ease-in-out text-left">{blog.blogTitle}</p>
                                        <p className="
                                        h-28
                                        text-gray-500 text-sm text-left ">
                                            {`${blog.shortDescription.slice(0, 250)} ....`}
                                        </p>
                                    </div>
                                    <div className='flex justify-between items-center mt-3'>
                                        <div className="px-6 py-4 flex flex-row items-center">
                                            <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                                                <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}>
                                                    <g>
                                                        <g>
                                                            <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
                c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
                c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="ml-1">{blog.readingTime} mins ago</span></span>
                                        </div>

                                        <Link to={`/blogs/${blog._id}`} className='mr-6 btn-main py-2 px-4  '> Read More
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Blogs;