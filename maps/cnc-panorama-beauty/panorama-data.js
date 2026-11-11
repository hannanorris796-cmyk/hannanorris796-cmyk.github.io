// Role to terminal industry node paths and task-ability links.
window.PANORAMA_DATA={
  "title": "数控技术产业全景图",
  "source": "最早表＋产业链编码补充表＋v2表＋完整节点路径表／数控技术",
  "major": "数控技术",
  "chain": [
    {
      "id": "c126",
      "code": "126",
      "label": "人工智能产业",
      "industry": "人工智能产业",
      "depth": 0,
      "parent": null
    },
    {
      "id": "c102",
      "code": "102",
      "label": "新能源汽车",
      "industry": "新能源汽车",
      "depth": 0,
      "parent": null
    },
    {
      "id": "c12601",
      "code": "12601",
      "label": "基础支撑层",
      "industry": "人工智能产业",
      "depth": 1,
      "parent": "126"
    },
    {
      "id": "c1260102",
      "code": "1260102",
      "label": "人工智能基础硬件",
      "industry": "人工智能产业",
      "depth": 2,
      "parent": "12601"
    },
    {
      "id": "c126010201",
      "code": "126010201",
      "label": "人工智能芯片",
      "industry": "人工智能产业",
      "depth": 3,
      "parent": "1260102"
    },
    {
      "id": "c102020302",
      "code": "102020302",
      "label": "电机热管理系统",
      "industry": "新能源汽车",
      "depth": 2,
      "parent": "10202"
    },
    {
      "id": "c147",
      "code": "147",
      "label": "服务机器人",
      "industry": "服务机器人",
      "depth": 0,
      "parent": null
    },
    {
      "id": "c147010203",
      "code": "147010203",
      "label": "力觉传感器",
      "industry": "服务机器人",
      "depth": 3,
      "parent": "1470102"
    },
    {
      "id": "c102020101020103",
      "code": "102020101020103",
      "label": "绝缘板",
      "industry": "新能源汽车",
      "depth": 3,
      "parent": "1020201"
    },
    {
      "id": "c102020101020204",
      "code": "102020101020204",
      "label": "增湿器",
      "industry": "新能源汽车",
      "depth": 3,
      "parent": "1020201"
    },
    {
      "id": "c10202",
      "code": "10202",
      "label": "核心零部件",
      "industry": "新能源汽车",
      "depth": 1,
      "parent": "102"
    },
    {
      "id": "c14701",
      "code": "14701",
      "label": "核心零部件制造",
      "industry": "服务机器人",
      "depth": 1,
      "parent": "147"
    },
    {
      "id": "c1470102",
      "code": "1470102",
      "label": "状态感知",
      "industry": "服务机器人",
      "depth": 2,
      "parent": "14701"
    },
    {
      "id": "c1020201",
      "code": "1020201",
      "label": "动力系统",
      "industry": "新能源汽车",
      "depth": 2,
      "parent": "10202"
    }
  ],
  "roles": [
    {
      "id": "r0",
      "label": "质检员",
      "contexts": [
        "126",
        "12601",
        "1260102",
        "126010201"
      ],
      "tasks": [
        {
          "id": "r0t0",
          "label": "负责跟进生产车间工艺执行情况，确保员工按工艺要求进行操作",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r0t1",
          "label": "负责填写相关产品的检验、检测原始记录、运行记录及放行记录",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [
            "注重细节"
          ],
          "inferred_skills": []
        },
        {
          "id": "r0t2",
          "label": "解析并通报发现的不合格",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [
            "职场沟通"
          ],
          "inferred_skills": []
        },
        {
          "id": "r0t3",
          "label": "贴商标",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r0t4",
          "label": "编写重要部件的质量检测规范，并指导来料检验工作。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [
            "注重细节"
          ],
          "inferred_skills": []
        },
        {
          "id": "r0t5",
          "label": "组装整机",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r0t6",
          "label": "进行产品的加工指导和质量检测",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验",
            "测绘仪器操作",
            "量具与检具使用"
          ],
          "qualities": [
            "注重细节"
          ],
          "inferred_skills": []
        },
        {
          "id": "r0t7",
          "label": "负责根据规格与质量标准检验评估已制造完成的产品。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [
            "注重细节"
          ],
          "inferred_skills": []
        },
        {
          "id": "r0t8",
          "label": "操作检验和包装等设备, 进行产品检验与包装作业。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [
            "注重细节"
          ],
          "inferred_skills": []
        },
        {
          "id": "r0t9",
          "label": "检查产品，以确保其符合质量标准与技术规格要求。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验",
            "量具与检具使用"
          ],
          "qualities": [
            "注重细节"
          ],
          "inferred_skills": []
        }
      ],
      "skills": [
        "质量检验",
        "量具与检具使用",
        "测绘仪器操作",
        "生产流程管理"
      ],
      "qualities": [
        "注重细节",
        "职场沟通"
      ],
      "chainLeaves": [
        "126010201"
      ]
    },
    {
      "id": "r1",
      "label": "生产操作员",
      "contexts": [
        "126",
        "12601",
        "1260102",
        "126010201"
      ],
      "tasks": [
        {
          "id": "r1t0",
          "label": "操作生产设备进行生产",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r1t1",
          "label": "按照生产流程和工艺要求，完成产品装配工作",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r1t2",
          "label": "负责喷房现场5S及安全管理",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机电一体化技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r1t3",
          "label": "参与流水线建设",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机电一体化技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r1t4",
          "label": "参与相关设备的操作与维护",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机电一体化技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r1t5",
          "label": "确保生产数量与质量",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r1t6",
          "label": "遵守操作规范，及时报告生产中的异常",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r1t7",
          "label": "负责安排生产车间的生产计划、物料调配及生产进度",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r1t8",
          "label": "按照生产计划，在前处理工序完成班长布置的生产任务",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r1t9",
          "label": "按管理要求对本职区域进行5S整理，严格执行车间危化品管理文件",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机电一体化技术"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "机电一体化技术",
        "机械设备操作与维护",
        "生产流程管理",
        "质量检验"
      ],
      "qualities": [],
      "chainLeaves": [
        "126010201"
      ]
    },
    {
      "id": "r2",
      "label": "CNC技术员",
      "contexts": [
        "102",
        "10202",
        "102020302"
      ],
      "tasks": [
        {
          "id": "r2t0",
          "label": "操作计算机数控机床。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r2t1",
          "label": "操作加工中心，进行工件多工序切削加工",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r2t2",
          "label": "根据工艺文件、图纸及安全生产规范流程，运用机床加工零件，对产品进行自检后送检",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术",
            "图纸识读"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r2t3",
          "label": "监控生产作业或设备运行状况，以确保其符合相关技术规范，并根据需要对工艺流程或组装环节进行相应调整。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r2t4",
          "label": "组织对相关人员进行培训，确保员工操作正确性。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机床设备维修保养"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r2t5",
          "label": "操作CNC加工机台，跟进产品尺寸监控，调试机台及夹持工装",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r2t6",
          "label": "使用手工工具维护机床，并拆除或更换损坏或磨损的机床设备",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r2t7",
          "label": "保养、维修设备",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r2t8",
          "label": "根据机床加工工艺和控制要求，编写NC、PLC程序与梯形图",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术",
            "编程"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r2t9",
          "label": "做好数控机床的日常检查维护及一保",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术",
            "机床设备维修保养"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "机床设备维修保养",
        "编程",
        "图纸识读",
        "数控技术",
        "机械设备操作与维护"
      ],
      "qualities": [],
      "chainLeaves": [
        "102020302"
      ]
    },
    {
      "id": "r3",
      "label": "生产设备操作员",
      "contexts": [
        "126",
        "12601",
        "1260102",
        "126010201"
      ],
      "tasks": [
        {
          "id": "r3t0",
          "label": "操作生产设备进行生产",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r3t1",
          "label": "负责设备维护作业，以保障其正常运行。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r3t2",
          "label": "参与相关设备的操作与维护",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r3t3",
          "label": "检查、监督产品内容和质量。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r3t4",
          "label": "清洁保养机台，填写生产记录。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r3t5",
          "label": "负责弯曲设备的日常使用管理及工艺优化",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r3t6",
          "label": "负责生产场所和人员安全，协调解决生产中的问题",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [],
          "qualities": [
            "协调",
            "解决问题"
          ],
          "inferred_skills": []
        },
        {
          "id": "r3t7",
          "label": "负责产能提升、良率提升、直通率提升，降低消耗品费用。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r3t8",
          "label": "将产品放置于推车或输送带上，以便转运至下一道加工工序。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r3t9",
          "label": "确保与生产方交接的到货物料三方清点清楚，交接手续及时、完整",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "生产设备操作与维护",
        "质量检验",
        "机械设备操作与维护",
        "数控技术",
        "生产流程管理"
      ],
      "qualities": [
        "解决问题",
        "协调"
      ],
      "chainLeaves": [
        "126010201"
      ]
    },
    {
      "id": "r4",
      "label": "生产技术员",
      "contexts": [
        "102",
        "10202",
        "102020302"
      ],
      "tasks": [
        {
          "id": "r4t0",
          "label": "保养、维修设备",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r4t1",
          "label": "协助相关部门处理异常情况",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r4t2",
          "label": "操作生产设备进行生产",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r4t3",
          "label": "及时反馈厂内相关部门生产问题点，制定相关对策并有效执行方案",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [],
          "qualities": [
            "职场沟通"
          ],
          "inferred_skills": []
        },
        {
          "id": "r4t4",
          "label": "操作、维护及调试产品加工的自动化设备",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r4t5",
          "label": "检查维护生产设备, 发现并处理生产中的异常现象和故障。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r4t6",
          "label": "协调并监督负责商品包装与运输的作业人员。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [],
          "qualities": [
            "协调"
          ],
          "inferred_skills": []
        },
        {
          "id": "r4t7",
          "label": "检测机械设备，确保其正常运转",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r4t8",
          "label": "观察物料流动状况，留意机器可能出现的故障，若纠正措施无效则立即通知主管。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "机械设备操作与维护",
        "数控技术",
        "质量检验"
      ],
      "qualities": [
        "协调",
        "职场沟通"
      ],
      "chainLeaves": [
        "102020302"
      ]
    },
    {
      "id": "r5",
      "label": "装配技术员",
      "contexts": [
        "126",
        "12601",
        "1260102",
        "126010201"
      ],
      "tasks": [
        {
          "id": "r5t0",
          "label": "按照生产流程和工艺要求，完成产品装配工作",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械装配",
            "手动工具使用"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r5t1",
          "label": "根据装配图进行装配工艺",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "装配图绘制",
            "机械装配"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r5t2",
          "label": "参与设备安装、调试、试生产及验收工作。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械装配"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r5t3",
          "label": "支持生产中的最终装配区域解决设备和工艺问题。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械装配"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r5t4",
          "label": "检验研发测试组装过程，发现组装过程不符合技术条件、工艺要求或违反食品安全的问题，完成不合格品反馈、处置及验收",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r5t5",
          "label": "拆解相关部件，并使用千分尺、卡尺及量规检查各零件的磨损状况。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [],
          "qualities": [
            "注重细节"
          ],
          "inferred_skills": []
        },
        {
          "id": "r5t6",
          "label": "维护工作场所安全和清洁卫生",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械装配"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r5t7",
          "label": "控制工程机械装配、安装、调试质量。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械装配"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r5t8",
          "label": "执行辅助性工作，包括准备材料、记录进展、补充物资及安排日程",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械装配"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r5t9",
          "label": "按照生产计划，在前处理工序完成班长布置的生产任务",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "机械装配",
        "装配图绘制",
        "手动工具使用",
        "质量检验",
        "生产流程管理"
      ],
      "qualities": [
        "注重细节"
      ],
      "chainLeaves": [
        "126010201"
      ]
    },
    {
      "id": "r6",
      "label": "通信设备研发工程师",
      "contexts": [
        "126",
        "12601",
        "1260102",
        "126010201"
      ],
      "tasks": [
        {
          "id": "r6t0",
          "label": "负责PACK设备的导入",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r6t1",
          "label": "负责自制机台、仪器设备、工装日常维护、维修、保养",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r6t2",
          "label": "及时反馈厂内相关部门生产问题点，制定相关对策并有效执行方案",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [],
          "qualities": [
            "职场沟通",
            "团队合作"
          ],
          "inferred_skills": []
        },
        {
          "id": "r6t3",
          "label": "维护保养设备，调整设备运行中的参数，处理故障",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r6t4",
          "label": "保养、维修设备",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r6t5",
          "label": "进行设备与机械的巡查与监测，确保运行状态高效安全。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r6t6",
          "label": "负责公司软件和硬件设备的安装和调试",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r6t7",
          "label": "负责自动化生产设备的维修保养。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r6t8",
          "label": "维护相关产品的生产制作，处理产线日常问题，保障生产顺利进行",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r6t9",
          "label": "严格按照产品内控标准进行产品转序",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "机械设备操作与维护",
        "生产流程管理"
      ],
      "qualities": [
        "职场沟通",
        "团队合作"
      ],
      "chainLeaves": [
        "126010201"
      ]
    },
    {
      "id": "r7",
      "label": "汽车总装调试工",
      "contexts": [
        "102",
        "10202",
        "102020302"
      ],
      "tasks": [
        {
          "id": "r7t0",
          "label": "控制工程机械装配、安装、调试质量。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "质量检验"
      ],
      "qualities": [],
      "chainLeaves": [
        "102020302"
      ]
    },
    {
      "id": "r8",
      "label": "数控工艺技术员",
      "contexts": [
        "147",
        "14701",
        "1470102",
        "147010203"
      ],
      "tasks": [
        {
          "id": "r8t0",
          "label": "操作计算机数控机床。",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "数控技术",
            "CNC机床操作规程"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r8t1",
          "label": "维护保养设备，调整设备运行中的参数，处理故障",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机床设备维修保养"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r8t2",
          "label": "负责处理和分析设备的各类故障及问题，定期对设备进行维护",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机床设备维修保养"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r8t3",
          "label": "负责现场硬件设备的故障处理",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机床设备维修保养"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r8t4",
          "label": "负责塑胶手机壳的架机、调机及换刀工作",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机床设备维修保养"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r8t5",
          "label": "参与工艺流程制订与工艺图纸绘制。",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机械制图"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r8t6",
          "label": "参与主要工艺操作工序，并负责生产数据的收集与整理",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r8t7",
          "label": "使用手工工具设计并制作模板与夹具",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机床设备维修保养"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r8t8",
          "label": "按图纸加工高精度零件",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "图纸识读",
            "CAD图纸识读",
            "检具使用"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r8t9",
          "label": "监控生产作业或设备运行状况，以确保其符合相关技术规范，并根据需要对工艺流程或组装环节进行相应调整。",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "机床设备维修保养",
        "检具使用",
        "图纸识读",
        "机械制图",
        "数控技术",
        "CAD图纸识读",
        "CNC机床操作规程",
        "生产流程管理",
        "机械设备操作与维护"
      ],
      "qualities": [],
      "chainLeaves": [
        "147010203"
      ]
    },
    {
      "id": "r9",
      "label": "汽车制造人员",
      "contexts": [
        "102",
        "10202",
        "1020201",
        "102020101020103",
        "102020101020204"
      ],
      "tasks": [
        {
          "id": "r9t0",
          "label": "负责汽车零部件及塑胶产品表面涂装的涂装设备系统规划设计",
          "contexts": [
            "102",
            "10202",
            "1020201",
            "102020101020103",
            "102020101020204"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r9t1",
          "label": "负责精密冲压制件的生产",
          "contexts": [
            "102",
            "10202",
            "1020201",
            "102020101020103",
            "102020101020204"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "机械设备操作与维护",
        "生产流程管理"
      ],
      "qualities": [],
      "chainLeaves": [
        "102020101020103",
        "102020101020204"
      ]
    },
    {
      "id": "r10",
      "label": "CNC操作员",
      "contexts": [
        "102",
        "10202",
        "102020302"
      ],
      "tasks": [
        {
          "id": "r10t0",
          "label": "操作计算机数控机床。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术",
            "新代刀塔机"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r10t1",
          "label": "操作CNC加工机台，跟进产品尺寸监控，调试机台及夹持工装",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术",
            "卡尺"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r10t2",
          "label": "负责测试设备的安装调试",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r10t3",
          "label": "安装调整装配台、架，吊运装卸工件。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r10t4",
          "label": "维护保养设备，调整设备运行中的参数，处理故障",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r10t5",
          "label": "解读工程草图、技术规范或图纸。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "图纸识读"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r10t6",
          "label": "负责设备维护作业，以保障其正常运行。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r10t7",
          "label": "使用卡尺、千分尺、高度规、量角器或环规等工具，对设备进行校准或调整，以确保生产质量",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "卡尺"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r10t8",
          "label": "根据编程程序，选用刀具性能合理参数，使钻孔指示或图纸加工尺寸达到精度要求。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "图纸识读",
            "刀具调整(调刀)"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r10t9",
          "label": "负责出货后工位场地的6S善后工作",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "数控技术",
        "刀具调整(调刀)",
        "新代刀塔机",
        "图纸识读",
        "卡尺",
        "机械设备操作与维护"
      ],
      "qualities": [],
      "chainLeaves": [
        "102020302"
      ]
    },
    {
      "id": "r11",
      "label": "数控操作工",
      "contexts": [
        "102",
        "10202",
        "102020302"
      ],
      "tasks": [
        {
          "id": "r11t0",
          "label": "操作计算机数控机床。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r11t1",
          "label": "使用手工工具维护机床，并拆除或更换损坏或磨损的机床设备",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r11t2",
          "label": "操作高速数控雕铣机，严格按照操作规程和机床使用说明书使用机床",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术",
            "机械加工技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r11t3",
          "label": "及时、有效地完成相关部门安排的其他工作",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r11t4",
          "label": "严格按照工艺规程和设备操作指导书操作设备，并按要求记录过程质量文件",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [],
          "qualities": [
            "注重细节"
          ],
          "inferred_skills": []
        },
        {
          "id": "r11t5",
          "label": "完成所负责产品线的业绩要求",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r11t6",
          "label": "审核滞后进度纠偏措施的可行性",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r11t7",
          "label": "收到相关文件后与客户经理、客户进行沟通，核实客户真实需求",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [],
          "qualities": [
            "职场沟通",
            "协调"
          ],
          "inferred_skills": []
        },
        {
          "id": "r11t8",
          "label": "检查下机产品质量, 处理外观质量缺陷",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "量具使用"
          ],
          "qualities": [
            "视力敏锐度",
            "注重细节"
          ],
          "inferred_skills": []
        },
        {
          "id": "r11t9",
          "label": "进行产品的加工指导和质量检测",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "量具使用"
          ],
          "qualities": [
            "注重细节"
          ],
          "inferred_skills": []
        }
      ],
      "skills": [
        "数控技术",
        "机械加工技术",
        "量具使用",
        "生产流程管理"
      ],
      "qualities": [
        "注重细节",
        "协调",
        "职场沟通",
        "视力敏锐度"
      ],
      "chainLeaves": [
        "102020302"
      ]
    },
    {
      "id": "r12",
      "label": "CNC学徒工",
      "contexts": [
        "102",
        "10202",
        "102020302"
      ],
      "tasks": [
        {
          "id": "r12t0",
          "label": "操作计算机数控机床。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r12t1",
          "label": "按时保质保量完成生产任务与产品打样",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r12t2",
          "label": "及时、有效地完成相关部门安排的其他工作",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "图纸识读"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r12t3",
          "label": "严格执行安全规章制度",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "图纸识读"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r12t4",
          "label": "操作CNC加工机台，跟进产品尺寸监控，调试机台及夹持工装",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术",
            "卡尺",
            "量具使用"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r12t5",
          "label": "根据生产计划编程、磨刀并调出合格产品",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "刀具调整(调刀)",
            "CNC编程",
            "G代码(G-Codes)"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r12t6",
          "label": "确保严格执行检验操作相关的操作规程，并正确熟练使用微生物相关设备。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r12t7",
          "label": "协助团队成员，配合项目经理的工作",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [],
          "qualities": [
            "协调"
          ],
          "inferred_skills": []
        },
        {
          "id": "r12t8",
          "label": "按图纸加工高精度零件",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "图纸识读",
            "卡尺",
            "千分尺",
            "量具使用"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "图纸识读",
        "刀具调整(调刀)",
        "数控技术",
        "CNC编程",
        "G代码(G-Codes)",
        "量具使用",
        "卡尺",
        "千分尺",
        "生产流程管理",
        "质量检验"
      ],
      "qualities": [
        "协调"
      ],
      "chainLeaves": [
        "102020302"
      ]
    },
    {
      "id": "r13",
      "label": "数控车工",
      "contexts": [
        "102",
        "10202",
        "102020302"
      ],
      "tasks": [
        {
          "id": "r13t0",
          "label": "操作计算机数控机床。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控车床"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r13t1",
          "label": "使用手工工具维护机床，并拆除或更换损坏或磨损的机床设备",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r13t2",
          "label": "维护保养设备，调整设备运行中的参数，处理故障",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r13t3",
          "label": "进行产品的加工指导和质量检测",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [],
          "qualities": [
            "注重细节"
          ],
          "inferred_skills": []
        },
        {
          "id": "r13t4",
          "label": "按图纸加工高精度零件",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "图纸识读"
          ],
          "qualities": [
            "注重细节"
          ],
          "inferred_skills": []
        },
        {
          "id": "r13t5",
          "label": "负责设备维护作业，以保障其正常运行。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r13t6",
          "label": "严格按照生产流程和质量规范生产合格零部件。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r13t7",
          "label": "根据零件图规定的工件形状、尺寸、材料和技术要求，进行工艺程序的设计和计算，并输入到数控车床数控系统。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控车床",
            "编程"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r13t8",
          "label": "操作高速数控雕铣机，严格按照操作规程和机床使用说明书使用机床",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "铣削"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r13t9",
          "label": "操作机床车床，对机械零件进行磨削、锉削及车削加工，使其尺寸符合规定要求。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控车床"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "数控车床",
        "图纸识读",
        "编程",
        "铣削",
        "数控技术",
        "机械设备操作与维护",
        "质量检验"
      ],
      "qualities": [
        "注重细节"
      ],
      "chainLeaves": [
        "102020302"
      ]
    },
    {
      "id": "r14",
      "label": "机加工操作工",
      "contexts": [
        "102",
        "10202",
        "102020302"
      ],
      "tasks": [
        {
          "id": "r14t0",
          "label": "操作计算机数控机床。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r14t1",
          "label": "按照生产流程和工艺要求，完成产品装配工作",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r14t2",
          "label": "执行咖啡厅领班工作，并向上级负责和报告",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械加工技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r14t3",
          "label": "独立操作车床",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r14t4",
          "label": "监督预处理人员按照工艺安全操作要求穿戴好劳动防护用品",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r14t5",
          "label": "负责整理医疗、工商相关的各项材料及文件，做好文件保管工作，遵守保密原则",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械加工技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r14t6",
          "label": "操作生产设备进行生产",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r14t7",
          "label": "启动设备加工工件，监控运行过程，确认设备参数设置符合规范要求。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械加工技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r14t8",
          "label": "进行产品的加工指导和质量检测",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r14t9",
          "label": "负责设备维护作业，以保障其正常运行。",
          "contexts": [
            "102",
            "10202",
            "102020302"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "机械加工技术",
        "数控技术",
        "生产流程管理",
        "机械设备操作与维护",
        "质量检验"
      ],
      "qualities": [],
      "chainLeaves": [
        "102020302"
      ]
    },
    {
      "id": "r15",
      "label": "自动化技术员",
      "contexts": [
        "147",
        "14701",
        "1470102",
        "147010203"
      ],
      "tasks": [
        {
          "id": "r15t0",
          "label": "操作生产设备进行生产",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r15t1",
          "label": "保养、维修设备",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r15t2",
          "label": "负责自动化设备参数设定、维护、保养",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r15t3",
          "label": "负责自动化生产设备的维修保养。",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r15t4",
          "label": "及时进行设备故障诊断和排除，以恢复设备正常运行",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r15t5",
          "label": "对生产异常进行工艺分析及监控",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r15t6",
          "label": "及时、有效地完成相关部门安排的其他工作",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r15t7",
          "label": "监督生产设备的点检保养工作",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r15t8",
          "label": "开展日常生产工作",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r15t9",
          "label": "制造或组装机械、电气或电子类组件及总成。",
          "contexts": [
            "147",
            "14701",
            "1470102",
            "147010203"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "机械设备操作与维护",
        "生产流程管理"
      ],
      "qualities": [],
      "chainLeaves": [
        "147010203"
      ]
    },
    {
      "id": "r16",
      "label": "储备干部",
      "contexts": [
        "126",
        "12601",
        "1260102",
        "126010201"
      ],
      "tasks": [
        {
          "id": "r16t0",
          "label": "负责相关零件的品质管理及供应商的开发与稽核",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r16t1",
          "label": "安排相关部门人力执行生产计划，在确保安全的前提下保质保量高效地完成任务",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r16t2",
          "label": "全面负责相关部门事故管理工作，建立并落实安全管理制度，确保安全零事故",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "流程集成"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r16t3",
          "label": "及时协调处理相关类别品质异常及质量问题的追溯",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [],
          "qualities": [
            "协调"
          ],
          "inferred_skills": []
        },
        {
          "id": "r16t4",
          "label": "承担物料统计及托盘化相关工作",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r16t5",
          "label": "推进现场生产管理、更换物料、批次变更、人流物流的标准化及改善",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "流程集成"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r16t6",
          "label": "使用电路测试仪、示波器或电压表对各类仪器、组件及总成进行测试与故障排查。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r16t7",
          "label": "协助运营管理部经理推动落实和跟踪下属各企业的运营改善项目",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "流程集成"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r16t8",
          "label": "操作、维护及调试产品加工的自动化设备",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r16t9",
          "label": "管理工厂运营中心的生产制造、生产计划、设备等部门，负责费用、人员培养、安全等管理工作。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "流程集成",
        "数控技术",
        "生产流程管理",
        "机械设备操作与维护"
      ],
      "qualities": [
        "协调"
      ],
      "chainLeaves": [
        "126010201"
      ]
    },
    {
      "id": "r17",
      "label": "设备技术员",
      "contexts": [
        "126",
        "12601",
        "1260102",
        "126010201"
      ],
      "tasks": [
        {
          "id": "r17t0",
          "label": "进行产品的加工指导和质量检测",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [],
          "qualities": [
            "注重细节"
          ],
          "inferred_skills": []
        },
        {
          "id": "r17t1",
          "label": "操作、维护及调试产品加工的自动化设备",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r17t2",
          "label": "负责自动化生产设备的维修保养。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r17t3",
          "label": "维护保养设备，调整设备运行中的参数，处理故障",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r17t4",
          "label": "负责自动化设备参数设定、维护、保养",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r17t5",
          "label": "主持当班空调设备运行，并负责主机开、停操作或指定人员操作",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r17t6",
          "label": "向上级管理部门提供解决问题的方案和建议",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r17t7",
          "label": "确定餐饮成本，并协助落实成本控制措施",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r17t8",
          "label": "负责产品生产管理，围绕下达的生产计划进行分解落实，并建立生产运作体系",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r17t9",
          "label": "操作生产设备进行生产",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "数控技术",
        "机械设备操作与维护",
        "生产流程管理"
      ],
      "qualities": [
        "注重细节"
      ],
      "chainLeaves": [
        "126010201"
      ]
    },
    {
      "id": "r18",
      "label": "设备维修技术员",
      "contexts": [
        "126",
        "12601",
        "1260102",
        "126010201"
      ],
      "tasks": [
        {
          "id": "r18t0",
          "label": "检查、监督产品内容和质量。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r18t1",
          "label": "确保生产数量与质量",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量检验"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r18t2",
          "label": "负责产能提升、良率提升、直通率提升，降低消耗品费用。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "质量管理",
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r18t3",
          "label": "负责弯曲设备的日常使用管理及工艺优化",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r18t4",
          "label": "负责生产场所和人员安全，协调解决生产中的问题",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r18t5",
          "label": "负责处理和分析设备的各类故障及问题，定期对设备进行维护",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r18t6",
          "label": "对生产异常进行工艺分析及监控",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r18t7",
          "label": "维护保养设备，调整设备运行中的参数，处理故障",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r18t8",
          "label": "参与产品生产工艺流程制订",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "生产流程管理"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r18t9",
          "label": "操作生产设备进行生产",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "质量管理",
        "生产流程管理",
        "质量检验",
        "机械设备操作与维护"
      ],
      "qualities": [],
      "chainLeaves": [
        "126010201"
      ]
    },
    {
      "id": "r19",
      "label": "操作技术员",
      "contexts": [
        "126",
        "12601",
        "1260102",
        "126010201"
      ],
      "tasks": [
        {
          "id": "r19t0",
          "label": "保养、维修设备",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r19t1",
          "label": "操作生产设备进行生产",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r19t2",
          "label": "检查维护生产设备, 发现并处理生产中的异常现象和故障。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [
            "解决问题"
          ],
          "inferred_skills": []
        },
        {
          "id": "r19t3",
          "label": "上线巡检设备，发现问题后根据情况制订维修措施",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [],
          "qualities": [
            "解决问题"
          ],
          "inferred_skills": []
        },
        {
          "id": "r19t4",
          "label": "填写设备检修、试验记录, 编写技术总结报告。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [],
          "qualities": [
            "诚实"
          ],
          "inferred_skills": []
        },
        {
          "id": "r19t5",
          "label": "完成汽车融资",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r19t6",
          "label": "负责无菌室现场环境监控",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r19t7",
          "label": "监督生产设备的点检保养工作",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [],
          "inferred_skills": []
        },
        {
          "id": "r19t8",
          "label": "维护保养设备，调整设备运行中的参数，处理故障",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "机械设备操作与维护"
          ],
          "qualities": [
            "解决问题"
          ],
          "inferred_skills": []
        },
        {
          "id": "r19t9",
          "label": "保持机床处于良好运行状态。",
          "contexts": [
            "126",
            "12601",
            "1260102",
            "126010201"
          ],
          "skills": [
            "数控技术"
          ],
          "qualities": [],
          "inferred_skills": []
        }
      ],
      "skills": [
        "机械设备操作与维护",
        "数控技术"
      ],
      "qualities": [
        "诚实",
        "解决问题"
      ],
      "chainLeaves": [
        "126010201"
      ]
    }
  ],
  "learning": {
    "CAD图纸识读": [
      "图层、线型与剖视表达",
      "尺寸、公差及技术要求读取"
    ],
    "CNC机床操作规程": [
      "开机回零与工件坐标设定",
      "对刀、试切及停机安全顺序"
    ],
    "CNC编程": [
      "G/M代码与程序结构",
      "刀具补偿和加工轨迹验证"
    ],
    "G代码(G-Codes)": [
      "常用G指令及模态规则",
      "坐标、进给与插补指令编排"
    ],
    "刀具调整(调刀)": [
      "刀具几何与磨损判定",
      "对刀值、刀补及换刀验证"
    ],
    "千分尺": [
      "测微螺杆结构与零位检查",
      "测力控制和尺寸读数"
    ],
    "卡尺": [
      "游标或数显卡尺结构与校零",
      "外径、内径、深度测量及误差控制"
    ],
    "图纸识读": [
      "投影视图、剖视与零件表达",
      "尺寸、公差和表面技术要求"
    ],
    "手动工具使用": [
      "工具规格与用途选择",
      "扭矩控制及手工具安全检查"
    ],
    "数控技术": [
      "数控机床坐标系与插补",
      "程序、刀补和加工精度控制"
    ],
    "数控车床": [
      "车床主轴、刀塔与坐标轴",
      "车削装夹、对刀和试切"
    ],
    "新代刀塔机": [
      "新代控制界面与刀塔换刀",
      "刀具偏置、报警和试运行"
    ],
    "机床设备维修保养": [
      "机床润滑、导轨与主轴点检",
      "常见报警和故障排查"
    ],
    "机械制图": [
      "正投影与剖视图",
      "尺寸、公差和表面粗糙度标注"
    ],
    "机械加工技术": [
      "车、铣、钻、磨加工选择",
      "切削用量和表面质量控制"
    ],
    "机械装配": [
      "装配基准与顺序",
      "配合间隙、紧固和装配检验"
    ],
    "机械设备操作与维护": [
      "设备启停与运行状态监测",
      "润滑、点检和维护记录"
    ],
    "机电一体化技术": [
      "机械传动与执行机构",
      "传感、控制和电气系统集成"
    ],
    "检具使用": [
      "专用检具定位与零位校准",
      "通止判定和检具维护"
    ],
    "流程集成": [
      "跨工序数据和责任接口",
      "流程变更与异常闭环"
    ],
    "测绘仪器操作": [
      "量测设备校准与坐标基准",
      "测量点采集和结果记录"
    ],
    "生产流程管理": [
      "生产计划与工序衔接",
      "瓶颈识别和过程质量监控"
    ],
    "生产设备操作与维护": [
      "设备点检与安全启停",
      "运行参数监控和预防性保养"
    ],
    "编程": [
      "程序变量、条件与循环",
      "代码调试和异常处理"
    ],
    "装配图绘制": [
      "零部件序号与明细栏",
      "配合关系和装配技术要求"
    ],
    "质量检验": [
      "抽样方案与量测方法",
      "检验记录和不合格品判定"
    ],
    "质量管理": [
      "质量目标与过程监控",
      "纠正预防措施和持续改进"
    ],
    "量具与检具使用": [
      "通用量具与专用检具选择",
      "零位校准和测量结果判定"
    ],
    "量具使用": [
      "量具结构、量程与读数",
      "测量基准和重复性误差"
    ],
    "铣削": [
      "顺铣逆铣与铣刀类型",
      "切削参数、刀路和振动控制"
    ]
  }
};
