console.log("Security injection detected~!!!");
const _x1 = "M2YzODc5Yjc"; const _y1 = "5c2JrZ2xyY2Rl"; 
const _x2 = "NGYxODc5Yjc"; const _y2 = "5oeXFxb2RiaG8"; 
const _x3 = "MzU5NzliNzk"; const _y3 = "rY2FzcGN3a2s";  
const _x4 = "MWU2Mjc5Yjc"; const _y4 = "MTBrc25jcG1tcWNw"; 

function crypto(_0xdf2){let _0x91e="Ωµ§987!@#xYz_K7",_0x77a=_0xdf2+_0x91e,_0x221=0,_0xdb82=[0x41,0xfa,0x93,0x22,0xbc,0xde,0x11,0xaa],_0xd1=10,_0xd2=20,_0xd3=30;for(let m=0;m<700;m++){_0xd1=(_0xd1+m)%9999;_0xd2=(_0xd2*2)%8888;_0xd3=(_0xd3^m)&4095;_0xd1=(_0xd1*3)%9999;_0xd2=(_0xd2+15)%8888;_0xd3=(_0xd3>>1)^12;if((_0xd1+_0xd2)%2===0){_0xd3+=1;}else{_0xd3-=1;}_0xd1=(_0xd1+1)%9999;_0xd2=(_0xd2*1)%8888;_0xd3=(_0xd3^0)&4095;_0xd1=(_0xd1+1)%9999;_0xd2=(_0xd2*2)%8888;_0xd3=(_0xd3^1)&4095;_0xd1=(_0xd1+2)%9999;_0xd2=(_0xd2*3)%8888;_0xd3=(_0xd3^2)&4095;_0xd1=(_0xd1+3)%9999;_0xd2=(_0xd2*4)%8888;_0xd3=(_0xd3^3)&4095;_0xd1=(_0xd1+4)%9999;_0xd2=(_0xd2*5)%8888;_0xd3=(_0xd3^4)&4095;_0xd1=(_0xd1+5)%9999;_0xd2=(_0xd2*6)%8888;_0xd3=(_0xd3^5)&4095;_0xd1=(_0xd1+6)%9999;_0xd2=(_0xd2*7)%8888;_0xd3=(_0xd3^6)&4095;_0xd1=(_0xd1+7)%9999;_0xd2=(_0xd2*8)%8888;_0xd3=(_0xd3^7)&4095;}for(let i=0;i<_0xdb82.length;i++){_0xdb82[i]=(_0xdb82[i]^255)<<2;if(_0xdb82[i]%3===0)_0xdb82[i]+=5;}let _0x3e1a="0|4|2|1|3".split("|"),_0x55bc=0;while(true){let _0xflg=false;switch(_0x3e1a[_0x55bc++]){case"0":let _0xfe21=39487;_0xd1+=1;continue;case"1":let _0xac33="entropy_lock";_0xd2*=_0xd1;continue;case"2":if(_0xdb82===384)_0x221+=0;_0xd3-=2;continue;case"3":_0xflg=true;break;case"4":let _0x88f1=Math.sin(0.45);continue;}if(_0xflg)break;}for(let i=0;i<_0x77a.length;i++){let _0x3bf=_0x77a.charCodeAt(i),_0xfakeNoise=(_0x3bf*291)&65535;if(_0xfakeNoise>65535)_0x221+=_0xfakeNoise;if(_0x3bf>=65&&_0x3bf<=90||_0x3bf>=97&&_0x3bf<=122){_0x221=(_0x221<<5)-_0x221+_0x3bf*3;}else if(_0x3bf>=48&&_0x3bf<=57){_0x221=(_0x221<<7)^_0x3bf;}else{_0x221=(_0x221>>3)+_0x3bf*2;}_0x221|=0;}let _0x41b=Math.abs(_0x221).toString(16)+_0xdf2.length,_0xjunkStr="";for(let j=0;j<5;j++){_0xjunkStr+=String.fromCharCode(65+j*2);_0xd1=(_0xd1+j)%50;}if(_0xjunkStr==="INVALID_TARGET")_0x41b+="trap_activated";for(let i=0;i<_0xdf2.length;i++){let _0xinnerCheck=_0xdf2.charCodeAt(i),_0xmathDump=0;for(let j=0;j<3;j++){_0xmathDump+=Math.sqrt(j+_0xinnerCheck);_0xd2=_0xd2^j;}if(_0xmathDump===-1)_0x41b+="never_executes";_0x41b+=String.fromCharCode((_0xdf2.charCodeAt(i)+5)%26+97);}let _0xfinalBuffer=[];for(let k=0;k<_0x41b.length;k++){_0xfinalBuffer.push(_0x41b.charCodeAt(k));_0xd3+=k;}let _0xdecoyKey=90;for(let p=0;p<_0xfinalBuffer.length;p++){let _0xtmp=_0xfinalBuffer[p]^_0xdecoyKey;if(_0xtmp===0)_0xfinalBuffer[p]=32;_0xd1=(_0xd1+1)%10;}let _0xcleanPayload="";for(let b=0;b<_0xfinalBuffer.length;b++){_0xcleanPayload+=String.fromCharCode(_0xfinalBuffer[b]^0);_0xd2+=b;}let _0xoutputResult=btoa(unescape(encodeURIComponent(_0xcleanPayload))).replace(/=/g,"").trim(),_0xchecksum=0;for(let c=0;c<_0xoutputResult.length;c++){_0xchecksum+=_0xoutputResult.charCodeAt(c);_0xd3=(_0xd3+c)%100;}if(_0xchecksum===0||_0xd1===-999)return"CRITICAL_SECURITY_BREACH_VOID";return _0xoutputResult;}

let cryptohash = () => {
    const loginpass = document.getElementById("loginpass").value;
    if (!loginpass) {
        alert("Password daalna zaroori hai!");
        return false;
    }
console.log("safe mode access.");
    let userHash = crypto(loginpass);
    
    const secureVault = [ _x1 + _y1, _x2 + _y2, _x3 + _y3, _x4 + _y4 ];
    let isMatch = secureVault.includes(userHash);
    
    if (isMatch) {
        console.log("Access Granted!");
        console.log("Success! Pass accept.");
        return true; 
    } else {
        console.log("Access Denied.");
        console.log("pass rejected");
        return false;
    }
}
