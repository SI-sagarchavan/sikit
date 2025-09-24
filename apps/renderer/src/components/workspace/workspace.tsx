
import {GoogleGenAI} from '@google/genai';

import { useComponent } from "../../contexts/component-context"
import { useEffect, useState } from 'react';

const Workspace = () => {
  const { selectedComponent, componentArgs, setComponentArgs } = useComponent()

  const [input, setInput] = useState<string>("");
  
  const GEMINI_API_KEY = "AIzaSyBK-F9qzK6DRGe1CuVqWAjTK3ru9Euq1Lg"
  const Component = window.AcmeCore?.[selectedComponent.exports?.[0]]
  const componentConfig: any = window.AcmeCore?.[selectedComponent.config]


  const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

  const prompt = [
    `You are a helpful assistant that can generate a json schema for a component.`,
    `The component is ${selectedComponent.name} and the component configs which can be used to generate the JSON ${JSON.stringify(componentConfig?.argTypes)}.`,
    `This is the default JSON for the component ${JSON.stringify(componentArgs?.args)}`,
    `Use this input ${input} to generate the JSON`,
    `Respond ONLY with valid JSON. No explanation or additional text.`,
    `output JSON should looks like this ${JSON.stringify(componentConfig?.args)}`
  ]

  const callGemini = async () => {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: prompt.join("\n"),
      config : {
        responseMimeType : "application/json",
        temperature : 0,
      }
    });
    console.log(JSON.parse(response.candidates?.[0].content?.parts?.[0]?.text));
    setComponentArgs(JSON.parse(response.candidates?.[0].content?.parts?.[0]?.text|| ""));
  }

  if (!selectedComponent) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        No component selected
      </div>
    )
  }


  
  if (!Component) {
    return (
      <div className="flex items-center justify-center h-full text-red-500">
        Component not found in window.AcmeCore
      </div>
    )
  }

  return (
    <div>
{/* <div className="w-full flex justify-center">

    <textarea value={input} onChange={(e) => setInput(e.target.value)} className="w-full border-l-2 border-t-2 border-b-2 border-gray-300 rounded-none p-2" />
    <button onClick={async () => {
      console.log("input", input);
await callGemini()
    } } className="cursor-pointer bg-blue-500 text-white rounded-none p-2 border-r-2 border-t-2 border-b-2 border-gray-300">Generate</button>
    </div> */}

    <Component  {...(componentArgs || {})}>
      {componentConfig?.args?.children}
    </Component>


    

    </div>
  )
}

export default Workspace
