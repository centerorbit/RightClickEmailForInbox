var tabIndex=0;
function genericOnClick(info, tab) {
var to = JSON.stringify(info.linkUrl);
  to = to.slice(to.indexOf("mailto:")+7, to.length-1);

  if(to.indexOf("@")>0)
    window.open('https://inbox.google.com/u/0/?view=cm&to='+to,'_newtab'+tabIndex++);
}

// Create one test item for each context type.
var context = "link";
var title = "Open using Inbox";
var id = chrome.contextMenus.create({"title": title, "contexts":[context], "onclick": genericOnClick});