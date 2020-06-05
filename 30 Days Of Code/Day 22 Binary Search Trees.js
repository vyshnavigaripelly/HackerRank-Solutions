this.getHeight = function (root) {

    if (root == undefined) {
        return -1;
    }
    // get the max of the between left and right
    let max = Math.max(this.getHeight(root.left), this.getHeight(root.right));

    return 1 + max;

};