
import { useComponent } from "../../contexts/component-context";

const ConfigPanel = () => {
  const { selectedComponent, componentArgs, setComponentArgs } = useComponent();

  const componentConfig: any = window.AcmeCore[selectedComponent.config];

  const handleFormValueChange = (name: string, value: any) => {
    setComponentArgs({ ...componentArgs, [name.toLowerCase()]: value });
  };
  const renderControlComponent = (argType: any) => {

    switch (argType.control) {
      case "select":
        return (
            <select defaultValue={`Choose a ${argType.name}`} className="select" onChange={(e) => handleFormValueChange(argType.name, e.target.value)}>
                 <option disabled={true}>Choose a {argType.name}</option>
            {argType.options.map((option: any, idx:number) => (
                <option key={option + idx}>{option}</option>
            ))}
          </select>
        );
      case "boolean":
        return <input type="checkbox" defaultChecked className="toggle" onChange={(e) => handleFormValueChange(argType.name, e.target.checked)} />
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
