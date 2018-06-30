// selectors for comments
var selectors = ['.Ct', '.comment-renderer-text-content', 'yt-formatted-string.content-text'];

// builds a string with random herps and derps
var derpString = function() {
  var randomLength = Math.floor(Math.random()*20)+1;
  var returnString = '';

  for (x=0; x<=randomLength; x++) {
    returnString += (Math.floor(Math.random()*2) ? 'herp ' : 'derp ');
  }
  
  return returnString;
}

// derps a comment
var derpComment = function(comment) {
    // indicate that this comment is derped
    comment.derped = true;

    // preserve the original contents
    comment.derpOriginal = comment.innerHTML;

    // revert to the original when clicked
    comment.onclick = function() {
      // invert derp value
      comment.derped = !comment.derped;

      // change contents to either a new random derp string or the original comment
      comment.innerHTML = comment.derped ? derpString() : comment.derpOriginal;
    };
    
    // add derped class
    comment.classList.add('derped');

    // change the contents
    comment.innerHTML = derpString();
}

// build the full selector string
var derpSelectorString = selectors.map(function(sel) {
  return sel + ':not(.derped)';
}).join(", ");

// every 100 milliseconds, derp any un-derped elements
setInterval(function() {
  document.querySelectorAll(derpSelectorString).forEach(derpComment);
}, 100);
