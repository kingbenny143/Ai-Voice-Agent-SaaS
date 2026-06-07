// SettingsCard component for displaying AI settings

const SettingsCard = ({ title, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h3 className="text-xl font-semibold mb-4">
        {title}
      </h3>

      {children}
    </div>
  );
};

export default SettingsCard;