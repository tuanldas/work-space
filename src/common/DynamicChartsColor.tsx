const getChartColorsArray = (chartId: string): string[] | undefined => {
    const chartElement = document.getElementById(chartId);
    if (chartElement !== null) {
        const colorAttr = "data-colors" + ("-" + document.documentElement.getAttribute("data-theme") ?? "");
        
      let colors : any = chartElement.getAttribute(colorAttr) ?? chartElement.getAttribute("data-colors");
  
      if (colors) {
        colors = JSON.parse(colors);
  
        return colors.map((value: string) => {
          const newValue = value.replace(" ", "");
  
          if (newValue.indexOf(",") === -1) {
            const color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
  
            if (color) return color;
            else return newValue;
          } else {
            const val = value.split(',');
  
            if (val.length === 2) {
              let rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
              rgbaColor = `rgba(${rgbaColor},${val[1]})`;
              return rgbaColor;
            } else {
              return newValue;
            }
          }
        });
      } else {
        
      }
    }
  
    return undefined;
  };
  

export default getChartColorsArray;
