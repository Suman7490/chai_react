import React from 'react'

const Home = () => {
    return (
        <>
            <div className='bg-slate-950'>
                {/* Navbar */}
                <nav className='w-full h-14 bg-indigo-200 flex justify-between items-center px-4 md:px-4'>
                    <div className='text-2xl text-indigo-700 font-bold'>Navbar</div>
                    <ul className='md:flex hidden font-semibold'>
                        <li className='mx-[10px] cursor-pointer'>Home</li>
                        <li className='mx-[10px] cursor-pointer'>About Us</li>
                        <li className='mx-[10px] cursor-pointer'>Contact Us</li>
                    </ul>
                    <div className='hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer'>Login/Signup</div>
                    <div className='md:hidden'>
                        <a href='#' className='text-4xl'>&#8801;</a>
                    </div>
                </nav>
                {/* Navbar Ends */}

                <header className="w-full h-auto">
                    <img className="w-full hidden md:block" src='https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg' alt='' srcset='' />
                    <img className="w-full md:hidden" src='https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg' alt='' srcset='' />
                </header>

                {/* Our student Section */}
                <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10'>
                    <div className='w-full h-auto flex flex-wrap flex-col items-center'>
                        <p className='text-indigo-800 text-3xl md:text-4xl font-bold text-center'>"Pure Hardwork, No Shortcuts!"</p>
                        <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 md:mt-4 mb-12 rounded-2xl'></div>
                    </div>
                    <div className='w-full flex flex-wrap justify-evenly'>
                        <div className='w-46 flex flex-col items-center mb-12'>
                            <img className='w-44 h-44' src="https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/book-157.png" alt='' />
                            <p className='text-3xl font-bold text-white'>600+</p>
                            <p className='text-3xl font-bold text-gray-500'>Different Courses</p>
                        </div>
                        <div className='w-46 flex flex-col items-center mb-12'>
                            <img className='w-44 h-44' src="https://cdn-icons-png.flaticon.com/512/5402/5402751.png" alt='' />
                            <p className='text-3xl font-bold text-white'>600+</p>
                            <p className='text-3xl font-bold text-gray-500'>Different Courses</p>
                        </div>
                        <div className='w-46 flex flex-col items-center mb-12'>
                            <img className='w-44 h-44' src="https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/book-157.png" alt='' />
                            <p className='text-3xl font-bold text-white'>600+</p>
                            <p className='text-3xl font-bold text-gray-500'>Different Courses</p>
                        </div>
                    </div>
                </div>

                {/* Our Products Section */}
                <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10'>
                    <div className='w-full h-auto flex flex-wrap flex-col items-center'>
                        <p className='text-indigo-800 text-3xl md:text-4xl font-bold text-center'>Our Products</p>
                        <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 md:mt-4 mb-12 rounded-2xl'></div>
                    </div>
                    <div className='w-[90%] h-auto flex flex-wrap justify-around'>
                        <div className='w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2'>
                            <img className='w-44 h-44' src="https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/book-157.png" alt='' />
                            <p className='text-3xl font-bold text-white'>PW Skills lab</p>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam voluptas ullam, possimus iure voluptatum ipsam excepturi quia est deleniti, repellendus distinctio maxime. Tempora distinctio iste molestiae ullam ipsam, dignissimos esse!</p>
                        </div>
                        <div className='w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2'>
                            <img className='w-44 h-44' src="https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/book-157.png" alt='' />
                            <p className='text-3xl font-bold text-white'>PW Skills lab</p>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam voluptas ullam, possimus iure voluptatum ipsam excepturi quia est deleniti, repellendus distinctio maxime. Tempora distinctio iste molestiae ullam ipsam, dignissimos esse!</p>
                        </div>
                        <div className='w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2'>
                            <img className='w-44 h-44' src="https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/book-157.png" alt='' />
                            <p className='text-3xl font-bold text-white'>PW Skills lab</p>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam voluptas ullam, possimus iure voluptatum ipsam excepturi quia est deleniti, repellendus distinctio maxime. Tempora distinctio iste molestiae ullam ipsam, dignissimos esse!</p>
                        </div>
                        <div className='w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2'>
                            <img className='w-44 h-44' src="https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/book-157.png" alt='' />
                            <p className='text-3xl font-bold text-white'>PW Skills lab</p>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam voluptas ullam, possimus iure voluptatum ipsam excepturi quia est deleniti, repellendus distinctio maxime. Tempora distinctio iste molestiae ullam ipsam, dignissimos esse!</p>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <footer className='w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12'>
                    <div className=''>
                        <div className='text-2xl text-indigo-700 font-bold'>Navbar</div>
                        <p className='my-4'>Email us: support@pwskills.com</p>
                    </div>
                    <div className=''>
                        <h2 className='font-bold text-xl mt-4'>PW Skills</h2>
                        <div className='w-32 h-1 border-b-2 border-yellow-400 rounded xl my-2'></div>
                        <p>About us</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className=''>
                        <h2 className='font-bold text-xl mt-4'>Products</h2>
                        <div className='w-32 h-1 border-b-2 border-yellow-400 rounded xl my-2'></div>
                        <p>About us</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className=''>
                        <h2 className='font-bold text-xl mt-4'>Links</h2>
                        <div className='w-32 h-1 border-b-2 border-yellow-400 rounded xl my-2'></div>
                        <p>About us</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Home
