import TerminalBox from "../common/TerminalBox";

export default function Skills() {
  return (
    <TerminalBox title="skills">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <h3 className="font-bold mb-2">Frontend</h3>
          <ul>
            <li>React</li>
            <li>Vue</li>
            <li>Tailwind</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Backend</h3>
          <ul>
            <li>Laravel</li>
            <li>Node.js</li>
            <li>CodeIgniter</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Database</h3>
          <ul>
            <li>MySQL</li>
            <li>Redis</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">DevOps</h3>
          <ul>
            <li>Docker</li>
            <li>Linux</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </TerminalBox>
  );
}