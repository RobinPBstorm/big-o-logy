import './generalExplaination.css';

function GeneralExplaination() {
  return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">

        <text x="400" y="35" text-anchor="middle" className="title">
            Croissance des principales complexités (Big O)
        </text>

        <line x1="80" y1="420" x2="760" y2="420" className="axis"/>
        <line x1="80" y1="420" x2="80" y2="60" className="axis"/>

        <line x1="80" y1="330" x2="760" y2="330" className="grid"/>
        <line x1="80" y1="240" x2="760" y2="240" className="grid"/>
        <line x1="80" y1="150" x2="760" y2="150" className="grid"/>

        <text x="770" y="440" className="label">Taille des données (n)</text>
        <text x="10" y="55" className="label" transform="rotate(-90 20 200)">
            Temps d'exécution
        </text>

        <path className="o1" d="M80 390 L760 390"/>
        <text x="705" y="385" className="label" fill="#2E86DE">O(1)</text>

        <path className="olog" d="M80 390            C170 370 260 345 360 325            S560 290 760 270"/>
        <text x="705" y="265" className="label">O(log n)</text>

        <path className="on" d="M80 390 L760 110"/>
        <text x="705" y="105" className="label">O(n)</text>

        <path className="onlog" d="M80 390            C180 385 280 360 380 315            S580 200 760 70"/>
        <text x="640" y="70" className="label">O(n log n)</text>

        <path className="on2" d="M80 390            Q180 388 260 380            Q380 350 460 280            Q560 180 640 60"/>
        <text x="555" y="55" className="label">O(n²)</text>

        <path className="o2n" d="M80 390            C240 388 380 370 480 300            C560 220 620 120 640 60            C660 20 710 5 760 -40"/>
        <text x="585" y="100" className="label">O(2ⁿ)</text>
        </svg>
    </>
  )
}

export default GeneralExplaination