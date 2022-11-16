// Plugin
const Plugin = {
  id: "custom_canvas_background_color",
  beforeDraw: (chart: any) => {
    const ctx = chart.canvas.getContext("2d");
    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

export default Plugin;
