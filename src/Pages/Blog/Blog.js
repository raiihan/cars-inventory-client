import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <div className="w-full sm:w-3/4 lg:w-2/3 mx-auto mt-5 md:mt-0 ">
                <div className='mb-6 shadow-2xl p-6'>
                    <h2 className='text-4xl text-gray-700 my-4'> Difference between JavaScript and Nodejs?</h2>
                    <div className='text-justify'>
                        <p className='font-bold text-lg'>What is nodejs?</p>
                        Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Nodejs allows JavaScript code to run outside the browser.

                        <p className='font-bold text-lg'> What is JavaScript?</p>
                        JavaScript is a scripting or high-level  programming language that based on prototype inheritance. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.
                        <p className='font-bold text-lg'>  Difference between</p>

                        <p className='font-bold'> JavaScript :-</p>
                        <ol>
                            <li> 1. JavaScript is a programming language that is used for writing scripts on the website</li>
                            <li> 2. JavaScript can only be run in the browsers.</li>
                            <li> 3. JavaScript is capable enough to add HTML and play with the DOM.</li>
                            <li> 4. It is basically used on the client-side.</li>
                            <li> 5. 	It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C+</li>
                        </ol>




                        <p className='font-bold'> NodeJs :-</p>
                        <ol>
                            <li> 1. NodeJS is a JavaScript runtime environment.</li>
                            <li> 2. We can run JavaScript outside the browser with the help of NodeJS.</li>
                            <li> 3. Nodejs does not have capability to add HTML tags.</li>
                            <li> 4. It is mostly used on the server-side.</li>
                            <li> 5. Nodejs is written in C, C++ and JavaScript.</li>
                        </ol>


                    </div>
                </div>
                <div className='mb-6 shadow-2xl p-6'>
                    <h2 className='text-4xl text-gray-700 my-4'> When should you use nodejs and when should you use mongo</h2>
                    <div className='text-justify'>
                        <p className='font-bold text-lg'>Nodejs</p>
                        Node.js is well suited for applications that have a lot of concurrent connections and each request only needs very few CPU cycles, because the event loop (with all the other clients) is blocked during execution of a function.
                        <ol className='mt-5'>
                            <li> * It runs Javascript, so you can use the same language on server and client</li>
                            <li>* The single-threaded event-driven system is fast even when handling lots of requests at once, and also simple, compared to traditional multi-threaded Java or ROR frameworks.</li>
                            <li>* It seems quite suitable for prototyping, agile development and rapid product iteration.</li>
                            <li>* It has become the defector standard environment in which to run Javascript-related tools and other web-related tools, including task runners, minifiers, beautifiers, linters, processors, bundles and analytics processors.</li>

                        </ol>
                        <p className='font-bold'> Benefits and specific feature  :-</p>
                        <ol>
                            <li>1. Easy learning curve.</li>
                            <li>2. Scalability.</li>
                            <li>3. Non-blocking I/O.</li>
                            <li>4. Ecosystem.</li>
                            <li>5. Large community.</li>
                            <li>6. Node Package Manager</li>
                            <li>7. <strong>Libuv.</strong> Libuv is a multi-platform C library that was mainly designed for use in the Node.js</li>
                        </ol>
                        <p className='font-bold text-lg mt-3'>Mongodb</p>
                        Mainly there are two types of database management systems (DBMS): Relational and NoSQL DBMS.
                        <p className='font-bold mt-3'> Relational DBMS  :-</p>
                        Relational DBMS manages the databases that store data in a structured format, using rows and columns
                        <p className='font-bold'> NoSQL DBMS  :-</p>
                        NoSQL DBMS manages the database that stores unstructured data in forms of collections and documents
                        <p className='font-bold mt-3'> MongoDB is a NoSQL DBMS, usually I prefer mongoDB for following reasons:-</p>
                        <ol>
                            <li>* NoSQL Database Management Systems are more flexible than RDBMS</li>
                            <li>* The expense of maintaining and even setting up a RDBMS is relatively high</li>
                            <li>* MongoDB is an open source database management system (DBMS) that uses a document-oriented database model which supports various forms of data</li>
                            <li>* It holds a set of collections and stores data as document</li>
                            <li>* Can handle variety of data and huge amount of data</li>
                            <li>* It offers a MongoDB Node.js Driver which provides a JavaScript API and implements the network protocol required to read and write from a local or remote MongoDB database
                            </li>
                        </ol>

                    </div>
                </div>
                <div className='mb-6 shadow-2xl p-6'>
                    <h2 className='text-4xl text-gray-700 my-4'>Difference between spq and nosql database?</h2>
                    <div className='text-justify'>
                        <p className='font-bold text-lg'>SQL</p>
                        <ol>
                            <li>1. SQL databases are primarily called as Relational Databases (RDBMS)</li>
                            <li>2. In almost all situations SQL databases are vertically scalable.</li>
                            <li>3. SQL databases are table-based.</li>
                            <li>4. These databases are best suited for complex queries.</li>
                            <li>5. These databases have fixed or static or predefined schema.</li>
                            <li>6. These databases have fixed or static or predefined schema.</li>
                        </ol>
                        <p className='font-bold text-lg'>NoSQL</p>
                        <ol>
                            <li>1. NoSQL database are primarily called as non-relational or distributed database. </li>
                            <li>2. In almost all situations SQL databases are vertically scalable.</li>
                            <li>3. NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores.</li>
                            <li>4. These databases are not so good for complex queries.</li>
                            <li>5. They have dynamic schema.</li>
                            <li>6. NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance).</li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;