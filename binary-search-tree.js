class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // initializing the node variable to hold the root 
    let node = this.root;
    // initializing the current variable to be used to traverse through the BST
    let current;
    // if no node assign the root a new node value
    if (!node) this.root = new Node(val);

    // While there is a node value
    while (node) {
      // current is equal to the node
      current = node;
      // if the val from the parameters is less than the node val
      if (val < node.val) {
        // switch to the left side of the BST
        node = node.left;
        // if there is no node then insert the value
        if (!node) current.left = new Node(val);
      } else {
        // switch to the right side of the BST
        node = node.right;
        // if there is no node then insert the value
        if (!node) current.right = new Node(val);
      }
    }
    // return the BST
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    // if no node, assign the this.root a new node val and return BST
    if (!node) {
      this.root = new Node(val);
      return this;
    }

    // if the val is less than the node.val 
    if (val < node.val) {
      // if there is node.left then run the method within itself
      if (node.left) this.insertRecursively(val, node.left);
      // if there is no node.left then insert the new node val on the left
      else node.left = new Node(val);
    } else {
      // if there is node.right then run the method within itself
      if (node.right) this.insertRecursively(val, node.right);
      // if there is no node.right then insert the new node val on the right
      else node.right = new Node(val);
    }
    // return the BST
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    // initializing the node variable to hold the root 
    let node = this.root;
    // if no node return
    if (!node) return;

    // while there is a node
    while (node) {
      // if val is less than the node.val
      if (val < node.val) {
        // assign the node to the node.left to continue search on the left side
        node = node.left;
        // if the val is greater than the node.val
      } else if (val > node.val) {
        // assign the node to the node.right to continue search on the right side
        node = node.right;
      } else {
        // return the result
        return node;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    // if the val is less than the node.val
    if (val < node.val) {
      // search on left side call method within itself
      if (node.left) return this.findRecursively(val, node.left);
      return;
      // if the val is greater than the node.val
    } else if (val > node.val) {
      // search on right side call method within itself
      if (node.right) return this.findRecursively(val, node.right);
      return;
    }
    // return the result
    return node;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, array = []) {
    // push the node.val into array
    array.push(node.val);
    // traverse on the left 
    if (node.left) this.dfsPreOrder(node.left, array);
    // traverse on the right
    if (node.right) this.dfsPreOrder(node.right, array);
    // return array
    return array;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, array = []) {
    // traverse left
    if (node.left) this.dfsInOrder(node.left, array);
    // push the node.val into array
    array.push(node.val);
    // traverse right
    if (node.right) this.dfsInOrder(node.right, array);
    // return array
    return array;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, array = []) {
    // traverse left
    if (node.left) this.dfsPostOrder(node.left, array);
    // traverse right
    if (node.right) this.dfsPostOrder(node.right, array);
    // push the node.val into array
    array.push(node.val);
    // return array
    return array;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(node = this.root, queue = [], array = []) {
    // pushing node into queue 
    queue.push(node);

    // if there are queue values
    while (queue.length) {
      // assign the node the to the first inline value
      node = queue.shift();
      // push the node.val into array
      array.push(node.val);
      // if there is a node.left, queue push the node.left
      if (node.left) queue.push(node.left);
      // if there is a node.right, queue push the node.right
      if (node.right) queue.push(node.right);
    }
    // return array
    return array;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
