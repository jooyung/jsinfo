/*
    JSInfo-03-03-007-URL objects
*/

const cc = console.log;
// -----------------------

let URL = require('url').URL;
let u1 = new URL ("/joy/home/main/mode?m1=2", "http://arbago.com");
let u2 = new URL ("http://arbago.com/joy/home/main");

// http://arbago.com/joy/home/main --> http://arbago.com/joy/home/branch
let u3 = new URL ("branch", u1);
// cc(u3.href);

// URL components
// https://abc.com:8888/reports/science/page?p1=v1&p2=v2#hash
// protocol, host (hostname port), pathname, search,    hash
// origin : protocol, host (hostname port)
// href : https://abc.com:8888/reports/science/page?p1=v1&p2=v2#hash
// cc (u1);

// URL components : searchParams
u3.searchParams.set('m', "인명 찾기??");
// cc(u3);

u3.searchParams.set('n', "화면: 질");
// cc(u3);
cc (u3.href);

// iteration
for (let [name, value] of u3.searchParams) {
    cc(`${name} = ${value}`);
}

/* Encoding */
// a space can be encoded by + , for historical reasons, but that’s an exception