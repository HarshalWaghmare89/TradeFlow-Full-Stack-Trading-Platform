import { useMemo } from "react";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";
import CustomContent from "./CustomContent";
import CustomTooltip from "./CustomTooltip";

const TreemapCard = ({ data = [], type = "current", height = 150 }) => {
  const processedData = useMemo(() => {
    return data.map((stock, index) => {
      const investment = stock.quantity * stock.avgCost;
      const current = stock.quantity * stock.ltp;
      const pnl = current - investment;

      let value;
      if (type === "current") value = current;
      if (type === "investment") value = investment;
      if (type === "pnl") value = Math.abs(pnl);

      return {
        id: `${stock.symbol || stock.name}-${index}`,
        name: stock.name || stock.symbol,
        value,
        pnl,
        current,
        investment,
      };
    });
  }, [data, type]);

  const totalValue = processedData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="holdings-treemap">
      <div style={{ width: "100%", height }}>
        <ResponsiveContainer width="100%" height={height}>
          <Treemap
            data={processedData}
            dataKey="value"
            nameKey="id"
            aspectRatio={4 / 1}
            content={<CustomContent />}
            isAnimationActive
            animationDuration={600}
          >
            <Tooltip content={<CustomTooltip />} />
          </Treemap>
        </ResponsiveContainer>
      </div>

      <div className="treemap-bottom py-3">
        <div className="holding-value">
          ₹
          {totalValue.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      </div>
    </div>
  );
};

export default TreemapCard;
