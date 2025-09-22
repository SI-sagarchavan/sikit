import { useComponent } from "../../contexts/component-context";

const ConfigPanel = () => {
  const { selectedComponent } = useComponent();

  const componentConfig: any = window.AcmeCore[selectedComponent.config];

  const COMPONENT_MAP: any = {
    select: "select",
    boolean: "checkbox",
  };

  return (
    <div>
      <h2>{selectedComponent.name}</h2>
      <div>
        <div>
          {Object.values(componentConfig?.argTypes).map((argType: any) => {
            console.log("argType", argType);
            return (
              <div key={argType.name}>
                <div key={argType.name}>{argType.name}</div>
                {argType.type === "select" ? (
                  <select name={argType.name} >
                    {argType.options.map((option: any) => {
                      return <option value={option}>{option}</option>;
                    })}
                  </select>
                ) : (
                  <div>
                    <input type={COMPONENT_MAP[argType.type]} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;
