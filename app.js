// 应用主逻辑
class MoneyHunterApp {
    constructor() {
        this.init();
    }
    
    init() {
        this.currentView = 'category';
        this.renderCategories();
        this.setupSearch();
        this.setupModal();
        this.setupTabs();
    }
    
    // 渲染分类卡片
    renderCategories() {
        const container = document.getElementById('categoriesContainer');
        const categoryIcons = {
            'AI套壳项目': '🤖',
            '流量变现': '💰',
            'SEO项目': '🔍',
            '矩阵运营': '📊',
            '工具类项目': '🛠️',
            '冷启动策略': '🚀',
            '投放策略': '📢'
        };
        
        Object.keys(projectData).forEach(category => {
            const categoryCard = this.createCategoryCard(category, projectData[category], categoryIcons[category]);
            container.appendChild(categoryCard);
        });
    }
    
    // 创建分类卡片
    createCategoryCard(category, projects, icon) {
        const card = document.createElement('div');
        card.className = 'category-card';
        
        const title = document.createElement('div');
        title.className = 'category-title';
        title.innerHTML = `<span class="category-icon">${icon}</span>${category} (${projects.length})`;
        
        const projectList = document.createElement('ul');
        projectList.className = 'project-list';
        
        projects.forEach(project => {
            const listItem = this.createProjectItem(project, category);
            projectList.appendChild(listItem);
        });
        
        card.appendChild(title);
        card.appendChild(projectList);
        
        return card;
    }
    
