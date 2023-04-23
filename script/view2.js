function show_temp(){
    view5.style.display='none'
    const content=document.getElementById("weather_tbody")
    const date=[]
    const data_temp=[]
    document.getElementById("p1").innerHTML = "Temperature";
    content.innerHTML=""
          fetch("https://webapi19sa-1.course.tamk.cloud/v1/weather/temperature")
          .then(response=>response.json())
          .then(data=>{
              const sortedData = data.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
              
              sortedData.reverse()
              
              for(let i=0;i<sortedData.length;i++){
                  let skeleton="<tr class='row'>"
                  skeleton+="<td>"+parseInt(i+1)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(0,10)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(11,20)+"</td>"
                  skeleton+="<td>Temperature</td>"
                  skeleton+="<td>"+sortedData[i].temperature+"</td>"
                  skeleton+="</tr>"
                  content.innerHTML+=skeleton
                  date.push(sortedData[i].date_time)
                  data_temp.push(sortedData[i].temperature)
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
                    data:data_temp,
                    borderColor:'black',
                    backgroundColor:'#D27685',
                  }]
                }
              })
      })
      
  
  }
  
  function show_temp_24(){
    view5.style.display='none'
    const content=document.getElementById("weather_tbody")
    content.innerHTML=""
    const date=[]
    const data_temp=[]
    document.getElementById("p1").innerHTML = "Temperature in 24hr";
          fetch("https://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/23")
          .then(response=>response.json())
          .then(data=>{
              const sortedData = data.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
              
              sortedData.reverse()
              
              for(let i=0;i<sortedData.length;i++){
                  let skeleton="<tr class='row'>"
                  skeleton+="<td>"+parseInt(i+1)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(0,10)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(11,20)+"</td>"
                  skeleton+="<td>Temperature</td>"
                  skeleton+="<td>"+sortedData[i].temperature+"</td>"
                  skeleton+="</tr>"
                  content.innerHTML+=skeleton
                  date.push(sortedData[i].date_time)
                  data_temp.push(sortedData[i].temperature)
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
                    data:data_temp,
                    borderColor:'black',
                    backgroundColor:'#D27685',
                  }]
                }
              })
      })
      
  }
  
  function show_temp_48(){
    view5.style.display='none'
    const content=document.getElementById("weather_tbody")
    content.innerHTML=""
    const date=[]
    const data_temp=[]
    document.getElementById("p1").innerHTML = "Temperature in 48hr";
          fetch("https://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/47")
          .then(response=>response.json())
          .then(data=>{
              const sortedData = data.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
              
              sortedData.reverse()
              
              for(let i=0;i<sortedData.length;i++){
                  let skeleton="<tr class='row'>"
                  skeleton+="<td>"+parseInt(i+1)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(0,10)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(11,20)+"</td>"
                  skeleton+="<td>Temperature</td>"
                  skeleton+="<td>"+sortedData[i].temperature+"</td>"
                  skeleton+="</tr>"
                  content.innerHTML+=skeleton
                  date.push(sortedData[i].date_time)
                  data_temp.push(sortedData[i].temperature)
              }
         
              if(data_chart){
                data_chart.destroy()
              }
              if(myDiv){
                myDiv.style.display="block"
              }
  
              data_chart=new Chart("data_chart",{
                type:'bar',
                data:{
                  labels: date,
                  datasets:[{
                    data:data_temp,
                    borderColor:'black',
                    backgroundColor:'#D27685',
                  }]
                }
              })
      })
  
  }
  
  function show_temp_week(){
    view5.style.display='none'
    const content=document.getElementById("weather_tbody")
    content.innerHTML=""
    const date=[]
    const data_temp=[]
    document.getElementById("p1").innerHTML = "This week Temperature";
          fetch("https://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/167")
          .then(response=>response.json())
          .then(data=>{
              const sortedData = data.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
              
              sortedData.reverse()
              
              for(let i=0;i<30;i++){
                  let skeleton="<tr class='row'>"
                  skeleton+="<td>"+parseInt(i+1)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(0,10)+"</td>"
                  skeleton+="<td>"+sortedData[i].date_time.replace("T",", ").replace("Z","").slice(11,20)+"</td>"
                  skeleton+="<td>Temperature</td>"
                  skeleton+="<td>"+sortedData[i].temperature+"</td>"
                  skeleton+="</tr>"
                  content.innerHTML+=skeleton
                  date.push(sortedData[i].date_time)
                  data_temp.push(sortedData[i].temperature)
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
                    data:data_temp,
                    borderColor:'black',
                    backgroundColor:'#D27685',
                  }]
                }
              })
      })
  }
  
        
         