import { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { useGetPostsQuery } from "../../services";
import { useTranslation } from "react-i18next";

interface ChartData {
  name: string;
  y: number;
}

export const HighCharts = () => {
  const { data: posts } = useGetPostsQuery();
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (posts) {
      const formattedData = posts.map((post) => ({
        name: post.title,
        y: 1,
      }));
      setChartData(formattedData);
    }
  }, [posts]);

  const options = {
    title: { text: t("post_chart") },
    chart: { type: "column" },
    xAxis: {
      categories: chartData.map((data) => data.name),
      title: { text: t("post_titles") },
    },
    yAxis: {
      title: { text: t("post_number") },
      min: 0,
    },
    series: [
      {
        name: "Posts",
        data: chartData.map((data) => data.y),
      },
    ],
    accessibility: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
