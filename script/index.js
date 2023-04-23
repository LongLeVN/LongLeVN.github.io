function show_weather(){
    view5.style.display='none'
    document.getElementById("p1").innerHTML = "Weather Forecast";
    
    const content=document.getElementById("weather_tbody")
    content.innerHTML=""
        fetch("https://webapi19sa-1.course.tamk.cloud/v1/weather")
        .then(response=>response.json())
        .then(data=>{
            const sortedData = data.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
            
            sortedData.reverse()
            
            for(let i=0;i<30;i++){
                let skeleton="<tr class='row'>"
                skeleton+="<td>"+parseInt(i+1)+"</td>"
                skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(0,10)+"</td>"
                skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(11,20)+"</td>"
                skeleton+="<td>"+Object.keys(sortedData[i].data)[0].replace("_"," ")+"</td>"
                skeleton+="<td>"+sortedData[i].data[Object.keys(sortedData[i].data)[0]]+"</td>"
                skeleton+="</tr>"
                content.innerHTML+=skeleton
            }
    })

    if(data_chart){
        data_chart.destroy()
    }
    if(myDiv){
        myDiv.style.display="none"
    }
}

show_weather()