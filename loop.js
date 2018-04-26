  function loop(){
    var list = ['해물탕','찹쌀탕수육','돼지고기김치찜','기름떡볶이','닭볶음탕'];
    var i=0;
    while(i < list.length){
        document.write('<li><a href="'+i+1+'".html"'+list[i]+'</a></li><br />');
        i=i+1;
        }
  }