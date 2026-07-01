import './generalExplainationGraph.css';
import { useState } from 'react'

function GeneralExplainationGraphLegend({
    className, label, xStart, yStart, isReduced, onMousePassing = () => {}
}) {
    const lineLayout = `M${xStart} ${yStart} L${xStart + 10} ${yStart}`;
    const [xLabel, yLabel] = [`${xStart + 15}`, `${yStart + 5}`];
    const lineClassName = `${className} line ${isReduced ? 'reduced': ''}`;
    const labelClassName = `label ${isReduced ? 'reduced': ''}`

    const handleOver = (event) => {
        onMousePassing([className, true]);
    }
    const handleLeave = (event) => {
        onMousePassing([className,false]);
    }

    return (
        <g onMouseOver={handleOver} onMouseLeave={handleLeave}>
            <path className={lineClassName} d={lineLayout}/>
            <text x={xLabel} y={yLabel} className={labelClassName}>{label}</text>
        </g>
    );
}
export default function GeneralExplainationGraph() {
    const [focusOn, setFocusOn] = useState(null)

    const changeFocus = (value) => {
        if (!value[1]) {
            setFocusOn(null)
        } else {
            setFocusOn(value[0])
        }
    }
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">

                {/* Title */}
                <text x="400" y="35" textAnchor="middle" className="title">
                    Croissance des principales complexités (Big O)
                </text>

                {/*horizontal lines */}
                <line x1="80" y1="120" x2="760" y2="120" className="grid"/>
                <line x1="80" y1="170" x2="760" y2="170" className="grid"/>
                <line x1="80" y1="220" x2="760" y2="220" className="grid"/>
                <line x1="80" y1="270" x2="760" y2="270" className="grid"/>
                <line x1="80" y1="320" x2="760" y2="320" className="grid"/>
                <line x1="80" y1="370" x2="760" y2="370" className="grid"/>
                <line x1="80" y1="420" x2="760" y2="420" className="grid"/>

                {/* curves */}
                <path className={"o1 "+ (focusOn && focusOn != "o1" ? "reduced": "")} d="M80 469 L760 469"/>
                <path className={"olog "+ (focusOn && focusOn != "olog" ? "reduced": "")} d="M80 470 L760 468"/>
                <path className={"on "+ (focusOn && focusOn != "on" ? "reduced": "")} d="M80 470 L760 425"/>
                <path className={"onlog "+ (focusOn && focusOn != "onlog" ? "reduced": "")} d="M80 470 C90 469 147 466 155 465 s0 0 75 -8 s0 0 75 -9 s0 0 75 -10 s0 0 75 -11 s0 0 75 -11 s0 0 75 -11 s0 0 75 -12 s0 0 75 -12"/>
                <path className={"on2 "+ (focusOn && focusOn != "on2" ? "reduced": "")} d="M80 470 C120 460 135 450 155 420 C210 325 214 310 230 270 C270 150 270 150 285 100"/>
                <path className={"o2n "+ (focusOn && focusOn != "o2n" ? "reduced": "")} d="M80 470 C120 460 120 465 145 100"/>
                <path className={"onf "+ (focusOn && focusOn != "onf" ? "reduced": "")} d="M80 470 L83 100"/>

                {/* axis */}
                <line x1="75" y1="470" x2="760" y2="470" className="axis"/>
                <line x1="80" y1="477" x2="80" y2="110" className="axis"/>
                
                {/*horizontal graduation  */}
                <text x="50" y="125" className="label">700</text>
                <line x1="75" y1="120" x2="80" y2="120" className="axis"/>
                <text x="50" y="175" className="label">600</text>
                <line x1="75" y1="170" x2="80" y2="170" className="axis"/>
                <text x="50" y="225" className="label">500</text>
                <line x1="75" y1="220" x2="80" y2="220" className="axis"/>
                <text x="50" y="275" className="label">400</text>
                <line x1="75" y1="270" x2="80" y2="270" className="axis"/>
                <text x="50" y="325" className="label">300</text>
                <line x1="75" y1="320" x2="80" y2="320" className="axis"/>
                <text x="50" y="375" className="label">200</text>
                <line x1="75" y1="370" x2="80" y2="370" className="axis"/>
                <text x="50" y="425" className="label">100</text>
                <line x1="75" y1="420" x2="80" y2="420" className="axis"/>

                {/*vertical graduation  */}
                <text x="147" y="490" className="label">10</text>
                <line x1="155" y1="470" x2="155" y2="475" className="axis"/>
                <text x="222" y="490" className="label">20</text>
                <line x1="230" y1="470" x2="230" y2="475" className="axis"/>
                <text x="297" y="490" className="label">30</text>
                <line x1="305" y1="470" x2="305" y2="475" className="axis"/>
                <text x="372" y="490" className="label">40</text>
                <line x1="380" y1="470" x2="380" y2="475" className="axis"/>
                <text x="447" y="490" className="label">50</text>
                <line x1="455" y1="470" x2="455" y2="475" className="axis"/>
                <text x="522" y="490" className="label">60</text>
                <line x1="530" y1="470" x2="530" y2="475" className="axis"/>
                <text x="597" y="490" className="label">70</text>
                <line x1="605" y1="470" x2="605" y2="475" className="axis"/>
                <text x="667" y="490" className="label">80</text>
                <line x1="675" y1="470" x2="675" y2="475" className="axis"/>
                <text x="742" y="490" className="label">90</text>
                <line x1="750" y1="470" x2="750" y2="475" className="axis"/>

                {/* Axis title */}
                <text x="625" y="500" className="label">Nombre d'élément (n)</text>
                <text x="-50" y="220" className="label"  transform="rotate(-90 20 200)">
                    Nombre d'opérations
                </text>

                {/* curves description */}
                <GeneralExplainationGraphLegend label={"O(1)"} xStart={85} yStart={520} className={"o1"} onMousePassing={changeFocus} isReduced={focusOn && focusOn != "o1"}/>
                <GeneralExplainationGraphLegend label={"O(log n)"} xStart={150} yStart={520} className={"olog"}  onMousePassing={changeFocus} isReduced={focusOn && focusOn != "olog"}/>
                <GeneralExplainationGraphLegend label={"O(n)"} xStart={235} yStart={520} className={"on"} onMousePassing={changeFocus} isReduced={focusOn && focusOn != "on"}/>
                <GeneralExplainationGraphLegend label={"O(n log n)"} xStart={300} yStart={520} className={"onlog"} onMousePassing={changeFocus} isReduced={focusOn && focusOn != "onlog"}/>
                <GeneralExplainationGraphLegend label={"O(n²)"} xStart={395} yStart={520} className={"on2"} onMousePassing={changeFocus} isReduced={focusOn && focusOn != "on2"}/>
                <GeneralExplainationGraphLegend label={"O(2ⁿ)"} xStart={460} yStart={520} className={"o2n"} onMousePassing={changeFocus} isReduced={focusOn && focusOn != "o2n"}/>
                <GeneralExplainationGraphLegend label={"O(n!)"} xStart={530} yStart={520} className={"onf"} onMousePassing={changeFocus} isReduced={focusOn && focusOn != "onf"}/>
            </svg>
        </div>
    )
}