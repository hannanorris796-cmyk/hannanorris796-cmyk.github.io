(() => {
  const data=window.PANORAMA_DATA,viewport=document.getElementById('viewport');
  const stage=document.getElementById('stage'),graph=document.getElementById('graph');
  const nodesLayer=document.getElementById('canvasNodes'),svg=document.getElementById('edges');
  // 每项技能对应学习知识点。知识点是推断数据，源表只提供岗位技能。
  const learning={
    '卡尺':['游标卡尺结构与读数','尺寸测量误差'],
    '千分尺':['千分尺结构与读数','尺寸测量误差'],
    '图纸解读':['机械图样识读','尺寸公差与形位公差'],
    '计算机系统运维':['计算机硬件基础','操作系统维护'],
    '机械制图':['机械制图国家标准','投影与视图表达'],
    '质量检验':['质量检验标准','抽样检验方法'],
    '量具与检具使用':['量具校准','检具测量方法'],
    '静电防护(ESD)':['静电产生与防护','ESD作业规范'],
    '测绘仪器操作':['测绘仪器原理','测量数据记录'],
    '机电一体化技术':['机械传动基础','电气控制基础','机电系统集成'],
    '机床设备维修保养':['数控机床结构','机床点检与维护'],
    '软件编码':['程序设计基础','程序调试方法'],
    '检具使用':['检具测量方法','检具校准'],
    '发那科(FANUC)系统':['FANUC操作面板','FANUC参数与报警'],
    '计算机数控（CNC）':['数控机床坐标系','数控加工原理'],
    '编程':['程序设计基础','程序调试方法'],
    'CNC编程':['G/M代码','刀具补偿与切削参数'],
    '内径百分表':['内径百分表结构与读数','孔径测量方法'],
    '生产设备操作与维护':['设备安全操作','设备点检与故障识别'],
    '机械装配':['装配工艺','公差配合'],
    '装配图绘制':['装配图表达规范','零件序号与明细栏'],
    '计算机辅助设计(CAD)':['CAD绘图命令','CAD图层与标注规范'],
    '手动工具使用':['手动工具选择','装配安全规范'],
    '二次回路图':['电气二次回路原理','二次回路图识读'],
    '传动理论':['机械传动原理','传动比与效率'],
    '气动系统图识读':['气动元件与回路','气动图形符号'],
    '测试仪器与测量工具使用':['测试仪器原理','测量误差与校准'],
    '电气理论':['电路基础','电气安全'],
    '金属加工':['金属切削原理','金属材料与加工工艺']
    ,'冲床':['冲压设备结构','冲床安全操作']
    ,'激光切割':['激光切割原理','切割参数与质量控制']
    ,'金属成型工艺':['塑性成型原理','金属成型工艺流程']
    ,'CAD图纸识读':['CAD图层与标注规范','机械图样识读']
    ,'CNC机床操作规程':['数控机床安全规程','开机与停机操作流程']
  };
  Object.assign(learning,{
    'G代码(G-Codes)':['G代码指令格式','数控加工程序结构'],
    'SolidWorks（CAD）':['SolidWorks零件建模','工程图生成与标注'],
    'UG (Unigraphics NX)':['NX建模基础','NX数控编程流程'],
    '云计算':['云计算架构基础','云端数据与权限管理'],
    '五轴编程':['五轴机床坐标变换','五轴刀路规划'],
    '刀具调整(调刀)':['刀具几何参数','对刀与刀具补偿'],
    '北京精雕软件':['北京精雕建模基础','精雕刀路与后处理'],
    '变频器选型':['变频调速原理','电机与变频器匹配'],
    '可编程逻辑控制器(PLC)编程':['PLC梯形图','PLC输入输出与调试'],
    '图纸识读':['机械图样识读','尺寸公差与形位公差'],
    '基础测量工具使用':['常用量具读数','测量误差与校准'],
    '数据分析':['数据清洗与统计','制造数据可视化'],
    '数控技术':['数控加工原理','机床坐标系与控制系统'],
    '数控车床':['数控车床结构','车削工艺与安全'],
    '新代刀塔机':['新代控制系统操作','刀塔换刀与对刀'],
    '普通车床操作':['普通车床结构','车削参数与操作规程'],
    '机械加工技术':['机械加工工艺','切削参数选择'],
    '机械设备操作与维护':['机械设备安全操作','设备点检与保养'],
    '流程集成':['生产流程建模','系统接口与流程协同'],
    '生产流程管理':['生产计划与工序控制','生产过程质量管理'],
    '自动化设备导入':['设备选型与验收','自动化设备安装调试'],
    '质量管理':['质量管理体系','过程质量控制'],
    '量具使用':['量具结构与读数','测量误差与校准'],
    '钻床':['钻床结构与操作','孔加工工艺'],
    '铣削':['铣削加工原理','铣刀与切削参数'],
    '镗刀':['镗刀结构与选用','镗孔加工工艺']
  });
  const maxDepth=Math.max(...data.chain.map(n=>n.depth));
  const chainPanels=Array.from({length:maxDepth+1},(_,depth)=>({label:depth?'一二三四五六七八九'[depth]+'级节点':'产业链',x:24+depth*166,w:150}));
  const majorX=24+(maxDepth+1)*166;
  const panels=[...chainPanels,
    {label:'专业',x:majorX,w:150},{label:'岗位',x:majorX+166,w:160},
    {label:'工作任务',x:majorX+342,w:350},
    {label:'岗位能力 · 技能 / 素养',x:majorX+708,w:260},
    {label:'技能&知识点',x:majorX+984,w:270}
  ];
  const W=majorX+1276,pos=new Map(),nodeEls=new Map(),edges=[];
  let H=4200,scale=1,selected=null,dragging=false,dragStart=null,suppressClick=false;
  const elem=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e};
  const fixedHeaders=document.getElementById('fixedHeaders');
  function addNode(id,label,kind,x,y,w,h){
    const box=elem('div','pan-node '+kind,label);
    box.style.cssText=`left:${x}px;top:${y}px;width:${w}px;height:${h}px`;
    box.dataset.id=id;
    box.addEventListener('click',e=>{e.stopPropagation();if(suppressClick)return;selected=selected===id?null:id;updateFocus()});
    nodesLayer.append(box);nodeEls.set(id,box);pos.set(id,{x,y,w,h});return box;
  }
  function addEdge(source,target,kind){edges.push({source,target,kind})}
  function unique(items){return [...new Set(items)]}
  function build(){
    const bands=[];let cursor=158;
    data.roles.forEach(role=>{
      const height=Math.max(300,role.tasks.length*55+70);
      bands.push({role,top:cursor,center:cursor+height/2,height});cursor+=height;
    });
    H=Math.max(3600,cursor+130);
    graph.style.width=W+'px';graph.style.height=H+'px';
    panels.forEach(p=>{
      const panel=elem('section','pan-panel');
      panel.style.cssText=`left:${p.x}px;top:28px;width:${p.w}px;height:${H-56}px`;
      nodesLayer.append(panel);
      const heading=elem('div','pan-fixed-heading',p.label);fixedHeaders.append(heading);p.heading=heading;
    });
    const mid=H/2,chain=data.chain;
    const leaves=chain.filter(n=>!chain.some(child=>child.parent===n.code));
    const industryOrder=unique(chain.filter(n=>n.depth===0).map(n=>n.industry));
    leaves.sort((a,b)=>industryOrder.indexOf(a.industry)-industryOrder.indexOf(b.industry)||a.code.localeCompare(b.code));
    const leafY=new Map(leaves.map((n,i)=>[n.code,mid-(leaves.length-1)*67+i*134]));
    chain.forEach(n=>{
      const descendants=leaves.filter(leaf=>leaf.code.startsWith(n.code));
      const y=descendants.reduce((sum,leaf)=>sum+leafY.get(leaf.code),0)/descendants.length;
      const panel=chainPanels[n.depth];
      const box=addNode('c'+n.code,n.label,'chain'+(n.placeholder?' placeholder':''),panel.x+10,y-24,panel.w-20,48);
      box.title=n.placeholder?'原表未提供此层节点名称，以编码占位':n.code;
      const parent=chain.find(candidate=>candidate.code===n.parent);
      if(parent&&parent.depth===n.depth-1)addEdge('c'+n.parent,'c'+n.code,'hierarchy');
    });
    addNode('major',data.major,'major',panels[maxDepth+1].x+10,mid-27,130,54);
    leaves.filter(n=>n.depth===maxDepth).forEach(n=>addEdge('c'+n.code,'major','chain-map'));
    bands.forEach(({role,top,center})=>{
      addNode(role.id,role.label,'role',panels[maxDepth+2].x+12,center-24,136,48);
      addEdge('major',role.id,'major-role');
      role.tasks.forEach((task,i)=>{
        addNode(task.id,task.label,'task',panels[maxDepth+3].x+12,top+30+i*55,326,46);
        addEdge(role.id,task.id,'role-task');
      });
    });
    const skills=unique(data.roles.flatMap(r=>r.skills));
    const qualities=unique(data.roles.flatMap(r=>r.qualities));
    const knowledge=unique(skills.flatMap(s=>learning[s]||[]));
    const available=H-250,step=Math.min(116,available/(skills.length+qualities.length+2));
    let y=150;
    const abilityX=panels[maxDepth+4].x+12,knowledgeX=panels[maxDepth+5].x+12;
    function groupLabel(text,top){const label=elem('div','pan-group-label',text);label.style.cssText=`left:${abilityX}px;top:${top}px;width:236px`;nodesLayer.append(label)}
    groupLabel(`技能 · ${skills.length}`,120);
    const skillIds=new Map(),qualityIds=new Map(),knowledgeIds=new Map();
    skills.forEach((s,i)=>{const id='s'+i;skillIds.set(s,id);addNode(id,s,'ability-skill',abilityX,y,236,40);y+=step});
    y+=34;
    groupLabel(`职业素养 · ${qualities.length}`,y-30);
    qualities.forEach((q,i)=>{const id='q'+i;qualityIds.set(q,id);addNode(id,q,'ability-quality',abilityX,y,236,40);y+=step});
    const kstep=Math.min(104,available/Math.max(1,knowledge.length));
    knowledge.forEach((k,i)=>{const id='k'+i;knowledgeIds.set(k,id);addNode(id,k,'knowledge',knowledgeX,150+i*kstep,246,40)});
    // 岗位能力只有岗位级归属，源数据未给出每项工作任务对应的具体能力。
    // 因此不画跨过“工作任务”列的岗位→能力连线，也不推断任务→能力连线。
    skills.forEach(s=>(learning[s]||[]).forEach(k=>addEdge(skillIds.get(s),knowledgeIds.get(k),'skill-knowledge')));
    svg.setAttribute('viewBox',`0 0 ${W} ${H}`);svg.setAttribute('width',W);svg.setAttribute('height',H);
    edges.forEach(edge=>{
      const a=pos.get(edge.source),b=pos.get(edge.target);if(!a||!b)return;
      const x1=a.x+a.w,y1=a.y+a.h/2,x2=b.x,y2=b.y+b.h/2,c=Math.max(20,(x2-x1)*.45);
      const path=document.createElementNS('http://www.w3.org/2000/svg','path');
      path.setAttribute('d',`M${x1} ${y1} C${x1+c} ${y1},${x2-c} ${y2},${x2} ${y2}`);
      path.setAttribute('class','pan-edge '+edge.kind);svg.append(path);edge.el=path;
    });
    document.getElementById('pathHint').textContent=`${unique(chain.map(n=>n.industry)).length} 条产业链 · ${leaves.length} 个末级节点 · 1 个专业 · ${data.roles.length} 种岗位 · ${skills.length} 项技能 · ${qualities.length} 项素养 · ${knowledge.length} 个知识点`;
    applyScale();updateFocus();
  }
  function focusEdges(id){
    if(!id)return new Set(edges);
    if(id==='major')return new Set(edges);
    const skills=unique(data.roles.flatMap(r=>r.skills));
    const qualities=unique(data.roles.flatMap(r=>r.qualities));
    let roles=[];
    if(id.startsWith('c'))roles=data.roles.filter(r=>r.contexts.some(code=>code.startsWith(id.slice(1))));
    else if(id.startsWith('r'))roles=data.roles.filter(r=>r.id===id||r.tasks.some(t=>t.id===id));
    else if(id.startsWith('s'))roles=data.roles.filter(r=>r.skills.includes(skills[Number(id.slice(1))]));
    else if(id.startsWith('q'))roles=data.roles.filter(r=>r.qualities.includes(qualities[Number(id.slice(1))]));
    else if(id.startsWith('k')){
      const knowledge=unique(skills.flatMap(s=>learning[s]||[]));
      const target=knowledge[Number(id.slice(1))];
      roles=data.roles.filter(r=>r.skills.some(s=>(learning[s]||[]).includes(target)));
    }
    const roleIds=new Set(roles.map(r=>r.id));
    const skillIds=new Set(roles.flatMap(r=>r.skills).map(s=>'s'+skills.indexOf(s)));
    const chainCode=id.startsWith('c')?id.slice(1):null;
    const selectedChain=data.chain.find(n=>n.code===chainCode);
    const roleContexts=unique(roles.flatMap(r=>r.contexts));
    const chainIds=new Set(data.chain.filter(n=>selectedChain
      ?n.code.startsWith(chainCode)||chainCode.startsWith(n.code)
      :roleContexts.some(code=>code.startsWith(n.code)||n.code.startsWith(code)))
      .map(n=>'c'+n.code));
    return new Set(edges.filter(edge=>{
      if(edge.kind==='hierarchy')return chainIds.has(edge.source)&&chainIds.has(edge.target);
      if(edge.kind==='chain-map')return chainIds.has(edge.source);
      if(edge.kind==='major-role')return roleIds.has(edge.target);
      if(edge.kind==='role-task')return roleIds.has(edge.source);
      if(edge.kind==='skill-knowledge')return skillIds.has(edge.source);
      return edge.source===id||edge.target===id;
    }));
  }
  function updateFocus(){
    const focused=focusEdges(selected);
    const visible=new Set();
    edges.forEach(edge=>{
      const show=focused.has(edge);edge.el.style.display=show?'':'none';
      edge.el.classList.toggle('focused',!!selected&&show);
      if(show){visible.add(edge.source);visible.add(edge.target)}
    });
    if(selected){
      const skills=unique(data.roles.flatMap(role=>role.skills));
      const qualities=unique(data.roles.flatMap(role=>role.qualities));
      data.roles.filter(role=>visible.has(role.id)).forEach(role=>{
        role.skills.forEach(skill=>visible.add('s'+skills.indexOf(skill)));
        role.qualities.forEach(quality=>visible.add('q'+qualities.indexOf(quality)));
      });
    }
    nodeEls.forEach((node,id)=>{
      node.classList.toggle('selected',selected===id);
      node.classList.toggle('muted',!!selected&&!visible.has(id)&&selected!==id);
    });
  }
  function applyScale(){
    stage.style.width=W*scale+'px';stage.style.height=H*scale+'px';graph.style.transform=`scale(${scale})`;
    document.getElementById('zoomValue').textContent=Math.round(scale*100)+'%';
    updateHeaders();
  }
  function updateHeaders(){
    fixedHeaders.style.width=viewport.clientWidth+'px';
    panels.forEach(p=>{
      p.heading.style.left=(p.x*scale-viewport.scrollLeft)+'px';
      p.heading.style.width=(p.w*scale)+'px';
      p.heading.style.fontSize=Math.max(12,Math.min(19,17*scale))+'px';
    });
  }
  function centerView(){
    viewport.scrollLeft=0;
    viewport.scrollTop=Math.max(0,(H*scale-viewport.clientHeight)/2);
  }
  viewport.addEventListener('wheel',e=>{
    e.preventDefault();const rect=viewport.getBoundingClientRect(),px=e.clientX-rect.left,py=e.clientY-rect.top;
    const wx=(viewport.scrollLeft+px)/scale,wy=(viewport.scrollTop+py)/scale;
    scale=Math.max(.28,Math.min(1.6,scale*(e.deltaY<0?1.1:.9)));applyScale();
    viewport.scrollLeft=wx*scale-px;viewport.scrollTop=wy*scale-py;
    updateHeaders();
  },{passive:false});
  viewport.addEventListener('scroll',updateHeaders);
  window.addEventListener('resize',updateHeaders);
  viewport.addEventListener('pointerdown',e=>{
    if(e.target.closest('.pan-node'))return;
    dragging=true;suppressClick=false;dragStart={x:e.clientX,y:e.clientY,left:viewport.scrollLeft,top:viewport.scrollTop};
    viewport.setPointerCapture(e.pointerId);viewport.classList.add('dragging');
  });
  viewport.addEventListener('pointermove',e=>{
    if(!dragging)return;const dx=e.clientX-dragStart.x,dy=e.clientY-dragStart.y;
    if(Math.abs(dx)+Math.abs(dy)>3)suppressClick=true;
    viewport.scrollLeft=dragStart.left-dx;viewport.scrollTop=dragStart.top-dy;
  });
  viewport.addEventListener('pointerup',()=>{dragging=false;viewport.classList.remove('dragging');setTimeout(()=>suppressClick=false,0)});
  viewport.addEventListener('click',e=>{if(suppressClick)return;if(!e.target.closest('.pan-node')){selected=null;updateFocus()}});
  document.getElementById('resetView').onclick=()=>{selected=null;scale=1;applyScale();centerView();updateFocus()};
  document.getElementById('zoomOut').onclick=()=>{scale=Math.max(.28,scale*.9);applyScale()};
  document.getElementById('zoomIn').onclick=()=>{scale=Math.min(1.6,scale*1.1);applyScale()};
  document.getElementById('mapTitle').textContent=data.title;
  document.getElementById('sourceText').textContent=`数据来源：${data.source}；知识点由岗位技能推导`;
  build();requestAnimationFrame(centerView);
})();
