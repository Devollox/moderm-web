import { useEffect, useState, ReactNode } from "react";
import { formatISOFullTime } from "./time";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getNaturalDelay = () => Math.floor(Math.random() * 80) + 40;

function InfoLog({ children }) {
  return (
    <div>
      <span className="">
        [{formatISOFullTime(new Date())} INFO]
      </span>
      : {children}
    </div>
  );
}

export function Terminal() {
  const [cmd, setCmd] = useState("");
  const [args, setArgs] = useState("");
  const [loading, setLoading] = useState("");

  const [output, setOutput] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const outputLines = [

    ];

    (async () => {
      let currentCmd = "";
      for (const char of "java") {
        currentCmd += char;
        setCmd(currentCmd);
        await sleep(getNaturalDelay());
      }

      let currentArgs = "";
      for (const char of " -jar paper.jar") {
        currentArgs += char;
        setArgs(currentArgs);
        await sleep(getNaturalDelay());
      }

      for (let i = 0; i < 3; i++) {
        setLoading("Loading libraries, please wait" + ".".repeat(i + 1));
        await sleep(500);
      }

      let currentOutput = [];
      for (let i = 0; i < outputLines.length; i++) {
        currentOutput = [
          ...currentOutput,
          <InfoLog key={i}>{outputLines[i]}</InfoLog>,
        ];
        setOutput(currentOutput);

        await sleep(getNaturalDelay());
      }

      setSuccess(
        <InfoLog>
          <span className="text-green-400">
            Done (2.274s)! For help, type &quot;help&quot;
          </span>
        </InfoLog>,
      );
    })();
  });

  return (
    <></>
  );
}
