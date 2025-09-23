import {Switch} from "@heroui/switch";
import {Select, SelectItem} from "@heroui/react";

import { useComponent } from "../../contexts/component-context";
import { useState } from "react";

const ConfigPanel = () => {
  const { selectedComponent } = useComponent();

  const componentConfig: any = window.AcmeCore[selectedComponent.config];

  const [args, setArgs] = useState<any | null>(null);

  const handleFormValueChange = (name: string, value: any) => {
    setArgs({ ...args, [name]: value });
  };

  console.log(args);

  const renderControlComponent = (argType: any) => {
    console.log(argType);
    switch (argType.control) {
      case "select":
        return (
            <Select value={args?.[argType?.name]} onChange={(value) => handleFormValueChange(argType.name, value)} className="max-w-xs w-full" placeholder={`Select an ${argType.name}`}>
            {argType.options.map((option: any, idx:number) => (
              <SelectItem  key={option + idx}>{option}</SelectItem>
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
          {Object.values(componentConfig?.argTypes).map((argType: any, idx:number) => {
            return (
              <div key={argType.name + idx} className="py-2 gap-y-2 flex flex-col">
                <div key={argType.name + idx}>{argType.name}</div>
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
