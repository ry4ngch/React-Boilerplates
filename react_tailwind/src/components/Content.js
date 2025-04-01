import React from "react";

const Content = () => {
    return (
        <div className="w-full sm:max-w-lg sm:mx-auto px-4">
            <article className="flex items-center px-4 py-2 mt-4 bg-teal-100 text-teal-700 rounded">
                <svg className="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <p>Resize browser to see the change.</p>
            </article>
            
            <a href="#">
                <article className="overflow-hidden rounded shadow my-4">
                    <div className="sm:flex sm:flex-wrap">
                        <div className="sm:w-1/2 h-56 sm:h-auto relative">
                            <img
                            className="w-full h-full absolute inset-0 object-cover"
                            src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                            alt="image"/>
                        </div>

                        <div className="sm:w-1/2 p-4">
                            <span className="uppercase tracking-wide inline-block px-2 rounded-full text-xs bg-gray-300 text-gray-600">travel</span>
                            <h4 className="text-lg font-semibold capitalize text-gray-800 mt-2">
                                Top destinations you should travel before...
                            </h4>
                            <p className="text-gray-700 mt-2">
                                Lorem ipsum dolor sit amet conse ctetur adipis icing elit Delectus...
                            </p>
                            <div className="flex items-center mt-3">
                                <img
                                    className="h-10 w-10 object-cover rounded"
                                    src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60"
                                    alt="image"/>
                                <div className="pl-3 text-sm text-gray-600">
                                    <p className="truncate">Neil Jafferson</p>
                                    <time>20 June, 2019</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </a>
            
            
            <a href="#">
                <article className="overflow-hidden rounded shadow my-4">
                    <div className="sm:flex sm:flex-wrap p-2">
                        <div className="sm:w-1/2 h-56 sm:h-auto relative">
                            <img
                            className="w-full h-full absolute inset-0 object-cover rounded"
                            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="image"/>
                        </div>
                        <div className="sm:w-1/2 p-2 sm:px-4">
                            <span className="uppercase tracking-wide inline-block px-2 rounded-full text-xs bg-gray-300 text-gray-600">
                                technology
                            </span>
                            <h4 className="text-lg capitalize font-semibold text-gray-800 mt-2">
                                Don't overwhelm yourself with new technologies...
                            </h4>
                            <p className="text-gray-700 mt-2">
                                Lorem ipsum dolor sit amet consec tetur adipis icing elit Delectus...
                            </p>
                            <div className="flex items-center mt-3">
                                <img
                                    className="h-10 w-10 object-cover rounded"
                                    src="https://images.unsplash.com/photo-1521117177129-ca6b2e68cb26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60"
                                    alt="image"/>
                                <div className="pl-3 text-sm text-gray-600">
                                    <p className="truncate">Emma Stone</p>
                                    <time>25 June, 2019</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </a>
        </div>
    )
}

export default Content;