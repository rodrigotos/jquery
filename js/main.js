$(document).ready(function(){
  //attr
  //html
  //h
  console.log("jQuery Dom ready Event");
  var dom_ul = $("ul");
  var dom_lis = $("ul li");
  console.log(dom_ul);
  console.log(dom_lis);
  dom_ul.attr("class", "list-ordered");
  console.log(dom_lis[0]);
  $(dom_lis[0]).html(
    "<button class='btn btn-default'>Boton por defecto</button>");
  var first_button = $("ul li:first-child button");
  first_button.text("Mi primer boton");
  //first_button.width = "500px";
  first_button.width(500);
  first_button.css("padding",0);
  dom_lis.each(function(index, element){
    console.log(element);
  });
  var new_li_button = first_button.parent().clone();
  dom_ul.append(new_li_button);
  /*console.log(new_li_button.siblings());
  console.log(new_li_button.nextAll());
  console.log(new_li_button.next());
  console.log(new_li_button.prev());
  console.log(new_li_button.prevAll());
  console.log(new_li_button.find("button"));
  console.log(new_li_button.find("button").parets());
  */
  /*first_button.one("mouseover mouseleave", function(){
      first_button.parent().siblings().toggle(500);
  });*/

  first_button.on("mouseover mouseleave", function(){
      first_button.parent().siblings().toggle(500);
  });

  var google_link = $("a");
  google_link.on("click", function(eventObject){
    eventObject.preventDefault();
    eventObject.stopPropagation(); // Detiene la propagación del evento en una jerarquía
    google_link.hide(1000);
    google_link.show(2000);
    google_link.slideUp(2000).delay(2000);
    google_link.slideDown(4000).delay(4000);
  });
});

/*document.addEventListener("DOMContentLoaded", function(){
  console.log("Javascript Native Dom ready Event");
});
*/

console.log("Before Dom Ready");
