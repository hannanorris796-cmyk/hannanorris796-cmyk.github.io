(() => {
  const data=window.GRAPH_DATA,$=id=>document.getElementById(id);
  let selectedNode='126',selectedRole='126-CNC技术员';
  let zoom=document.documentElement.classList.contains('embedded')?.75:1;
  const zoomMin=.5,zoomMax=1.5,baseHeight=document.documentElement.classList.contains('embedded')?600:900;
  function setZoom(value){
    zoom=Math.min(zoomMax,Math.max(zoomMin,Math.round(value*100)/100));
    const graph=$('graph'),stage=$('graphStage');
    graph.style.transform=`scale(${zoom})`;
    graph.style.height=`${baseHeight}px`;
    const contentHeight=Math.max(baseHeight,graph.scrollHeight);
    graph.style.height=`${contentHeight}px`;
    stage.style.width=`${Math.ceil(graph.scrollWidth*zoom)}px`;
    stage.style.height=`${Math.ceil(contentHeight*zoom)}px`;
    $('zoomValue').textContent=`${Math.round(zoom*100)}%`;
    $('zoomOut').disabled=zoom<=zoomMin;
    $('zoomIn').disabled=zoom>=zoomMax;
    requestAnimationFrame(drawEdges);
  }
  const expanded={'人工智能产业':true,'新能源汽车':true};
  const headings=['产业链节点','专业','岗位','工作任务','岗位能力','技能&知识点'];
  const currentNode=()=>data.nodes.find(n=>n.id===selectedNode)||data.nodes[0];
  const currentRole=()=>currentNode().roles.find(r=>r.id===selectedRole)||currentNode().roles[0];
  function nodeBox(id,label,icon,kind){
    const el=document.createElement('div');el.className=`node ${kind}`;el.dataset.id=id;
    const mark=document.createElement('span');mark.className='symbol';mark.textContent=icon;
    const text=document.createElement('span');text.textContent=label;el.append(mark,text);return el;
  }
  function section(title,values,note){
    const box=document.createElement('section');box.className='detail-section';
    const h=document.createElement('h4');h.textContent=`${title} · ${values.length}`;box.append(h);
    if(note){const p=document.createElement('p');p.className='source-note';p.textContent=note;box.append(p)}
    const list=document.createElement('div');list.className='chip-list';
    values.forEach(v=>{const span=document.createElement('span');span.className='chip';span.textContent=v;list.append(span)});
    box.append(list);return box;
  }
  function renderTree(body){
    const ai=data.nodes.filter(n=>n.industry==='人工智能产业').sort((a,b)=>a.depth-b.depth);
    const nev=data.nodes.find(n=>n.industry==='新能源汽车');
    const grid=document.createElement('div');grid.className='industry-level-grid';
    ['产业链','二级节点','三级节点','四级节点'].forEach((text,i)=>{
      const label=document.createElement('small');label.className='level-label';label.textContent=text;
      label.style.gridColumn=String(i+1);label.style.gridRow='1';grid.append(label);
    });
    function place(n,row,col,root){
      if(!n)return;
      const cell=document.createElement('div');cell.className='level-cell';cell.style.gridRow=String(row);cell.style.gridColumn=String(col);
      const item=nodeBox(n.id,n.label,root?'⬡':'◇',`tree-node ${root?'root-node':'child-node'}`);
      item.classList.toggle('selected',selectedNode===n.id);
      item.onclick=()=>{selectedNode=n.id;selectedRole=n.roles.find(r=>r.label==='CNC技术员')?.id||n.roles[0].id;render()};
      if(root&&n.industry==='人工智能产业'){
        const toggle=document.createElement('button');toggle.type='button';toggle.className='tree-toggle';
        toggle.textContent=expanded[n.industry]?'▾':'▸';toggle.setAttribute('aria-label',`${expanded[n.industry]?'折叠':'展开'}${n.industry}`);
        toggle.onclick=()=>{expanded[n.industry]=!expanded[n.industry];if(!expanded[n.industry]&&selectedNode!==n.id&&ai.some(x=>x.id===selectedNode)){selectedNode=n.id;selectedRole=n.roles.find(r=>r.label==='CNC技术员')?.id||n.roles[0].id}render()};
        cell.append(toggle);
      }
      cell.append(item);grid.append(cell);
    }
    place(ai[0],2,1,true);place(nev,3,1,true);
    if(expanded['人工智能产业'])ai.slice(1).forEach(n=>place(n,2,n.depth+1,false));
    body.append(grid);
  }
  function render(){
    const chosen=currentNode(),job=currentRole();selectedRole=job.id;
    $('mapTitle').textContent=data.title;
    $('pathHint').textContent=`2 条产业链 · ${data.nodes.length} 个产业链节点 · 当前：${chosen.label} → ${job.label}`;
    $('sourceText').textContent=`数据来源：${data.source}；知识点为整理提取`;
    const columns=$('columns');columns.replaceChildren();
    headings.forEach((title,index)=>{
      const column=document.createElement('section');column.className=`column column-${index}`;
      const h=document.createElement('h2');const b=document.createElement('b');b.textContent='»';h.append(b,document.createTextNode(title));column.append(h);
      const body=document.createElement('div');body.className='column-body';
      if(index===0)renderTree(body);
      else if(index===1)body.append(nodeBox('major',data.major,'◈','chain-node'));
      else if(index===2){
        const roles=document.createElement('div');roles.className='role-list';
        chosen.roles.forEach(r=>{const el=nodeBox(r.id,r.label,'♙','role-node');el.classList.toggle('selected',job.id===r.id);
          el.onclick=()=>{selectedRole=r.id;render()};roles.append(el)});body.append(roles);
      }else if(index===3){
        const tasks=document.createElement('div');tasks.className='task-list';
        job.tasks.forEach((task,i)=>tasks.append(nodeBox('task-'+i,task,'▤','task-node')));body.append(tasks);
      }else if(index===4){
        const card=document.createElement('div');card.className='ability-card';card.dataset.id='ability';
        const title=document.createElement('h3');title.textContent=`${job.label}岗位能力`;card.append(title);
        const summary=document.createElement('div');summary.className='ability-summary';
        const strong=document.createElement('strong');strong.textContent='专业技能';
        const count=document.createElement('span');count.textContent=`${job.skills.length} 项技能关联至右侧`;summary.append(strong,count);card.append(summary);
        card.append(section('职业素养',job.qualities));body.append(card);
      }else{
        const card=document.createElement('div');card.className='details-card';card.dataset.id='details';
        card.append(section('技能',job.skills));
        card.append(section('知识点',job.knowledge,job.knowledge.length?'依据技能与工作任务整理':'源表未单列知识点'));
        body.append(card);
      }
      column.append(body);columns.append(column);
    });requestAnimationFrame(()=>setZoom(zoom));
  }
  function drawEdges(){
    const graph=$('graph'),svg=$('edges'),bounds=graph.getBoundingClientRect(),job=currentRole();svg.replaceChildren();
    svg.setAttribute('viewBox',`0 0 ${graph.clientWidth} ${graph.clientHeight}`);
    const aiLevels=data.nodes.filter(n=>n.industry==='人工智能产业').sort((a,b)=>a.depth-b.depth);
    const nev=data.nodes.find(n=>n.industry==='新能源汽车');
    const aiExit=expanded['人工智能产业']?aiLevels[aiLevels.length-1]:aiLevels[0];
    const pairs=[[aiExit.id,'major','feed'],[nev.id,'major','feed'],['major',job.id,'spine'],['ability','details','spine']];
    if(expanded['人工智能产业']){
      for(let i=0;i<aiLevels.length-1;i++)pairs.push([aiLevels[i].id,aiLevels[i+1].id,'hierarchy']);
    }
    job.tasks.forEach((_,i)=>{pairs.push([job.id,'task-'+i,'branch']);pairs.push(['task-'+i,'ability','branch'])});
    pairs.forEach(([from,to,kind])=>{
      const a=graph.querySelector(`[data-id="${CSS.escape(from)}"]`),b=graph.querySelector(`[data-id="${CSS.escape(to)}"]`);if(!a||!b)return;
      const ar=a.getBoundingClientRect(),br=b.getBoundingClientRect();
      const x1=(ar.right-bounds.left)/zoom,y1=(ar.top+ar.height/2-bounds.top)/zoom,x2=(br.left-bounds.left)/zoom,y2=(br.top+br.height/2-bounds.top)/zoom;
      const c=Math.max(25,(x2-x1)*.44),path=document.createElementNS('http://www.w3.org/2000/svg','path');
      const d=kind==='feed'&&from===nev.id?`M${x1} ${y1} C${x1+c} ${Math.max(y1,y2)+65},${x2-c} ${Math.max(y1,y2)+65},${x2} ${y2}`:`M${x1} ${y1} C${x1+c} ${y1},${x2-c} ${y2},${x2} ${y2}`;
      path.setAttribute('d',d);path.setAttribute('class',`edge ${kind}`);svg.append(path);
      if(kind==='hierarchy'){
        const point=document.createElementNS('http://www.w3.org/2000/svg','circle');
        point.setAttribute('cx',String(x2));point.setAttribute('cy',String(y2));point.setAttribute('r','3.5');point.setAttribute('fill','#46faff');svg.append(point);
      }
    });
  }
  $('zoomOut').onclick=()=>setZoom(zoom-.1);
  $('zoomIn').onclick=()=>setZoom(zoom+.1);
  $('zoomFit').onclick=()=>setZoom((document.querySelector('.graph-scroll').clientWidth-24)/$('graph').scrollWidth);
  document.querySelector('.graph-scroll').addEventListener('wheel',event=>{
    if(!event.ctrlKey)return;
    event.preventDefault();
    setZoom(zoom+(event.deltaY<0?.1:-.1));
  },{passive:false});
  new ResizeObserver(()=>requestAnimationFrame(drawEdges)).observe($('graph'));
  window.addEventListener('resize',()=>requestAnimationFrame(drawEdges));render();
})();
