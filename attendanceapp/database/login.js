$(function(e){
    $(document).on("keyup",'input',function(e){
        let un=$("#txtUsername").val();
        let pw=$("#txtPassword").val();
        if(un.trim()!==""&& pw.trim()!=="")
        {
            $("#btnLogin").removeClass("inactivecolor");
            $("#btnLogin").addClass("activecolor");
        }
        else{
            $("#btnLogin").removeClass("activecolor");
            $("#btnLogin").addClass("inactivecolor");
        }
    });
});
function tryLogin()
{
    let un=$("#txtUsername").val();
    let pw=$("#txtPassword").val();
    if(un.trim()!=="" && pw.trim()!=="")
    {
        alert("can connect")
    }
}
$(function(e){
    $($document).on("keyup","input",function(e){
    });
    $($document).on("click","#btnLogin",function(e){
        tryLogin();
    });
});