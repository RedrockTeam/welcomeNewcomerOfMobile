const teachers = [
  [
    [ {
      name: '高非',
      picture: '高非'
    },
    {
      name: '陈褀褀',
      picture: '陈褀褀'
    }],
    [ {
      name: '高冬',
      picture: '高冬'
    },
    {
      name: '张清华',
      picture: '张清华'
    }]
  ],
  [
    [ {
      name: '付蔚',
      picture: '付蔚'
    },
    {
      name: '胡庆',
      picture: '胡庆'
    }],
    [ {
      name: '蒋青',
      picture: '蒋青'
    },
    {
      name: '罗元',
      picture: '罗元'
    }]
  ],
  [
    [ {
      name: '闵绪国',
      picture: '闵绪国'
    },
    {
      name: '彭语良',
      picture: '彭语良'
    }],
    [ {
      name: '漆晶',
      picture: '漆晶'
    },
    {
      name: '王睿',
      picture: '王睿'
    }]
  ],
  [
    [ {
      name: '王樱桃',
      picture: '王樱桃'
    },
    {
      name: '熊安萍',
      picture: '熊安萍'
    }],
    [ {
      name: '袁帅',
      picture: '袁帅'
    },
    {
      name: '张琬悦',
      picture: '张琬悦'
    }]
  ],
  [
    [ {
      name: '郑继明',
      picture: '郑继明'
    },
    {
      name: '周兴茂',
      picture: '周兴茂'
    }],
    [ {
      name: '朱伟',
      picture: '朱伟'
    }]
  ]
]

const students = [
  [
    {
      name: '蒋天星',
      picture: '蒋天星',
      content: '蒋天星，计算机科学与技术学院2015级智能科学与技术专业学生,上任红岩网校工作站站长。他锐意进取，奉献青春，充分发挥“红岩网校工作站”团支部技术优势，积极带领同学们组织参与各项网络志愿服务活动。'
    },
    {
      name: '刘磊',
      picture: '刘磊',
      content: '刘磊, 光电工程学院2014级微电子科学与工程专业学生，驻班党员、年级长、校党委组织部助理、党支部宣传委员，现已考取重庆邮电大学硕士研究生。'
    },
    {
      name: '赵蔺',
      picture: '赵蔺',
      content: '赵蔺, 外国语学院2015级翻译专业学生，外国语学院团总支学生兼职副书记，曾任外国语学院新媒体部副部长、辅导员助理、学习委员，重庆邮电大学本硕连读候选人。'
    }
  ],
  [
    {
      name: '刘顺程',
      picture: '刘顺程',
      content: '刘顺程, 软件工程学院2015级英语+软件专业学生。现担任13061702班班学长，学业辅导团高数讲师,班级宣传委员、心理委员。'
    },
    {
      name: '张淑媛',
      picture: '张淑媛',
      content: '张淑媛，女，传媒艺术学院2014级艺术设计专业学生，学习委员,现已保送深圳大学攻读硕士研究生。天降不幸命运坎坷，终身残疾，但克己自律战胜自己，乐观看待学习与生活。'
    },
    {
      name: '陈俊伊',
      picture: '陈俊伊',
      content: '陈俊伊，男，通信与信息工程学院通信工程2014级卓越工程师班学生。  担任通信学院艺术团团长、畅响室内乐团会长,大学生艺术团民乐团、综合部成员,重庆川江号子传承人合唱团男高音声部成员。'
    }
  ],
  [
    {
      name: '吴英冬',
      picture: '吴英冬',
      content: '吴英冬，男，中共党员,光电工程学院2014级电子信息科学与技术专业学生,曾担任重庆市学生联合会大学生新媒体中心主任,现已签约华为技术有限公司。学术研究，锐意创新。'
    },
    {
      name: '郭泰廷',
      picture: '郭泰廷',
      content: '郭泰廷，计算机科学与技术学院2014级计算机科学与技术专业学生，校史馆学生志愿者解说队队长、双语解说员, 现已被澳洲国立大学、悉尼大学、杜伦大学等11所世界百强名校录取为英语相关专业硕士研究生。'
    },
    {
      name: '黎杨杰',
      picture: '黎杨杰',
      content: '黎杨杰，传媒艺术学院2015级广播电视编导专业学生,党委宣传部新闻中心成员、就业指导中心助理、2017级班学长。“互联网+智慧小镇”项目创始人,重庆智一术江科技有限公司负责人。'
    }
  ],
  [
    {
      name: '谭发欢',
      picture: '谭发欢',
      content: '谭发欢，体育学院2015级社会体育指导与管理专业学生。作为一名优秀的体育人，一生追求运动，不断超越自我。他坚持成就辉煌，在赛场上逐梦青春之火。他积极参与学校各类运动活动，弘扬运动精神。'
    },
    {
      name: '知行苑7舍205寝室',
      picture: '知行苑7舍205',
      content: '知行苑7舍205寝室，由计算机科学与技术学院2014级6名男生组成,中共党员1人。1人保送哈尔滨工业大学硕士研究生、2人签约阿里巴巴、2人签约华为技术有限公司、1人签约滴滴出行。'
    },
    {
      name: '02031401班',
      picture: '02031401班',
      content: '02031401班,光电工程学院/重庆国际半导体学院2014级电子科学与技术专业，共30人，其中中共党员10人。'
    }
  ]
]

const groups = {
  '团委办公室': {
    currentIndex: 0,
    items: [
      [
        {
          name: '团委办公室',
          content: '重庆邮电大学团委办公室(以下简称办公室）是共青团重庆邮电大学委员会直属机构之一。是学校团学工作的枢纽与核心，在团委与各校级学生组织之间起到桥梁与枢纽的作用，是所有学生组织中与老师联系最密切的部门，是团委老师的得力助手。办公室负责团委工作的上传下达——向上通过制作团委工作简报《重邮共青团》等，向团中央、团市委汇报学校团学工作动态；向下沟通联系各校级学生组织，传达团委相关工作要求，并针对学生组织相关工作予以监督。参与学生组织各类活动的筹备工作，负责学生活动场地的管理工作，监督并完善团建在线网站的建设。同时，办公室还协助完成学校大型活动的会务，秘书工作，协助完成大学生志愿者暑期“三下乡”社会实践活动，负责各项文件，奖状资料的管理存档工作。'
        }
      ]
    ]
  },
  '团委组织部': {
    currentIndex: 0,
    items: [
      [
        {
          name: '团委组织部',
          content: '重庆邮电大学团委组织部是校团委核心直属部室。组织部以“严谨 高效 励志 笃行”作为部训，协调统筹各学院团总支及基层团支部开展工作。是负责全校共青团的基层组织建设工作、推优入党工作、五四评优表彰工作、开展青年马克思主义培养工程、指导主题团日活动的开展和团支部“活力提升”工程的实施以及开展班级团支部和班委会一体化运行机制改革等工作的职能部门。'
        }
      ]
    ]
  },
  '团委宣传部': {
    currentIndex: 0,
    items: [
      [
        {
          name: '团委宣传部',
          content: '校团委宣传部是我校团委的重要部门，担负着向学校、校团委各学生组织传达信息的重要任务，是校团委各部门正常工作的基本保证。宣传部是负责全校工作的宣传、报道，传达学校和团委的工作指示，会议通知，对广大团员青年进行思想政治教育、素质教育的宣传工作；负责通过网络、海报、橱窗、等形式开展政治思想教育工作。宣传部以丰富校园文化生活，活跃同学们的第二课堂，丰富广大同学的课余生活为己任，带领各团总支宣传部开展工作。'
        }
      ]
    ]
  },
  '学生社团联合会': {
    currentIndex: 0,
    items: [
      [
        {
          name: '学生社团联合会',
          content: '社团联合会在校团委的直接指导下，管理社团工作、服务社团发展的学生组织，旗下管辖着涵盖文学学术、实践服务、艺术文化、爱好兴趣、体育运动等功能丰富、类型兼备的各类学生社团组织。目前，能否建设好高校的社团已经成为一个高校是否具有活力和文化氛围的重要标志之一。学生社团遍布全国高校校园的各个角落，扮演着丰富校园文化生活、提升校园文化品位、引领校园文化时尚的重要角色。'
        }
      ],
      [
        {
          name: '主席团',
          content: '全面主持学生社联各项工作；制定社联工作计划和发展规划；指导、检查、督促各社团开展工作，协调与各学生组织 和社团之间的关系。'
        },
        {
          name: '综合部',
          content: '社联小当家。负责社联内部文书、考勤、活动筹备等工作，策划组织各项内部活动；负责学生社团精品活动物资的审批发放、场地申请；同时负责与兄弟高校社联组织、校内各组织及校外商家的联络。'
        },
        {
          name: '宣传部',
          content: '活动先行者。负责社联新媒体运营工作，搭建学生社团宣传平台。负责设计社联活动海报、视频等文化产品，同时审批社团活动海报等宣传制品。'
        }
      ],
      [
        {
          name: '社团服务部',
          content: '社团小管家。负责管理社团与社团部。收集社团资料，督促社团发展，牵头社团招新，组织“百团大战”，十佳会长与优秀社团的答辩及社团换届，同时还负责社团活动物资的审批与发放。'
        },
        {
          name: '社团活动部',
          content: '活动执行官。负责审核、指导学生社团开展精品活动，牵头社联各部门举办社团达人秀、社团推广暨展示季等大型活动，增添校园文化色彩。'
        }
      ]
    ]
  },
  '学生科技联合会': {
    currentIndex: 0,
    items: [
      [
        {
          name: '综合部',
          content: '综合部是学生科联的枢纽中心。它是连接团委、主席团和科联各个部门、干事之间的纽带，起到上传下达的作用，并以办公室的日常管理为工作重点。其主要负责制定、完善、推广科联制度；负责科联对外联络和洽谈；负责科联各部门内部协调；负责组织科联干部干事成立大会、素质拓展、科联交享悦、科联杯、干部干事培训和考核、人才互荐交流、总结晚会等活动；负责与各学院的学生科创组织保持紧密联系，开展交流活动；负责与兄弟高校的学生科创组织进行交流合作。'
        }
      ],
      [
        {
          name: '科创竞赛部',
          content: '科创竞赛部是学生科技联合会的竞技中心。以“科创点亮未来，竞赛成就梦想”为理念，主要负责开展和推广校内外科技竞赛活动，如“科普先锋秀”、“无线电猎狐大赛”等；组织“挑战杯”（大挑）大学生课外学术科技作品竞赛、“创青春”（小挑）全国大学生创业大赛的申报和立项工作。致力于为全校提供一个校内外公平竞技的平台，营造良好的校园竞技氛围。'
        }
      ],
      [
        {
          name: '项目管理部',
          content: '项目管理部是学生科联的科创中心，主要负责学生科联的创新、创业工作。负责协调开展“学生科技节”等系列大型科技活动，包括组织开展“学生课外学术科技作品竞赛”、“创新创业训练营”、“学生创新创业成果展”等系列活动。同时致力于“创新高端论坛”校内外创新创业沙龙活动、运用网络媒体发布校内外科创赛事资讯等，构建学校创新创业项目交流以及推广的平台，营造浓厚的科技创新创业氛围。'
        }
      ],
      [
        {
          name: '科技人文部',
          content: '科技人文部作为学生科技联合会的文化活动中心，秉承着“科技点缀生活，人文融入梦想”的理念，以“文峰青年大讲堂”、“重邮青年说”、“学长演播厅”为主打品牌活动。文峰青年大讲堂诚邀知名专家学者和文化名人，旨在浓厚校园科技文化氛围的同时，强化人文环境，打造属于重邮的专属讲堂。重邮青年说旨在寻找和培养一批敢于发声，说出自己对生活的感悟的重邮人，传播年轻正能量。学长演播厅邀请优秀学长学姐，为新生答疑解惑，力求将最新最热最有用的大学资讯和成功经验分享给重邮学子。'
        }
      ],
      [
        {
          name: '信息部',
          content: '信息部是学生科联的技术中心。其主要负责科技创新实践活动的培训与开展。Web组主要负责Html5的开发及Web前端的基础培训，静态网页与动态网页的制作；UI组负责对网页整体界面美观、人机交互、操作逻辑的设计；运营组主要负责利用PowerPoint和Premiere等软件来进行产品运营以及宣传。致力于“培养精英团队”，打造科联信息化平台，丰富科联的创新创意活动。'
        }
      ],
      [
        {
          name: '媒体运营部',
          content: '媒体运营部是学生科联的创意中心。其主要负责学生科联创意设计及校内外宣传工作。设计海报、条漫及展板，活动现场布置等；制作活动视频、微电影和动画以及活动现场摄影摄像及新闻稿的撰写。同时也负责学生科联线上的运营工作，管理科联公众号的推广，通过海报、视频、网络等形式在校内外宣传科联活动，打响科联品牌，展示科联成果。'
        }
      ]
    ]
  },
  '青年志愿者协会': {
    currentIndex: 0,
    items: [
      [
        {
          name: '青年志愿者协会',
          content: '重庆邮电大学青年志愿者协会是校团委直属管辖的七大学生组织之一，是富有志愿精神，乐于志愿活动的大学生志愿者的聚集地。青协致力于营造良好志愿氛围，组织统筹校内外各类志愿活动：组织开展全校“三下乡”社会实践活动、“12.5国际志愿者日”志愿周系列活动、“3·5学雷锋月”系列活动、“重庆邮电大学优秀志愿项目评选”、“班级志愿考核”、“天天系列”活动、“周末课堂”志愿活动等相关工作。青年志愿者协会始终秉承“奉献、友爱、互助、进步”的志愿者精神，为陌生人提供方便，为弱势群体奉献爱心，为校园、为社会注入正能量。'
        }
      ],
      [
        {
          name: '综合管理部',
          content: '综合管理部主要负责校内志愿者志愿服务时长的认定与管理，组织协调好校青协内部工作，管理青协物资，并负责协调各学院青协工作并进行活动汇总，进行班级志愿活动考核，以及与兄弟高校青协组织及校外公益组织的联络，组织并参与各类活动。'
        },
        {
          name: '青年志愿者服务总队',
          content: '青年志愿者服务总队主要负责管理与协调校内各院级青协，及12.5志愿周期间优秀志愿项目的评选；此外，组织开展校内外的志愿服务活动，如“天天护跑”、“天天咨询”等“天天系列”活动。'
        }
      ],
      [
        {
          name: '实践服务部',
          content: '主要负责统筹城乡社区市民学校建设，日常开展“四点半课堂”以及“周末课堂”等志愿活动。并负责统筹大学生 "三下乡"社会实践工作，以及规范校内各学院志愿活动。'
        },
        {
          name: '宣传推广部',
          content: '负责官方QQ的运营以及微信推送；负责青年志愿服务活动宣传；负责校内外志愿活动的跟踪纪录；对志愿服务品牌项目进行推广，通过拍照片，录视频以及优质的文案使更多的人参与到志愿活动当中，去体会志愿活动本身的乐趣。'
        }
      ]
    ]
  },
  '学生会': {
    currentIndex: 0,
    items: [
      [
        {
          name: '学生会',
          content: '重庆邮电大学学生会是由校党委、市学联领导，由校团委具体指导的群众性组织。重庆邮电大学学生会以“全心全意为同学服务”为宗旨，充分发挥同学们的主人翁精神，加强学风建设，营造浓厚的读书氛围；以提高学生综合素质、推进校园文化建设为目标，创建了一批深受同学们喜爱的科技文化活动；积极营造校园爱心氛围；结合校园实际，积极加强大学生法制观念，维护大学生合法权益；开展文体活动，丰富校园文化生活；利用现有资源，打造网络交流平台，通过编撰刊物，展示理论成果。'
        }
      ],
      [
        {
          name: '综合部',
          content: '主要负责学生会内部日常管理，协调各学院学生会工作，负责与兄弟高校学生会及校外单位、企业、协会的联络以及牵头对各学院学生会的考核。'
        },
        {
          name: '学习部',
          content: '积极开展各类学风建设活动，了解和收集同学对教学的意见和建议，组织开展辩论赛、读写行等活动，建设“学业互帮”学习互助平台以及协助校学业辅导中心开展学业分析工作。'
        },
        {
          name: '宣传部',
          content: '充分利用新媒体开展学生会宣传工作，设计制作视频、微电影、海报等文化产品并开展校园文化创意活动。'
        },
      ],
      [
        {
          name: '权益提案部',
          content: '主要负责处理提案工作委员会日常事务，学生代表提案的征集、立案、报送、督办等工作。搭建青年学生维权服务平台。'
        },
        {
          name: '生活服务部',
          content: '处理食品安全与伙食监督管理委员会日常事务并做好与后勤、宿舍管理部门的沟通联系。组织开展健康生活、文明生活主题活动。'
        },
        {
          name: '文艺部',
          content: '为同学搭建才艺展示平台，培养同学文艺爱好，并且在校内开展迎新晚会、毕业晚会、草坪音乐会等校内文艺活动。'
        }
      ],
      [
        {
          name: '体育部',
          content: '组织开展“三走”群众性体育锻炼活动，定期策划并举行一些符合当代大学生的有意义的非竞技性户外运动活动。'
        },
        {
          name: '女生部',
          content: '主要工作为反映广大女生的合理利益诉求，组织开展女生节系列活动并配合“文峰女子学堂”开展各类活动。'
        }
      ]
    ]
  },
  '大学生艺术团': {
    currentIndex: 0,
    items: [
      [
        {
          name: '大学生艺术团',
          content: '重庆邮电大学大学生艺术团是在校团委直接指导管理下的学生艺术团体，肩负组织学校重大文艺活动，代表学校对外联谊，演出和参加省市文艺大赛的重任。秉承“服务同学，锻炼自我”的宗旨，以丰富校园文化生活，陶冶情操，加强与其他院校艺术交流与沟通，为校宣传争光，活跃人文气氛等为前提，要求每个成员在艺术实践中以高标准、严要求的态度约束自己。 大学生艺术团由管乐团、合唱团、舞蹈团、民乐团、话剧团、综合部组成。主要承担着我校各项大型演出任务，组织编排各项文艺节目，为有文艺特长的同学搭建良好的交流和展示平台，每个分团都有固定的训练时间和专业指导老师。'
        }
      ],
      [
        {
          name: '民乐团',
          content: '大学生艺术团民乐团是以民族乐器为主，为学校各项活动演出与代表重邮参加艺术类比赛的校级组织。民乐团本着继承中国传统文化，发扬中国传统民族乐器的建团宗旨，培养学生音乐爱好与素养，丰富同学课余生活与文化活动。'
        },
        {
          name: '舞蹈团',
          content: '大学生艺术团舞蹈团是以民族舞、古典舞、现代舞为主的为各大舞台筹划演出和准备比赛的校级组织。老师会对所有成员根据自己擅长的舞种分组，比如民族舞、爵士舞、拉丁舞、街舞等等，再依据实际情况组织训练，保证每个人各施所长。平时会组织基本功、舞感训练和舞蹈组合的排练。学校的大型演出都有舞蹈团的身影，热爱舞蹈和舞台的你不要错过哟！'
        }
      ],
      [
        {
          name: '管乐团',
          content: '重邮管乐团是重邮历史最悠久的校级团体之一，在大大小小的比赛舞台上获奖无数。乐团主要以木管，铜管，打击乐等多种类型乐器相配合，共同创作出精彩的演出。'
        },
        {
          name: '话剧团',
          content: '话剧团是重庆邮电大学大学生艺术团下的分支团体，主要进行话剧舞台表演与展示。用剧本，演员，表演，灯光，舞台效果等带给每一个人话剧的非凡魅力。'
        }
      ],
      [
        {
          name: '合唱团',
          content: '重庆邮电大学合唱团自1995年成立以来，旨在丰富在校大学生的文化艺术生活，传承和发扬校园文化，服务人才培养，普及美育教育，传承重邮精神。重庆邮电大学合唱团用他们的歌声响彻南山之巅。'
        },
        {
          name: '综合部',
          content: '大学生艺术团综合部是整个大学生艺术团的心脏和大脑，负责整个艺术团后勤以及技术设备支持。同时为全校各大演出活动提供舞美、礼仪和后台支持，通过外交衔接并管理着各大团以及团内的日常事务。'
        }
      ]
    ]
  }
}

