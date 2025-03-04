import { User, Home, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function Counter({ value, direction = "up", className }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    });
  }, [springValue]);

  return <span className={className} ref={ref} />;
}

export default function Stats() {
  return (
    <>
      {/* Stats */}
      <div className="flex gap-2 flex-wrap pt-6 fade-animation" style={{ "--index": 3 }}>
        <div className="flex items-center">
          
          <div>
            <p className="text-2xl font-bold">
              <Counter value={300} />+
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-400">Happy Students</p>
          </div>
        </div>
        <div className="flex items-center">
      
          <div>
            <p className="text-2xl font-bold">
              <Counter value={14} />+
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-400">Verified Properties</p>
          </div>
        </div>
        <div className="flex items-center">
          
          <div>
            <p className="text-2xl font-bold">
              <Counter value={2} />+
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-400">University Areas</p>
          </div>
        </div>
      </div>
    </>
  );
}