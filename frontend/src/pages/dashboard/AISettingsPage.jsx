// AISettingsPage component for configuring AI settings


import AIConfigForm from "../../components/ai-settings/AIConfigForm";

const AISettingsPage = () => {
  return (
    <div className="max-w-5xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-6">
        AI Settings
      </h2>

      <AIConfigForm />

    </div>
  );
};

export default AISettingsPage;