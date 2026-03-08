const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="treemap-tooltip">
        {/* <strong>{data.name}</strong> */}
        <div>₹{data.value.toFixed(2)}</div>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
