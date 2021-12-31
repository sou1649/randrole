const but=document.getElementById('button');

const na1=document.getElementById('name1');
const ro1=document.getElementById('role1');
console.log('start');

const chcom= (lis,char)=>{
  list=String(lis);
  for(let i=0;i<lis.length;i++){
    list=list.replace(char,',');
  }
  return list;
}



but.addEventListener('click', ()=>{
  let Name=String(na1.value);
  let Role=String(ro1.value);
  if(Name.length>300||Role.length>300){
    window.alert('Please do not exceed 300 characters in length.');
  }else{
    Name=chcom(Name,'、');
    Role=chcom(Role,'、');
    Name=chcom(Name,' ');
    Role=chcom(Role,' ');
    Name=chcom(Name,'　');
    Role=chcom(Role,'　');
    console.log(Name);
    console.log(Role);
    const rowNamelist=Name.split(",");
    const rowRolelist=Role.split(",");


    let Namelist=[];
    let Rolelist=[];
    const option = document.getElementsByName("option");
    for (let i = 0; i < option.length; i++) {
      if (option[i].checked) { //(color2[i].checked === true)と同じ
        Rolelist.push(option[i].value);
      }
    }

    console.log(Rolelist)


    for(let i=0;i<rowNamelist.length;i++){
      if(rowNamelist[i]!=='') Namelist.push(rowNamelist[i]);
    }
    for(let i=0;i<rowRolelist.length;i++){
      if(rowRolelist[i]!=='') Rolelist.push(rowRolelist[i]);
    }
    const nsize=Namelist.length,rsize=Rolelist.length;
    for(let i=0;i<nsize;i++) console.log(Namelist[i]);
    for(let i=0;i<rsize;i++) console.log(Rolelist[i]);
    if(nsize<rsize){
      window.alert('The number of people must be greater than the number of roles');
    }else{
      const num=[];
      const out=[];
      for(let i=0;i<nsize;i++) num.push(i);

      for(let i=nsize;i>0;i--){
        let k=Math.floor(Math.random()*i);
        out.push(num[k]);
        num.splice(k,1);
    }
      const table=document.getElementById('table1')
    
      for(let i=0;i<nsize;i++){
        let tr=document.createElement('tr');
        if(out[i]<rsize){
          let th1=document.createElement('th');
          th1.textContent=Namelist[i]+'さん';
          tr.appendChild(th1);
          let th2=document.createElement('th');        
          th2.textContent=Rolelist[out[i]];        
          tr.appendChild(th2);
          console.log(Namelist[i],Rolelist[out[i]]);
        }else{
          let th1=document.createElement('th');
          th1.textContent=Namelist[i]+'さん';
          tr.appendChild(th1);
          let th2=document.createElement('th');        
          th2.textContent=String(out[i]+1);        
          tr.appendChild(th2);
          console.log(out[i]+1);
        }
        table.appendChild(tr);
      }
    }
  }
});