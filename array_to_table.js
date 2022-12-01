button.addEventListener('click', addOnClick)
function addOnClick(){
    var  myarray=[
        {name:'Bill Gates', id:1,Company:'Microsoft' },
        {name:'Elon Musk', id:2,Company:'Tesla-SpaceX'},
        {name:'Jeff Bezos', id:3,Company:'Amazon'},
        {name:'Mukesh Ambani', id:4,Company:'Jio Reliance'},
        {name:'Michel Dell', id:5,Company:'Dell Technologies'},
        {name:'Mark Auckerberg', id:6,Company:'Facebook'},
    ]
    var html = "<table border = '5'>"
    setTimeout(() =>{
        html += '<thead>';
            html += '<tr>';
            html += '<td>' + 'ID' + '</td>';
            html += '<td>' +'Name' + '</td>';
            html += '<td>' + 'Company' + '</td>';
            html += '</tr>';
            html += '</thead>';
        for( var i=0; i<myarray.length ; i=i+1)
        {
            html += '<tr>';
            html += '<td>' + myarray[i].id + '</td>';
            html += '<td>' + myarray[i].name + '</td>';
            html += '<td>' + myarray[i].Company +'</td>';
            html += '</tr>';
        }
        document.getElementById('table').innerHTML = html;
    },500);
}
addOnClick();