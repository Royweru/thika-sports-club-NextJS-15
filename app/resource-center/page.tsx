import React, { useState } from 'react';
import { FileText, Download, Eye, X, Calendar, TrendingUp, DollarSign, Settings, ChevronRight, Search} from 'lucide-react';
interface selectedResourceType{
    id:number,
    title:string,
    category:string,
    description:string,
    icon:any,
    status:string,
    type:string,
    date:string,
    size:string
    color:string,
    content:{
        summary:string,
        highlights:string[]
    }
    
}
const ResourceCenter = () => {
  const [selectedResource, setSelectedResource] = useState<selectedResourceType|null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
 
  const resources = [
    {
      id: 1,
      title: "TSC Financial Statement 2024",
      category: "financial",
      description: "Comprehensive financial overview and performance metrics for the year 2024",
      icon: <TrendingUp className="w-6 h-6" />,
      status: "Open",
      date: "2024-12-15",
      size: "2.4 MB",
      type: "PDF",
      color: "from-blue-500 to-blue-600",
      content: {
        summary: "This document provides a detailed breakdown of TSC's financial performance for 2024, including revenue streams, operational costs, and investment returns.",
        highlights: [
          "Total revenue increased by 15% compared to 2023",
          "Operating expenses reduced by 8% through efficiency improvements",
          "Net profit margin improved to 12.5%",
          "Successfully completed infrastructure investments worth $2.3M"
        ]
      }
    },
    {
      id: 2,
      title: "Amended TSC Articles",
      category: "legal",
      description: "Updated club articles and constitutional amendments approved by the board",
      icon: <FileText className="w-6 h-6" />,
      status: "Open",
      date: "2024-11-30",
      size: "1.8 MB",
      type: "PDF",
      color: "from-emerald-500 to-emerald-600",
      content: {
        summary: "This document contains the latest amendments to the TSC Articles of Association, reflecting new governance structures and member rights.",
        highlights: [
          "New membership categories introduced",
          "Updated voting procedures for AGM",
          "Revised committee structures and responsibilities",
          "Enhanced member benefits and privileges"
        ]
      }
    },
    {
      id: 3,
      title: "TSC Opex and Capex Budget 2025",
      category: "financial",
      description: "Detailed operational and capital expenditure budget for the upcoming year",
      icon: <DollarSign className="w-6 h-6" />,
      status: "Open",
      date: "2024-12-20",
      size: "3.2 MB",
      type: "Excel",
      color: "from-purple-500 to-purple-600",
      content: {
        summary: "Comprehensive budget planning document outlining projected expenses and capital investments for 2025.",
        highlights: [
          "Total budget allocation of $8.2M for operations",
          "Capital expenditure of $3.1M for facility upgrades",
          "Technology infrastructure investment of $850K",
          "Staff development and training budget of $420K"
        ]
      }
    },
    {
      id: 4,
      title: "Club Membership Guidelines",
      category: "governance",
      description: "Updated membership policies and procedures for new and existing members",
      icon: <Settings className="w-6 h-6" />,
      status: "Open",
      date: "2024-12-10",
      size: "1.5 MB",
      type: "PDF",
      color: "from-orange-500 to-orange-600",
      content: {
        summary: "This guide outlines the membership application process, benefits, and responsibilities for all club members.",
        highlights: [
          "Streamlined application process",
          "New digital membership cards",
          "Enhanced facility access privileges",
          "Exclusive member events and discounts"
        ]
      }
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCategory === 'all' || resource.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  const categories = [
    { id: 'all', label: 'All Resources', count: resources.length },
    { id: 'financial', label: 'Financial', count: resources.filter(r => r.category === 'financial').length },
    { id: 'legal', label: 'Legal', count: resources.filter(r => r.category === 'legal').length },
    { id: 'governance', label: 'Governance', count: resources.filter(r => r.category === 'governance').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">TSC</span>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">HOME</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">FACILITIES</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">GOLF</a>
                <a href="#" className="text-green-600 font-semibold">RESOURCE CENTER</a>
              </nav>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Membership
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AGM Resource Center
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Access all your important club documents, financial statements, and governance materials in one place
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 inline-flex items-center space-x-4">
                <span className="bg-white text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  {resources.length} Documents Available
                </span>
                <span className="text-white pr-4">Updated Daily</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />
          </div>
          <div className="flex gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilterCategory(category.id)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  filterCategory === category.id
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <div
              key={resource.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-green-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${resource.color} text-white`}>
                    {resource.icon}
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {resource.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(resource.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-gray-100 px-2 py-1 rounded">{resource.type}</span>
                    <span>{resource.size}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedResource(resource)}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedResource && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className={`p-6 bg-gradient-to-r ${selectedResource.color} text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    {selectedResource.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedResource.title}</h2>
                    <p className="text-white/90">{selectedResource.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedResource(null)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Document Summary</h3>
                <p className="text-gray-700 leading-relaxed">{selectedResource.content.summary}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
                <ul className="space-y-2">
                  {selectedResource.content.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">File Type</p>
                  <p className="font-semibold">{selectedResource.type}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">File Size</p>
                  <p className="font-semibold">{selectedResource.size}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-semibold">{new Date(selectedResource.date).toLocaleDateString()}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Status</p>
                  <p className="font-semibold text-green-600">{selectedResource.status}</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Document</span>
                </button>
                <button className="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default ResourceCenter;