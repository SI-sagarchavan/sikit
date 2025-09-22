import {Switch} from "@heroui/switch";
import {Select, SelectSection, SelectItem} from "@heroui/react";

import { useComponent } from "../../contexts/component-context";

const ConfigPanel = () => {
  const { selectedComponent } = useComponent();

  const componentConfig: any = window.AcmeCore[selectedComponent.config];

  const renderControlComponent = (argType: any) => {

    console.log(argType);

    switch (argType.control) {
      case "select":
        return (
            <Select className="max-w-xs w-full" label="" placeholder={`Select an ${argType.name}`}>
            {argType.options.map((option: any) => (
              <SelectItem key={option}>{option}</SelectItem>
            ))}
          </Select>
        );
      case "boolean":
        return <Switch className="w-full" aria-label="Automatic updates" />
  }
}

  return (
    <div className="p-4 w-full">
      <h2 className="text-lg font-bold mb-4 py-4">{selectedComponent.name}</h2>
      <div>
        <div className="space-y-2">
          {Object.values(componentConfig?.argTypes).map((argType: any) => {
            return (
              <div key={argType.name} className="py-2">
                <div key={argType.name}>{argType.name}</div>
                {renderControlComponent(argType)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;
