import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const CustomLegend = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div
        style={{
          width: 8,
          height: 8,
          backgroundColor: "#2962ff",
        }}
      />
      <span style={{ fontSize: "10px", color: "var(--nav-tabs)" }}>
        NIFTY 50
      </span>
    </div>
  );
};

const NiftyChart = ({ data = [] }) => {
  return (
    <div style={{ width: "100%", height: 220 }}>
      <ResponsiveContainer width="100%" height="220">
        <LineChart data={data}>
          <CartesianGrid stroke="#f0f0f0" vertical={false} />

          <XAxis
            dataKey="date"
            tick={{ fontSize: 10, fill: "var(--nav-tabs)" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis domain={["auto", "auto"]} hide />

          <Tooltip
            contentStyle={{
              backgroundColor: "var(--bg-primary)",
              border: "1px solid #eee",
              fontSize: "10px",
            }}
            formatter={(value) => [value]}
          />

          <Legend content={<CustomLegend />} verticalAlign="top" align="left" />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#2962ff"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NiftyChart;
