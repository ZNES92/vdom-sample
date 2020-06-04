




function create(tree = {}){
    let ele = document.getElementById("app");
    createDomElement(tree,ele);
}

function createDomElement(vNode,el){
    let link;
    if( checkIsDomElement(vNode) ){
        link = document.createElement(vNode.type);
        for( let i in vNode.attrs ){
            link.setAttribute(i, vNode.attrs[i]);
        }
    } else {
        link = document.createTextNode(vNode.text);
    }
    vNode.link = link;
    if( vNode.children ){
        for( let i = 0 ; i < vNode.children.length ; i ++ ){
            createDomElement(vNode.children[i],link);
        }
    }
    
    el.appendChild(link);
}

function checkIsDomElement(node={}){
    return node.text ? false : true;
}