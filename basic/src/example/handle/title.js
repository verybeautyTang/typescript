function setTitle (title) {
  document && (document.title = title);
}

function getTitle () {
  return document.title ? document.title : 'my title';
}


let documentTitle = getTitle();