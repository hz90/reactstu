import{o as k,r as d,a as e,M as v,j as m,B as p,bj as M}from"./index-a3c4ad18.js";import{F as c,I}from"./index-53e73775.js";import{T as w}from"./index-f3abca07.js";import{C as F,U as j,a as P,b as _,e as q}from"./role-a782f789.js";import{u as x}from"./request-a5c2cf21.js";import{h as A,T as L,P as Y}from"./moment-a321821f.js";import{C as E}from"./index-cf0bcb26.js";import"./throttle-66c7b080.js";const{SHOW_ALL:H}=w,{TextArea:V}=I,$={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:14}}},B=k(s=>{const{isModalOpen:h,title:f,handleOk:i,handleCancel:g,loading:C,dataRef:n}=s,[l]=c.useForm();d.useEffect(()=>{l.setFieldsValue({...n})},[n]);const S=o=>{},u=o=>{n.id&&(o.id=n.id),i(o,l,f)},b=o=>{},y={treeData:M,onChange:S,treeCheckable:!0,showCheckedStrategy:H,placeholder:"请选择角色权限",style:{width:"100%"}};return e(v,{forceRender:!0,title:f,footer:null,open:h,onCancel:g,children:m(c,{...$,form:l,name:"basic",labelCol:{span:5},initialValues:n,onFinish:u,onFinishFailed:b,size:"large",autoComplete:"off",children:[e(c.Item,{label:"角色名称",name:"roleName",rules:[{required:!0,message:"请输入角色名称"}],children:e(I,{placeholder:"请输入角色名称"})}),e(c.Item,{label:"角色描述",name:"description",rules:[{required:!0,message:"请输入角色描述"}],children:e(V,{rows:4,placeholder:"请输入角色描述"})}),e(c.Item,{label:"角色权限",name:"permissions",rules:[{required:!0,message:"请输入角色描述"}],children:e(w,{...y})}),m(c.Item,{children:[e(p,{onClick:()=>{g()},size:"middle",icon:e(F,{}),children:"取消"}),e(p,{loading:C,size:"middle",className:"save-btn",type:"primary",htmlType:"submit",icon:e(j,{}),children:"保存"})]})]})})});const{Search:U}=I,ae=k(()=>{const[s,h]=d.useState({list:[],current:1,pageSize:10,total:0}),[f,i]=d.useState(!1),[g,C]=d.useState(""),[n,l]=d.useState({roleName:"",description:"",permissions:[]}),S=[{title:"角色名称",dataIndex:"roleName",key:"roleName"},{title:"权限描述",dataIndex:"description",key:"description"},{title:"创建时间",dataIndex:"created_at",key:"created_at"},{title:"操作",dataIndex:"id",render:(t,a)=>s.list.length>=1?m("div",{children:[e(p,{type:"primary",style:{marginRight:"10px"},onClick:()=>{C("编辑角色"),l({roleName:a.roleName,description:a.description,permissions:JSON.parse(a.permissions),id:a.id}),i(!0)},children:"编辑"}),e(Y,{title:`确定删除 ${a.roleName} 吗?`,cancelText:"取消",okText:"确定",onConfirm:()=>o(a.id),children:e(p,{danger:!0,type:"primary",children:"删除"})})]}):null}];d.useEffect(()=>{u({current:1,pageSize:10})},[]);const{run:u,loading:b}=x(P,{manual:!0,defaultParams:[{current:1,pageSize:10}],onSuccess:(t,a)=>{h({...t,list:t.list.map(r=>({...r,created_at:A(+r.created_at).format("YYYY-MM-DD HH:mm:ss")}))})}}),y=x(_,{manual:!0,onSuccess:(t,a)=>{}}),o=t=>{const a=s.list.filter(r=>r.key!==t);h({...s.list,list:a})},R=x(q,{manual:!0,onSuccess:(t,a)=>{}}),T=t=>console.log(t),N=()=>{},O=()=>{C("新增角色"),l({roleName:"",description:"",permissions:[]}),i(!0)},z=async(t,a,r)=>{try{r==="新增角色"?await y.runAsync(t):await R.runAsync(t),a.resetFields(),i(!1),u({current:s.current,pageSize:s.pageSize})}catch{}},D=()=>{i(!1)};return m("div",{children:[m(E,{bordered:!1,children:[m("div",{className:"header",children:[e(U,{placeholder:"请输入角色名称关键词",loading:!1,onSearch:T,style:{width:200}}),e("div",{}),e(p,{type:"primary",loading:!1,onClick:O,children:"新增角色"})]}),e("div",{children:e(L,{columns:S,rowKey:t=>t.id,dataSource:s.list,pagination:{position:["bottomRight"],defaultCurrent:1,pageSize:s.pageSize,current:s.current,total:s.total,showTotal:t=>`共${t}条`,itemRender:(t,a,r)=>a==="prev"?e("a",{children:"上一页"}):a==="next"?e("a",{children:"下一页"}):r,onChange:(t,a)=>{u({current:t,pageSize:a})}},loading:b,onChange:N})})]}),e(B,{title:g,loading:y.loading,dataRef:n,isModalOpen:f,handleOk:z,handleCancel:D})]})});export{ae as default};
