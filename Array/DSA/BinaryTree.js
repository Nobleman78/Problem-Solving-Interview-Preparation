class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    insert(data) {
        const newNode = new Node(data)
        if (!this.root) {
            this.root = newNode
            return
        }
        let curr = this.root
        while (true) {
            if (data < curr.data) {
                if (!curr.left) {
                    curr.left = newNode;
                    break;
                }
                curr = curr.left;
            } else {
                if (!curr.right) {
                    curr.right = newNode;
                    break;
                }
                curr = curr.right;
            }
        }
    }
    /*Search from binary tree*/
    search(value) {
        let curr = this.root
        while (curr !== null) {
            if (curr.data === value) {
                return curr

            }
            if (value < curr.data) {
                curr = curr.left

            }
            if (value > curr.data) {
                curr = curr.right
            }
        }
        return null


    }

    /*Delete from Binary tree*/
    delete(data) {
        function findMin(node) {
            if (node !== null) {
                node = node.left
            }
            return node

        }
        function DeleteNode(current, data) {
            if (!current) {
                return null
            }
            if (data < current.data) {
                current.left = DeleteNode(current.left, data)
            }
            if (data > current.data) {
                current.right = DeleteNode(current.right, data)
            }
            else {
                if (!current.left && !current.right) {
                    return null
                }
                if (!current.left) {
                    return current.right;
                }
                if (!current.right) {
                    return current.left
                }
                let remain = findMin(current.right)
                current.data = remain.data
                current.right = DeleteNode(current.right, remain.data)
                console.log(`{${data}}`)

            }
            return current

        }
        this.root = DeleteNode(this.root, data)
    }

    /* left->root->right*/
    inorderTraversal(node = this.root, result = []) {
        if (node !== null) {
            this.inorderTraversal(node.left, result);
            result.push(node.data);
            this.inorderTraversal(node.right, result);
        }
        return result;
    }
    /*root->left->right*/
    preorderTraversal(node = this.root, result = []) {
        if (node !== null) {
            result.push(node.data);
            this.preorderTraversal(node.left, result);
            this.preorderTraversal(node.right, result);
        }
        return result;
    }
    /*left->right->root*/
    postorderTraversal(node = this.root, result = []) {
        if (node !== null) {
            this.postorderTraversal(node.left, result);
            this.postorderTraversal(node.right, result);
            result.push(node.data);
        }
        return result;
    }
}

const tree = new BinaryTree();
tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(5);
tree.insert(15);
tree.insert(25);
tree.insert(35);
tree.delete(35)
tree.search(10)
let value = tree.search(10);
if (value) {
    console.log("Value Found:", value.data);
} else {
    console.log("Value Not found.");
}



console.log('Tree elements In-order:', tree.inorderTraversal());
console.log('Tree elements Pre-order:', tree.preorderTraversal());
console.log('Tree elements Post-order:', tree.postorderTraversal());

