import React, { useState, useEffect } from 'react';
import { FolderOpen, File, Plus } from 'lucide-react';

const FileManager = () => {
  const [files, setFiles] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState('');

  const handleFolderSelect = (e) => {
    const folder = e.target.value;
    setSelectedFolder(folder);
    // Trigger file indexing
  };

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files);
    // Process and index new files
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">File Management</h2>
        <label className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer hover:bg-indigo-700">
          <Plus className="h-5 w-5 mr-2" />
          <span>Add Files</span>
          <input type="file" multiple className="hidden" onChange={handleFileUpload} />
        </label>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/3 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Folders</h3>
          <div className="space-y-2">
            <button className="flex items-center space-x-2 w-full px-3 py-2 text-left rounded hover:bg-gray-100">
              <FolderOpen className="h-5 w-5 text-gray-400" />
              <span>Knowledge Base</span>
            </button>
            <button className="flex items-center space-x-2 w-full px-3 py-2 text-left rounded hover:bg-gray-100">
              <FolderOpen className="h-5 w-5 text-gray-400" />
              <span>Research</span>
            </button>
          </div>
        </div>

        <div className="w-2/3 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Files</h3>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-100">
                <File className="h-5 w-5 text-gray-400" />
                <span>{file.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileManager;