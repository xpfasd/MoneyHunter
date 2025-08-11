// MoneyHunter 项目数据
const projectData = {
    "AI套壳项目": [
        {
            name: "ChatGPT套壳 + OCR识别",
            desc: "这个产品很有意思，拍照获取解题步骤和答案。在ChatGPT套壳的基础上增加了OCR功能，增加了识图总结、识图获取答案。用户可以拍照题目，系统会自动识别并提供详细的解题步骤和答案，主要面向学生群体的教育工具。",
            url: "https://www.qimai.cn/app/baseinfo/appid/1661308505/country/us",
            downloads: "10,294/天/US",
            tags: ["AI套壳", "OCR", "教育"],
            revenue: "高收入",
            date: "2023-10-30"
        },
        {
            name: "PDF翻译工具",
            desc: "利用SEO挤进translate pdf关键词，套壳翻译API",
            url: "translate pdf相关",
            traffic: "高流量",
            tags: ["PDF", "翻译", "SEO"],
            revenue: "广告收入",
            date: "2024-08-01"
        },
        {
            name: "Text to Speech",
            desc: "文本转语音或文档转语音服务",
            url: "https://ttsopenai.com/",
            traffic: "45.1万/月",
            growth: "13万/月增长",
            tags: ["TTS", "语音", "API套壳"],
            created: "2024-02-15",
            date: "2024-08-01"
        },
        {
            name: "AI证件照制作",
            desc: "AI制作护照照片服务",
            url: "https://www.aipassportphotos.com/",
            traffic: "71.7万/月",
            tags: ["AI", "证件照", "图像处理"],
            created: "2022-05-17",
            date: "2024-08-01"
        },
        {
            name: "翻译APP完整仿品",
            desc: "文字翻译、语音翻译、图片翻译完整功能",
            downloads: "1,859",
            revenue: "90K/MRR",
            tags: ["翻译", "多功能", "移动应用"],
            launched: "2024-06-03",
            date: "2024-10"
        },
        {
            name: "AI文案创意喵",
            desc: "给小红书和短视频写文案的AI工具",
            revenue: "20K/MRR",
            tags: ["AI文案", "小红书", "短视频"],
            launched: "2023-03-20",
            date: "2024-08-01"
        },
        {
            name: "闪拍AI写真",
            desc: "闪拍 - AI写真轻松拥有，就是AI技术，用一张照片就能生成各种风格的写真照片。我就看看，看你们咋这么赚钱！用户只需上传一张自拍，AI就能生成多种风格的专业写真照片，满足用户个性化需求。",
            revenue: "100K刀/MRR",
            tags: ["AI写真", "照片处理"],
            date: "2024-08-01"
        },
        {
            name: "TalkAI练口语",
            desc: "一个可以和AI人物配合学习英语口语的骚货应用。这玩意一周做不完，一个月都不一定能完成。用户可以与AI角色进行英语对话练习，提升口语水平。产品设计了多种AI人物角色，让英语学习更有趣。",
            revenue: "200K/MRR",
            tags: ["AI口语", "英语学习"],
            launched: "2023-04-19",
            date: "2024-08-01"
        },
        {
            name: "Xolo AI音乐制作",
            desc: "疑似Suno API套壳的音乐制作软件",
            downloads: "3,260/天/CN",
            tags: ["AI音乐", "Suno套壳"],
            launched: "2024-07-04",
            date: "2024-08-01"
        },
        {
            name: "会拍相机写真制作",
            desc: "热门写真一键制作应用，福建大佬们的骚货作品。感觉应该是投流了，感觉ROI是爆款。我艹，我艹，我艹，福建大佬们好牛逼！这玩意肯定能训练出来，记得阿里云有一个这个模型。用户上传照片就能一键生成各种风格的写真照片。",
            downloads: "8,351/天/US",
            tags: ["写真制作", "一键生成"],
            launched: "2024-06-05",
            date: "2024-08-01"
        },
        {
            name: "AI文生视频",
            desc: "老照片AI动起来&照片拥抱功能，就是套lumaapi。就问简单不简单，粗暴不粗暴？这玩意技术好的1天搞定，不好的2天搞定。下个版本升级成全球版本，预估每月几十万是肯定的。让静态照片动起来，生成拥抱视频等。",
            downloads: "1,966/天/CN",
            tags: ["文生视频", "Luma API"],
            launched: "2024-07-18",
            date: "2024-08-01"
        },
        {
            name: "Voice Recorder语音记录",
            desc: "录音记录应用，这里有个现象，仔细用ST搜索Voice Recorder它应该是仿盘了原版产品。这个肯定是投放了，不过能持续投放到这样也是牛逼，还有就是ASO做得好。同样的东西加了一个AI总结和分析功能，重点是google搜Voice Recorder你会发现一个奇迹网站，然后这个哥们做了一整套产品。",
            downloads: "2,462/天/US",
            revenue: "300K/MRR",
            tags: ["录音", "AI总结"],
            launched: "2023-09-01",
            date: "2024-08-01"
        },
        {
            name: "Cal AI拍照记录热量",
            desc: "就是拍照打卡热量的简单粗暴应用。用户只需要拍照食物，AI就能自动识别并记录热量信息。这个100K的月收入真是香得不行，TMD的这么简单粗暴的功能居然能做到这个收入。产品逻辑极其简单，但抓住了健康管理的核心需求。",
            downloads: "1,720/天/US",
            revenue: "100K+/MRR",
            tags: ["健康", "拍照", "热量"],
            launched: "2024-04-08",
            date: "2024-08-01"
        },
        {
            name: "FaceAi视频换脸",
            desc: "视频AI换脸工具，使用Replicate API",
            downloads: "3,110/天/US",
            revenue: "200K/MRR",
            tags: ["换脸", "视频处理"],
            launched: "2024-01-16",
            date: "2024-10"
        },
        {
            name: "Donna AI音乐制作",
            desc: "AI生成歌曲的爆款应用，才半年就做到了100万美金+的月收入，还是牛逼啊！用户可以通过AI生成各种风格的音乐和歌曲。产品投放了310个广告，能跑到几万下载每日，证明ROI跑得通。这种AI音乐生成工具抓住了内容创作者的需求。",
            downloads: "2,408/天/US",
            revenue: "500K/MRR(iOS) + 400K(Android)",
            tags: ["AI音乐", "爆款"],
            launched: "2024-04-08",
            date: "2024-10"
        },
        {
            name: "Cat Translator猫语翻译",
            desc: "一个简单的人类语言到猫语言翻译工具，达到与宠物沟通的目的。GPT能告诉你，猫说'我爱你'是'喵~'应该是一个稍长的、带有上扬的声音。'喵喵~'是短促的、连续的两声。'喵呜~'可以是稍微拖长带有柔和尾音的声音。'喵喵喵~ 喵呜喵！'是快来吃饭的意思。有意思，有意思，感受到了TT的猎奇属性。",
            downloads: "1,910/天/US",
            revenue: "80K/MRR",
            tags: ["宠物", "翻译", "猎奇"],
            date: "2024-10"
        },
        {
            name: "AI Voice Effect变声器",
            desc: "一个香港公司的爆款变声应用，上线一个月就能跑到日下载8000+，应该是跑通了ROI。技术难度不大，难点在营销推广。这种语音变声工具抓住了用户对声音个性化的需求，能跑到几万下载每日说明产品确实赚了钱。",
            downloads: "8,379/天/US",
            tags: ["变声", "语音处理"],
            launched: "2024-09-18",
            date: "2024-10"
        }
    ],
    
    "流量变现": [
        {
            name: "插件下载站",
            desc: "一个插件下载站，流量48.2万/月。下一个插件的流程是：1.搜索/分类页 2.详情页 3.下载页 4.关注公众号 5.下载。这个广告吃到黑，通过提供浏览器插件下载服务，然后通过广告变现，简单粗暴但很有效。",
            url: "https://extfans.com/",
            traffic: "48.2万/月",
            tags: ["插件", "下载站", "广告变现"],
            model: "广告收入",
            date: "2024-01-15"
        },
        {
            name: "AI提示词交易站",
            desc: "AI中文提示词交易站点，这个，这个，这个！当然是观察后，能不能再来一个。我一般是群狼战术，要来就来10个。用户可以在平台上买卖各种AI提示词模板，满足不同场景的AI应用需求。",
            url: "https://www.tipstore.cn/",
            status: "刚上线",
            tags: ["AI", "提示词", "交易平台"],
            idea: "群狼战术，做10个",
            date: "2023-06-13"
        },
        {
            name: "淘宝AI提示词",
            desc: "在淘宝卖AI提示词，淘宝搜关键词按照销量排序，销售额1万+，月收入10万+。这里可能不止，因为MJ共享会员是需要持续付费的。上上去尝试尝试，要不拼多多也整一个。利用电商平台销售AI相关服务和模板。",
            platform: "淘宝",
            revenue: "10万+/月",
            sales: "1万+",
            tags: ["淘宝", "AI提示词", "电商"],
            date: "2023-06-13"
        },
        {
            name: "拍照打卡热量APP",
            desc: "拍照记录食物热量的应用",
            downloads: "1,720/US/天",
            revenue: "100K+/MRR",
            tags: ["健康", "拍照", "热量"],
            launched: "2024-04-08",
            date: "2024-07-08"
        },
        {
            name: "AI Youtube总结插件",
            desc: "一款总结YouTube视频的插件，这么大的用户数付费肯定也差不了。通过研究创始人的Twitter和LinkedIn，推导这个创始人的一生，以及他现在的个人情况。复盘下这个人的一生情况，然后模拟在那个环境下他的团队，他的人员组成。劲爆的产品拆解思路！",
            url: "https://eightify.app/",
            traffic: "44.9万/月",
            growth: "20万/月增长",
            price: "3.95刀/月",
            users: "5000+",
            tags: ["YouTube", "总结", "浏览器插件"],
            date: "2023-06-13"
        },
        {
            name: "AI Video Captions",
            desc: "Submagic - AI视频字幕工具，这个是昨天的那个姐妹产品。如果这个收入是按照他的计算模式，真的是猛！感觉这玩意应该不复杂。用户上传视频，AI自动生成字幕，支持多种语言和样式定制。",
            url: "https://submagic.co/",
            traffic: "3.7万/月",
            revenue: "37万刀/月",
            users: "10000+",
            tags: ["视频字幕", "AI工具"],
            date: "2023-06-13"
        },
        {
            name: "AI书籍总结",
            desc: "为什么要介绍这个点，因为这个是一个躺赚的项目。现在看来每个月躺赚一个几千美金没有什么问题。收入来源：1.广告 2.amazon返利。貌似这个有数据库+源码可以搭建一套，刷了一波导航站就能起来。",
            url: "https://summarist.ai/",
            traffic: "10万/月",
            model: "广告 + Amazon返利",
            tags: ["书籍总结", "躺赚项目"],
            date: "2023-06-13"
        },
        {
            name: "AI室内设计",
            desc: "ReimaginehHome - 室内外设计AI工具",
            url: "https://www.reimaginehome.ai/",
            traffic: "200万/月",
            growth: "150万/2个月",
            tags: ["室内设计", "AI设计"],
            date: "2023-06-13"
        },
        {
            name: "Monica AI助手",
            desc: "GPT插件，Chrome+Edge插件用户80万+",
            url: "https://monica.im/",
            traffic: "390万/月",
            users: "700,000+(Chrome) + 100,000+(Edge)",
            tags: ["AI助手", "浏览器插件"],
            date: "2023-06-13"
        },
        {
            name: "PhotoRoom图片工具集",
            desc: "一个集合了很多工具的站点，倒流进入app，赚钱到爆炸！其实现在搞一个，通过免费的流量导入到APP里面做订阅爽到炸。差异化的做多语言市场。安卓下载10000000+，IOS Rating 65.1K，这个数据太恐怖了。",
            url: "https://www.photoroom.com/",
            traffic: "640万/月",
            price: "5.83刀/月",
            downloads: "10000000+(Android)",
            tags: ["图片工具", "工具集合"],
            date: "2023-06-13"
        },
        {
            name: "AI换衣OutfitsAI",
            desc: "AI换衣工具，与电商结合",
            url: "https://www.outfitsai.com/",
            traffic: "34.6万/月",
            growth: "34.6万/月增长",
            price: "9.9/月起",
            tags: ["AI换衣", "电商"],
            date: "2023-05-08"
        },
        {
            name: "AI导航TheresAnAIForThat",
            desc: "AI工具导航站，50%搜索流量",
            url: "https://theresanaiforthat.com/",
            traffic: "250万/月",
            tags: ["AI导航", "工具导航"],
            date: "2023-05-08"
        },
        {
            name: "ZMO AI工具站",
            desc: "电商需求的AI工具集合站",
            url: "https://www.zmo.ai/",
            traffic: "240万/月",
            growth: "80万/月增长",
            tags: ["AI工具", "电商工具"],
            date: "2023-05-08"
        },
        {
            name: "Opus长视频裁剪",
            desc: "利用OpenAI将长视频自动裁剪为短视频",
            url: "https://www.opus.pro/",
            traffic: "61万/月",
            growth: "57万/月增长",
            tags: ["视频裁剪", "短视频"],
            date: "2023-05-08"
        },
        {
            name: "AI中文导航",
            desc: "AI导航爆款站点",
            url: "https://www.ainavpro.com/",
            traffic: "19万/月",
            tags: ["AI导航", "中文"],
            date: "2023-04-20"
        },
        {
            name: "MacGPT工具",
            desc: "Mac平台的GPT客户端工具",
            url: "https://www.macgpt.com/",
            traffic: "8万/天",
            downloads: "145,867(Gumroad)",
            tags: ["Mac工具", "GPT客户端"],
            date: "2023-04-20"
        },
        {
            name: "Buzz Whisper工具",
            desc: "基于OpenAI Whisper的离线音频转录翻译工具",
            url: "https://buzzcaptions.com/",
            tags: ["音频转录", "翻译工具", "开源"],
            date: "2023-04-20"
        }
    ],
    
    "SEO项目": [
        {
            name: "多语言市场差异化",
            desc: "针对不同语言市场做差异化SEO",
            strategy: "搬运中文版或其他语言版本",
            tags: ["多语言", "SEO", "差异化"],
            date: "2023-04-27"
        },
        {
            name: "细分关键词优化",
            desc: "针对translate pdf等细分关键词进行SEO优化",
            keywords: ["translate pdf", "onlinedoctranslator"],
            tags: ["SEO", "关键词", "细分市场"],
            date: "2024-08-01"
        }
    ],
    
    "矩阵运营": [
        {
            name: "账号矩阵操盘",
            desc: "搞一批矩阵号，直接操盘引流",
            strategy: "群狼战术",
            tags: ["矩阵", "引流", "批量操作"],
            date: "2023-05-23"
        },
        {
            name: "教程类账号矩阵",
            desc: "房屋设计师、游戏原画等垂直领域教程账号",
            niches: ["房屋设计", "游戏原画"],
            tags: ["教程", "垂直领域", "矩阵"],
            date: "2023-05-14"
        }
    ],
    
    "工具类项目": [
        {
            name: "Google Form自定义工具",
            desc: "就是预设好一些东西，自定义google form。这个是我一直想抄袭的，但是没有来得及下手的东西。为什么介绍这个小的niche呢，其实中国微信很齐全很多功能：投票，接龙，群助手，问卷。这个工具就相当于套壳form让你做问卷｜投票。",
            revenue: "200K/MRR",
            downloads: "2,146/天/US",
            tags: ["Google Form", "自定义", "工具"],
            launched: "2021-01-25",
            date: "2024-08-01"
        },
        {
            name: "Windows浏览器插件",
            desc: "这个一个windows浏览器插件，安装数量虽然只有5万+，给我带来一个思考，总TMD有人在偷偷默默赚钱。只要有人群，无非是战场的挪移。有人会问，套壳还能不能做，这个问题可以问那个越南崽。",
            installs: "5万+",
            tags: ["Windows", "浏览器插件", "工具"],
            insight: "总有人在偷偷默默赚钱",
            date: "2023-07-31"
        }
    ],
    
    "冷启动策略": [
        {
            name: "邮箱收集页面",
            desc: "上线一个页面，不要任何功能，先收集email",
            time: "1小时冷启动",
            strategy: "先收集用户，观察流量，然后套壳",
            tags: ["冷启动", "邮箱收集", "MVP"],
            date: "2024-04-15"
        }
    ],
    
    "投放策略": [
        {
            name: "FB擦边投放",
            desc: "该游戏公司连续上了两个这个产品了，一个分类在游戏，一个分类在娱乐。都采用了FB擦边投放的方式，赚钱啊赚钱啊真TMD的牛逼！擦边啊擦边！游戏公司搞AI聊天就是直击人性，连名字都不一样。",
            categories: ["游戏", "娱乐"],
            tags: ["Facebook", "擦边投放", "广告"],
            date: "2023-11-06"
        },
        {
            name: "TT流量变现",
            desc: "它有一部分是走了tt流量，这类的盈利点在于，能吃到很多返点。无需技术，只需要时间。想法：1.搬一个中文版，或者是其他语言的版本 2.谁火就把谁的长短尾全吃。利用TikTok平台的流量进行变现。",
            model: "返点收入",
            tags: ["TikTok", "流量", "返点"],
            date: "2023-04-27"
        }
    ]
};

// 搜索功能数据
const searchableContent = [];

// 将所有项目数据转换为可搜索的格式
Object.keys(projectData).forEach(category => {
    projectData[category].forEach(project => {
        searchableContent.push({
            ...project,
            category: category,
            searchText: `${project.name} ${project.desc} ${project.tags.join(' ')} ${category}`.toLowerCase()
        });
    });
});