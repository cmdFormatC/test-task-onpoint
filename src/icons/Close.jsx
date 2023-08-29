
export default function Close({ width = '32', height = '32', fill = 'none', className = '' }) {
    return (
        <svg 
            className={className}
            width={width}
            height={height}
            fill={fill}
            viewBox="0 0 32 32"
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d="M32 28.8L19.2 16L32 3.2L28.8 0L16 12.8L3.2 0L0 3.2L12.8 16L0 28.8L3.2 32L16 19.2L28.8 32L32 28.8Z" fill="black"/>
        </svg>
    );
  };
  