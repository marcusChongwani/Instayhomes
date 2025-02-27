import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { IoArrowBack } from 'react-icons/io5';

const universities = [
  { name: "University of Zambia", campuses: ["Main Campus", "Engineering Campus"] },
  { name: "Copperbelt University", campuses: ["Ndola Campus", "Kitwe Campus"] },
  { name: "Cavendish University", campuses: ["Lusaka Campus", "Livingstone Campus"] },
  { name: "Mukuba University", campuses: ["Kitwe Campus"] },
  { name: "Livingstone University", campuses: ["Livingstone Campus"] }
];

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedCampus, setSelectedCampus] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle dynamic search and filtering by universities
  const handleSearch = () => {
    setLoading(true);
    let matches = [];
    universities.forEach((university) => {
      if (university.name.toLowerCase().includes(search.toLowerCase())) {
        matches.push(university.name);
      }
    });
    setResults(matches);
    setLoading(false);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    // Handle query parameters when no search is provided
    const queryParams = new URLSearchParams(location.search);
    const universityQuery = queryParams.get("q");
    const campusQuery = queryParams.get("campus");

    if (universityQuery && campusQuery) {
      setSelectedUniversity(universityQuery);
      setSelectedCampus(campusQuery);
    } else {
      setResults(universities.map(uni => uni.name)); // Show all universities by default
    }
  }, [location]);

  const handleSelectUniversity = (universityName) => {
    setSelectedUniversity(universityName);
    setSelectedCampus(null); // Reset campus selection
  };

  const handleSelectCampus = (campusName) => {
    // Check if the selected campus belongs to the selected university
    const university = universities.find(
      (uni) => uni.name === selectedUniversity
    );
    if (university && university.campuses.includes(campusName)) {
      // Navigate to listings with both university and campus in the query
      navigate(`/listings?q=${selectedUniversity}&campus=${campusName}`);
    } else {
      setSelectedCampus(null); // Clear campus if not valid
    }
  };

  return (
    <motion.div
      className="pt-6 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate('/listings')}
          className="p-2 flex items-center text-gray-700 hover:text-gray-900"
        >
          <IoArrowBack className="w-6 h-6" />
        </motion.button>
        <motion.input
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border-none rounded-lg text-md focus:outline-none"
          placeholder="Search by University..."
        />
      </div>

      {loading ? (
        <div className="mt-4 text-center">Loading results...</div>
      ) : (
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {results.length > 0 ? (
            results.map((result, index) => (
              <motion.div
                key={result}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-2 border rounded-lg cursor-pointer mb-2 hover:bg-gray-50"
                onClick={() => handleSelectUniversity(result)}
              >
                {result}
              </motion.div>
            ))
          ) : (
            <div className="text-center text-gray-500 mt-4">No results found</div>
          )}
        </motion.div>
      )}

      {selectedUniversity && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Choose a Campus:</h3>
          {universities
            .find((uni) => uni.name === selectedUniversity)
            .campuses.map((campus, index) => (
              <motion.div
                key={campus}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-2 border rounded-lg cursor-pointer mb-2 hover:bg-gray-50"
                onClick={() => handleSelectCampus(campus)}
              >
                {campus}
              </motion.div>
            ))}
        </div>
      )}
    </motion.div>
  );
};

export default SearchPage;