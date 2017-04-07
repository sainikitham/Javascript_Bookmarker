document.getElementById("myform").addEventListener("submit", savebookmark);
function savebookmark(e){
  e.preventDefault();
    var sitename = document.getElementById("siteName").value;
    var siteurl = document.getElementById("siteUrl").value;
    var bookmark =
    {
      name: sitename,
      url:siteurl
    }

    if (localStorage.getItem('bookmarks') === null) {
      var bookmarks = [];
      bookmarks.push(bookmark);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    else {
      var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      bookmarks.push(bookmark);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    fetchbookmarks();
  }
function fetchbookmarks()
{
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  document.getElementById("result").innerHTML = "";
  for(i=0; i< bookmarks.length; i++)
  {
     name = bookmarks[i].name;
     url = bookmarks[i].url;
     console.log(url);
     document.getElementById("result").innerHTML +="<div class='well'>"+name+'  <a class="btn btn-link" target="_blank" href="'+url+'">Visit</a>'+
     '  <input type="button" onclick="deletebookmark(\''+url+'\')" class="btn btn-danger" value="Delete">'+ "</div>";

  }
}
function deletebookmark(url) {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  for(i=0; i< bookmarks.length; i++)
  {
    if(bookmarks[i].url == url)
    {
      bookmarks.splice(i, 1);
    }
  }
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  fetchbookmarks();
}