const dorms = {
  'xinye': {
    photoIndex: 0,
    photos: [
      'xinye1.JPG',
      'xinye2.JPG',
      'xinye3.JPG',
      'xinye4.JPG'
    ],
    title: 'title_xinye',
    content: '兴业苑（17--23）：屹立于悠悠重邮高处，周边风景秀丽，分布在太极运动场周围，，周边有学校的兴业苑食堂及众多的超市、商铺，校车从这里穿过。内部均设有独立卫生间，并在一些楼层设有洗衣机供大家使用，根据每栋宿舍不同，楼层不同分为4人间、6人间两种。4人间都是上床下铺，而6人间则是上下铺与上床下桌的混搭。'
  },
  'zhixin': {
    photoIndex: 0,
    photos: [
      'zhixin1.JPG',
      'zhixin2.JPG',
      'zhixin3.JPG',
      'zhixin4.JPG'
    ],
    title: 'title_zhixin',
    content: '知行苑（1—6，15,16）：位于中心食堂附近的1,5,6栋是学校现存最老的寝室，但位于校园中心，上课，生活都极为便利。15.16栋寝室则在太极运动场旁边，楼下是商店和快递点，附近有红高粱和兴业苑食堂，十分便利。1.5.6栋寝室为6人间，上下均为床铺，内部没有独立卫生间和阳台。15.16栋则为学校标准的4人间，上床下桌，配有阳台，独立卫生间。'
  },
  'minli': {
    photoIndex: 0,
    photos: [
      'minli1.JPG',
      'minli2.JPG',
      'minli3.JPG',
      'minli4.JPG',
      'minli5.jpg',
      'minli6.jpg'
    ],
    title: 'title_minli',
    content: '明理苑（24—31,39）：位于千喜鹤食堂正街上，可以俯瞰全校以及南山的部分美丽景色，这里也是重邮夏天最凉爽的地方。可以坐私家车直达寝室，周围有两个超市和商铺，并且校车穿过。每个寝室都为6人间，并设有独立卫生间，每一栋楼里面配置有洗衣机可供大家使用，应有尽有，可以尽情满足同学们的平日生活需求。'
  },
  'linjin': {
    photoIndex: 0,
    photos: [
      'linjin1.JPG',
      'linjin2.JPG',
      'linjin3.JPG',
      'linjin4.JPG',
      'linjin5.jpg'
    ],
    title: 'title_linjin',
    content: '宁静苑（8—12，32--35）：坐落在美丽的情人坡旁，是妹子们散心聊天约会的好去处；篮球、网球、羽毛球这些周围球场为大家的锻炼提供了方便，与新校区紧连，周边分布有“千喜鹤”、“延生”等食堂。宿舍基本为6人间基本情况与22-24相同且有独立的阳台、卫浴，床铺是上下铺与上床下桌的混搭，人流量很少，环境比较清静。'
  }
}

