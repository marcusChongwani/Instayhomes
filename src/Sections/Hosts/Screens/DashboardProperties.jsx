import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DashboardProperties() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const properties = [
    { id: 1, name: "Optiquest, Villa", location: "Thornpark, Lusaka", type: "2-Bedroom", status: "Available" },
    { id: 2, name: "Optiquest, Emmasale", location: "Chilulu, Ndola", type: "Studio", status: "Occupied" }
   ];
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col h-full"
    >
      {/* Header Section - Stays Fixed */}
      <motion.div variants={itemVariants} className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Your Properties</h2>
        <Link to="/hosts/list-property" className="bg-blue-600 text-white px-4 py-2 rounded-md">
          + Add New Property
        </Link>
      </motion.div>

      {/* Scrollable Cards Section */}
      <div className="overflow-y-auto space-y-4 py-4">
        {properties.map((property) => (
          <motion.div 
            key={property.id} 
            variants={itemVariants} 
            className="flex justify-between items-center border border-gray-200 p-3 shadow-sm rounded-md"
          >
            <div>
              <p className="font-medium text-gray-800">{property.name}</p>
              <p className="text-sm text-gray-500">{property.location} |</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gray-400 text-white text-sm rounded-md">
                Edit
              </button>
              <button 
                className={`px-4 py-2 text-white text-sm rounded-md ${
                  property.status === "Available" ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {property.status}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}