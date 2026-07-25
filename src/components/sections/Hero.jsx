import { useEffect, useState } from "react";
import "../../styles/hero.css";

const ASCII_LOGO  = `
 ██████╗  ██████╗ ██╗  ██╗███╗   ██╗    ██╗      ███████╗███╗   ██╗███╗   ██╗    ██╗      ██████╗ ██████╗ ███████╗███████╗
 ╚═══██║ ██╔═══██╗██║  ██║████╗  ██║    ██║      ██╔════╝████╗  ██║████╗  ██║    ██║     ██╔═══██╗██╔══██╗██╔════╝╚══███╔╝
     ██║ ██║   ██║███████║██╔██╗ ██║    ██║      █████╗  ██╔██╗ ██║██╔██╗ ██║    ██║     ██║   ██║██████╔╝█████╗    ███╔╝ 
██   ██║ ██║   ██║██╔══██║██║╚██╗██║    ██║      ██╔══╝  ██║╚██╗██║██║╚██╗██║    ██║     ██║   ██║██╔═══╝ ██╔══╝   ███╔╝  
╚██████╔╝╚██████╔╝██║  ██║██║ ╚████║    ███████╗ ███████╗██║ ╚████║██║ ╚████║    ███████╗╚██████╔╝██║     ███████╗███████╗
 ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝    ╚══════╝ ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═══╝    ╚══════╝ ╚═════╝ ╚═╝     ╚══════╝╚══════╝
`;

const TEXT = "FULL-STACK DEVELOPER | ENGINEER | IOT DEVELOPER";

export default function Hero({ onComplete }) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      if (index < TEXT.length) {
        setTypedText(TEXT.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        if (onComplete) {
          onComplete();
        }
      }
    }, 60); // typing speed

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <section className="hero-section">
      <pre className="hero-logo mx-auto w-max">{ASCII_LOGO}</pre>

      <p className="hero-subtitle">
        &gt; {typedText}
        <span className="cursor">█</span>
      </p>
    </section>
  );
}