    // 创建项目条目
    createProjectItem(project, category) {
        const item = document.createElement('li');
        item.className = 'project-item';
        
        const name = document.createElement('div');
        name.className = 'project-name';
        name.textContent = project.name;
        
        const desc = document.createElement('div');
        desc.className = 'project-desc';
        desc.textContent = project.desc;
        
        const tags = document.createElement('div');
        tags.className = 'project-tags';
        project.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag';
            tagSpan.textContent = tag;
            tags.appendChild(tagSpan);
        });
        
        item.appendChild(name);
        item.appendChild(desc);
        item.appendChild(tags);
        
        // 点击显示详情
        item.addEventListener('click', () => {
            this.showProjectDetail(project, category);
        });
        
        return item;
    }
    
    // 显示项目详情
    showProjectDetail(project, category) {
        const modal = document.getElementById('projectModal');
        const content = document.getElementById('modalContent');
        
        // 构建详细信息HTML
        let detailHTML = `
            <div style="margin-bottom: 1.5rem;">
                <h2 style="color: #667eea; margin-bottom: 0.8rem; font-size: 1.8rem;">${project.name}</h2>
                <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 0.6rem 1.2rem; border-radius: 20px; display: inline-block; font-weight: 500;">
                    ${category}
                </div>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <h3 style="color: #333; margin-bottom: 0.8rem; font-size: 1.1rem; display: flex; align-items: center;">
                    <span style="margin-right: 0.5rem;">📝</span>项目描述
                </h3>
                <p style="background: #f8f9fa; padding: 1.2rem; border-radius: 10px; line-height: 1.6; border-left: 4px solid #667eea;">${project.desc}</p>
            </div>
        `;
        
        // 核心数据部分
        const coreData = [];
        if (project.revenue) coreData.push({ label: '💰 收入', value: project.revenue, highlight: true });
        if (project.traffic) coreData.push({ label: '📊 流量', value: project.traffic });
        if (project.downloads) coreData.push({ label: '📱 下载量', value: project.downloads });
        if (project.users) coreData.push({ label: '👥 用户数', value: project.users });
        if (project.growth) coreData.push({ label: '📈 增长', value: project.growth });
        if (project.price) coreData.push({ label: '💵 价格', value: project.price });
        
        if (coreData.length > 0) {
            detailHTML += `
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="color: #333; margin-bottom: 0.8rem; font-size: 1.1rem;">📈 核心数据</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.8rem;">
            `;
            
            coreData.forEach(item => {
                const bgColor = item.highlight ? '#e8f5e8' : '#f8f9fa';
                const textColor = item.highlight ? '#2e7d32' : '#333';
                detailHTML += `
                    <div style="background: ${bgColor}; padding: 0.8rem; border-radius: 8px; border-left: 4px solid #667eea;">
                        <div style="font-size: 0.9rem; color: #666; margin-bottom: 0.2rem;">${item.label}</div>
                        <div style="font-weight: bold; color: ${textColor};">${item.value}</div>
                    </div>
                `;
            });
            
            detailHTML += `</div></div>`;
        }
        
        // 时间信息部分
        const timeData = [];
        if (project.created) timeData.push({ label: '🎯 创建时间', value: project.created });
        if (project.launched) timeData.push({ label: '🚀 上线时间', value: project.launched });
        if (project.date) timeData.push({ label: '📅 记录日期', value: project.date });
        
        if (timeData.length > 0) {
            detailHTML += `
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="color: #333; margin-bottom: 0.8rem; font-size: 1.1rem;">⏰ 时间线</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.8rem;">
            `;
            
            timeData.forEach(item => {
                detailHTML += `
                    <div style="background: #f0f4ff; padding: 0.8rem; border-radius: 8px; text-align: center;">
                        <div style="font-size: 0.9rem; color: #666; margin-bottom: 0.2rem;">${item.label}</div>
                        <div style="font-weight: bold; color: #667eea;">${item.value}</div>
                    </div>
                `;
            });
            
            detailHTML += `</div></div>`;
        }
        
        // 策略和想法部分
        const strategyData = [];
        if (project.strategy) strategyData.push({ label: '🎯 策略', value: project.strategy });
        if (project.model) strategyData.push({ label: '💼 变现模式', value: project.model });
        if (project.idea) strategyData.push({ label: '💡 想法', value: project.idea });
        if (project.insight) strategyData.push({ label: '🔍 洞察', value: project.insight });
        if (project.keywords) strategyData.push({ label: '🔑 关键词', value: Array.isArray(project.keywords) ? project.keywords.join(', ') : project.keywords });
        if (project.niches) strategyData.push({ label: '🎯 细分领域', value: Array.isArray(project.niches) ? project.niches.join(', ') : project.niches });
        if (project.categories) strategyData.push({ label: '📂 分类', value: Array.isArray(project.categories) ? project.categories.join(', ') : project.categories });
        
        if (strategyData.length > 0) {
            detailHTML += `
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="color: #333; margin-bottom: 0.8rem; font-size: 1.1rem;">💡 策略分析</h3>
            `;
            
            strategyData.forEach(item => {
                detailHTML += `
                    <div style="background: #fff3e0; padding: 1rem; border-radius: 8px; margin-bottom: 0.8rem; border-left: 4px solid #ff9800;">
                        <div style="font-weight: bold; color: #e65100; margin-bottom: 0.5rem;">${item.label}</div>
                        <div style="color: #333; line-height: 1.5;">${item.value}</div>
                    </div>
                `;
            });
            
            detailHTML += `</div>`;
        }
        
        // 其他信息部分
        const otherData = [];
        if (project.platform) otherData.push({ label: '🏪 平台', value: project.platform });
        if (project.sales) otherData.push({ label: '💳 销售额', value: project.sales });
        if (project.status) otherData.push({ label: '📊 状态', value: project.status });
        if (project.installs) otherData.push({ label: '⬇️ 安装量', value: project.installs });
        if (project.time) otherData.push({ label: '⏱️ 时间', value: project.time });
        
        if (otherData.length > 0) {
            detailHTML += `
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="color: #333; margin-bottom: 0.8rem; font-size: 1.1rem;">ℹ️ 其他信息</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.8rem;">
            `;
            
            otherData.forEach(item => {
                detailHTML += `
                    <div style="background: #f3e5f5; padding: 0.8rem; border-radius: 8px;">
                        <div style="font-size: 0.9rem; color: #666; margin-bottom: 0.2rem;">${item.label}</div>
                        <div style="font-weight: bold; color: #7b1fa2;">${item.value}</div>
                    </div>
                `;
            });
            
            detailHTML += `</div></div>`;
        }
        
        // 链接部分
        if (project.url) {
            detailHTML += `
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="color: #333; margin-bottom: 0.8rem; font-size: 1.1rem;">🔗 相关链接</h3>
                    <div style="background: #e3f2fd; padding: 1rem; border-radius: 8px;">
                        <a href="${project.url}" target="_blank" style="color: #1976d2; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center;">
                            🌐 ${project.url}
                            <span style="margin-left: 0.5rem;">↗️</span>
                        </a>
                    </div>
                </div>
            `;
        }
        
        // 标签部分
        detailHTML += `
            <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #e0e0e0;">
                <h3 style="color: #333; margin-bottom: 0.8rem; font-size: 1.1rem;">🏷️ 标签</h3>
                <div class="project-tags">
        `;
        
        project.tags.forEach(tag => {
            detailHTML += `<span class="tag" style="margin-right: 0.5rem; margin-bottom: 0.5rem;">${tag}</span>`;
        });
        
        detailHTML += `
                </div>
            </div>
        `;
        
        content.innerHTML = detailHTML;
        modal.style.display = 'block';
    }
    
    // 设置搜索功能
    setupSearch() {
        const searchInput = document.getElementById('searchInput');
        
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            this.filterProjects(query);
        });
    }
    
    // 过滤项目
    filterProjects(query) {
        if (!query) {
            // 如果搜索为空，根据当前视图重新渲染
            this.switchView(this.currentView);
            return;
        }
        
        // 搜索时切换到分类视图
        this.currentView = 'category';
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-view="category"]').classList.add('active');
        
        const container = document.getElementById('categoriesContainer');
        document.getElementById('timelineContainer').style.display = 'none';
        document.getElementById('revenueContainer').style.display = 'none';
        container.style.display = 'grid';
        
        // 搜索匹配的项目
        const matchedProjects = searchableContent.filter(project => 
            project.searchText.includes(query)
        );
        
        // 按分类重新组织搜索结果
        const groupedResults = {};
        matchedProjects.forEach(project => {
            if (!groupedResults[project.category]) {
                groupedResults[project.category] = [];
            }
            groupedResults[project.category].push(project);
        });
        
        // 重新渲染搜索结果
        container.innerHTML = '';
        
        if (Object.keys(groupedResults).length === 0) {
            container.innerHTML = '<div style="text-align: center; color: #666; padding: 2rem;">未找到匹配的项目</div>';
            return;
        }
        
        const categoryIcons = {
            'AI套壳项目': '🤖',
            '流量变现': '💰',
            'SEO项目': '🔍',
            '矩阵运营': '📊',
            '工具类项目': '🛠️',
            '冷启动策略': '🚀',
            '投放策略': '📢'
        };
        
        Object.keys(groupedResults).forEach(category => {
            const categoryCard = this.createCategoryCard(category, groupedResults[category], categoryIcons[category]);
            container.appendChild(categoryCard);
        });
    }
    
    // 设置模态框
    setupModal() {
        const modal = document.getElementById('projectModal');
        const closeBtn = document.querySelector('.close');
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // 设置标签页切换
    setupTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // 移除所有active类
                tabBtns.forEach(b => b.classList.remove('active'));
                // 添加active类到当前按钮
                e.target.classList.add('active');
                
                const view = e.target.dataset.view;
                this.switchView(view);
            });
        });
    }
    
    // 切换视图
    switchView(view) {
        this.currentView = view;
        
        // 隐藏所有容器
        document.getElementById('categoriesContainer').style.display = 'none';
        document.getElementById('timelineContainer').style.display = 'none';
        document.getElementById('revenueContainer').style.display = 'none';
        
        // 显示对应容器
        switch(view) {
            case 'category':
                document.getElementById('categoriesContainer').style.display = 'grid';
                break;
            case 'timeline':
                document.getElementById('timelineContainer').style.display = 'block';
                this.renderTimeline();
                break;
            case 'revenue':
                document.getElementById('revenueContainer').style.display = 'grid';
                this.renderByRevenue();
                break;
        }
    }
    
    // 渲染时间线视图
    renderTimeline() {
        const container = document.getElementById('timelineContainer');
        container.innerHTML = '';
        
        // 按年份分组项目
        const projectsByYear = {};
        searchableContent.forEach(project => {
            const year = project.date ? project.date.split('-')[0] : '未知';
            if (!projectsByYear[year]) {
                projectsByYear[year] = [];
            }
            projectsByYear[year].push(project);
        });
        
        // 按年份排序（降序）
        const sortedYears = Object.keys(projectsByYear).sort((a, b) => b.localeCompare(a));
        
        sortedYears.forEach(year => {
            const yearSection = document.createElement('div');
            yearSection.className = 'timeline-year';
            
            const yearHeader = document.createElement('div');
            yearHeader.className = 'year-header';
            yearHeader.textContent = `${year}年 (${projectsByYear[year].length}个项目)`;
            
            const timelineItems = document.createElement('div');
            timelineItems.className = 'timeline-items';
            
            // 按日期排序项目
            projectsByYear[year].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
            
            projectsByYear[year].forEach(project => {
                const item = this.createTimelineItem(project);
                timelineItems.appendChild(item);
            });
            
            yearSection.appendChild(yearHeader);
            yearSection.appendChild(timelineItems);
            container.appendChild(yearSection);
        });
    }
    
    // 创建时间线项目
    createTimelineItem(project) {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        const date = document.createElement('div');
        date.className = 'timeline-date';
        date.textContent = project.date || '日期未知';
        
        const name = document.createElement('div');
        name.className = 'project-name';
        name.textContent = project.name;
        
        const desc = document.createElement('div');
        desc.className = 'project-desc';
        desc.textContent = project.desc;
        
        const tags = document.createElement('div');
        tags.className = 'project-tags';
        project.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag';
            tagSpan.textContent = tag;
            tags.appendChild(tagSpan);
        });
        
        item.appendChild(date);
        item.appendChild(name);
        item.appendChild(desc);
        item.appendChild(tags);
        
        // 点击显示详情
        item.addEventListener('click', () => {
            this.showProjectDetail(project, project.category);
        });
        
        return item;
    }
    
    // 按收入排序渲染
    renderByRevenue() {
        const container = document.getElementById('revenueContainer');
        container.innerHTML = '';
        
        // 过滤有收入数据的项目并排序
        const projectsWithRevenue = searchableContent.filter(project => 
            project.revenue && project.revenue !== '未知'
        ).sort((a, b) => {
            // 提取收入数字进行排序
            const getRevenueNumber = (revenue) => {
                const match = revenue.match(/(\d+(?:\.\d+)?)[KMk]/);
                if (match) {
                    const num = parseFloat(match[1]);
                    const unit = match[0].slice(-1).toUpperCase();
                    return unit === 'M' ? num * 1000 : num;
                }
                return 0;
            };
            
            return getRevenueNumber(b.revenue) - getRevenueNumber(a.revenue);
        });
        
        // 创建收入排序卡片
        const revenueCard = document.createElement('div');
        revenueCard.className = 'category-card';
        revenueCard.style.gridColumn = '1 / -1';
        
        const title = document.createElement('div');
        title.className = 'category-title';
        title.innerHTML = `<span class="category-icon">💰</span>按收入排序 (${projectsWithRevenue.length}个项目)`;
        
        const projectList = document.createElement('ul');
        projectList.className = 'project-list';
        
        projectsWithRevenue.forEach(project => {
            const listItem = this.createProjectItem(project, project.category);
            // 添加收入显示
            const revenueInfo = document.createElement('div');
            revenueInfo.style.cssText = 'font-weight: bold; color: #667eea; margin-top: 0.5rem;';
            revenueInfo.textContent = `收入: ${project.revenue}`;
            listItem.appendChild(revenueInfo);
            
            projectList.appendChild(listItem);
        });
        
        revenueCard.appendChild(title);
        revenueCard.appendChild(projectList);
        container.appendChild(revenueCard);
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new MoneyHunterApp();
});