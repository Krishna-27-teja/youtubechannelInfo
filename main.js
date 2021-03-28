
let key="AIzaSyAqZJtQrlTXjNfEn8hsQNxSyZnaBxw7PJs";

let helper=()=>{
    let key="AIzaSyAqZJtQrlTXjNfEn8hsQNxSyZnaBxw7PJs";
    let name=document.getElementById('channel').value;
    fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=${name}&key=${key}`)
    .then(response=>{
        return response.json();
    }).then(data=>{
        console.log(data);
        let display_data=document.getElementById('channelInformation');
        display_data.innerHTML='Title:<br/>'+data["items"][0].snippet.title;
        let line1_data=document.getElementById('line1')
        line1_data.innerHTML='Description:<br/>'+data["items"][0].snippet.description;
        let line2_data=document.getElementById('line2')
        line2_data.innerHTML='HiddenSubscriberCount:<br/>'+data["items"][0].statistics.hiddenSubscriberCount;
        let line3_data=document.getElementById('line3')
        line3_data.innerHTML='SubscriberCount:<br/>'+data["items"][0].statistics.subscriberCount;
        let line4_data=document.getElementById('line4')
        line4_data.innerHTML='VideoCount:<br/>'+data["items"][0].statistics.videoCount;
        let line5_data=document.getElementById('line5')
        line5_data.innerHTML='ViewCount:<br/>'+data["items"][0].statistics.viewCount;
    })

}