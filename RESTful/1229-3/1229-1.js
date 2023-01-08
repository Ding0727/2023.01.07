$(function(){
    $("button").on("click",loadServerData);
});

function loadServerData(){
    //讓這個變數是這個網址
    let rss2json = "https://api.rss2json.com/v1/api.json?rss_url=";
    $.getJSON(rss2json+"https://www.mohw.gov.tw/rss-16-1.html")
    .done(function(data){
        for(let x=0; x<data.items.length;x++){
            let thisRow = `<tr>`;
            thisRow += `<td><a target='_blank' href='${data.items[x].link}'>${data.items[x].title}</a></td><td>`;
            thisRow += `<td>${data.items[x].pubDate.split(" ")[0]}</td>`;
            thisRow +=`</tr>`;

            $("#dataTable").append(thisRow);
        }
    })
    .fail(function(){console.log("ERROR");})
    .always(function(){console.log("Always");});
}