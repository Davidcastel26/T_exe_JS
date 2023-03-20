function SolveGraph(graph, start, end, visited={}, queue=[]){

    // {
       
    // }
    
    if(!visited[start]){
        for(let i = 0; i< graph[start].length; i++){
            queue.push(graph[start][i])
        }
    }
    visited[start]= true;
    if(queue.length!=0){
        return queue[0] === end || SolveGraph(graph, queue.shift(), end, visited, queue)
    }else{
        return false;
    }

}

// complejidad termporal  O(n)
// complejidad espacial   O(n)

//preguntamos por A
//a partir de A recorremos los caminos
//si encontramos B, responder true
// sino, seguimos con los otros caminos hasta llegar a B o un punto muerto

/**
 * function SolveGraph(graph, start, end, visited={}){
 * if(visited[start]) return false;
    visited[start]= true
 
    for(let i =0; i< graph[start].length ;i++){
        if(end===graph[start][i]) return true;
        else if(SolveGraph(graph, graph[start][i],end,visited)) return true
    }

    return false;
}


//grafico
// a=>a  start=a return true   visited={a: 
        // a:['c']
        // c:['s','r']

*/