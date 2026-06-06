// CirclePacking 课程示例数据

// 示例1：技术栈热度分布（扁平层级）
export const techStackData = [
  {
    id: "data",
    values: [
      {
        name: "技术栈",
        children: [
          {
            name: "前端",
            children: [
              { name: "Vue", value: 850 },
              { name: "React", value: 920 },
              { name: "Angular", value: 430 },
              { name: "Svelte", value: 280 },
            ],
          },
          {
            name: "后端",
            children: [
              { name: "Node.js", value: 760 },
              { name: "Python", value: 980 },
              { name: "Java", value: 870 },
              { name: "Go", value: 640 },
            ],
          },
          {
            name: "数据库",
            children: [
              { name: "MySQL", value: 720 },
              { name: "MongoDB", value: 530 },
              { name: "Redis", value: 410 },
              { name: "PostgreSQL", value: 490 },
            ],
          },
          {
            name: "移动端",
            children: [
              { name: "iOS", value: 560 },
              { name: "Android", value: 680 },
              { name: "Flutter", value: 390 },
              { name: "RN", value: 320 },
            ],
          },
        ],
      },
    ],
  },
];

// 示例2：全球人口分布（多层嵌套）
export const populationData = [
  {
    id: "data",
    values: [
      {
        name: "全球生态",
        children: [
          {
            name: "亚洲",
            children: [
              {
                name: "东亚",
                children: [
                  { name: "中国", value: 14000 },
                  { name: "日本", value: 1260 },
                  { name: "韩国", value: 520 },
                ],
              },
              {
                name: "东南亚",
                children: [
                  { name: "印尼", value: 2760 },
                  { name: "越南", value: 980 },
                  { name: "泰国", value: 720 },
                ],
              },
              { name: "印度", value: 14000 },
            ],
          },
          {
            name: "美洲",
            children: [
              { name: "美国", value: 3310 },
              { name: "巴西", value: 2150 },
              { name: "加拿大", value: 380 },
              { name: "墨西哥", value: 1270 },
            ],
          },
          {
            name: "欧洲",
            children: [
              { name: "德国", value: 830 },
              { name: "英国", value: 680 },
              { name: "法国", value: 680 },
              { name: "俄罗斯", value: 1450 },
            ],
          },
        ],
      },
    ],
  },
];
