let answer = 0
let StartButton = document.getElementById("button");
let Input = document.getElementById("input");
let result = document.getElementById("result-area");
let ResultImg = document.getElementById("result-img");
let chance = 5
let ChanceArea = document.getElementById("chance-area");
let GameOver = false;
let ResetButton = document.getElementById("reset");
let userValueList = [];

StartButton.addEventListener("click",play);
ResetButton.addEventListener("click",reset);
Input.addEventListener("focus",focusInput);

function PickRandom(){
    answer = Math.floor(Math.random()*100+1);
    console.log("정답",answer);
}

function play(){
    const UserValue = Input.value;

if(UserValue<1 || UserValue>100){
    result.textContent = "1~100사이의 수를 입력해주세요";
    return;
}
 
if(userValueList.includes(UserValue)){
    result.textContent = "이미 입력한 수입니다.";
    return;
}
    chance --;
    ChanceArea.textContent = `기회:${chance}`;
    userValueList.push(UserValue);

if(UserValue<answer){
   result.textContent = "UP!!!";
}
else if(UserValue>answer){
    result.textContent = "DOWN!!!";
}
else{
    result.textContent = "정답!!!";
    ResultImg.src="https://i2.ruliweb.com/thumb/20/07/17/17358de63694d0772.jpg"
    GameOver = true;
}

if(chance == 0){
    result.textContent = "마셔!!!!!!!!!";
    ResultImg.src="https://pbs.twimg.com/media/D-JBz3lU0AAiwZE.jpg"
    GameOver = true;
}

if(GameOver == true){
    StartButton.disabled = true;
}
}

function focusInput(){
    Input.value = "";
}

