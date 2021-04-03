interface Props{
  color?:string;
  size?:number;
}

export const Delete:React.FC = (props) =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#200E32"
        fillRule="evenodd"
        d="M20.287 5.243c.39 0 .713.323.713.734v.38a.73.73 0 01-.713.734H3.714A.73.73 0 013 6.357v-.38c0-.411.324-.734.714-.734H6.63c.592 0 1.107-.421 1.24-1.015l.153-.682C8.261 2.617 9.041 2 9.935 2h4.13c.884 0 1.674.617 1.902 1.497l.163.73a1.28 1.28 0 001.241 1.016h2.916zm-1.481 13.891c.304-2.837.837-9.577.837-9.645a.746.746 0 00-.18-.558.726.726 0 00-.524-.234H5.07c-.2 0-.391.087-.524.234a.79.79 0 00-.19.558l.053.647c.142 1.763.537 6.674.793 8.998.18 1.712 1.304 2.788 2.931 2.827 1.256.029 2.55.039 3.872.039 1.246 0 2.51-.01 3.805-.039 1.684-.029 2.806-1.086 2.997-2.827z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export const Setting:React.FC<Props> = (props) =>{
  return (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="none"
  viewBox="0 0 24 24"
  {...props}
>
  <path
    stroke="#200E32"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M20.807 7.624l-.623-1.08a1.913 1.913 0 00-2.608-.705v0a1.904 1.904 0 01-2.61-.678 1.832 1.832 0 01-.255-.915v0a1.913 1.913 0 00-1.914-1.968h-1.254A1.904 1.904 0 009.64 4.191v0a1.913 1.913 0 01-1.913 1.886 1.83 1.83 0 01-.916-.257v0a1.913 1.913 0 00-2.608.705l-.669 1.099a1.913 1.913 0 00.696 2.608v0a1.913 1.913 0 010 3.314v0a1.904 1.904 0 00-.696 2.6v0l.632 1.089a1.913 1.913 0 002.609.741v0a1.894 1.894 0 012.6.696c.164.277.252.593.255.915v0c0 1.056.857 1.913 1.913 1.913h1.255c1.053 0 1.908-.85 1.912-1.904v0a1.904 1.904 0 011.914-1.913c.321.009.636.097.915.256v0a1.913 1.913 0 002.609-.695v0l.659-1.099a1.904 1.904 0 00-.696-2.608v0a1.904 1.904 0 01-.696-2.61c.166-.289.406-.529.696-.695v0a1.913 1.913 0 00.696-2.6v0-.008z"
    clipRule="evenodd"
  />
  <circle
    cx={12.175}
    cy={11.889}
    r={2.636}
    stroke="#200E32"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
  />
</svg>
  );
}
export const Upload:React.FC<Props> = (props) =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#200E32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.39 8.984h-.934a3.685 3.685 0 00-3.685 3.685v4.875a3.685 3.685 0 003.685 3.684h11.13a3.685 3.685 0 003.686-3.684v-4.885a3.675 3.675 0 00-3.674-3.675h-.944M12.021 2.19v12.042M9.106 5.119l2.915-2.928 2.916 2.928"
      />
    </svg>
  );
}

export const Roller:React.FC<Props> = (props) =>{
  return (
    <svg
     xmlns="http://www.w3.org/2000/svg"
     width={24}
     height={24}
     fill="none"
     viewBox="0 0 24 24"
     {...props}
   >
     <path
       stroke="#200E32"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={1.5}
       d="M21.21 7.9v8.15c0 3.02-1.89 5.15-4.91 5.15H7.65c-3.02 0-4.9-2.13-4.9-5.15V7.9c0-3.02 1.89-5.15 4.9-5.15h8.65c3.02 0 4.91 2.13 4.91 5.15z"
       clipRule="evenodd"
     />
     <path
       stroke="#200E32"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={1.5}
       d="M5.281 16.432l1.53-1.613a1.405 1.405 0 012.031-.008l.885.903c.597.61 1.59.565 2.131-.094l2.23-2.71a1.687 1.687 0 012.514-.105l2.076 2.142"
     />
     <path
       stroke="#200E32"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={1.5}
       d="M10.313 9.134a1.754 1.754 0 11-3.506 0 1.754 1.754 0 013.506 0z"
       clipRule="evenodd"
     />
   </svg>
  );
}


export const Download:React.FC<Props> = (props) =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#200E32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.122 15.436V3.396M15.038 12.508l-2.916 2.928-2.916-2.928"
      />
      <path
        stroke="#200E32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.755 8.128h.933a3.684 3.684 0 013.684 3.685v4.884a3.675 3.675 0 01-3.675 3.675H6.557a3.685 3.685 0 01-3.685-3.685v-4.885a3.675 3.675 0 013.675-3.674h.942"
      />
    </svg>
  );
}
export const Close:React.FC<Props> = ({size=24,color="#200E32"}) =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"

    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M7.67 2h8.67C19.73 2 22 4.38 22 7.92v8.17c0 3.53-2.27 5.91-5.66 5.91H7.67C4.28 22 2 19.62 2 16.09V7.92C2 4.38 4.28 2 7.67 2zm7.34 13a.868.868 0 000-1.23l-1.78-1.78 1.78-1.78a.88.88 0 000-1.24.88.88 0 00-1.24 0L12 10.75l-1.78-1.78a.88.88 0 00-1.24 0 .88.88 0 000 1.24l1.78 1.78-1.78 1.77a.88.88 0 00.62 1.5c.23 0 .45-.09.62-.26L12 13.23 13.78 15c.17.18.39.26.61.26.23 0 .45-.09.62-.26z"
        clipRule="evenodd"
      />
    </svg>
  );
}
