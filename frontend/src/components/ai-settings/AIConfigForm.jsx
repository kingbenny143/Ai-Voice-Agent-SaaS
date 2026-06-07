// AIConfigForm component for configuring AI settings

import VoiceSelector from "./VoiceSelector";
import LanguageDropdown from "./LanguageDropdown";
import ToneSelector from "./ToneSelector";
import GreetingEditor from "./GreetingEditor";
import PromptEditor from "./PromptEditor";
import BusinessHours from "./BusinessHours";
import TransferRules from "./TransferRules";
import TestCallButton from "./TestCallButton";
import SaveSettingsButton from "./SaveSettingsButton";

const AIConfigForm = () => {
  return (
    <div className="space-y-6">

      <VoiceSelector />

      <LanguageDropdown />

      <ToneSelector />

      <GreetingEditor />

      <PromptEditor />

      <BusinessHours />

      <TransferRules />

      <div className="flex justify-end gap-3">
        <TestCallButton />
        <SaveSettingsButton />
      </div>

    </div>
  );
};

export default AIConfigForm;