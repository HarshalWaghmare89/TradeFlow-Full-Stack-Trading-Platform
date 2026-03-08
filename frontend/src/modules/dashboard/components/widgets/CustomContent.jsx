const COLORS = [
  "#4772f3",
  "#03A9f4",
  "#2196f3",
  "#9c27B0",
  "#673AB7",
  "#3F57B5",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FF9800",
  "#DEC9BE",
  "#FFC107",
  "#E0E4CC",
];

const CustomContent = ({ x, y, width, height, index }) => {
  const fillColor = COLORS[index % COLORS.length];

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fillColor} />
      {width > 60 && height > 30 && (
        <text x={x + 6} y={y + 20} fill="#fff" fontSize={12}></text>
      )}
    </g>
  );
};

export default CustomContent;
