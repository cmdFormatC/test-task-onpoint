
export default function Keyplus({ width = '26px', height = '26px', fill = 'none', className = '' }) {
    return (
        <svg 
            className={className}
            width={width}
            height={height}
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <text kerning="auto" font-family="Myriad Pro" fill="rgb(0, 0, 0)" font-size="60px" x="0px" y="25.937px"><tspan font-size="60px" font-family="Gilroy" fill="#FFFFFF">&#43;</tspan></text>
        </svg>
    );
};
  