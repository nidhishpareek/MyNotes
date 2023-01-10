function toggler(...options) {
    var index=0;
    return ()=>{
        console.log(options[index]);
        index++; index%=options.length
    }
}

const toggle = toggler(1,2,3)

toggle()
toggle()
toggle()
toggle()
toggle()
toggle()
toggle()