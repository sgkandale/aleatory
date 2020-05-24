import React from 'react';
import './App.css';
import { colourList } from './commonColourList'
import { createString, hexToRGB, hexToHSL } from "./helpers";


function App() {

    // Initial colour
    const initialColour = "#FF40BC";

    // Initial colour state
    const [colour, setColour] = React.useState({
        width: "100%",
        height: "200px",
        backgroundColor: initialColour,
    });

    // Initial colour info
    const [colourInfo, setColourInfo] = React.useState({
        hex: initialColour,
        rgb: hexToRGB(initialColour),
        hsl: hexToHSL(initialColour),
        commonName: "",
    });

    // Show common Name
    const commonName = () => {
        if (colourInfo.commonName) {
            return <p><strong>Common Name : </strong> { colourInfo.commonName }</p>
        }
        return <React.Fragment/>
    };

    // Handle function for generate button
    const handleGenerate = () => {
        let hexString = createString();
        let hexCode = "#" + hexString;
        setColour({
            width: "100%",
            height: "200px",
            backgroundColor: hexCode,
        });
        setColourInfo({
            hex: hexCode,
            rgb: hexToRGB(hexCode),
            hsl: hexToHSL(hexCode),
            commonName: colourList[hexString],
        });
    };

    return (
        <div className="App">
            <div className='header'>
                <div className='header_in'>
                    <h1>aleatory</h1>
                </div>
            </div>
            <div className='blank_div'>
            </div>
            <div className='colour_card'>
                <div style={colour}>
                </div>
                <div className='colour_info'>
                    <p><strong>Hex : </strong> { colourInfo.hex } </p>
                    <p><strong>RGB : </strong> { colourInfo.rgb } </p>
                    <p><strong>HSL : </strong> { colourInfo.hsl } </p>
                    { commonName() }
                </div>
            </div>
            <div className='button_div'>
                <button onClick={handleGenerate}>Generate</button>
            </div>
        </div>
    );
}

export default App;