const canteens = {
  'can_qianxihe': {
    photoIndex: 0,
    photos: [
      'can_qianxihe1.jpg',
      'can_qianxihe2.jpg',
      'can_qianxihe3.jpg'
    ],
    title: 'title_can_qianxihe',
    content: '千喜鹤怕是重邮最具重庆味道的食堂了，不过这品味的不是麻辣鲜香的那一味，而是重庆高低井然错落有致的建筑风格，除去对着明理苑的正门，你同时还可以从延生内部和楼下的楼梯直上。倘若说在食堂中挑一个最喜欢的，那千喜鹤一定是高居榜首的那一个，相比于食堂，千喜鹤更像是一个美食广场，从西式快餐到中式早点，从日常正餐到饭后甜点，可谓是应有尽有。推荐菜目：火锅米线，豆浆记忆，盐酥鸡。人均消费：18元'
  },
  'can_xinye': {
    photoIndex: 0,
    photos: [
      'can_xinye1.jpg',
      'can_xinye2.jpg',
      'can_xinye3.JPG'
    ],
    title: 'title_can_xinye',
    content: '兴业苑食堂作为老一派的食堂，与中心食堂一样，不断沉淀自己的重庆味道，色香味俱全的家烧菜肴，总有一款美味属于家的味道。推荐菜目：青椒炒肉丝，回锅肉，辣子鸡丁。人均消费：9元'
  },
  'can_daxibei': {
    photoIndex: 0,
    photos: [
      'can_daxibei1.jpg',
      'can_daxibei2.jpg',
      'can_daxibei3.JPG'
    ],
    title: 'title_can_daxibei',
    content: '大西北背靠中心食堂，面朝着宁静苑4舍，同中心食堂一般，因着优越的地理位置成为了学生上课早餐首选。靠着北方师傅的一手好厨艺，虽说是地处川渝地区，但也能品味到一两点奢侈的北方滋味。不同于其他食堂的是，大西北食堂的空间较小，堂食的学生较少，更多的青睐来自于它极为迅敏的打包速度。推荐菜品：羊肉泡馍，大盘鸡盖饭。人均消费：8元'
  },
  'can_honggaoliang': {
    photoIndex: 0,
    photos: [
      'can_honggaoliang1.jpg',
      'can_honggaoliang2.jpg',
      'can_honggaoliang3.jpg',
    ],
    title: 'title_can_honggaoliang',
    content: '红高粱食堂伫立于兴业苑食堂上方，红高粱食堂总具有自己的风格，不断推陈出新，在这里你可以品尝到新的变化！推荐菜目：冒菜，花溪米线，土耳其烤肉饭人均消费：12元'
  },
  'can_yansheng': {
    photoIndex: 0,
    photos: [
      'can_yansheng1.jpg',
      'can_yansheng2.jpg',
      'can_yansheng3.jpg',
    ],
    title: 'title_can_yansheng',
    content: '被宁静苑和知行苑两相环绕，算的是颇为优越的地理位置。没有富丽堂皇的过分修饰，多的是一览无余的简单明了。亲切，日常，这两个词来形容延生食堂最合适不过了，亲切的是带有两三分家长里短的味道，日常的是朝朝暮暮交错间穿梭的身影。推荐菜目：冒菜，鲜榨豆浆，羊肉粉。人均消费：10元'
  },
  'can_zhongxin': {
    photoIndex: 0,
    photos: [
      'can_zhongxin1.jpg',
      'can_zhongxin2.jpg',
      'can_zhongxin3.jpg',
    ],
    title: 'title_can_zhongxin',
    content: '中心食堂：与雨红莲广场毗连，又与风华操场隔道相望的它，由于与二教距离甚近，也常常是同学们打包就餐的不二选择。它以低廉的价格和繁多的种类，在同学们的心中占有绝对地位。推荐菜目：早餐时段售卖的麻团，糍粑和荤素包子，糖醋里脊。人均消费：8元'
  }
}

