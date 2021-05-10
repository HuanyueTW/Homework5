import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Lock from '@material-ui/icons/Lock';
import $ from 'jquery'; 



const Img=()=>{
  var output=[];
  var dataUrl = "https://api.github.com/users/huanyueTW"; 
  var data = $.getJSON(dataUrl); 
  var imgurl = "";




  data.done( function( msg ) { 
	imgurl = data["responseJSON"]["avatar_url"];
    console.log(imgurl)
    $("body").append("<img src=" + imgurl + "\>")
    }); 

  output.push(
    <img src = {imgurl} width = "50" heigh = "50" />
    )
  return output;
 }

export default Img;
   