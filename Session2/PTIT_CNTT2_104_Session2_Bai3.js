const typeConsole =(type="log")=>{
    console[type](`Day la type:${type}`);
}
typeConsole();
typeConsole("warn");
typeConsole("error");