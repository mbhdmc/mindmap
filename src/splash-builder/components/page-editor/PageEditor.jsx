import { useState } from 'react';

/**
 * Page Editor Component
 * Core component for editing splash page content and layout
 */
function PageEditor() {
  const [_pageContent, _setPageContent] = useState('');

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Page Editor</h2>
      <p className="text-gray-600 mb-4">
        Visual editor for creating and customizing splash pages with drag-and-drop functionality.
      </p>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-[400px]">
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">✏️</div>
          <p>Canvas Area - Drag and drop components here</p>
        </div>
      </div>
    </div>
  );
}

export default PageEditor;
