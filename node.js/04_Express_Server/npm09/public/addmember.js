document.getElementById('join').addEventListener('submit', async(e) =>{
    e.preventDefault(); // submit 일시 정지
    const id    = e.target.id.value;    
    const pw    = e.target.pw.value;
    const name  = e.target.name.value;    
    const phone = e.target.phone.value;    
    const email = e.target.email.value;    
    if(!id)   { return alert('아이디를 입력하세요');  }
    if(!pw)   { return alert('비밀번호를 입력하세요'); }
    if(!name) { return alert('이름을 입력하세요');   }
    if(!phone){ return alert('전화번호를 입력하세요'); }
    if(!email){ return alert('이메일을 입력하세요');  }

    try {
        await axios.post('/members/addmember', {id, pw, name, phone, email});
        location.href='/';
    } catch (err) {
        console.error(err);
    }
    e.target.id.value   ='';
    e.target.pw.value   ='';
    e.target.name.value ='';
    e.target.phone.value='';
    e.target.email.value='';
});
