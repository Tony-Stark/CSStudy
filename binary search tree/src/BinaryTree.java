import java.util.*; 

public class BinaryTree<T> {
	Node<T> root;
	public void add(int key) {
		Node<T> z =new Node<T>(key);
		add(z);
	}
	public void add(int key, T value) {
		Node<T> z =new Node<T>(key,value);
		add(z);
	}
	public void add(Node<T> z) {
		Node<T> y=null;
		Node<T> x=root;
		while (x!=null) {
			y=x;
			 if (z.key<x.key)
				 x=x.left;
			 else
				 x=x.right;
		}
		z.parent=y;
		if (y==null)
			root=z;
		else if(z.key<y.key)
			y.left=z;
		else
			y.right=z;
	}
	/**
	 * Traversing in pre/in/post order
	 * @param mode chooses the traversing mode:
	 * mode = 0 -> Pre
	 * mode = 1 -> In
	 * mode = 2 -> Post
	 */
	public void visit(Node<T> node,int mode,Stack<String> stack) {
		if (node.left!=null &&(mode==1||mode==2))  visit(node.left,mode,stack);
	    if (node.right!=null &&(mode==2)) visit(node.right,mode,stack);
	    stack.push(node.toString());
		if (node.left!=null && (mode==0))  visit(node.left,mode,stack);
		if (node.right!=null && (mode==0||mode==1)) visit(node.right,mode,stack);
	}
	public static void visitKey(Node<?> node,int mode,Stack<Integer> stack) {
		if (node.left!=null &&(mode==1||mode==2))  visitKey(node.left,mode,stack);
	    if (node.right!=null &&(mode==2)) visitKey(node.right,mode,stack);
	    stack.push(node.key);
		if (node.left!=null && (mode==0))  visitKey(node.left,mode,stack);
		if (node.right!=null && (mode==0||mode==1)) visitKey(node.right,mode,stack);
	}
	public String toStringAll() {
		Stack<String> stack0 = new Stack<String>();
		Stack<String> stack1 = new Stack<String>();
		Stack<String> stack2 = new Stack<String>();
		visit(root,0,stack0);
		visit(root,1,stack1);
		visit(root,2,stack2);
		return "Pre-Order:\n"+stack0.toString()+"\nIn-Order:\n"+stack0.toString()+"\nPost-Order:\n"+stack0.toString();
	}
	public String toString() {
		return toString(0);
	}
	/**
	 * Printing the Binary Tree
	 * @param mode chooses the traversing mode:
	 * mode = 0 -> Pre
	 * mode = 1 -> In
	 * mode = 2 -> Post
	 * mode = 3 -> All
	 */
	public String toString(int mode) {
		Stack<String> stack = new Stack<String>();
		visit(root,mode,stack);
		String result=stack.toString();
		if(mode==0) {
			result="Pre-Order:\n" + result;
		}
		else if(mode==1) {
			result="In-Order:\n" + result;
		}
		else if(mode ==2) {
			result="Post-Order:\n" + result;
		}
		else if(mode ==3) {
			result=toStringAll();
		}
		else {
	        throw new IllegalArgumentException("Invalid argument: Argument mode must be 0/1/2/3");
		}
		return result;
	}
}
