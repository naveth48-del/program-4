function addNote(){
    let text=document.getElementById("note").value;
    if(text=="")return alert("enter a note");
    let note=document.createElement("div");
    note.className="note";
    note.innerHTML=
    "<span>"+text+"</span>"+
    '<button onclick="deleteNote(this)">delete</button>'+
    '<button onclick="editNote(this)">edit</button>';
    document.getElementById("notes").appendChild(note);
    document.getElementById("note").value="";
}
function editNote(btn){
    let span=btn.parentElement.queryselector("span");
    if(text)span.textContent=text;
}
function deleteNote(btn){
    btn.parentElement.remove();
}