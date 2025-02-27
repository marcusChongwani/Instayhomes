import React from 'react';
import {Link} from 'react-router-dom';

export default function SearchBar({query}) {
   return (
     <div className="">
         <div className="container flex justify-center items-center px-4 sm:px-6 lg:px-8">
             <div className="relative">
                 <Link 
                     to="/search"
                     type="text" 
                     className="h-12 w-96 shadow-lg border border-gray-100 flex items-center justify-center rounded z-0 focus:shadow focus:outline-none text-center text-gray-500" 
                     
                 >{query || "Search by University or Location"}</Link>
                 <div className="absolute top-4 right-3">
                     <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                 </div>
             </div>
         </div>
     </div>
   );
}