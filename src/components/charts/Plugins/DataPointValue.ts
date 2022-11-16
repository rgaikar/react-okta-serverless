// Plugin
const DataPointValuePlugin = {
  id: "data_point_value_plugin",
  beforeDraw: (chart: any) => {
    const { ctx } = chart;
    ctx.save();

    const meta1 = chart.getDatasetMeta(1);
    const meta2 = chart.getDatasetMeta(2);
    chart.data.datasets[0].data.forEach((_data: any, index: number) => {
      const posX1 = meta1.data[index].x;
      const posY1 = meta1.data[index].y;
      const posX2 = meta2.data[index].x;
      const posY2 = meta2.data[index].y;
      chart.ctx.fillStyle = "black";
      chart.ctx.fillText(
        _data,
        Math.max(posX1, posX2) - 14,
        Math.max(posY1, posY2) - 5
      );
    });
    ctx.restore();
  },
};

export default DataPointValuePlugin;
