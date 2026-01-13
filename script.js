document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. TRANSLATION DATA ---
    const translations = {
        "en": {
            "nav_brand": "AGENCY / STRATEGY",
            "nav_date": "Day 1 Report",
            "hero_overline": "Confidential Strategy Deck",
            "hero_title": "Day 1 — Market &<br>Creative Strategy",
            "hero_subtitle": "TV Product Visual Research & Social Growth Plan",
            "hero_intro": "This document captures research, observations, and creative explorations conducted on Day 1, focusing on product listing visuals and social media growth opportunities.",
            "scroll_text": "Scroll to Explore",
            "brand_title": "Brand Landscape Overview",
            "brand_subtitle": "Understanding the positioning differences helps define our creative boundaries.",
            "coocaa_specs": "<li>Youth-focused & energetic</li><li>Value-driven proposition</li><li>Bold, experimental visuals</li>",
            "metz_specs": "<li>European legacy brand</li><li>Performance-oriented engineering</li><li>Clean, understated premium</li>",
            "philips_specs": "<li>Globally trusted household name</li><li>Technology-first approach</li><li>Consistent, safe visual language</li>",
            "ecom_title": "E-commerce Listing Reality",
            "ecom_text": "Amazon & Flipkart maintain strict mandatory standards for TV main images. The background, framing, and product placement are controlled by the platform.",
            "ecom_quote": "“Since we cannot change the outer frame of the listing, the only real creative control lies in what we show inside the TV screen.”",
            "creative_title": "Creative Strategy for Main Image",
            "creative_subtitle": "Three distinct creative approaches were explored to stand out while remaining fully Amazon-compliant.",
            "strat_1_title": "High-Definition Psychology (HD Series)",
            "strat_1_desc": "This approach moves beyond generic aesthetics to leverage cognitive bias (The Evolutionary Gaze & Zeigarnik Effect).",
            "cap_visual_hook": "Visual Hook: The Eye",
            "cap_texture": "Micro-Detail Texture",
            "cap_gap": "Cognitive Gap",
            "strat_2_title": "Gen Z Bold Visual Language",
            "strat_2_desc": "Loud, colorful, and modern art styles. A confident, experimental risk designed to stop scrolling instantly.",
            "strat_3_title": "Conceptual Storytelling (Unique Series)",
            "strat_3_desc": "Using visual metaphors (e.g., Cat → Tiger) to demonstrate power, clarity, and transformation.",
            
            // NEW INSTAGRAM CONTENT
            "insta_title": "Instagram Growth Strategy (2026)",
            "insta_subtitle": "A tactical roadmap to dominate the algorithm and double Coocaa's following.",
            "algo_head": "1. The Algorithm Decoded (The Engine)",
            "algo_intro": "How do we get seen without spending millions on ads?",
            "algo_a_title": "A. Recency & Relevance (The 'Golden Window')",
            "lbl_concept": "The Concept:",
            "algo_a_concept": "Instagram creates 'waves' around trending audio. These waves crash after 48 hours.",
            "lbl_strategy": "The Strategy:",
            "algo_a_strat": "We don't just post; we surf. We execute within the 'Golden Window' (first 48 hours).",
            "algo_a_pitch": "\"We aren't just posting content; we are capitalizing on 'Velocity'. By hitting trending audio within the 48-hour Golden Window, we ride the free traffic wave.\"",
            
            "algo_b_title": "B. The Retention Loop (Watch Time)",
            "algo_b_concept": "The algorithm's #1 metric is Time Spent. If they watch twice (loop), we go viral.",
            "algo_b_strat": "Create seamless visual loops where the end matches the beginning.",
            "algo_b_pitch": "\"We are designing for 'The Retention Loop'. By creating seamless visual loops, we trick the brain into watching twice. This signals 'high value' to the system.\"",

            "algo_c_title": "C. Micro-Interactions (Saves > Likes)",
            "algo_c_concept": "Likes are vanity. Saves are utility. A 'Save' tells the algorithm the content is valuable.",
            "algo_c_pitch": "\"We are shifting focus from Vanity Metrics to Utility Metrics. A 'Like' is a nod; a 'Save' is a commitment.\"",

            "content_head": "2. Content Pillars (The Fuel)",
            "cont_a_title": "A. Festive & Cultural (Owning the Moment)",
            "lbl_strat": "Strategy:",
            "cont_a_strat": "Connect the Screen to the Celebration. 'Watch the World Cup as if you are in the stadium.'",
            "cont_a_pitch": "\"We don't just acknowledge festivals; we enhance them. We position the TV as the window through which families experience moments.\"",

            "cont_b_title": "B. Bold & Challenger (The 'Punch Up')",
            "cont_b_strat": "Side-by-side visual evidence. Crisp 4K vs. Muddy 1080p. Don't tell them; show them.",
            "cont_b_pitch": "\"Confidence converts. We use side-by-side visual evidence to show consumers exactly why they are overpaying for other brands.\"",

            "cont_c_title": "C. Humorous & Relatable (Humanizing Tech)",
            "cont_c_strat": "Memes about losing the remote or 'Netflix and actually sleeping.' Humanize the tech.",
            "cont_c_pitch": "\"Tech can feel cold. Humor makes it warm. By tapping into shared 'Living Room Pain Points', we turn a plastic box into a personality.\"",

            "candy_head": "3. Incentivized Growth (The Candy)",
            "candy_a_title": "A. Setup Wars (UGC)",
            "candy_a_desc": "We ask users to tag us in their 'Worst TV Setup.' Every person who posts is a free billboard.",
            "candy_a_pitch": "\"This is 'Weaponized UGC'. We generate thousands of organic impressions without spending a dollar on production.\"",

            "candy_b_title": "B. The Unlock Challenge",
            "candy_b_desc": "\"We won't release this code unless this post gets 5,000 shares.\" Turns individuals into a team.",
            "candy_b_pitch": "\"We are gamifying our growth. This creates an artificial viral spike that forces the algorithm to pay attention.\"",

            "summary_head": "💡 Summary for the Meeting Room",
            "summary_text": "\"Our strategy is built on three layers. <br><br><strong>1. Engineering:</strong> We exploit the algorithm using retention loops.<br><strong>2. Creative:</strong> We use bold visuals to stop the scroll.<br><strong>3. Psychology:</strong> We gamify rewards to build a cult following.\"",
            "footer_lead": "Lead Creative:"
        },
        
        "zh": {
            "nav_brand": "代理 / 战略",
            "nav_date": "第一天报告",
            "hero_overline": "保密战略演示文稿",
            "hero_title": "第一天 &mdash; 市场与<br>创意战略",
            "hero_subtitle": "电视产品视觉研究与社交增长计划",
            "hero_intro": "本文档记录了第一天进行的研究、观察和创意探索，重点关注产品列表视觉效果和社交媒体增长机会。",
            "scroll_text": "向下滑动探索",
            "brand_title": "品牌格局概览",
            "brand_subtitle": "了解定位差异有助于定义我们的创意边界。",
            "coocaa_specs": "<li>聚焦年轻群体 & 充满活力</li><li>价值驱动的主张</li><li>大胆、实验性的视觉效果</li>",
            "metz_specs": "<li>欧洲传统品牌</li><li>以性能为导向的工程设计</li><li>干净、低调的高端感</li>",
            "philips_specs": "<li>全球信赖的家喻户晓品牌</li><li>技术优先的方法</li><li>一致、安全的视觉语言</li>",
            "ecom_title": "电商列表现状",
            "ecom_text": "亚马逊和 Flipkart 对电视主图有严格的强制标准。背景、构图和产品放置均由平台控制。",
            "ecom_quote": "“既然我们无法改变列表的外部框架，唯一真正的创意控制权就在于我们在电视屏幕内展示的内容。”",
            "creative_title": "主图创意战略",
            "creative_subtitle": "探索了三种独特的创意方法，以便在保持完全符合亚马逊规定的同时脱颖而出。",
            "strat_1_title": "高清心理学 (HD 系列)",
            "strat_1_desc": "这种方法超越了通用美学，利用认知偏差（进化凝视和蔡格尼克效应）。",
            "cap_visual_hook": "视觉钩子：眼睛",
            "cap_texture": "微细节纹理",
            "cap_gap": "认知缺口",
            "strat_2_title": "Z 世代大胆视觉语言",
            "strat_2_desc": "响亮、多彩和现代的艺术风格。一种自信、实验性的冒险，旨在让用户立即停止滚动。",
            "strat_3_title": "概念叙事 (独特系列)",
            "strat_3_desc": "使用视觉隐喻（例如，猫 → 老虎）来展示力量、清晰度和转变。",
            
            // CHINESE INSTAGRAM CONTENT
            "insta_title": "Instagram 增长战略 (2026)",
            "insta_subtitle": "主导算法并使 Coocaa 粉丝翻倍的战术路线图。",
            "algo_head": "1. 算法解码 (引擎)",
            "algo_intro": "如果不花费数百万广告费，我们如何被看到？",
            "algo_a_title": "A. 时效性与相关性 (黄金窗口)",
            "lbl_concept": "概念:",
            "algo_a_concept": "Instagram 围绕流行音频制造“流量浪潮”。这些浪潮在 48 小时后消退。",
            "lbl_strategy": "策略:",
            "algo_a_strat": "我们不仅仅是发帖；我们在冲浪。我们在“黄金窗口”（最初 48 小时）内执行。",
            "algo_a_pitch": "“我们不仅仅是发布内容；我们是在利用‘速度’。通过在 48 小时黄金窗口内通过流行音频，我们在竞争对手醒来之前就驾驭了免费流量浪潮。”",
            
            "algo_b_title": "B. 留存循环 (观看时长)",
            "algo_b_concept": "算法的第一指标是花费的时间。如果他们看两遍（循环），我们就会病毒式传播。",
            "algo_b_strat": "创建无缝的视觉循环，结尾与开头相匹配。",
            "algo_b_pitch": "“我们正在设计‘留存循环’。通过创建无缝的视觉循环，我们欺骗大脑观看两次。这向系统发出‘高价值’的信号。”",

            "algo_c_title": "C. 微交互 (收藏 > 点赞)",
            "algo_c_concept": "点赞是虚荣指标。收藏是实用指标。一个‘收藏’告诉算法内容是有价值的。",
            "algo_c_pitch": "“我们将重点从虚荣指标（点赞）转移到实用指标（收藏）。点赞是点头；收藏是承诺。”",

            "content_head": "2. 内容支柱 (燃料)",
            "cont_a_title": "A. 节日与文化 (拥有时刻)",
            "lbl_strat": "策略:",
            "cont_a_strat": "将屏幕与庆祝活动联系起来。“像在体育场一样观看世界杯。”",
            "cont_a_pitch": "“我们不仅仅是承认节日；我们增强它们。我们将电视定位为家庭体验这些时刻的窗口。”",

            "cont_b_title": "B. 大胆与挑战者 (出击)",
            "cont_b_strat": "并排的视觉证据。清晰的 4K 对比模糊的 1080p。不要告诉他们；展示给他们看。",
            "cont_b_pitch": "“自信能带来转化。我们使用并排的视觉证据向消费者展示为什么他们为其他品牌支付了过高的价格。”",

            "cont_c_title": "C. 幽默与共鸣 (人性化科技)",
            "cont_c_strat": "关于丢失遥控器或‘Netflix 实际上是在睡觉’的表情包。使科技人性化。",
            "cont_c_pitch": "“科技可能感觉很冷。幽默使它变暖。通过挖掘共同的‘客厅痛点’，我们将一个塑料盒子变成了一种个性。”",

            "candy_head": "3. 激励增长 (糖果)",
            "candy_a_title": "A. 设置大战 (UGC)",
            "candy_a_desc": "我们要求用户在他们的‘最差电视设置’中标记我们。每个发帖的人都是免费的广告牌。",
            "candy_a_pitch": "“这是‘武器化的 UGC’。我们在不花费一美元制作费用的情况下产生了数千次有机印象。”",

            "candy_b_title": "B. 解锁挑战",
            "candy_b_desc": "“除非这篇帖子获得 5,000 次分享，否则我们不会发布此代码。”将个人变成团队。",
            "candy_b_pitch": "“我们在游戏化我们的增长。这创造了一种人为的病毒式高峰，迫使算法关注我们。”",

            "summary_head": "💡 会议室总结",
            "summary_text": "“我们的战略建立在三个层面上。<br><br><strong>1. 工程学:</strong> 我们利用留存循环利用算法。<br><strong>2. 创意:</strong> 我们使用大胆的视觉效果来停止滚动。<br><strong>3. 心理学:</strong> 我们通过游戏化奖励来建立狂热的追随者。”",
            "footer_lead": "创意总监:"
        }
    };

    // --- 2. TOGGLE LOGIC ---
    let currentLang = "en";
    const langBtn = document.getElementById('lang-toggle');

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === "en" ? "zh" : "en";
        updateContent();
        langBtn.textContent = currentLang === "en" ? "CN / EN" : "EN / CN";
    });

    function updateContent() {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });
    }

    // --- 3. REVEAL ANIMATIONS (Existing Code) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: window.innerWidth < 768 ? 0.05 : 0.1, 
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- 4. HEADER FADE (Existing Code) ---
    const header = document.querySelector('.hero-content');
    const isMobile = window.innerWidth < 768;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if(header) {
            const fadeRate = isMobile ? 900 : 700;
            header.style.opacity = 1 - (scrolled / fadeRate);
            if(!isMobile) {
                const rate = scrolled * 0.5;
                header.style.transform = `translateY(${rate}px)`;
            }
        }
    });

    console.log("%c Strategy Loaded (Multilingual) ", "background: #00d4ff; color: #000; padding: 5px; font-weight: bold;");
});