const life = {
  '周边美食': {
    currentIndex: 0,
    items: [
      [
        {
          name: 't_城门老火锅',
          photo: 'chenmenlaohuoguo',
          content: '地址： 新校门出门，过马路右转<br/>简介： 辣而不燥，回味悠长'
        },
        {
          name: 't_大茶杯',
          photo: 'dachabei',
          content: '地址： 老校门过马路左转一个斜坡旁<br/>简介： 这里的招牌奶茶如丝般顺滑'
        },
        {
          name: 't_果然',
          photo: 'guoran',
          content: '地址： 老校门对面<br/>简介： 满满一杯细细品味，哇噢!就是这个味道！'
        },
        {
          name: 't_华莱士',
          photo: 'hualaishi',
          content: '地址： 老校门对面<br/>简介： 物美价廉，种类繁多，美味可口'
        }
      ],
      [
        {
          name: 't_黄焖鸡米饭',
          photo: 'huangmenjimifan',
          content: '地址： 老校门对面<br/>简介： 好吃，又实惠，配上米饭一吃，那就一个字 ，绝'
        },
        {
          name: 't_蜜雪冰城',
          photo: 'mixuebincheng',
          content: '地址： 老校门对面<br/>简介： 这家的冰激凌很好吃哦，而且不贵，物美价廉！'
        },
        {
          name: 't_土巴碗',
          photo: 'tubawan',
          content: '地址： 老校门对面左转斜坡上右边<br/>简介： 里面有各种特色套饭，炒饭和面条等。'
        },
        {
          name: 't_万州巴斗香烤鱼',
          photo: 'badouxiangkaoyu',
          content: '地址： 新校门出门右转，农业银行旁<br/>简介： 口味奇绝、营养丰富'
        }
      ],
      [
        {
          name: 't_无届青年餐馆',
          photo: 'wujie',
          content: '地址： 老校门过马路左转，斜坡旁边巷子进去<br/>简介： 一个聚集大批文青谈人生聊梦想的地方'
        },
        {
          name: 't_哈哈花甲',
          photo: 'hahahuajia',
          content: '地址：堕落二街内/新校门右侧一排建筑物<br/>简介：酸辣中夹带着河海的鲜味，十分好吃！'
        },
        {
          name: 't_古茗',
          photo: 'gumin',
          content: '地址：老校门对面<br/>简介：每一口细啜都能品味到一两分独属于茶叶的清香。'
        },
        {
          name: 't_陈记干锅',
          photo: 'chenjiganguo',
          content: '地址： 多位于堕落街内<br/>简介：不分地域，不分口味，是相比于火锅来的更为沉稳的好味道'
        }
      ]
    ]
  },
  '景色': {
    currentIndex: 0,
    items: [
      [
        {
          name: 't_大金鹰',
          photo: 'dajinyin',
          content: '路线：乘坐346公交车在四中站下车<br/>简介：雄居在重庆南山671米高的鹞鹰岩上。'
        },
        {
          name: 't_黄葛古道',
          photo: 'huanggegudao',
          content: '路线：上新街爬南山的一条路<br/>简介：重庆市知名度最高的一条古道'
        },
        {
          name: 't_南滨路',
          photo: 'lanbinlu',
          content: '路线：从南坪步行约390米,到达南坪东路站<br/>简介：可观最美渝中夜景'
        },
        {
          name: 't_抗日纪念博物馆',
          photo: 'kangri',
          content: '路线：乘坐346公交车在四中站下车<br/>简介：抗战遗址与自然景观综合旅游基地'
        }
      ],
      [
        {
          name: 't_老君洞',
          photo: 'laojundong',
          content: '路线：位于黄桷古道边<br/>简介：是重庆主城区最大最主要的宫观。'
        },
        {
          name: 't_南之山',
          photo: 'nanzhishan',
          content: '路线：乘坐346公交车在四中站下车<br/>简介：南山之上，一间看得见风景的书店。'
        },
        {
          name: 't_涂山湖',
          photo: 'tushanhu',
          content: '路线：新校门出去，向二外的方向。<br/>简介：涂山湖公园分东西南北打造四季景色。'
        },
        {
          name: 't_一棵树',
          photo: 'yikeshu',
          content: '路线：搭347/346到四中站下<br/>简介：鸟瞰重庆城这座山水之城的起伏面貌。'
        }
      ]
    ]
  },
  '超市': {
    currentIndex: 0,
    items: [
      [
        {
          name: 't_新世纪超市',
          photo: 'xinshiji',
          content: '地址：新校门出门过马路，右转直走'
        },
        {
          name: 't_永辉超市',
          photo: 'yonghui',
          content: '地址：新校门出门过马路，右转直走约10分钟'
        },
        {
          name: 't_渝芳百货商场',
          photo: 'yufangbaihuo',
          content: '地址：新校门出门，左转直走。老校门出门，右转直走。'
        }
      ]
    ]
  },
  '附近银行': {
    currentIndex: 0,
    items: [
      [
        {
          name: 't_农业银行',
          photo: 'nongyeyinhang',
          content: '地址：新校门出门右转，新世纪超市旁边'
        },
        {
          name: 't_邮政储蓄银行',
          photo: 'youzhenchuxu',
          content: '地址：老校门出门右转，绝味鸭脖旁边'
        },
        {
          name: 't_工商银行',
          photo: 'gongshangyinhang',
          content: '地址：新校门出门，左转直走，老校门出门，右转直走'
        },
        {
          name: 't_重庆农村商业银行',
          photo: 'nongcunshangyeyinhang',
          content: '地址：老校门出门，过马路，右转'
        }
      ]
    ]
  },
  '快递收发': {
    currentIndex: 0,
    items: [
      [
        {
          name: 't_京东',
          photo: 'jindong',
          content: '地址：在两个快递点中段'
        },
        {
          name: 't_申通快递',
          photo: 'shentong',
          content: '地址：靠近楼梯'
        },
        {
          name: 't_韵达快递',
          photo: 'yunda',
          content: '地址：位于15栋，靠近兴业苑食堂'
        },
        {
          name: 't_中通快递',
          photo: 'zhongtong',
          content: '地址：位于5栋商店旁边'
        }
      ],
      [
        {
          name: 't_百世快递',
          photo: 'baishi',
          content: '地址：阳光图文巷子向前走50米'
        },
        {
          name: 't_天天快递',
          photo: 'tiantian',
          content: '地址：新校门出门右拐，新世纪负一楼'
        },
        {
          name: 't_优速快递',
          photo: 'yousu',
          content: '地址：新校门出门直走，往广益中学方向上行100米'
        },
        {
          name: 't_邮政',
          photo: 'youzhen',
          content: '地址：老校门楼梯上公共厕所旁边的自动取货机器'
        }
      ]
    ]
  }
}

module.exports = {
  teachers: teachers,
  students: students,
  groups: groups,
  dorms: dorms,
  canteens: canteens,
  life: life
}
