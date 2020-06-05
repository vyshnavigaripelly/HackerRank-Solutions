this.levelOrder = function (root) {
    let q = [];
    let dataArr = [];
    q.push(root);
    while (q.length > 0) {
        let getdata = q.shift();
        dataArr.push(getdata.data)
        if (getdata.left) {
            q.push(getdata.left)
        }
        if (getdata.right) {
            q.push(getdata.right);
        }

    }
    console.log(dataArr.join(" "));

}; 