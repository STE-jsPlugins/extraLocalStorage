var locals = getAllLocals(window);
function displayAllLocals(div,breaks) {
(breaks == true) ? breaks = "<br/>" : breaks = ", ";
for( var i = 0; i < locals.dat.length; i++) {
div.innerHTML += "<strong>"+i+": [&nbsp&nbsp</strong>" + "<u>" + locals.name[i] + "</u>, " + locals.dat[i] + "<strong>&nbsp&nbsp]</strong>" + breaks;
}
}
function store(winStore,dat) {
localStorage.setItem(winStore,dat);
}
function getDat(winStore) {
return localStorage.getItem(winStore).toString();
}
function getAllLocals(winStore) {
var datStore = [];
var datKeys = [];
for( var i = 0; i < 100; i++ ) {
var localKey = winStore.localStorage.key(i);
if(!localKey) {
return {dat: datStore, name: datKeys};
}
var grabbedDat = winStore.localStorage.getItem(localKey);
grabbedDat = grabbedDat.split("<br/>").join("\\n");
datStore.push(grabbedDat);
datKeys.push(localKey);
}
}
