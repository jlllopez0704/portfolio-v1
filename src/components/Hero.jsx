import React from 'react';

const ASCII_LOGO = `
 ██████╗  ██████╗ ██╗  ██╗███╗   ██╗    ██╗      ███████╗███╗   ██╗███╗   ██╗    ██╗      ██████╗ ██████╗ ███████╗███████╗
 ╚═══██║ ██╔═══██╗██║  ██║████╗  ██║    ██║      ██╔════╝████╗  ██║████╗  ██║    ██║     ██╔═══██╗██╔══██╗██╔════╝╚══███╔╝
     ██║ ██║   ██║███████║██╔██╗ ██║    ██║      █████╗  ██╔██╗ ██║██╔██╗ ██║    ██║     ██║   ██║██████╔╝█████╗    ███╔╝ 
██   ██║ ██║   ██║██╔══██║██║╚██╗██║    ██║      ██╔══╝  ██║╚██╗██║██║╚██╗██║    ██║     ██║   ██║██╔═══╝ ██╔══╝   ███╔╝  
╚██████╔╝╚██████╔╝██║  ██║██║ ╚████║    ███████╗ ███████╗██║ ╚████║██║ ╚████║    ███████╗╚██████╔╝██║     ███████╗███████╗
 ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝    ╚══════╝ ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═══╝    ╚══════╝ ╚═════╝ ╚═╝     ╚══════╝╚══════╝
`;

export default function Hero() {
  return (
    <div className="w-full flex items-center justify-center p-4">
      {/* 
        text-cyan-400 targets the light blue from image_8d3eaa_2.png. 
        You can switch this class to text-green-400 if you prefer the green theme!
      */}
      <pre className="font-mono text-[7px] sm:text-[10px] md:text-xs tracking-normal leading-none select-none text-cyan-400 overflow-x-auto whitespace-pre w-full max-w-full text-center">
        {ASCII_LOGO}
      </pre>
    </div>
  );
}