(() => {
  const clone=x=>JSON.parse(JSON.stringify(x));
  const initial=clone(window.GRAPH_DATA);
  const storageKey=initial.storageKey;
  function restoreEditedText(value,baseline){
    if(typeof value==='string')return value.includes('8888')&&typeof baseline==='string'?baseline:value;
    if(Array.isArray(value))return value.map((item,i)=>restoreEditedText(item,baseline?.[i])).filter(item=>!(item?.label==='8888'));
    if(value&&typeof value==='object'){
      const result={};
      for(const key of Object.keys(value))result[key]=restoreEditedText(value[key],baseline?.[key]);
      return result;
    }
    return value;
  }
  let data=clone(initial);
  try {
    const saved=storageKey?JSON.parse(localStorage.getItem(storageKey)||(storageKey==='industry-graph-v4'?localStorage.getItem('industry-graph-v3'):null)):null;
    if(saved?.chain?.length===5&&Array.isArray(saved.tasks)&&saved.ability?.skills&&saved.ability?.qualities){
      data=restoreEditedText(saved,initial);
      data.ability.knowledge ||= clone(initial.ability.knowledge);
    }
  } catch {}
  const headings=['产业链节点','专业','岗位','工作任务','岗位能力','技能&知识点'];
  const $=id=>document.getElementById(id);
  function node(item,icon,kind){
    const box=document.createElement('div');box.className=`node ${kind}`;box.dataset.id=item.id;
    const symbol=document.createElement('span');symbol.className='symbol';symbol.textContent=icon;
    const label=document.createElement('span');label.textContent=item.label;box.append(symbol,label);return box;
  }
  function chipSection(title,values,note){
    const section=document.createElement('section');section.className='detail-section';
    const h=document.createElement('h4');h.textContent=`${title} · ${values.length}`;section.append(h);
    if(note){const p=document.createElement('p');p.className='source-note';p.textContent=note;section.append(p)}
    const list=document.createElement('div');list.className='chip-list';
    values.forEach(value=>{const chip=document.createElement('span');chip.className='chip';chip.textContent=value;list.append(chip)});
    section.append(list);return section;
  }
  function render(){
    $('mapTitle').textContent=data.title;
    $('sourceText').textContent=`数据来源：${data.source||'用户提供的示例'}；知识点为整理提取`;
    const root=$('columns');root.replaceChildren();
    headings.forEach((heading,index)=>{
      const column=document.createElement('section');column.className=`column column-${index}`;
      const head=document.createElement('h2');const mark=document.createElement('b');mark.textContent='»';head.append(mark,document.createTextNode(heading));column.append(head);
      const body=document.createElement('div');body.className='column-body';
      if(index===0){
        const stack=document.createElement('div');stack.className='chain-stack';
        const primary=document.createElement('div');primary.className='chain-primary';
        const ptag=document.createElement('small');ptag.textContent='产业链';primary.append(ptag,node(data.chain[0],'⬡','chain-node'));
        const pair=document.createElement('div');pair.className='chain-pair';
        [1,2].forEach((i)=>{if(!data.chain[i]?.label)return;const item=document.createElement('div');item.className='chain-item';
          const tag=document.createElement('small');tag.textContent=i===1?'二级节点':'三级节点';item.append(tag,node(data.chain[i],'◇','chain-node'));pair.append(item)});
        stack.append(primary);if(pair.children.length)stack.append(pair);else stack.classList.add('single');body.append(stack);
      } else if(index<3){body.append(node(data.chain[index+2],index===1?'◈':'♙','chain-node'))}
      else if(index===3){
        const list=document.createElement('div');list.className='task-list';
        data.tasks.forEach(task=>list.append(node(task,'▤','task-node')));body.append(list);
      } else if(index===4){
        const card=document.createElement('div');card.className='ability-card';card.dataset.id='ability';
        const h=document.createElement('h3');h.textContent=data.ability.title;card.append(h);
        const summary=document.createElement('div');summary.className='ability-summary';
        const a=document.createElement('strong');a.textContent='专业技能';
        const b=document.createElement('span');b.textContent=`${data.ability.skills.length} 项技能关联至右侧`;summary.append(a,b);card.append(summary);
        card.append(chipSection('职业素养',data.ability.qualities));body.append(card);
      } else {
        const card=document.createElement('div');card.className='details-card';card.dataset.id='details';
        card.append(chipSection('技能',data.ability.skills),chipSection('知识点',data.ability.knowledge,'依据技能与工作任务整理'));
        body.append(card);
      }
      column.append(body);root.append(column);
    });requestAnimationFrame(drawEdges);
  }
  function drawEdges(){
    const graph=$('graph'),svg=$('edges'),bounds=graph.getBoundingClientRect();svg.replaceChildren();
    svg.setAttribute('viewBox',`0 0 ${graph.clientWidth} ${graph.clientHeight}`);
    const chainIds=data.chain.slice(0,3).filter(item=>item?.label).map(item=>item.id);
    const pairs=[];for(let i=0;i<chainIds.length-1;i++)pairs.push([chainIds[i],chainIds[i+1],'inner']);
    pairs.push([chainIds[chainIds.length-1],'major','spine'],['major','role','spine'],['ability','details','spine']);
    data.tasks.forEach(t=>{pairs.push(['role',t.id,'branch']);pairs.push([t.id,'ability','branch'])});
    pairs.forEach(([from,to,kind])=>{
      const a=graph.querySelector(`[data-id="${CSS.escape(from)}"]`),b=graph.querySelector(`[data-id="${CSS.escape(to)}"]`);if(!a||!b)return;
      const ar=a.getBoundingClientRect(),br=b.getBoundingClientRect();let d;
      if(kind==='down'){
        const x1=ar.left+ar.width/2-bounds.left,y1=ar.bottom-bounds.top,x2=br.left+br.width/2-bounds.left,y2=br.top-bounds.top;
        d=`M${x1} ${y1} C${x1} ${y1+25},${x2} ${y2-25},${x2} ${y2}`;
      } else {
        const x1=ar.right-bounds.left,y1=ar.top+ar.height/2-bounds.top,x2=br.left-bounds.left,y2=br.top+br.height/2-bounds.top;
        const bend=Math.max(18,(x2-x1)*.46);d=`M${x1} ${y1} C${x1+bend} ${y1},${x2-bend} ${y2},${x2} ${y2}`;
      }
      const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',d);path.setAttribute('class',`edge ${kind}`);svg.append(path);
    });
  }
  new ResizeObserver(()=>requestAnimationFrame(drawEdges)).observe($('graph'));
  window.addEventListener('resize',()=>requestAnimationFrame(drawEdges));render();
})();
