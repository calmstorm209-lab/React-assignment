
import "./Tf.css";

export default function Tf() {
  const [light, setLight] = useState("red");

  const l1 = 2;
  const l2 = 2;
  const l3 = 2;

  useEffect(() => {
    let time = 0;

    const interval = setInterval(() => {
      time++;

      if (time <= l1) setLight("red");
      else if (time <= l1 + l2) setLight("yellow");
      else if (time <= l1 + l2 + l3) setLight("green");
      else time = 0;

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="img">
      <div className="cirs">
        <div
          className="cir"
          id="redd"
          style={{ boxShadow: light === "red" ? "0 0 40px red" : "none" }}
        ></div>
        <div
          className="cir"
          id="yell"
          style={{ boxShadow: light === "yellow" ? "0 0 40px yellow" : "none" }}
        ></div>
        <div
          className="cir"
          id="gree"
          style={{ boxShadow: light === "green" ? "0 0 40px lime" : "none" }}
        ></div>
      </div>
    </div>
  );
}