function reset(){
    PickRandom();
    Input.value = "";
    result.textContent = "다시 Go!!!!"
    ResultImg.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRYWFRUYGBgZGRoZGBoZGBgZGBgYGBkaGhoYGBkcIS4lHB4rIRgZJjgmKy80NTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjEhJCE0NDQxNDE0MTE0NDQ0NDQ0NDE0MTQ0NDQ0NDQ0NDQ0NDQ0ND80PzQ0ND8xMTE/MTExP//AABEIAMEBBgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAD4QAAIBAgQDBQUHAwMDBQAAAAECAAMRBBIhMQVBUSJhcYGRBhMyobFCUmJywdHwFLLhFYLxI5KiFiQzNEP/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAjEQADAQACAwEAAQUAAAAAAAAAAQIRAyESMUEEURMiMmFx/9oADAMBAAIRAxEAPwB8N8KflX6SyV4b4E/Kv0lk52zqQogIhHvBoRLJGRWTM2gTHBjxpKHQi6RzGjzabRRRRRdMPGjiNNphGKOZVXfKvfsBzLHQAQpmMPj7moyUEuSxBNrknW1gBvNXh3sddVFY2UfYB182E2uDcNWld2ANVxdm5L+BegH7zRerpFq2ukVmF7ZnDgFBLZVGnL/MExWCBBtoOlhNR6sDd5N1RVTJzOOwLDbWYeIwzLrb/M7mqgMz8ThAeUebJ1BxrMgP3T0u2U+etpdSxZA5DzuD5neG4/hnd3zBxKZOz0l5aZGpaN6jigdQbfr4GW13FRRnvddUddHQ9bfaHUTl6FYob7qdx07xNalirgG9x1/eHtEs/g38DxUX93XID/Zf7DryYdD1E0MK4BKdACvTKeh5gH6icjXYOLc9x4+A/hmpwrhuLpshNFygvppcA7qNdtj/ALYrQyo6MR7y3CYV6iB0QspuARbcGxBBNwQdCJNMBVYkBGJU2PcYOx9B7xpOvRZGyupU72PftIxTFbmPGaKMYHw/wJ+VfpLLayGG+FPyr9JaTAwIa0aOYrRTCEmZBZOYw4EeIRCHQkohGMcwGFEoiimMPFFEZjEK1QKpY7AXMA9nsS2IqvUIypTNkXq5+0x6gfWLjj5aTm2oF/SaPsxhcmHQc2GdvFjf6WhfSGhazZz6Sl2MuKSthIM6EDteUMIW4EqZYujFEqqJCWlDtCBmfihOM4suV78j/CP51nc1kvOb4vgriX4nnsjaOarOJThsSUP4eY/Ud8liKdiZSByInSkcr9m3Tq6qw6gjyNzOuoccpPVOR2ObFI6gByci0wGsLaag6eOk8/wFTUoTvqp6HpHfEldNhckjkTpe/UaCbPgGz0PgvGcOVFNq+T/rVXtlf7bswHK2+xnTVsVScOoqMuaoHDEMb2UAjTW2lvKeK0avaZr2N7ne973vPROFYn3lNH5kC/jzk61MeezRxIAayvnFviIIPhrK7yMeIOQqbxRPFNoSrD/Cn5V+glkow57CflX6S0tM9Bo5ijXj3gaAxwJK0ip2knzX+Gw6sbHyX9TAMpbJKJIRIDYX37tpILMbMIxwI9o9oAEYiJK0Vt5jEY9o4Ee02mBcailCH2It5HeXYXi6EZV0tYAeGgtGrUw2jbTGxHB8rXQ252JJhxNDTq9HTDFQfEY2wJgWFclRfwjYimbd0TxWl96A8RxxwdBIU+JVX2vfuWXphUBufnsPHkIVRen9h0J6Bl+l439vwRJv6UrWrDdb+NpbRxWbQix6GWNiRtax+UEquH8eXUQOQ9oLJgHFEBQy9CRoddJTjG7DeEC9gfo4LFHtGDMwHjCcQO3brI08ISL8uv7Dn4zsl9HLXsGTe/TUeMLxaXAI+0L+BGh+VpS9MgnXlzFxLS/YH4Ty7xaH2Jo5UEsebLfzAF/pOk9kcWcpS+2o/acqjXI12H63m17MVAtU66EH6xbXQ0vs7m94pT/UL1iOJXrIMoTeNKHxK9YptAYFDHvlXwH0l64xyZVhqNkUnQZQT6RqLFhm2DaqOYXlfvIlKalEqvxRo0nFwHrBfyqXA7ieZhVPDM4LLVQgEABjkdifug6HymAoO5llHElWFjYggjb4hqNDob98h5NskuWmzdTFCkunxagnQkcrKeQksNVzEszEDmxmG6NY9q+trHRgeoFttNdpdh6zIRYbfzUc4ro6Z/V4rGjpKNakSNXb/tAh2GSk9wFde/N9OsI9ncPh8VTN6Yp1E0cJ2b32cW0sfqISnsrkYlKrHnlfW3gR9Inkzonk46MqtgyptmXuzEgny6yupQdRcgW6ggyPtbSIphKqstjdHXUZhqO15bGCcC4o1Sjlc2cKQKg2fo1uvUR5ptaHJb6Ls0WaZeB4iXrPSdbMCSpA0YA62A/lpqMCNwR4i0oyblj3jFoogZhTD4xxooq5FbNmtuV8swFx5QDh3FalUvlRhl1YCoHGxOiucx0U/DOjxmCFYFSBpYm9r5gQV9N/SD8N9mkVicq5je5FyLHUgX5RtlLsaZp+jQ4Omann0IY3UjYja4v5xYldCIbiGCgIuyiwgbaic/lr1HT49HJcUqVhUAQFV2DlLi/cDcd1yJmUMbiWYq7F+vvEDIB9R5Tu3wubleCf6Qu9paeRJdk6hv6c7Rx1UGxplu5LlfEBzdfIzbwVNityrqb6hh/mHUcCqnblv+kII9Itcm+gqf5BSpMA4i1kM03FpzXtJirKE+8dfBTr66TRPkxb6RhlA7sRtz8OnnJO4tpoo6dO79ozPZQtr31PTXf9pXWbl6+M6kvhytgmJcnuHSUU30K8jr5y9lLMFW5J00F/SQZUCXsxYnQ7KADyHO+olETZFE0/3W9f+IbgCVe4PKD0Ph/3p9Gl1Fu0PG0FLQz7Nj+of7xjGs/3jEqyxKUniKaVe8c8zFDFoxTYgE8SL00T75RT+UDM3yBHnLmED4oxUUCOhPyQfSQfHA2Py5yF7Rz826XVdoDVqEa3tb9xCXxWZddvKB6MSbHQfrffygnr2Sl4+ze4ZQOJqpSprZ2QsHL6bFjmvtossxHC8TnqoiFzSYq+S51AvfwmNTrOgVw2UlbDkRpyIhGG4xWpuzI7KW+Ig/F49YUpftB8kw/gfHnwVbO6OQVKMuq3zZSLEi1wR9Z3mB9v8FUIVmemx5OpI171vOMwHtpiFUJUCVVG2dAT03HSFcS4lRxFJVNFEYPfOiEdm1iLjnqYr45foM8nj0j0Q18NiVyB6dRTuuYG/TTcTJxfsbS3oXpX1IW5v4BtJ57heFUWvmqINQF11HjvYzTq0sXRW1LEvkuLH3mbX7Nla5tN/Ra9F55X7KPajCHCVKVQA2cNlYi7I6jKyX7wSR59JnU/adwey7A997fPSW8a4zi8TS/p8QiEKyutRUIbS4Hcbgmc43DzY9rXlp/mU8J++x1zNPdOz4bi3qKXcgksdgAR4gaSHGuINRQZFzO5CoOWY8z3ATkuFY5qFVb/AAk5WHcf23mlxyspxNPX4UYjp8LWt1JP0hUj+fktOr4NS93TVGOd/idz9pzqT4cvKFNjwtwJlvistgOg+kzsY75lYC6ka9fEfLSR/wAmzpl4jeesH2MpzFRrOdSnVJZkrHNe6g2y25KRbblNWliXZRnSzcwNRfxG4mc4Oq02Ue1rGQd4JTcjSWZ4uBbJs8rZ5F3kVEDQmkKrzjOKOXxGQHmq+Q7TE/P0nW4t7Azg2xFqjP3vbxIyzp4J+keauhO3bPcfQAXldSpYXkVqXYnrf5yvENtOj6crZJagClbdprEm7CwH2bXs19PC0pyExmcXNhaOrX326bXHS42hBpZScWt+JSf9oN/qPWTpHU+N5p8W4n/UshFJEyKEQKAxN9AGNhmCgEgkeN5nlbPa2XtAWtyI689YN1DJdnSUKVwD3QhKe0fBjQg7qbHv0BB9D8oSEkdKMqCRS8LFNoADitG9Km33ct/BlA+uWYaKSw7511JAyBSAQVAN+hGswcTw6tSbMis6A/EupF+TDn4xPhLmin3IO2FYb6CFYNVBP+NfGBPiibA3Bk0qSdJ+jipVvZoHEgbgW8BeTw9AVXCIgLMbAWsNrnwGkxnedTwBRQGdzZ3WwG5ROd/xG0GZ7H4+J08QDieD1UF2w7EdVBZfVZkVKljqFXuZTf8A853/AA7FsqOHq5xdnUrdQqbBF8LeZJmlgHVkZHVHPZ0dVa/YQMSSL/EGhlp1iOl/nS9HlTV3JHa05AWUeigCX08Q4BGYka6Xva+9unOeg4jg+Acm9BEJJGamSmt7bDTbWBP7I4djanWqoddGCuthzB0Npdp/AOKXo5TD4hlUlmNm5E6ad0OTIyZ8txrsSPTzm7W9k6lgEek9tLElTp3MLfOBviFT/psi9i6nbQgm/dIXVSR5PKfSOfxWGpOl7EODprvz/SQcoSocEPlsrrodud9DvbbnDcaqsxKDKGsAOQ01PreZnEqGa1rkL0NifONN77Hi39NluJ07gOSh0AJHY8cw/WGf6tTAyDwBIFj+IX5ba985KnjuTrmt9/X1BFj5ybKriwIDHYAZdF1tcC19TYX5HujTHZ1R+h72dfhsWpNmVR3gW/7v3miotynAYCsyML3INxY3Ntd52PCMWHQqfiTx1U7b+cS4z0d01NT5IIcaxgZKsbSkGIhWSYxFrCRIlVR9IQaC499DOCxIszD8RnbYk3vOS4nSs1+R+ol+F4Q5e0CUjr5RYja8Smxk3W4nQc2EETS8hU7pYmoI5iMRpMbDQ4MaVmFV7XAyi2lw1yb8ja4HW8KxFWnmQUhcA5nNrZmvcWa/e1zYbzGppeH4dNDYXN7W7zziUPKOp4cAUzg3z9o6WsdreAtCrQLg9ZMgp2Kuo1VhYkc2HUX6TRyyDKEVWKSAihMPgkLKgH3V16Cw1heJYIuVf+Y+AQpSQtbMVW9uWgsO+CVnLMYq7Z0THQFWoB9XAsNyQL+F5i4kpmsq6HlfX1m1jqgC25/IfvMjDUszljy+scFRL9otw9JUGZEAbkWYvbvA2vJ00YMWdixOpuISdBK2JgqExZhSsSLaeMF1Glh6dwt4zSo48g3mFVOwP3hCMPVpqhBp5muSGDFRr3jpNMqfQHxnTU+IA2uBCsPiVF7bnx/WcjhwxN8xAvtcn5nUzWp4hV3NrQumjLiZp1uKGmHte7XyePW3QXvObcaE7zVqClVYEBzYWLIQNbghe0QDzlq4WgFPZqF+RZ1It3gDfw9Zz35Uzj5op1iRz1LDFjmCEkcguvoJRUpsNWQqOp7A7tW0+c6hECgACwkMTQSojo4urixH6+MaYX0P9Drs4/EU01ZrKAPvC1+48/K8xnqG/ZJtcEDlcaZrdeQ5zUSi2FZ6Tqrqe0jMqkMtrXFwctr67SunWRfhRb928vK8SvH+ZvvS/AcNuoZywJJKqMtz4m1zsNL6Tp+F8JZRnDkE8iLi3fY6GY2BJdgzDWwCjXlzM6LB125mJbOxeMrxRJ1a9m5RgkuqkNtvBla28jhiwpaB4lrQu5g1almEKQGZ1Q6TE4jSuDNrE6TIq9o2lJeMm1pgOtr90sRtJq4zBhrciBv+h7oK/B6qgHLcbgg308JfzX0hUNFbYFrBl1vvblrpf+c5BMI5JFtvL5842Z0NrlfAyJr5tHLHz/SNouYW51QWBDORqRqADyHf3zV4WXVBkUXOudiTv9nKN9tiZksEXYMT+L9uUnSxWSzc+Y5d0V9jLEdHiw4XO9RAU7SjJkNx0bMfDaaOAxPvEVyLE7i9wCDY2PMaTkEqI5v2SzG5d79m+tlHId+86vg4PukJFr3PkSSJOliGTDgIogI8UOsuOJGRB+Ff7RBKrHqLeUqRAUXN91foINWoldQbjxP0hUnRNYgfFvfwhPD8L2b9df2gSqXa3IQ9cSFNoUCnoT7nQSo0AT/OUj/VC2/OVNX3/m8wNLamHBKi22vnp+8pdFEqxHFES+c2vse63IeU5/H8ZLk5Bp1P6CFS2LVpezcbFG4VdSdANLkzRw/CCe1VdifuqbAeLDX0nnzuW1JJ/nLpN3hXtRVpjLUHvE7z2x4MdG8/WM4eE3z70dylMKAFAAGwGwjwXh+PSuoambjYg6Mp6ML7wq0g1nQR49pER7wGKsZTDKbgEgaabdbeMxP6MAkgD0E32FwR3TKV7i0dNjSLDoNIbSEFXSTXEWEWmURo06a8t4z0xKqdS1jGevFSC2WqokGItKDiJH3l4AAuOwxc9mAnh7IMxm6plTvm05Q6YyMPhC7jTsjc8vCbaLYEBd9CeQBO3+JKkOU57/1EwxGTIuTP7v7We+YANva9+VtucKXkK2l7APaLh3ugHHws1rcwSDz6bznrgbzuPbin/wC3BHJ1v5gj9Zwm86ePuSHL0y0Yhtr/AL+sYG8i62iVpQk2FIV21B5nS1ugHWdpwfDNTTKSPiJFunK/fOEU30E6PA8WqFVQvSVtruHJ001C6fOSudKS+jqBFB8A7lAXtm11AKgi5sQCecUjg+lNOqMii/2V+glOIxQ2GsHAORT3D6SGcKC76Kvr3WjlPhXiceEFgAG3PcOsxf8AWGB0F/P6QLG4lqjE7AnQch+575TaVUohXI96NN+MudlUeZlVXiNRlJzW2+HSAmS5GN4on5sqLefjrHMYxoQaSBk+srk7zANr2Y4h7mrZjZHsrdxv2W9frPQWnkoeejcBrM2Gps5+zuSNgbC58h6SPJP0rx18ZqGNeVU8QjkBXRj0VlJ+RljCwJOg6nQDzMl4lNRJZgYLCu1POhu2eoCpNrgOQMp626wzE+0GHQgF856IC/qw0+cw8L7QGkhRUBszm7E65nLAADxjKXgFQa+KKnK4Kt0Isf8APlKjX6TYr4llw3vsTQCi6gIGDsQ2gJuLJ533nM4PEl6uQhVDDMMpzW0va99/HWLhdPUatLFN1hFV9N5n1AyHa/yiGIJG0XDMKWpL0qgC5gS6mEUaXWDAjtVZzZdBC6CaSYUAaSdNYA+y+mI64OlnFQ00zgWDZRm5a36/vJUknLvxeqazVUc5EYKEubOtxdco5kXN4VvweY8jb9ocPnoVV55Sw8V1E8zQXAnq9Zw63XVXW47wwvPPuJcPC1HCbDtWHUgEqOut5birFhHl423qM4Lm0Jt3ysoRCigP82g7qRpL6crkem1iIS6syXGyk+hO8EKd+vMdJp0KgFHLqXY220Audzzi0GUEYPG16Chre8pv8NzfKw3AvqPCKadKqFpU0B0A1d7oGOtwoOp33tbaKT1jhGYZFHMhfpOc47jcxCL8K/Ntr+Qv6wuvi8qXvrYAek5x2uY0ya66wZRJGMI8qznbHjrz8IwEkkwpQRtHiiJmGHkSY5EYTAJQgYlyoTM2UbKSco8BtB5NDMMmEs9gOsi9csMrMzDozMwv1sTKmaMDBhmy4NNb2fwwqYtAwuFJc8/gsRfzImKZ0nsncVnYDoPI6/t8onI8kfiW0d9iaSOhRwGVhZgdj58pylbhVHDuHTOdbatmCg6HS3fOnepYTn+MLmR9NhfnfTpbWcyr4dqRXVW5gzU5HhOJLpZviW4vzIGx9IaUuIzA1hRTOsKpGUhbGX0zFYC9BCaIlSLCkWwijIsbW47iPUWnHn2fxKMFTKVDZlqZgLW2JvqCNDbrOvQwXEY9EUkkac/4dYU8KTTXSKsZWFCgoJLMFCg8y3UjfrMvgnDmdjUa+516k3FgCBtzB026SFLPiaov8Ki+wYLyIY3sr9BynVUKYVQo2AsIKrB8xf8ATnsfwJX1tY9R+3OYGJ4K6G+XOoN9Br5r+onoyoCZI4W9plzNEa4kzy3A8Neo4vog3O23Lvm9U4IjEFHameWWzD0bb1mx7Q4anSRqhurfhsAelxzvbxnKLxsncenXvlpqq7RzUlLw06XAkuTUqO9/BdetwdYoGMYx2sYo+ULphY6vcAcgB9IEoizXEenKpYiNVrHtpEI8eEUaTWREkomCUvuZGO51jTAFePaNFeYw8kkgJNZjDkx7SJj3mCSvO89lqoWjawDZ3zG2p1G5nD4NM1RB1dB/5CdfwRtag6O/90jzPrC/DP06OvUvtM7FoGVh1BHP9NYVvIe7FjOVPs6vRy3Cms7Adb89j46+s6BRMh1CYlb7Mbbk6PqD3a3Fp0C0tI9MNAr05FBqIZklYTXwg0XC+jvLqtSwtKEuNpRisStNczHU6Acydf2gCpbJYnE5Vuxsu2nMnlpMdc9dgACFU2Niy5CLi97avr5R8NhHxDZ3uFsARa1/yEHQfi5zoMPh1RQqiwGgE1NIuslf7J4ZAgyqNPMk95J3MJ95sLG520ipqIXTtpJPWKNSB5woEWv0jKZl+0WP91QcggNlNvE6D5maZ8qSBVJLThvbHi4r1Sim6IT4FxofIDTxJnOgxiddd+caejE+Kw826dPQilXYbExSgGKODSldhJjeQXYSxRCIIRRCKAxKOu8iJJZglDRo7RpgCiiAjzGGlg5yMlMYUYxiY5mCGcGW+IpD8a/LWdVwIa1Pzt9Zzfs4t8TT7iT6CdNwMf8Ayfnf+6c/MdHB6NkGSWMFk0Gk5mdOGRx/CEoHF+z8QBA0uO1r0IHleGcLxgqIDcZh8QuN+o6jvmgVvoZzuK4e9Fw9Aaa9nSyi9yoFtjbbrtGT1YOsaw3ysfKLWH+ZhHjlVbA0e0Re2VxcHY2vpbmJSKmKr72RToRYgEDmVOtz1vN4hU6aOP4mlLQWZrkWuQAbXsTlPoO+BYXhz1jnrXtpdSE7VttQOyLW08Ybw7hCpYsczW1JuRe99AZqhIHSXSG1T0iFOkBYAWAGwl6pHVdZK8nonsdVhKDaUot4Wi7TNhwms4H2+x18lMcznbwGij6nync4l8oIvy+U8g4xi/e1ne+hNl/Kug+l/OX4J2tIc9YsAjGJj3kTO04tJLFHSPMDSgbCWLFFCYUUUUBhxJCKKExS0jFFAAUeKKYI4koopgEJJo8Uwfhp+zP/ANmn5/SdJwPep+dv7oopz8306eH0bg3k0iinKdKLRJ81/NFFCglntL/+Hgf0gicooo3wpPosO8kNoopJik1jjaNFMYvpQkbCKKAIFxX4X/I30M8dGw8BFFOv8/05P0fBRjFFOo5Cax4opgH/2Q=="
    GameOver = false;
    StartButton.disabled = false;
    chance = 5;
    ChanceArea.textContent = `기회:${chance}`;
    userValueList = [];
}
    
PickRandom();