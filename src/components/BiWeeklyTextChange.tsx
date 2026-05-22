import data from "@/data/data.json";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function BiWeeklyTextChange() {
const INTERVAL = 14 * 24 * 60 * 60 * 1000;

  const index =
    Math.floor(Date.now() / INTERVAL) % data.texts.length;

  const now = new Date();

  const formattedDate = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  const formattedTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  return (
    <>{data.texts[index]}:  
        <time dateTime={now.toISOString()}>
          {formattedDate}  {formattedTime}
        </time>
      </>
  );
}
