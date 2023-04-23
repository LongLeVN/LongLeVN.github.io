function show_speed(){
    view5.style.display='none'
    const content=document.getElementById("weather_tbody")
    const date=[]
    const data_speed=[]
    document.getElementById("p1").innerHTML = "Wind Speed";
    content.innerHTML=""
          fetch("https://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed")
          .then(response=>response.json())
          .then(data=>{
              const sortedData = data.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
              
              sortedData.reverse()
              
              for(let i=0;i<sortedData.length;i++){
                  let skeleton="<tr class='row'>"
                  skeleton+="<td>"+parseInt(i+1)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(0,10)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(11,20)+"</td>"
                  skeleton+="<td>Wind speed</td>"
                  skeleton+="<td>"+sortedData[i].wind_speed+"</td>"
                  skeleton+="</tr>"
                  content.innerHTML+=skeleton
                  date.push(sortedData[i].date_time)
                  data_speed.push(sortedData[i].wind_speed)
              }
  
              if(data_chart){
                data_chart.destroy()
              }
  
              if(myDiv){
                myDiv.style.display="block"
              }
              data_chart=new Chart('data_chart',{
                type:'bar',
                data:{
                  labels: date,
                  datasets:[{
                    data:data_speed,
                    borderColor:'black',
                    backgroundColor:'#408E91',
                  }]
                }
              })
      })
      
  }
  
  function show_speed_24(){
    view5.style.display='none'
    const content=document.getElementById("weather_tbody")
    const date=[]
    const data_speed=[]
    document.getElementById("p1").innerHTML = "Wind Speed in 24hr";
    content.innerHTML=""
          fetch("https://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/23")
          .then(response=>response.json())
          .then(data=>{
              const sortedData = data.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
              
              sortedData.reverse()
              
              for(let i=0;i<sortedData.length;i++){
                  let skeleton="<tr class='row'>"
                  skeleton+="<td>"+parseInt(i+1)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(0,10)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(11,20)+"</td>"
                  skeleton+="<td>Wind speed</td>"
                  skeleton+="<td>"+sortedData[i].wind_speed+"</td>"
                  skeleton+="</tr>"
                  content.innerHTML+=skeleton
                  date.push(sortedData[i].date_time)
                  data_speed.push(sortedData[i].wind_speed)
              }
              if(data_chart){
                data_chart.destroy()
              }
              if(myDiv){
                myDiv.style.display="block"
              }
              data_chart=new Chart('data_chart',{
                type:'bar',
                data:{
                  labels: date,
                  datasets:[{
                    data:data_speed,
                    borderColor:'black',
                    backgroundColor:'#408E91',
                  }]
                }
              })
      })
     
  }
  
  function show_speed_48(){
    view5.style.display='none'
    const content=document.getElementById("weather_tbody")
    const date=[]
    const data_speed=[]
    document.getElementById("p1").innerHTML = "Wind Speed in 48hr";
    content.innerHTML=""
          fetch("https://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/47")
          .then(response=>response.json())
          .then(data=>{
              const sortedData = data.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
              
              sortedData.reverse()
              
              for(let i=0;i<sortedData.length;i++){
                  let skeleton="<tr class='row'>"
                  skeleton+="<td>"+parseInt(i+1)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(0,10)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(11,20)+"</td>"
                  skeleton+="<td>Wind speed</td>"
                  skeleton+="<td>"+sortedData[i].wind_speed+"</td>"
                  skeleton+="</tr>"
                  content.innerHTML+=skeleton
                  date.push(sortedData[i].date_time)
                  data_speed.push(sortedData[i].wind_speed)
              }
              if(data_chart){
                data_chart.destroy()
              }
              if(myDiv){
                myDiv.style.display="block"
              }
              data_chart=new Chart('data_chart',{
                type:'bar',
                data:{
                  labels: date,
                  datasets:[{
                    data:data_speed,
                    borderColor:'black',
                    backgroundColor:'#408E91',
                  }]
                }
              })
      })
     
  }
  
  function show_speed_week(){
    view5.style.display='none'
    const content=document.getElementById("weather_tbody")
    const date=[]
    const data_speed=[]
    document.getElementById("p1").innerHTML = "This week Wind Speed";
    content.innerHTML=""
          fetch("https://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/167")
          .then(response=>response.json())
          .then(data=>{
              const sortedData = data.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
              
              sortedData.reverse()
              
              for(let i=0;i<30;i++){
                  let skeleton="<tr class='row'>"
                  skeleton+="<td>"+parseInt(i+1)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(0,10)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(11,20)+"</td>"
                  skeleton+="<td>Wind speed</td>"
                  skeleton+="<td>"+sortedData[i].wind_speed+"</td>"
                  skeleton+="</tr>"
                  content.innerHTML+=skeleton
                  date.push(sortedData[i].date_time)
                  data_speed.push(sortedData[i].wind_speed)
              }
              if(data_chart){
                data_chart.destroy()
              }
              if(myDiv){
                myDiv.style.display="block"
              }
              data_chart=new Chart('data_chart',{
                type:'bar',
                data:{
                  labels: date,
                  datasets:[{
                    data:data_speed,
                    borderColor:'black',
                    backgroundColor:'#408E91',
                  }]
                }
              })
      })
      
  }
  
        
         