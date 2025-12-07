import { useState } from 'react';
import PageEditor from '../components/page-editor/PageEditor';
import TemplateLibrary from '../components/template-library/TemplateLibrary';
import ContentManagement from '../components/cms/ContentManagement';
import FormBuilder from '../components/form-builder/FormBuilder';
import PublishingManager from '../components/publishing/PublishingManager';
import Analytics from '../components/analytics/Analytics';
import IntegrationManager from '../components/integration-manager/IntegrationManager';
import ResponsiveTools from '../components/responsive-tools/ResponsiveTools';

/**
 * Splash Builder Main Page
 * Central hub for accessing all splash page builder features
 */
function SplashBuilder() {
  const [activeTab, setActiveTab] = useState('editor');

  const tabs = [
    { id: 'editor', name: 'Page Editor', component: PageEditor },
    { id: 'templates', name: 'Templates', component: TemplateLibrary },
    { id: 'content', name: 'Content', component: ContentManagement },
    { id: 'forms', name: 'Forms', component: FormBuilder },
    { id: 'publishing', name: 'Publishing', component: PublishingManager },
    { id: 'analytics', name: 'Analytics', component: Analytics },
    { id: 'integrations', name: 'Integrations', component: IntegrationManager },
    { id: 'responsive', name: 'Responsive', component: ResponsiveTools },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Splash Page Builder</h1>
            <p className="text-gray-600">Create stunning splash pages in minutes</p>
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
}

export default SplashBuilder;
